import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import adminVideoRoutes from './routes/admin/adminVideoRoutes.js'
import userVideoRoutes from './routes/user/userVideoRoutes.js'
import adminAuthRoutes from './routes/admin/adminAuthRoutes.js'
import userContactRoutes from './routes/user/userContactRoutes.js'
import path from 'path'
import { fileURLToPath } from 'url';

// Get the current directory of the file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Set up the uploads directory path
const uploadsDir = path.join(__dirname, 'uploads');

dotenv.config()
const app = express()
app.use(cors())
await connectDB()
app.use(express.json())
app.use('/uploads', express.static(uploadsDir));

app.use('/admin',adminVideoRoutes)
app.use('/admin',adminAuthRoutes)
app.use('/videos',userVideoRoutes)
app.use('/contact',userContactRoutes)

const port = process.env.PORT  ||  5000
app.listen(port,()=>console.log("server running on port "+port))