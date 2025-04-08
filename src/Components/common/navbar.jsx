import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../../assets/login.png";
import { FiMenu, FiX } from "react-icons/fi";
import { useSelector } from "react-redux";
import NavbarLinks from "../../config/NavbarLink";
import { toast } from "react-hot-toast"; // ✅ Add this

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { authToken, user } = useSelector((state) => state.auth);

  // ✅ Chat click handler
  const handleChatClick = () => {
    if (authToken) {
      navigate("/chat");
    } else {
      toast.error("Please login to chat");
    }
  };

  return (
    <nav className="fixed bg-black top-0 left-0 w-full text-white z-50 shadow-[5px_5px_15px_rgba(0,0,0,0.3)] shadow-gray-700 drop-shadow-xl">
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 py-2">
        {/* Logo */}
        <div className="flex flex-col cursor-pointer spacey-1" onClick={() => navigate("/")}>
          <span className="text-3xl font-medium">
            D-<span className="text-[#FFD700] font-medium">Club</span>
          </span>
          <span className="font-poppins text-[5.5px] tracking-[0.4em]">
            Discover. Dance. Duo.
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-lg font-[Poppins]">
          {NavbarLinks.map((link) => (
            <Link className="hover:text-[#ffc45e]" to={link.path} key={link.title}>
              {link.title}
            </Link>
          ))}

          {/* ✅ Chat Button */}
          <span
            onClick={handleChatClick}
            className="hover:text-gray-300 duration-100 cursor-pointer hover:bg-gray-800 px-3 py-2 text-gray-500 rounded-xl"
          >
            Chat
          </span>

          {authToken ? (
            <div className="profileborder bg-gray-700 p-2 rounded-full">
              <img
                onClick={() => navigate("/dashboard/profile")}
                className="w-8 h-8 cursor-pointer rounded-full object-cover border-2 border-[#FFD700] p-0"
                src={user?.avatar?.url || login}
                alt="Profile Icon"
              />
            </div>
          ) : (
            <button
              className="text-base border px-3 py-1 rounded-xl hover:bg-yellow-400 hover:font-medium hover:text-black duration-200"
              onClick={() => navigate("/auth/login")}
            >
              Log in
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-black border-t border-gray-700 text-lg font-[Poppins]">
          {NavbarLinks.map((link) => (
            <Link
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#ffc45e]"
              to={link.path}
              key={link.title}
            >
              {link.title}
            </Link>
          ))}

          {/* ✅ Chat Button Mobile */}
          <span
            onClick={() => {
              setMenuOpen(false);
              handleChatClick();
            }}
            className="hover:text-gray-300 cursor-pointer hover:bg-gray-800 px-3 py-2 text-gray-500 rounded-xl"
          >
            Chat
          </span>

          {authToken ? (
            <div className="profileborder bg-gray-700 p-2 rounded-full">
              <img
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/dashboard/profile");
                }}
                className="w-10 h-10 cursor-pointer rounded-full object-cover border-2 border-[#FFD700] p-1"
                src={user?.avatar?.url || login}
                alt="Profile Icon"
              />
            </div>
          ) : (
            <button
              className="text-sm border px-4 py-1 rounded-xl hover:bg-yellow-400 hover:text-black duration-200"
              onClick={() => {
                setMenuOpen(false);
                navigate("/auth/login");
              }}
            >
              Log in
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
