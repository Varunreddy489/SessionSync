import Router from "express";

import {
  createSession,
  deleteSession,
  getAdminSession,
  getAllUserSessions,
  updateSession,
} from "../controller/admin.controller";
import {
  adminLogin,
  adminRegister,
  userLogin,
  userRegister,
} from "../controller/auth.controller";
import {
  getUserSessions,
  createUserSession,
  deleteUserSession,
  updateUserSession,
} from "../controller/session.controller";

const router = Router();

// * Auth Routes
router.post("/user/login", userLogin);
router.post("/user/register", userRegister);

router.post("/admin/login", adminLogin);
router.post("/admin/register", adminRegister);

// * UserSession Routes

router.get("/user/session/:id", getUserSessions);
router.post("/user/session/:id", createUserSession);
router.put("/user/session/:sessionId", updateUserSession);
router.delete("/user/session/:sessionId", deleteUserSession);

// * AdminSession Routest
router.post("/admin/session", createSession);
router.get("/admin/session", getAdminSession);
router.get("/admin/:adminId", getAllUserSessions);
router.put("/admin/session/:sessionId", updateSession);
router.delete("/admin/session/:sessionId", deleteSession);

export { router as apiRoutes };
