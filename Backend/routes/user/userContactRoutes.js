import express from "express";
import { postFeedback } from "../../controllers/user/userContactController.js";

const router = express.Router()

router.post('/',postFeedback)

export default router