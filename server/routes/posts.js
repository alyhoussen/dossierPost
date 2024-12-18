import express from "express";
import { commentPost, createPost, deletePost, getPosts, likePost } from "../controllers/posts.js";

const router = express.Router()

router.get("/", getPosts)
router.post("/", createPost)
router.put("/like", likePost)
router.put("/comment", commentPost)
router.delete("/", deletePost)

export default router;