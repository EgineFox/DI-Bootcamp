import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import usersRouter from "./routes/usersRouter.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

const PORT = process.env.PORT | 5002;
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

app.use("/api/user", usersRouter);
