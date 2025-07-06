import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the admin token from localStorage
    localStorage.removeItem("adminToken");

    // Redirect to admin login page
    navigate("/admin");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
