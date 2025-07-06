import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [expandedVideoId, setExpandedVideoId] = useState(null);

  // Check if the token exists
  const adminToken = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!adminToken) {
      navigate("/admin"); // Redirect to login page if no token
      return;
    }

    // Fetch video data for the admin dashboard
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/videos`,
          {
            headers: {
              Authorization: `Bearer ${adminToken}`, // Send token in request header
            },
          }
        );
        setVideos(response.data);
      } catch (error) {
        toast.error("Failed to load videos.");
      }
    };

    fetchVideos();
  }, [adminToken, navigate]); // Run the effect if adminToken changes

  // Handle video delete action
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this video?")) {
      try {
        const response = await axios.delete(
          `${import.meta.env.VITE_BACKEND_URL}/admin/delete/${id}`,
          {
            headers: {
              Authorization: `Bearer ${adminToken}`, // Send token for authorization
            },
          }
        );
        toast.success(response.data.message);
        setVideos(videos.filter((video) => video._id !== id)); // Update UI after deletion
      } catch (error) {
        toast.error("Failed to delete the video.");
      }
    }
  };

  // Toggle description visibility
  const toggleDescription = (id) => {
    setExpandedVideoId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="p-4 max-w-screen mx-auto bg-bg-parchment">
      <h1 className="text-2xl font-medium text-center text-primary-dark mb-8">
        Admin Dashboard
      </h1>
      
      <div className="space-y-6">
        {/* Video List Section */}
        <div>
          <h2 className="text-xxl font-medium text-primary-dark mb-4">
            Videos List
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.length === 0 ? (
              <p className="text-center text-lg text-color-text-dark">
                No videos available.
              </p>
            ) : (
              videos.map((video) => (
                <div
                  key={video._id}
                  className="p-4 bg-white rounded-lg shadow-md border border-light-gray"
                >
                  <h3 className="text-xl font-semibold text-primary-dark mb-2">
                    {video.title}
                  </h3>
                  
                  {/* Description with truncation */}
                  <p className="text-gray-600 mb-4">
                    {expandedVideoId === video._id
                      ? video.description
                      : `${video.description.slice(0, 100)}...`}
                  </p>
                  <button
                    onClick={() => toggleDescription(video._id)}
                    className="text-secondary-blue underline"
                  >
                    {expandedVideoId === video._id ? "Show Less" : "Read More"}
                  </button>

                  <div className="flex justify-between items-center mt-4">
                    <button
                      onClick={() => navigate(`/admin/edit/${video._id}`)}
                      className="bg-secondary-blue text-white py-2 px-4 rounded-md"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(video._id)}
                      className="bg-accent-burnt text-white py-2 px-4 rounded-md"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
