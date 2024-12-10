import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { veriftyToken } from "../middleware/auth.js";

const router = express.Router();

// READ 
router.get("/", veriftyToken, getFeedPosts);
router.get("/:userId/posts", veriftyToken, getUserPosts);

// UPDATE
router.patch("/:id/like", veriftyToken, likePost);

export default router;