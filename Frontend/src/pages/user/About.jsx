import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Youtube, Facebook, Instagram } from 'lucide-react'; // Lucide icons
import aboutIllustration from '../../assets/about.svg';
import sujashImg from '../../assets/sujash_image.jpg';

const About = () => {
  return (
    <div className="bg-bg-parchment min-h-screen text-text-dark font-body px-4 py-8 sm:px-8 md:px-16 lg:px-24">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-primary-dark mb-2">About Me</h1>
        <p className="text-base md:text-lg text-gray-700">Get to know who I am and why I love creating content.</p>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 mb-8">
        {/* Image */}
        <div className="w-full md:w-1/4">
          <img
            src={sujashImg}
            alt="Sujash Das"
            className="rounded-4xl shadow-md w-full object-cover"
          />
        </div>

        {/* Bio */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-medium text-primary-dark">Hi, I'm Sujash 👋</h2>
          <p>
            I'm a passionate vlogger from Kolkata who loves exploring cultural festivals, spiritual temples,
            scenic travel spots, and much more! My channel <strong className="text-secondary-gold">"A Day with Sujash"</strong> is where I share my journeys with the world.
          </p>
          <p>
            With over <strong>4000+ subscribers</strong>, I aim to make you feel part of every journey — from 
            <span className="text-accent-burnt"> different festival </span> celebrations to peaceful temple visits and hidden travel gems of our Bengal!
          </p>
          <p>
            This website is my way of organizing and sharing these experiences more beautifully 💛
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6 mt-4">
            <a href="https://www.youtube.com/@adaywithsujash" target="_blank" rel="noopener noreferrer" title="YouTube">
              <Youtube className="text-secondary-gold hover:text-red-600 transition" />
            </a>
            <a href="mailto:adaywithsujash@gmail.com" title="Email">
              <Mail className="text-secondary-gold hover:text-blue-600 transition" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61569631767184" target="_blank" rel="noopener noreferrer" title="Facebook">
              <Facebook className="text-secondary-gold hover:text-blue-700 transition" />
            </a>
            <a href="https://www.instagram.com/sujashdas1210?utm_source=qr&igsh=dXdlaWl0dXR5MWhz" target="_blank" rel="noopener noreferrer" title="Instagram">
              <Instagram className="text-secondary-gold hover:text-pink-600 transition" />
            </a>
          </div>
        </div>
      </div>

      

      {/* Illustration */}
      <div className="text-center mb-8">
        <img src={aboutIllustration} alt="About illustration" className="mx-auto max-w-xs sm:max-w-md" />
      </div>

      {/* Contact Link */}
      <div className="text-center">
        <p className="text-gray-700">Want to collaborate or send a message?</p>
        <Link
          to="/contact"
          className="inline-block mt-3 bg-primary-dark text-white px-6 py-2 rounded-xl hover:bg-[#3e415d] transition"
        >
          Go to Contact Page
        </Link>
      </div>
    </div>
  );
};

export default About;
