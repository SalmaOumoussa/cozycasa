import User from "../models/user";
import ErrorHandler from "../utils/errorHandler";
import AsyncCatchErrors from "../middlewares/catchAsyncErrors";
import APIFeatures from "../utils/apiFeatures";
import absoluteUrl from "next-absolute-url";
import sendEmail from "../utils/sendEmail";
import crypto from "crypto";
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

  const {
    firstName,
    lastName,
    username,
    email,
    password,
    address,
    contactNum,
    description,
  } = req.body;
  const user = await User.create({
    firstName,
    lastName,
    username,
    email,
    password,
    address,
    contactNum,
    description,
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

// Update user profile  => /api/me/update
const updateProfile = AsyncCatchErrors(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.username = req.body.username;
    user.email = req.body.email;
    user.address = req.body.address;
    user.contactNum = req.body.contactNum;
    user.description = req.body.description;

    if (req.body.password) user.password = req.body.password;
  }
  // Update avaatar
  if (req.body.avatar !== "") {
    const image_id = user.avatar.public_id;
    // Delete user previous image/avatar
    await cloudinary.uploader.destroy(image_id);
    const result = await cloudinary.uploader.upload(req.body.avatar, {
      folder: "cc/avatars",
      width: "150",
      crop: "scale",
    });

    user.avatar = {
      public_id: result.public_id,
      url: result.secure_url,
    };
  }

  await user.save();

  res.status(200).json({
    success: true,
    user,
  });
});

// Forgot Password  => /api/password/forgot
const forgotPassword = AsyncCatchErrors(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new ErrorHandler("User not found with this email", 404));
  }

  // get reset token
  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });

  // Get origin
  const { origin } = absoluteUrl(req);

  // Create reset password url
  const resetUrl = `${origin}/password/reset/${resetToken}`;

  const message = `Your password reset url is as follow: \n\n ${resetUrl} \n\n If you have not requested this email, then ignore it.`;
  try {
    await sendEmail({
      email: user.email,
      subject: "CosyCasa Password Recovery",
      message,
    });
    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email}`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });
    return next(new ErrorHandler(error.message, 500));
  }
});

// Reset password   =>   /api/password/reset/:token
const resetPassword = AsyncCatchErrors(async (req, res, next) => {
  // Hash URL token
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.query.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHandler(
        "Password reset token is invalid or has been expired",
        400
      )
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password does not match", 400));
  }

  // Setup the new password
  user.password = req.body.password;

  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Password updated successfully",
  });
});

export {
  registerUser,
  currentUserProfile,
  updateProfile,
  forgotPassword,
  resetPassword,
};
