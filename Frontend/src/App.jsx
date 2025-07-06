import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/user/Home.jsx";
import Videos from "./pages/user/Videos.jsx";
import VideoDetails from "./pages/user/VideoDetails.jsx";
import Navbar from "./components/Navbar.jsx";
import Contact from "./pages/user/Contact.jsx";
import About from "./pages/user/About.jsx";
import Footer from "./components/Footer.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import UploadVideo from "./pages/admin/UploadVideo.jsx";
import EditVideo from "./pages/admin/EditVideo.jsx";
import AdminLogin from "./pages/admin/AdminLogin.jsx";
import Navbar2 from "./components/Navbar2.jsx";

const App = () => {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith("/admin");
  return <>
  
  { isAdminRoute ? <Navbar2/> : <Navbar/> }
  
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/videos" element={<Videos/>} />
    <Route path="/videos/:id" element={<VideoDetails/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/about" element={<About/>} />


    <Route path="/admin" element={<AdminLogin />} />
    <Route path="/admin/dashboard" element={<AdminDashboard/>} />
    <Route path="/admin/upload" element={<UploadVideo />} />
    <Route path="/admin/edit/:id" element={<EditVideo />} />
  </Routes>
  <Footer/>
  </>
};

export default App;
