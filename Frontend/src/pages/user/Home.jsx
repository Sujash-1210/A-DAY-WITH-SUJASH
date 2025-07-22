import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Youtube, Instagram, Facebook, Mail } from 'lucide-react';
import VideoCard from '../../components/VideoCard.jsx';
import illustration from '../../assets/bengali-culture2.jpg';


const Home = () => {
  const [latestVideos, setLatestVideos] = useState([]);
  const [loading,setLoading] = useState(true)

  const fetchLatestVideos = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/videos`);
      setLatestVideos(res.data.slice(0, 5));
    } catch (error) {
      console.error('Failed to fetch videos:', error);
    }
    finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchLatestVideos();
  }, []);

  return (
    <div className="bg-bg-parchment text-text-dark font-body min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-12 py-12 gap-8">
        {/* Left */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-display text-primary-dark mb-4">
            Welcome to <span className="text-secondary-gold">A Day with Sujash</span>
          </h1>
          <p className="text-lg mb-6 max-w-xl mx-auto lg:mx-0">
            Dive into vibrant festivals, temple trails, and scenic travels across India — captured through my lens and stories.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-4">
            <Link to="/about" className="bg-primary-dark text-white px-5 py-2 rounded-xl hover:bg-[#3e415d] transition">
              About Me
            </Link>
            <Link to="/contact" className="bg-secondary-gold text-white px-5 py-2 rounded-xl hover:bg-yellow-500 transition">
              Contact Me
            </Link>
          </div>
          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-4 mt-2">
            <a href="https://www.youtube.com/@adaywithsujash" target="_blank" rel="noopener noreferrer">
              <Youtube className="text-red-400 hover:scale-110 transition" />
            </a>
            <a href="https://www.instagram.com/sujashdas1210?utm_source=qr&igsh=dXdlaWl0dXR5MWhz" target="_blank" rel="noopener noreferrer">
              <Instagram className="text-pink-400 hover:scale-110 transition" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61569631767184" target="_blank" rel="noopener noreferrer">
              <Facebook className="text-blue-400 hover:scale-110 transition" />
            </a>
            <a href="mailto:adaywithsujash@gmail.com">
              <Mail className="text-gray-700 hover:scale-110 transition" />
            </a>
          </div>
        </div>

        {/* Right: Illustration */}
        <div className="flex-1">
          <img src={illustration} alt="Hero illustration" className="w-full max-w-lg mx-auto" />
        </div>
      </section>

      {/* Latest Videos */}
      <section className="relative px-6 sm:px-12 py-12 bg-bg-parchment">
        {/* Horizontal Line with Title */}
        <div className="flex items-center justify-center mb-10">
          <div className="border-t border-secondary-gold w-full max-w-2xl relative">
            <h2 className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-bg-parchment px-4 text-xl font-medium text-primary-dark">
              Latest Vlogs
            </h2>
          </div>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Loading... </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {latestVideos.map((video) => (
              <VideoCard key={video._id} video={video} />
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <Link
            to="/videos"
            className="bg-primary-dark text-white px-6 py-2 rounded-xl hover:bg-[#3e415d] transition"
          >
            View All Videos
          </Link>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="bg-bg-parchment px-6 sm:px-12 py-12">
        <div className="flex items-center justify-center mb-10">
          <div className="border-t border-secondary-gold w-full max-w-2xl relative">
            <h2 className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-bg-parchment px-2 text-xl font-medium text-primary-dark">
              Top Playlists
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/e6/52/c5.jpg" alt="Destination 1" className="w-full h-48 object-cover mb-4 rounded-md" />
            <h3 className="text-xl font-semibold text-primary-dark">Temples of Bengal</h3>
            <p className="text-gray-600">Bengal's temples blend ancient architecture, culture, and spiritual significance beautifully.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Victoria_Memorial_By_Saprativa.jpg/960px-Victoria_Memorial_By_Saprativa.jpg" alt="Destination 2" className="w-full h-40 object-cover mb-4 rounded-md" />
            <h3 className="text-xl font-semibold text-primary-dark">Exploring Kolkata</h3>
            <p className="text-gray-600">Kolkata offers vibrant street life, historical landmarks, and rich culture.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="https://i.pinimg.com/736x/5c/59/33/5c5933162357bb4289d1baa7a7ea06a8.jpg" alt="Destination 3" className="w-full h-40 object-cover mb-4 rounded-md" />
            <h3 className="text-xl font-semibold text-primary-dark">Durga Puja</h3>
            <p className="text-gray-600">Durga Puja in Bengal celebrates Goddess Durga with grand festivities, rituals, and cultural performances.</p>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-bg-parchment text-primary-dark px-6 sm:px-12 py-12">
        <h2 className="text-2xl font-medium mb-4 text-center">Stay Updated</h2>
        <p className="text-lg mb-6 text-center">Subscribe to our newsletter for the latest updates, vlogs, and more!</p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-1/2 p-3 rounded-l-xl focus:outline-none text-primary-dark border border-accent-burnt"
          />
          <button className="bg-secondary-gold p-3 rounded-r-xl hover:bg-yellow-500 transition">
            Subscribe
          </button>
        </div>
      </section>

    </div>
  );
};

export default Home;
