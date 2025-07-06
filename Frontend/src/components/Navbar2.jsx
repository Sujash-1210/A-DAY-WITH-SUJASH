import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("adminToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setIsLoggedIn(false);
    navigate("/admin");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-primary-dark">
      <Link to="/" className="text-2xl font-display text-secondary-gold">
        A Day with Sujash
      </Link>

      <div className="flex space-x-6 hidden md:flex">
        <Link to="/admin/dashboard" className="text-white">Dashboard</Link>
        <Link to="/admin/upload" className="text-white">Upload Video</Link>
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="text-white bg-accent-burnt px-4 py-2 rounded-md"
          >
            Logout
          </button>
        )}
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="md:hidden flex items-center">
        <button className="text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar2;
