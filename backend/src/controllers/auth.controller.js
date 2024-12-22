import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const userAlreadyExists = await User.findOne({ email });

  if (userAlreadyExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const verificationToken = Math.floor(
    100000 + Math.random() * 900000
  ).toString();

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
    verificationToken,
    verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
  });

  await newUser.save();

  //set token to cookie
  generateTokenAndSetCookie(res, newUser._id);
  //todo: send verification email

  res.status(201).json({
    success: true,
    message: "User created successfully",
    user: {
      ...newUser._doc,
      password: undefined,
    },
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  generateTokenAndSetCookie(res, user._id);
  res.status(200).json({
    success: true,
    message: "Logged in successfully",
    user: {
      ...user._doc,
      password: undefined,
    },
  });
};

export const logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ success: true, message: "Logged out successfully" });
};

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};
