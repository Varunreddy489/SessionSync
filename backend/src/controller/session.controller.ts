import { Request, Response } from "express";
import { UserModel } from "../model/user.model";
import { UserSessionModel } from "../model/userSession.model";

export const createUserSession = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { title, date, startTime, endTime } = req.body;

    const findUser = await UserModel.findById(id);

    if (!findUser) {
      return res.status(404).json({ error: "User not found" });
    }
    const formattedDate = new Date(date);

    if (isNaN(formattedDate.getTime())) {
      return res.status(400).json({ error: "Invalid date format" });
    }

    const startDateTime = new Date(`${date}T${startTime}`);
    const endDateTime = new Date(`${date}T${endTime}`);

    const session = new UserSessionModel({
      title,
      date: new Date(date),
      createdBy: id,
      startTime: startDateTime,
      endTime: endDateTime,
    });

    await session.save();

    res.status(201).json(session);
  } catch (error) {
    console.error("error in createUserSession:", error);
    res.status(404).json({ error: "internal server error" });
  }
};

export const updateUserSession = async (req: Request, res: Response) => {
  try {
    const { sessionId } = req.params;
    const { userId } = req.body;
    const { title, date, startTime, endTime } = req.body;

    const session = await UserSessionModel.findById(sessionId);

    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }

    if (session.createdBy.toString() !== userId) {
      return res
        .status(403)
        .json({ error: "Unauthorized: You can only update your own sessions" });
    }

    const formattedDate = new Date(date);

    if (isNaN(formattedDate.getTime())) {
      return res.status(400).json({ error: "Invalid date format" });
    }

    const startDateTime = new Date(`${date}T${startTime}`);
    const endDateTime = new Date(`${date}T${endTime}`);

    session.title = title || session.title;
    session.date = date || session.date;
    session.startTime = startDateTime || session.startTime;
    session.endTime = endDateTime || session.endTime;

    await session.save();

    res.status(200).json(session);
  } catch (error) {
    console.error("error in createUserSession:", error);
    res.status(404).json({ error: "internal server error" });
  }
};

export const deleteUserSession = async (req: Request, res: Response) => {
  try {
    const { sessionId } = req.params;
    const { userId } = req.body;

    const session = await UserSessionModel.findById(sessionId);

    if (session?.createdBy.toString() !== userId) {
      return res
        .status(403)
        .json({ error: "Unauthorized: You can only delete your own sessions" });
    }

    await UserSessionModel.findByIdAndDelete(sessionId);

    res.status(200).json({ Message: "Session deleted successfully" });
  } catch (error) {
    console.error("error in createUserSession:", error);
    res.status(404).json({ error: "internal server error" });
  }
};
