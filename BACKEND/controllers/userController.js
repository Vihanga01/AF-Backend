import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateTokens.js";
import User from "../models/usermodel.js";

//User Login
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      contactNo: user.contactNo,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

//User Registration
const registerUser = asyncHandler(async (req, res) => {
  const { name, contactNo, email, password, role } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    role,
    contactNo,
    email,
    password,
  });

  if (user) {
    console.log(user);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      role: user.role,
      contactNo: user.contactNo,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// get User profile
const getUserProfile = asyncHandler(async (req, res) => {
  const id = req.user._id;
  const user = await User.findById(id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      contactNo: user.contactNo,
      email: user.email,
    });
  } else {
    res.status(403);
    throw new Error("User not found");
  }
});

// get all User profiles
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find(
    {},
    { name: 1, contactNo: 1, email: 1, role: 1 }
  );

  if (users.length > 0) {
    res.json(users);
  } else {
    res.status(200);
    res.send("No not found");
  }
});

export default { authUser, getUserProfile, registerUser, getAllUsers };
