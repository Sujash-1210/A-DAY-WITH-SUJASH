import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-primary-dark text-white font-body shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link to="/" className="text-2xl font-display text-secondary-gold">
          A Day with Sujash
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium">
          <NavLink to="/" onClick={closeMenu} className="hover:text-secondary-gold" end>
            Home
          </NavLink>
          <NavLink to="/videos" onClick={closeMenu} className="hover:text-secondary-gold">
            Videos
          </NavLink>
          <NavLink to="/about" onClick={closeMenu} className="hover:text-secondary-gold">
            About Us
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu} className="hover:text-secondary-gold">
            Contact Us
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary-dark px-4 py-3 space-y-3 font-medium">
          <NavLink to="/" onClick={closeMenu} className="block hover:text-secondary-gold" end>
            Home
          </NavLink>
          <NavLink to="/videos" onClick={closeMenu} className="block hover:text-secondary-gold">
            Videos
          </NavLink>
          <NavLink to="/about" onClick={closeMenu} className="block hover:text-secondary-gold">
            About Us
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu} className="block hover:text-secondary-gold">
            Contact Us
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
