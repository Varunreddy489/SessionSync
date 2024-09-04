import Router from "express";

import { userLogin, userRegister } from "../controller/auth.controller";
import { createUserSession, deleteUserSession, updateUserSession } from "../controller/session.controller";

const router = Router();

// * Auth Routes
router.post("/user/login", userLogin);
router.post("/user/register", userRegister);
router.post("/admin/register");
router.post("/admin/login");

// * UserSession Routes

router.post("/user/session/:id",createUserSession);
router.put("/user/session/:sessionId",updateUserSession);
router.delete("/user/session/:sessionId",deleteUserSession);


// * AdminSession Routest
router.post("/admin/session");

export { router as apiRoutes };
