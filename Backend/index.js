import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import adminVideoRoutes from './routes/admin/adminVideoRoutes.js'
import userVideoRoutes from './routes/user/userVideoRoutes.js'
import adminAuthRoutes from './routes/admin/adminAuthRoutes.js'
import userContactRoutes from './routes/user/userContactRoutes.js'

dotenv.config()
const app = express()
app.use(cors())
await connectDB()
app.use(express.json())
app.use('/uploads', express.static("uploads"));

app.use('/admin',adminVideoRoutes)
app.use('/admin',adminAuthRoutes)
app.use('/videos',userVideoRoutes)
app.use('/contact',userContactRoutes)

const port = process.env.PORT  ||  5000
app.listen(port,()=>console.log("server running on port "+port))