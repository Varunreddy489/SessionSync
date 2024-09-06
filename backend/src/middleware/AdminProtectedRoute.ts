import dotenv from "dotenv";
import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { AdminModel } from "../model/admin.model";
import extractTokenFromCookie from "../utils/extractCookie";

interface AdminTypes {
  _id: string;
  name: string;
  email: string;
}

interface DecodedToken extends JwtPayload {
  adminId?: string;
}

declare global {
  namespace Express {
    export interface Request {
      admin?: AdminTypes;
    }
  }
}

dotenv.config();
const JWT_SECRET = process.env.ADMIN_JWT_SECRET as string;

const AdminProtectedRoute = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = extractTokenFromCookie(req);

    if (!token) {
      return res.status(401).json({ status: 401, message: "Unauthorized - Token not found" });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;

    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }

    const admin = await AdminModel.findById(decoded.adminId);

    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }

    req.admin = {
      _id: admin._id.toString(),
      name: admin.name,
      email: admin.email,
    };
    next(); 

  } catch (error) {
    console.error("Error in AdminProtectedRoute:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};



export default AdminProtectedRoute;
