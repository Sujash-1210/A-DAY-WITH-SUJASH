import React from 'react';
import { useNavigate } from 'react-router-dom';

const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-light-gray hover:shadow-xl transition duration-300">
      <div className="aspect-w-16 aspect-h-9">
  <img
    src={video.thumbnailUrl}
    alt={video.title}
    className="w-full h-full object-cover"
  />
</div>

      <div className="p-4 space-y-2">
        <h2 className="text-lg text-primary-dark font-semibold truncate">{video.title}</h2>
        
        {/* Clamp long descriptions to 3 lines */}
        <p className="text-text-dark text-sm line-clamp-3">
          {video.description}
        </p>

        <div className="flex justify-between items-center mt-3">
          <a
            href={video.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-secondary-blue hover:underline"
          >
            Watch now
          </a>
          <button
            onClick={() => navigate(`/videos/${video._id}`)}
            className="text-sm bg-secondary-gold text-white px-3 py-1 rounded hover:bg-accent-burnt transition"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
