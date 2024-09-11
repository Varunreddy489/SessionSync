import Router from "express";

import {
  createSession,
  deleteSession,
  getAdminSession,
  getAllUserSessions,
  sendTestEmail,
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
import protectedRoute from "../middleware/AdminProtectedRoute";
import AdminProtectedRoute from "../middleware/AdminProtectedRoute";

const router = Router();

// * Auth Routes
router.post("/user/login", userLogin);
router.post("/user/register", userRegister);

router.post("/admin/login", adminLogin);
router.post("/admin/register", adminRegister);

// * UserSession Routes

router.get("/user/session/:id", protectedRoute, getUserSessions);
router.post("/user/session/:id", protectedRoute, createUserSession);
router.put("/user/session/:sessionId", protectedRoute, updateUserSession);
router.delete("/user/session/:sessionId", protectedRoute, deleteUserSession);

// * AdminSession Routest
router.post("/admin/session", createSession);
router.get("/admin/session", AdminProtectedRoute, getAdminSession);
router.get("/admin/:adminId", AdminProtectedRoute, getAllUserSessions);
router.put("/admin/session/:sessionId", AdminProtectedRoute, updateSession);
router.delete("/admin/session/:sessionId", AdminProtectedRoute, deleteSession);


// * Email Route

router.post("/email", sendTestEmail)

export { router as apiRoutes };
