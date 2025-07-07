import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const VideoDetails = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  const fetchVideoById = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/videos/id/${id}`
      );
      if (!response) return toast.error('Video not found');
      setVideo(response.data);
    } catch (error) {
      return toast.error('Video not found');
    }
  };

  useEffect(() => {
    fetchVideoById();
  }, [id]);

  if (!video)
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-parchment text-primary-dark">
        Video not found
      </div>
    );

  return (
    <div className="min-h-screen bg-bg-parchment py-10 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Image with 16:9 aspect ratio */}
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-primary-dark">{video.title}</h2>
          <p className="text-text-dark">{video.description}</p>

          <a
            href={video.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-secondary-gold text-white rounded hover:bg-accent-burnt transition"
          >
            Watch now
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
