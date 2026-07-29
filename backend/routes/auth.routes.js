import express from "express";
import {loginAdmin, getMe,logoutAdmin} from "../controllers/auth.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validate.middleware.js";
import { loginSchema } from "../validators/auth.validator.js";

const router = express.Router();

router.post("/login",validate(loginSchema), loginAdmin);
router.get("/me", protect,getMe);
router.post("/logout",logoutAdmin);

export default router;