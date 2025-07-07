import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import dotenv from 'dotenv'
dotenv.config()

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Storage settings
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'thumbnails', // folder in your Cloudinary dashboard
    allowed_formats: ['jpg', 'jpeg', 'png'],
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});

// Multer upload middleware
export const upload = multer({ storage });
