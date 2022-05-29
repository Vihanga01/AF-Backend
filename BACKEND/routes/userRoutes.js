import express from "express";
const router = express.Router();
import userController from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/", userController.registerUser);
router.get("/", userController.getAllUsers);
// router.get("/",protect, userController.getAllUsers);
router.post("/login", userController.authUser);
router.get("/profile", protect, userController.getUserProfile);

export default router;
