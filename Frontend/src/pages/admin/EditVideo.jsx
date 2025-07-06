import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const EditVideo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // State variables for the form fields
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [categories] = useState(["travel", "festival", "temples", "popular videos", "others"]);
  const token = localStorage.getItem("adminToken");

  // Redirect to login page if no token exists
  useEffect(() => {
    if (!token) {
      navigate("/admin");
    }
  }, [token, navigate]);

  // Fetch the video details
  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/videos/id/${id}`);
        if (res.data) {
          setTitle(res.data.title || "");
          setDescription(res.data.description || "");
          setCategory(res.data.category || "");
        }
      } catch (error) {
        toast.error("Failed to load video");
        console.error("Error fetching video:", error);
      }
    };
    fetchVideoData();
  }, [id]);

  // Handle form submission (update video)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/admin/edit/${id}`,
        { title, description, category },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        toast.success("Video updated successfully");
        navigate("/admin/dashboard");
      }
    } catch (error) {
      toast.error("Failed to update video");
      console.error("Error updating video:", error);
    }
  };

  return (
    <div className="p-6 max-w-screen  mx-auto bg-bg-parchment rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold  text-primary-dark mb-4 text-center">Edit Video</h2>
      <form onSubmit={handleSubmit} className="space-y-4 md:mx-40 h-screen">
        <div>
          <label htmlFor="title" className="block text-primary-dark font-medium">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full border rounded-lg p-2 mt-2"
            value={title || ""}
            onChange={(e) => setTitle(e.target.value)}
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
            value={description || ""}
            onChange={(e) => setDescription(e.target.value)}
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
            value={category || ""}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-secondary-gold text-white px-6 py-2 rounded-lg hover:bg-accent-burnt transition"
        >
          Update Video
        </button>
      </form>
    </div>
  );
};

export default EditVideo;
