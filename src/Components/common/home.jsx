import React from "react";
import { motion } from "framer-motion";
import { Search, Handshake, CheckCircle, Users, PartyPopper, Star } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import soloWalking from "../../assets/solo.json"; // Lottie Animation (Solo Walker)
import coupleWalking from "../../assets/couple.json";
import Lottie from "lottie-react";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import Intro from "../home-ui/intro";
import Working from "../home-ui/working";
import Cammunityt from "../../assets/community.webp"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};


const Home = () => {
  return (
    <div className="flex flex-col items-center text-white min-h-screen px-6 py-12 bg-black  space-y-40">

      {/* 🚀 Hero Section */}
      <Intro />




      

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
        <button className="mt-6 px-8 py-3 bg-green-600 text-gray-200 font-semibold rounded-full hover:bg-green-700 transition text-lg">
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





