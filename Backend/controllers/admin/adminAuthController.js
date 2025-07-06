import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
export const adminLogin = async (req,res)=>{
    const {email,password} = req.body
    try {
        if(email !== process.env.ADMIN_EMAIL){
            return res.json({message:"Invalid credentials"})
        }
        const isMatch = await bcrypt.compare(password,process.env.ADMIN_PASSWORD)
        if(!isMatch) return res.json({message:"Invalid credentials"})
        const token = jwt.sign({email},process.env.JWT_SECRET,{expiresIn:'7d'})
        res.json({message:"Login successfull",token})
    } catch (e) {
        console.error(e.message);
        res.json({message:"Login failed"})
    }
}