import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Create 'uploads' folder if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Ensure that the destination is the 'uploads' directory
        cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
        // Create a unique file name with current timestamp and original file name
        const uniqueFileName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueFileName);
    }
});

export const upload = multer({ storage });
