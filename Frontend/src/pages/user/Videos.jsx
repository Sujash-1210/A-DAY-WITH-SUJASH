import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import VideoCard from '../../components/VideoCard';

const categories = ['latest', 'travel', 'festival', 'temples', 'popular videos', 'others'];

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('latest');
  const [loading,setLoading] = useState(true)

  const fetchVideos = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_BACKEND_URL + '/videos');
      setVideos(response.data);
    } catch (e) {
      toast.error('Failed to load videos!');
    }finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const filteredVideos =
    selectedCategory === 'latest'
      ? videos
      : videos.filter(
          (video) => video.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="min-h-screen bg-bg-parchment py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <aside className="lg:w-1/6 w-full">
          <h3 className="text-lg font-semibold text-primary-dark mb-4">Categories</h3>
          <div className="space-y-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`w-full text-left px-4 py-2 rounded 
                  ${
                    selectedCategory === cat
                      ? 'bg-secondary-gold text-white'
                      : 'bg-light-gray text-text-dark hover:bg-secondary-blue hover:text-white'
                  }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </aside>
        
        {/* Videos Grid */}
        <section className="flex-1">
          <h2 className="text-2xl font-medium text-primary-dark mb-6 capitalize">
            {selectedCategory === 'popular videos' ? 'Popular' : selectedCategory} Videos
          </h2>
          {loading ? (
            <p className="text-gray-500 text-center">Loading..</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => (
                <VideoCard key={video._id} video={video} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Videos;
