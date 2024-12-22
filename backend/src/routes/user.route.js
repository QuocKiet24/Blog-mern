import express from "express";
import {
  getUsers,
  login,
  logout,
  register,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/get-user", getUsers);

export default router;
