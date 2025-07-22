import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaUser, FaEnvelope, FaCommentDots, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import contact_svg from '../../assets/contact.svg';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      await axios.post(import.meta.env.VITE_BACKEND_URL + '/contact', {
        name,
        email,
        message,
      });
      toast.success('Feedback submitted');
      setName('');
      setEmail('');
      setMessage('');
    } catch (e) {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="min-h-screen bg-bg-parchment px-4 py-12 flex flex-col items-center">
      
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-semibold text-primary-dark mb-2">Get in Touch</h1>
        <p className="text-gray-700">We’d love to hear from you! Fill out the form below or reach us on social media.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-7xl">
        
        {/* Illustration + Socials */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img src={contact_svg} alt="Contact Illustration" className="w-full max-w-md mx-auto" />
          
          {/* Social Media Icons */}
          <div className="flex gap-6 mt-8">
            <a href="https://www.facebook.com/profile.php?id=61569631767184" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl text-blue-400 hover:scale-110 transition" />
            </a>
            <a href="https://www.instagram.com/sujashdas1210?utm_source=qr&igsh=dXdlaWl0dXR5MWhz" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl text-pink-400 hover:scale-110 transition" />
            </a>
            <a href="https://www.youtube.com/@adaywithsujash" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-2xl text-red-400 hover:scale-110 transition" />
            </a>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={submitHandler}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg space-y-6 border border-light-gray"
        >
          <h2 className="text-2xl text-primary-dark font-semibold text-center">Contact Us</h2>

          {/* Name */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3.5 text-secondary-gold" />
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              value={name}
              placeholder="Your name"
              required
              className="w-full pl-10 pr-4 py-2 border border-light-gray rounded focus:outline-none focus:ring-2 focus:ring-secondary-gold"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3.5 text-secondary-gold" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              placeholder="Your email"
              required
              className="w-full pl-10 pr-4 py-2 border border-light-gray rounded focus:outline-none focus:ring-2 focus:ring-secondary-gold"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <FaCommentDots className="absolute left-3 top-3.5 text-secondary-gold" />
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              placeholder="Your message"
              rows={5}
              required
              className="w-full pl-10 pr-4 py-2 border border-light-gray rounded resize-none focus:outline-none focus:ring-2 focus:ring-secondary-gold"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-secondary-gold text-white py-2 rounded hover:bg-accent-burnt transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
