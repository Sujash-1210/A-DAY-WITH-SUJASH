import jwt from 'jsonwebtoken'
export const verifyAdmin = (req,res,next)=>{
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.json({message:"Unauthorized: No token found"})
    }
    const token = authHeader.split(" ")[1];

    try {
       const decoded = jwt.verify(token,process.env.JWT_SECRET)
       req.admin = decoded;
       next()
    } catch (e) {
        console.error(e.message);
        return res.json({message:"Unauthorized: Invalid token"})
    }
}