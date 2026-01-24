import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../helpers/jwtHelper.js";

// Extend Express Request type to include user
declare global { 
    namespace Express {
        interface Request {
            user?: {
                userId: number
            }
        }
    }
}

// Middleware to authenticate JWT token
export const authenticateToken = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    try {
        // Get token from Authorization header
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

        if (!token) {
            res.status(401).json({ message: "Access token required"});
            return
        }

        // Verify token
        const decoded = verifyAccessToken(token);

        // Attach user info to request
        req.user = { userId: decoded.userId };

        // Continue to next  middleware/controller
        next();
    } catch (error) {
        console.error("TOken verification error:", error);
        res.status(403).json({ message: "Invalid or expired token"})
    }
}