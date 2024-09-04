import Router from "express";

import { userLogin, userRegister } from "../controller/auth.controller";

const router = Router();

// * User Routes
router.post("/user/login", userLogin);
router.post("/user/register", userRegister);

export { router as apiRoutes };
