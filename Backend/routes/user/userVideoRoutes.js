import express from "express";
import { getAllVideos, getVideoById } from "../../controllers/user/userVideoController.js";

const router = express.Router()

router.get('/',getAllVideos)
router.get('/id/:id',getVideoById)


export default router