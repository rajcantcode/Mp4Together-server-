import express from "express";
import {
  createUser,
  loginUser,
  returnUser,
  logoutUser,
} from "../controller/Auth.js";
import { authenticateToken } from "../helpers.js";
const router = express.Router();

router
  .get("/", authenticateToken, returnUser)
  .post("/signup", createUser)
  .post("/login", loginUser)
  .post("/logout", authenticateToken, logoutUser);

export default router;
