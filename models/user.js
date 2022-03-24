import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter your first name"],
    maxLength: [50, "Your first name cannot be longer than 50 characters"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter your last name"],
    maxLength: [50, "Your last name cannot be longer than 50 characters"],
  },
  username: {
    type: String,
    required: [true, "Please enter your username"],
    maxLength: [50, "Your username cannot be longer than 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [6, "Please enter at least 6 characters"],
    select: false,
  },
  address: {
    type: String,
    required: [true, "Please enter your address"],
    maxLength: [50, "Your address cannot be longer than 100 characters"],
  },
  contactNum: {
    type: Number,
    required: [true, "Please enter your No Contact"],
    maxLength: [15, "Your contact number cannot be longer than 15 characters"],
  },
  description: {
    type: String,
    required: [true, "Please enter your description"],
    maxLength: [100, "Your description cannot be longer than 100 characters"],
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: [String],
    default: ["Client"],
    enum: ["Client", "Admin"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

// Encrypting Password brfore saving to db
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// Compare Password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.models.User || mongoose.model("User", userSchema);
