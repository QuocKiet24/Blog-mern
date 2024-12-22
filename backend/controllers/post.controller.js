import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const getPost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug });
  res.status(200).json(post);
};

export const createPost = async (req, res) => {
  const newPost = new Post(req.body);

  const post = await newPost.save();
  res.status(200).json(post);
};

export const deletePost = async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  res.status(200).json("Post has been deleted");
};

export const updatePost = async (req, res) => {};
