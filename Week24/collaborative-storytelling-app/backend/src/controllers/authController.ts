import { Request, Response } from "express";
import { comparePassword, createUser, findUserByEmail, hashPassword  } from "../helpers/passwordHelper.js";
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from "../helpers/jwtHelper.js";
import { access } from "node:fs";

// Register a new user
export const register = async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, email, password } = req.body;

        // Validate input
        if (!username || !email || !password) {
            res.status(400).json({ message: "All feilds are required" })
            return
        }

        //Check if user already exists
        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            res.status(400).json({ message: "User with this emaol already exists" })
            return
        }

        // Hash password and create user
        const passwordHash = await hashPassword(password);
        const newUser = await createUser(username, email, passwordHash);

        // Generate tokens
        const accessToken = generateAccessToken(newUser.id);
        const refreshToken = generateRefreshToken(newUser.id);

        // Set refresh token in HTTP-only cookie
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        })

        // Send response
        res.status(201).json({
            accessToken,
            user: {
                id: newUser.id,
                username: newUser.username,
                email: newUser.email,
            },
        })
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ message: "Server error during registration" })
    }
}

// Login existing user
export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            res.status(400).json({ message: "Email and password  are required" })
            return
        }

        // Find user by email
        const user = await findUserByEmail(email);
        if (!user) {
            res.status(401).json({ message: "Invalid credentials" })
            return
        }

        // Compare  passwords
        const isPasswordValid = await comparePassword(password, user.password_hash!);
        if (!isPasswordValid) {
            res.status(401).json({ message: "Invalid credentials" })
            return
        }

        // Generate tokens
        const accessToken = generateAccessToken(user.id);
        const refreshToken = generateRefreshToken(user.id);

        // Set refresh token in HTTP-only cookie
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        })

        // Send response without password
        res.status(200).json({
            accessToken,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
            },
        })
    } catch (error) {
        console.error("Login error:", error)
        res.status(500).json({ message: "Server error during login" })
    }
}

// Refresh access token using refresh token
export const refreshAccessToken = async (req: Request, res: Response): Promise<void> => {
    try {
        const refreshToken = req.cookies.refreshToken;

        // Check if refresh token exists
        if (!refreshToken) {
            res.status(403).json({ message: "Refresh token not found"});
            return;
        }

        //Verify refresh token
        const decoded = verifyRefreshToken(refreshToken);

        // Generate new access token
        const newAccessToken = generateAccessToken(decoded.userId);

        // Send new access token
        res.status(200).json({ accessToken: newAccessToken });
    } catch (error) {
        console.error("Refresh token error:", error);
        res.status(403).json({ message: "Invalid or expired refresh"})
    }
}