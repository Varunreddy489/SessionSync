import mongoose from "mongoose";
import { UserAuthTypes } from "../types/types";

const availabilitySchema = new mongoose.Schema({
    day: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: String, required: true },
  },
  { _id: false }
);

const userSchema = new mongoose.Schema<UserAuthTypes>({
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
    availability: [availabilitySchema],
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("User", userSchema);
