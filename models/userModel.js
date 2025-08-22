import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    image: {
      type: String,
    },
    password: {
      type: String,
    },
    emailVerified: {
      type: Date,
    },
  },
  { timestamps: true }
);

// Prevent recompilation errors in dev
const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
