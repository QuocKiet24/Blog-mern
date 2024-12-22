import express from "express";
import {
  createPost,
  deletePost,
  getPost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.get("/:slug", getPost);
router.post("/create", createPost);
router.delete("/:id", deletePost);

export default router;
