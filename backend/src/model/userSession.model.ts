import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
    duration: {
      type: Number, // Duration in minutes
      required: true,
    },
    scheduledSlots: [
      {
        start: {
          type: Date, // Start time of each scheduled slot
          required: true,
        },
        end: {
          type: Date, // End time of each scheduled slot
          required: true,
        },
      },
    ], // Empty array for scheduledSlots
  },
  {
    timestamps: true,
  }
);

export const UserSessionModel = mongoose.model("userSessions", sessionSchema);
