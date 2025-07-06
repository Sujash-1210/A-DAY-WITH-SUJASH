import multer from 'multer'
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename:(req,file,cb)=>{
        const uniqueFileName = `${Date.now()}${file.originalname}`
        cb(null,uniqueFileName)
    }
})

export const upload = multer({storage})