import { Router } from "express";
import { login, register, users } from "../controllers/usersController.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);

router.get('/all', verifyToken, users)

export default router;
