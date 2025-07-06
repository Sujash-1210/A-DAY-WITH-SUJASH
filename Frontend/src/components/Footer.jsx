import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark border-t border-secondary-gold py-6 px-4 sm:px-10 font-body">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-bg-parchment">
            A Day with <span className="text-secondary-gold">Sujash</span>
          </h2>
          <p className="text-sm text-bg-parchment">
            Capturing travel, festivals, and spiritual stories.
          </p>
        </div>

        {/* Links */}
        {/* <div className="flex gap-4 text-sm text-bg-parchment">
          <Link to="/" className="hover:text-secondary-gold transition">Home</Link>
          <Link to="/videos" className="hover:text-secondary-gold transition">Videos</Link>
          <Link to="/about" className="hover:text-secondary-gold transition">About</Link>
          <Link to="/contact" className="hover:text-secondary-gold transition">Contact</Link>
        </div> */}
        <div className="mt-4 text-center text-xs text-bg-parchment">
        &copy; {new Date().getFullYear()} A Day with Sujash. All rights reserved.
      </div>


        {/* Social Icons */}
        <div className="flex gap-4 text-bg-parchment">
          <a
            href="https://www.youtube.com/@adaywithsujash"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary-gold transition"
          >
            <Youtube size={20} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61569631767184"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary-gold transition"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/sujashdas1210?utm_source=qr&igsh=dXdlaWl0dXR5MWhz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary-gold transition"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>

      {/* Bottom note */}
      
    </footer>
  );
};

export default Footer;
