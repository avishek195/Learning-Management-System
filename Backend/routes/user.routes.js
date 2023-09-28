import { Router } from "express";
import {
  logout,
  register,
  login,
  getProfile,
} from "../controllers/user.controller.js";
import { isloggedIn } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/me", isloggedIn, getProfile);

export default router;
