import { Request, Response } from "express";

import { AdminModel } from "../model/admin.model";
import { UserSessionModel } from "../model/userSession.model";
import { SessionModel } from "../model/session.model";

export const getAllUserSessions = async (req: Request, res: Response) => {
  try {
    const { adminId } = req.params;

    const isAdmin = await AdminModel.findById(adminId);

    if (!isAdmin) {
      return res.status(404).json({ error: "Admin not found" });
    }

    const sessions = await UserSessionModel.find();

    return res.status(200).json(sessions);
  } catch (error) {
    console.error("error in getAllUserSessions:", error);
    res.status(404).json({ error: "internal server error" });
  }
};

export const getAdminSession=async(req: Request, res: Response)=>{
try {
  
} catch (error) {
  console.error("error in getAdminSession:", error);
  res.status(404).json({ error: "internal server error" });
}
}

export const createSession = async (req: Request, res: Response) => {
  try {
    const { adminEmail, day, startTime, endTime, scheduledSlots } = req.body;

    const startDateTime = new Date(startTime);
    const endDateTime = new Date(endTime);
    if (isNaN(startDateTime.getTime()) || isNaN(endDateTime.getTime())) {
      return res.status(400).json({ error: "Invalid date format" });
    }

    const duration = (endDateTime.getTime() - startDateTime.getTime()) / 60000;

    const newSession = new SessionModel({
      adminEmail,
      startTime: startDateTime,
      endTime: endDateTime,
      duration,
      scheduledSlots,
    });

    await newSession.save()

    return res.status(200).json(newSession);
  } catch (error) {
    console.error("error in createSession:", error);
    res.status(404).json({ error: "internal server error" });
  }
};

export const updateSession = async (req: Request, res: Response) => {
  try {
    const { sessionId } = req.params;
    const { startTime, endTime, scheduledSlots } = req.body;

    const startDateTime = new Date(startTime);
    const endDateTime = new Date(endTime);
    if (isNaN(startDateTime.getTime()) || isNaN(endDateTime.getTime())) {
      return res.status(400).json({ error: "Invalid date format" });
    }

    const duration = (endDateTime.getTime() - startDateTime.getTime()) / 60000;

    const updatedSession = await SessionModel.findByIdAndUpdate(
      sessionId,
      {
        startTime: startDateTime,
        endTime: endDateTime,
        duration,
        scheduledSlots,
      },
      { new: true }
    );

    if (!updatedSession) {
      return res.status(404).json({ error: "Session not found" });
    }
    return res.status(200).json(updatedSession);
  } catch (error) {
    console.error("error in updateSession:", error);
    res.status(404).json({ error: "internal server error" });
  }
};

export const deleteSession = async (req: Request, res: Response) => {
  try {
    const { sessionId } = req.params;

    const deletedSession = await SessionModel.findByIdAndDelete(sessionId);

    if (!deletedSession) {
      return res.status(404).json({ error: "Session not found" });
    }

    return res.status(200).json({ message: "Session deleted successfully" });
  } catch (error) {
    console.error("error in deleteSession:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
