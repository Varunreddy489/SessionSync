import { NextFunction, Request, Response } from "express";
import extractTokenFromCookie from "../utils/extractCookie";
import jwt from "jsonwebtoken";
import { UserModel } from "../model/user.model";
import { UserAuthTypes } from "../types/types";

declare global {
    namespace Express {
      export interface Request {
        user?: UserAuthTypes;
      }
    }
  }

const protectedRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = extractTokenFromCookie(req);

    if (!token) {
      return res.status(404).json({ error: "Token not found" });
    }

    console.log(token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
    };

    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const user = await UserModel.findById(decoded.userId);

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    req.user = user.toObject();

    next();
  } catch (error) {
    console.error("Error in protectedRoute:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default protectedRoute;
