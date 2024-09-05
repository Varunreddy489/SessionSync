import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    adminEmail: {
      type: String,
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
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
          type: Date,
          required: true,
        },
        end: {
          type: Date, // End time of the scheduled slot
          required: true,
        },
        attendees: [
          {
            name: {
              type: String, // Name of the attendee
              required: true,
            },
            email: {
              type: String, // Email of the attendee
              required: true,
            },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const SessionModel = mongoose.model("Session", sessionSchema);
