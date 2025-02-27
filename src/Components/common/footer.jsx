import React from "react";
import { Link } from "react-router-dom";
import { Mail, Home, Info, Users, HelpCircle } from "lucide-react";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] text-gray-400 py-10 mt-52">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* D-Club Info */}
        <div>
          <h2 className="text-white text-2xl font-semibold">D-<span className="text-[#FFD700]">Club</span> </h2>
          

          <p className="mt-2 text-sm">
            Your ultimate clubbing companion. Find your perfect club partner and make unforgettable memories!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[#FFD700] text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white flex items-center gap-2"><Home size={16}/> Home</Link></li>
            <li><Link to="/we" className="hover:text-white flex items-center gap-2"><Info size={16}/> We</Link></li>
            <li><Link to="/event" className="hover:text-white flex items-center gap-2"><Users size={16}/> Event</Link></li>
            <li><Link to="/support" className="hover:text-white flex items-center gap-2"><HelpCircle size={16}/> Support</Link></li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h3 className="text-[#FFD700] text-lg font-semibold mb-3">Connect With Us</h3>
          <ul className="space-y-2 text-sm">
            <li  className="flex items-center gap-2 hover:text-[#c3897f] cursor-pointer "><Mail size={16}/> dclub.auth+support@gmail.com</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <  FaFacebookSquare size={20}/>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <AiFillInstagram size={20}/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaXTwitter  size={20}/> 
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-600 mt-6 pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} D-Club. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
