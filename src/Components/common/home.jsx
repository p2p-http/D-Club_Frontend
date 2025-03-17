import React from "react";
import { motion } from "framer-motion";
import Intro from "../home-ui/intro";
import Working from "../home-ui/working";
import Cammunityt from "../../assets/community.webp"
import Prostack from "./prostack";


const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};


const Home = () => {
  return (
    <div className="flex flex-col items-center text-white min-h-screen px-6 py-12 bg-black  space-y-40">


      {/* 🚀 Hero Section */}
      <Intro />



      {/* 🚀 Improve Profile */}
      <div className="flex flex-col space-y-8 justify-center items-center py-8 sm:py-12 sm:w-full sm:bg-gradient-to-br sm:from-[#2a2a2a] sm:to-[#1a1a1a]">
        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#969fac] font-poppins text-center">
       Update Profile for Better Recommendations <span className="text-yellow-400">{'->'}</span>
        </h2>

        {/* Boxes and Prostack Section */}
        <div className="box-prostack flex flex-col items-center justify-center w-full max-w-6xl px-4 sm:px-8">
          {/* Boxes Section */}
          <div className="boxes flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 w-full justify-center items-stretch">
            {/* Box 1: Update Profile */}
            <div className="box-1 bg-[#1b191b] rounded-xl p-6 sm:p-8 text-center shadow-lg flex flex-col space-y-6 flex-1 hover:bg-[#2a2828] transition-all duration-300">
              <div className="cicle flex flex-row space-x-3 items-center">
                <div className="circle h-4 w-4 bg-yellow-400 rounded-full"></div>
                <h1 className="text-[#E2E8F0] text-lg sm:text-xl font-semibold text-start">
                  Update Profile
                </h1>
              </div>
              <p className="text-[#94A3B8] text-sm sm:text-base text-start">
                Take a few minutes to update your profile and make it more interesting!
              </p>
            </div>

            {/* Box 2: Improve Accuracy */}
            <div className="box-1 bg-[#1b191b] rounded-xl p-6 sm:p-8 text-center shadow-lg flex flex-col space-y-6 flex-1 hover:bg-[#2a2828] transition-all duration-300">
              <div className="cicle flex flex-row space-x-3 items-center">
                <div className="circle h-4 w-4 bg-yellow-400 rounded-full"></div>
                <h1 className="text-[#E2E8F0] text-lg sm:text-xl font-semibold text-start">
                  Improve Accuracy
                </h1>
              </div>
              <p className="text-[#94A3B8] text-sm sm:text-base text-start">
                Our ML model uses your profile to find the best matches. A complete and engaging profile boosts your visibility and increases your chances of connecting with someone special.
              </p>
            </div>
          </div>

          {/* Prostack Component */}
          <div className="w-full mt-8 sm:mt-12">
            <Prostack />
          </div>
        </div>
      </div>










      {/* 🟡 How It Works (Minimal & Clean UI) */}
      <Working />







      <section className="w-full max-w-6xl text-center py-8 sm:py-16 flex flex-col space-y-4 px-4 sm:px-0">
        {/* 🟡 Section Title */}
        <div className="flex justify-center gap-4 sm:gap-6">
          <div className="circle h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-[#FFD700] flex items-center justify-center"></div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 sm:mb-8">
            What's the actual Purpose of{" "}
            <span className="text-[#868181]">D-</span>
            <span className="text-[#FFD700]">Club?</span>
          </h2>
          <div className="circle h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-[#FFD700] flex items-center justify-center"></div>
        </div>

        {/* Subtitle */}
        <h1 className="font-poppins text-2xl sm:text-3xl font-semibold">
          Find?{" "}
          <span className="text-[#4F4F4F] line-through">Alone</span>{" "}
          <span className="text-[#FFD700] font-extrabold">:</span> A Love One
        </h1>

        {/* Description */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          D-Club was created to break barriers in nightlife culture. Whether you're tired of solo entry restrictions, looking for a fun-loving club partner, or simply want to enhance your clubbing experience, D-Club makes it easy, safe, and exciting to connect and party.
        </motion.p>
      </section>



      {/* 🟡 Join Our Community (Simple & Engaging) */}
      <section className="w-full max-w-5xl text-center">
        <h2 className="text-4xl font-bold text-[#FFD700]">Join Our Community</h2>
        <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
          Be part of an exclusive clubbing network! 🎉 Find partners, create connections, and enjoy nightlife like never before! 🔥💃
        </p>
        <button className="mt-6 px-8 py-3 bg-[#fb6976] hover:bg-[#e44f5c] text-gray-200 font-semibold rounded-full  transition text-lg">
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





