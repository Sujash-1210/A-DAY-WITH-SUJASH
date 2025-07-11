import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    thumbnailUrl:{type:String,required:true},
    youtubeUrl:{type:String,required:true},
    category:{type:String,required:true}
}, {timestamps:true})

const Video = mongoose.model('Video',videoSchema)
export default Video;