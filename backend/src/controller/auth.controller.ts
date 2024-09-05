import bcrypt from "bcryptjs";
import { Request, Response } from "express";

import { UserModel } from "../model/user.model";
import generateTokenAndSetCookie from "../utils/genToken";
import generateAdminTokenAndSetCookie from "../utils/adminToken";
import { AdminModel } from "../model/admin.model";

export const userRegister = async (req: Request, res: Response) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }

    const isRegistered = await UserModel.findOne({ email });

    if (isRegistered) {
      return res
        .status(404)
        .json({ error: "Email exists!!! Please use other email " });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    generateTokenAndSetCookie(newUser._id, res);

    return res.status(200).json({ newUser });
  } catch (error) {
    console.log("error in userRegister:", error);
    res.status(404).json({ error: "internal server error" });
  }
};

export const userLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User doesn`t exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(404).json({ error: "Invalid Credentials" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.error("error in userLogin:", error);
    res.status(404).json({ error: "internal server error" });
  }
};

export const adminRegister = async (req: Request, res: Response) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }

    const isRegistered = await AdminModel.findOne({ email });

    if (isRegistered) {
      return res
        .status(404)
        .json({ error: "Email exists!!! Please use other mail" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newAdmin = new AdminModel({
      name,
      email,
      password: hashedPassword,
    });

    await newAdmin.save();

    generateAdminTokenAndSetCookie(newAdmin._id, res);

    return res.status(200).json(newAdmin);
  } catch (error) {
    console.error("error in adminRegister:", error);
    res.status(404).json({ error: "internal server error" });
  }
};

export const adminLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }
    const admin = await AdminModel.findOne({ email });

    if (!admin) {
      return res.status(404).json({ error: "admin doesn`t exist" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(404).json({ error: "Invalid Credentials" });
    }

    generateTokenAndSetCookie(admin._id, res);

    res.status(200).json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
    });
  } catch (error) {
    console.error("error in adminLogin:", error);
    res.status(404).json({ error: "internal server error" });
  }
};
