import {
  getUserByEmail,
  getUsers,
  registerUser,
} from "../models/usersModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

export const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await registerUser(email, password);
    res.status(200).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    if (error.code === "23505") {
      res.status(404).json({ message: `Email ${email} is already exists` });
      return;
    }
    res.status(500).json({ message: "internal error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await getUserByEmail(email);

    if (!user) {
      res.status(404).json({ message: `User/Email ${email} not found` });
      return;
    }

    const match = await bcrypt.compare(password + "", user.password);

    if (!match) {
      res.status(404).json({ message: `Wrong password` });
      return;
    }

    const SECRET = process.env.ACCESS_TOKEN_SECRET;

    const accessToken = jwt.sign(
      { userid: user.id, email: user.email },
      SECRET,
      { expiresIn: "60s" }
    );

    res.cookie("apptoken", accessToken, {
      httpOnly: true,
      maxAge: 60 * 1000,
    });

    res.status(200).json({
      message: "Login successfuly",
      user: { userid: user.id, email: user.email },
      token: accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal error" });
  }
};

export const users = async (req, res) => {
  try {
    console.log(req)
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal error" });
  }
};
/** logout - clear cookie apptoken from request = null, delete req.cookies[apptoken],
 * req.user = null
 * delete req['user']
 * res.sendStatus(200)
 */
/** verifyAuth =>  */
