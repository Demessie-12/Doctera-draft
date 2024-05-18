import express from "express";

import {
  signupUser,
  loginUser,
  logoutUser,
} from "../controllers/auth.controllers.js";
const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

export default router;
