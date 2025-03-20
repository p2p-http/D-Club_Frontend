import React from "react";
import { motion } from "framer-motion";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector to check auth state

// Fade-in animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Intro = () => {
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth); // Use isAuth from authSlice

  const handleGetStarted = () => {
    if (isAuth) {
      navigate("/events"); // Redirect to events if logged in
    } else {
      navigate("/auth/login"); // Redirect to login if not logged in
    }
  };

  return (
    <div className="flex flex-col items-center text-white min-h-screen px-4 sm:px-6 py-8 bg-black pt-24 sm:pt-48 space-y-24 sm:space-y-52 relative">
      {/* 🚀 Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center max-w-5xl space-y-6 sm:space-y-12"
      >
        <div className="title flex flex-col sm:flex-row items-center justify-center sm:space-x-3">
          {/* Tagline & CTA */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-slate-400 leading-tight">
            <span className="text-[#FFD700]">Find</span> Your perfect club{" "}
            <span className="text-[#FFD700]">partner</span>
          </h1>
          <h1 className="text-6xl sm:text-9xl flex items-center justify-center">👋</h1>
        </div>

        <p className="text-sm sm:text-lg text-[#cbae8a] max-w-3xl mx-auto px-2 sm:px-0">
          Welcome to D-Club! Match with the right club partner, skip solo entries, and make
          unforgettable nightlife memories! 💃🔥 Join a safe, fun, and exciting clubbing
          experience now! 🌟✨
        </p>

        <button
          onClick={handleGetStarted} // Use the new handler
          className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-[#FFD700] text-slate-800 font-semibold rounded-full hover:bg-[#e6c000] transition text-sm sm:text-lg"
        >
          Get Started 🚀
        </button>
      </motion.section>

      {/* Arrow Icon on the Bottom-Right Side */}
      <motion.div
        className="hidden md:block absolute bottom-20 -right-36"
        animate={{ y: [0, -10, 0] }} // Bouncing effect
        transition={{ duration: 1, repeat: Infinity }}
      >
        <RiArrowDownDoubleLine className="text-5xl cursor-pointer text-[#FFD700]" />
      </motion.div>
    </div>
  );
};

export default Intro;