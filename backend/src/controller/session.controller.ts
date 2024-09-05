import { Request, Response } from "express";
import { UserModel } from "../model/user.model";
import { UserSessionModel } from "../model/userSession.model";

export const createUserSession = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { userName, userEmail, start, end, duration, scheduledSlots } =
      req.body;

    const findUser = await UserModel.findById(id);

    if (!findUser) {
      return res.status(404).json({ error: "User not found" });
    }

    const startDateTime = new Date(start);
    const endDateTime = new Date(end);

    const session = new UserSessionModel({
      name: findUser.name,
      email: findUser.email,
      start: startDateTime,
      end: endDateTime,
      duration,
      scheduledSlots: scheduledSlots || [],
    });

    await session.save();

    res.status(201).json(session);
  } catch (error) {
    console.error("Error in createUserSession:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};



export const getUserSessions = async (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    console.error("Error in getUserSessions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}


export const updateUserSession = async (req: Request, res: Response) => {
  try {
    const { sessionId } = req.params;
    const { email, start, end, duration, scheduledSlots } = req.body;

    const session = await UserSessionModel.findById(sessionId);

    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }

    if (session.email !== email) {
      return res
        .status(403)
        .json({ error: "Unauthorized: You can only update your own sessions" });
    }

    session.start = start ? new Date(start) : session.start;
    session.end = end ? new Date(end) : session.end;
    session.duration = duration || session.duration;
    session.scheduledSlots = scheduledSlots || session.scheduledSlots;

    await session.save(); // Save updated session

    res.status(200).json(session);
  } catch (error) {
    console.error("Error in updateUserSession:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteUserSession = async (req: Request, res: Response) => {
  try {
    const { sessionId } = req.params;
    const { email } = req.body;

    const session = await UserSessionModel.findById(sessionId);

    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }

    if (session?.email !== email) {
      return res
        .status(403)
        .json({ error: "Unauthorized: You can only update your own sessions" });
    }

    await UserSessionModel.findByIdAndDelete(sessionId);

    res.status(200).json({ Message: "Session deleted successfully" });
  } catch (error) {
    console.error("error in createUserSession:", error);
    res.status(404).json({ error: "internal server error" });
  }
};
