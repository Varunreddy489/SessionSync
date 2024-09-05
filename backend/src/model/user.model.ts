import mongoose from "mongoose";
import { UserAuthTypes } from "../types/types";

const userSchema = new mongoose.Schema<UserAuthTypes>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("User", userSchema);
