import User from "../models/user";
import ErrorHandler from "../utils/errorHandler";
import AsyncCatchErrors from "../middlewares/catchAsyncErrors";
import APIFeatures from "../utils/apiFeatures";
// import cloudinary from 'cloudinary'

const cloudinary = require("cloudinary").v2;

// Setting cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

// Register User  => /api/auth/register
const registerUser = AsyncCatchErrors(async (req, res) => {
  const result = await cloudinary.uploader.upload(req.body.avatar, {
    folder: "cc/avatars",
    width: "150",
    crop: "scale",
  });

  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: result.public_id,
      url: result.secure_url,
    },
  });
  res.status(200).json({
    success: true,
    message: "Account Registered Successfully",
  });
});

// Current user profile  => /api/me
const currentUserProfile = AsyncCatchErrors(async (req, res) => {
  const user = await User.findById(req.user._id);
  res.status(200).json({
    success: true,
    user,
  });
});

export { registerUser, currentUserProfile };