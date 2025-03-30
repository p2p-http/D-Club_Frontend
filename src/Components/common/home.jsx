import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import Intro from "../home-ui/intro";
import Working from "../home-ui/working";
import Cammunityt from "../../assets/community.webp";
import Prostack from "./prostack";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Home = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleJoinClick = () => {
    if (user && user._id) {
      navigate("/events");
    } else {
      toast.error("Please login to join our community");
      navigate("/auth/login");
    }
  };

  return (
    <div className="flex flex-col items-center text-white min-h-screen px-6 py-12 bg-black space-y-40">
      {/* ... (keep all your existing sections) ... */}

      {/* 🟡 Join Our Community (Simple & Engaging) */}
      <section className="w-full max-w-5xl text-center">
        <h2 className="text-4xl font-bold text-[#FFD700]">Join Our Community</h2>
        <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
          Be part of an exclusive clubbing network! 🎉 Find partners, create connections, and enjoy nightlife like never before! 🔥💃
        </p>
        <button 
          onClick={handleJoinClick}
          className="mt-6 px-8 py-3 bg-[#fb6976] hover:bg-[#e44f5c] text-gray-200 font-semibold rounded-full transition text-lg"
        >
          Join Now 🎉
        </button>

        <div className="cammunity-page flex justify-center items-center">
          <img src={Cammunityt} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;