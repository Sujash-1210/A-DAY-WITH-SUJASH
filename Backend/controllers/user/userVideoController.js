import Video from "../../models/Video.js";

export const getAllVideos = async(req,res)=>{
    try {
        const videos = await Video.find().sort({createdAt:-1})
        if(!videos){
            return res.json({message:"No video available"})
        }
        res.json(videos)
    } catch (e) {
        console.error(e.message);
        res.json({message:"Error fetching videos"})
    }
}

export const getVideoById = async(req,res)=>{
    try {
        const id = req.params.id
        const video = await Video.findById(id)
        if(!video)return res.json({message:"Video not found"})
        res.json(video)
    } catch (e) {
        console.error(e.message);
        res.json({message:"Video not found"})
    }
}
