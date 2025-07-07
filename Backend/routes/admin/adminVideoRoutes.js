import express from 'express'
import { deleteVideo, updateVideo, uploadVideo } from '../../controllers/admin/adminVideoController.js'
import { verifyAdmin } from '../../middlewares/verifyAdmin.js'
import { upload } from '../../middlewares/upload.js'
const router = express.Router()

router.post('/upload',verifyAdmin, upload.single('thumbnailUrl'), uploadVideo)
router.put('/edit/:id',verifyAdmin,updateVideo)
router.delete('/delete/:id',verifyAdmin, deleteVideo)

export default router
