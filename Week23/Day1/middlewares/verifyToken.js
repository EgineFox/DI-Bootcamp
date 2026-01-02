import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const SECRET = process.env.ACCESS_TOKEN_SECRET;

export const verifyToken = (req, res, next) => {
  const token = req.cookies.apptoken || req.headers["auth"];

  if (!token) {
    res.status(401).json({ message: "unauthorized user" });
    return;
  }

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      res.status(403).json({ message: "Forbideen user" });
      return;
    }
 
    req.user = decoded

    next()
  });
};
