// src/admin/pages/UploadVideo.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



const UploadVideo = () => {
  const navigate = useNavigate();
  const [videoData, setVideoData] = useState({
    title: "",
    description: "",
    category: "",
    youtubeUrl: "",
  });
  const [thumbnail, setThumbnail] = useState(null);
  const [categories] = useState(["travel", "festival", "temples", "popular videos", "others"]);
  const token = localStorage.getItem("adminToken");

useEffect(() => {
    if (!token) {
      navigate("/admin");
    }
  }, [token, navigate]);


  const handleFileChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  const handleChange = (e) => {
    setVideoData({ ...videoData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!thumbnail) {
      toast.error("Thumbnail is required!");
      return;
    }

    const formData = new FormData();
    formData.append("title", videoData.title);
    formData.append("description", videoData.description);
    formData.append("category", videoData.category);
    formData.append("youtubeUrl", videoData.youtubeUrl);
    formData.append("thumbnailUrl", thumbnail);

    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/admin/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Video uploaded successfully");
      console.log(thumbnail)
      navigate("/admin/dashboard");
    } catch (e) {
      toast.error("Failed to upload video");
    }
  };

  return (
    <div className="p-6 max-w-screen mx-auto bg-bg-parchment rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-primary-dark mb-4 text-center">Upload New Video</h2>
      <form onSubmit={handleSubmit} className="space-y-4 md:mx-40">
        <div>
          <label htmlFor="title" className="block text-primary-dark font-medium">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full border rounded-lg p-2 mt-2"
            value={videoData.title}
            onChange={handleChange}
            placeholder="Enter video title"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-primary-dark font-medium">Description</label>
          <textarea
            id="description"
            name="description"
            className="w-full border rounded-lg p-2 mt-2"
            value={videoData.description}
            onChange={handleChange}
            placeholder="Enter video description"
            rows="4"
            required
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-primary-dark font-medium">Category</label>
          <select
            id="category"
            name="category"
            className="w-full border rounded-lg p-2 mt-2"
            value={videoData.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="youtubeUrl" className="block text-primary-dark font-medium">YouTube URL</label>
          <input
            type="url"
            id="youtubeUrl"
            name="youtubeUrl"
            className="w-full border rounded-lg p-2 mt-2"
            value={videoData.youtubeUrl}
            onChange={handleChange}
            placeholder="Enter YouTube URL"
            required
          />
        </div>

        <div>
          <label htmlFor="thumbnailUrl" className="block text-primary-dark font-medium">Thumbnail</label>
          <input
            type="file"
            id="thumbnailUrl"
            name="thumbnailUrl"
            className="w-full border rounded-lg p-2 mt-2"
            onChange={handleFileChange}
            accept="image/*"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-secondary-gold text-white px-6 py-2 rounded-lg hover:bg-accent-burnt transition"
        >
          Upload Video
        </button>
      </form>
    </div>
  );
};

export default UploadVideo;
