import Video from "../../models/Video.js"

export const uploadVideo = async(req,res)=>{
    try {
       const {title,description,youtubeUrl,category} = req.body
       
    if(!title || !description || !youtubeUrl || !category || !req.file){
        return res.json({message:"All fiels are needed"})
    }
    const newVideo = new Video({title,description,thumbnailUrl:req.file.path,youtubeUrl,category})
    await newVideo.save()
    res.json(newVideo) 
    } catch (e) {
        console.error(e.message);
        res.json({message:"Error uploading video"})
    }
}

export const updateVideo = async (req, res) => {
  const { title, description, category } = req.body;

  // Validate inputs
  if (!title || !description || !category) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Find the video by ID
    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    // Update video details
    const updatedVideo = await Video.findByIdAndUpdate(
      req.params.id,
      { title, description, category },
      { new: true } // Return the updated document
    );

    // Send success response
    res.status(200).json({ updatedVideo });
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ message: "Error updating video" });
  }
};


export const deleteVideo = async(req,res)=>{
    try {
        const video = await Video.findByIdAndDelete(req.params.id)
        if(!video) return res.json({message:"Video not found"})
        res.json({message:"Video Deleted"})
    } catch (e) {
        res.json({message:"Delete failed"})
    }
}