import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../assets/login.png";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons - mobile menu

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu
  const isLoggedIn = false;

  return (
    <nav className="fixed bg-black top-0 left-0 w-full text-white z-50 shadow-[5px_5px_15px_rgba(0,0,0,0.3)]   shadow-gray-700 drop-shadow-xl">
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 py-2">
        {/* Logo */}
        <div className="flex flex-col cursor-pointer spacey-1" onClick={() => navigate("/")}>
          <span className="text-3xl font-medium">
            D-<span className="text-[#FFD700] font-medium">Club</span>
          </span>
          <span className="font-poppins text-[5.5px] tracking-[0.4em]">Discover. Dance. Duo.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-lg font-[Poppins]">
          <span  className="hover:text-[#ff9684] cursor-pointer duration-75">We</span>
          <span  className="hover:text-[#ff9684] cursor-pointer duration-75">Support</span>
          <span className="hover:text-[#ff9684] cursor-pointer duration-75">Event</span>
          <span className="hover:text-gray-300  duration-100 cursor-default hover:bg-gray-800 px-3 py-2 text-gray-500 rounded-xl">
            Chat
          </span>
          <img onClick={() => navigate("/login")} className="w-10 h-10 cursor-pointer" src={login} alt="Login Icon" />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-black border-t border-gray-700">
          <span className="hover:text-[#ff9684] cursor-pointer" onClick={() => setMenuOpen(false)}>We</span>
          <span className="hover:text-[#ff9684] cursor-pointer" onClick={() => setMenuOpen(false)}>Support</span>
          <span className="hover:text-[#ff9684] cursor-pointer" onClick={() => setMenuOpen(false)}>Event</span>
          <span className="hover:text-gray-300 cursor-default hover:bg-gray-800 px-3 py-2 text-gray-500 rounded-xl ">Chat</span>
          <img onClick={() => { setMenuOpen(false); navigate("/login"); }} className="w-10 h-10 cursor-pointer" src={login} alt="Login Icon" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
