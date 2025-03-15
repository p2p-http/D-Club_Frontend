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
import Cammunityt from "../../assets/Cammunity.png"

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


      {/* 🟡 Why Choose D-Club? (Highlight with Background) */}
      <section className="w-full max-w-6xl text-center bg-[#1b191b] p-10 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold text-[#FFD700] mb-8">Why Choose D-Club?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: <Users size={40} />, title: "Connect with Clubbers", desc: "Find people who share your energy & music taste." },
            { icon: <PartyPopper size={40} />, title: "No More Solo Entry", desc: "Avoid restrictions & enter clubs with confidence." },
            { icon: <CheckCircle size={40} />, title: "Safe & Hassle-Free", desc: "Verified profiles ensure a secure clubbing experience." }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-[#252323] rounded-xl shadow-md border border-[#333]"
            >
              <div className="text-[#FFD700] flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
              <p className="text-gray-400 mt-2">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🟡 Join Our Community (Simple & Engaging) */}
      <section className="w-full max-w-5xl text-center">
        <h2 className="text-4xl font-bold text-[#FFD700]">Join Our Community</h2>
        <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
          Be part of an exclusive clubbing network! 🎉 Find partners, create connections, and enjoy nightlife like never before! 🔥💃
        </p>
        <button className="mt-6 px-8 py-3 bg-[#ff4d6d] text-white font-semibold rounded-full hover:bg-[#e63956] transition text-lg">
          Sign Up Now 🎉
        </button>

        <div className="cammunity-page flex justify-center items-center">
          <img src={Cammunityt} alt="" />
        </div>
      </section>


      <section className="w-full max-w-6xl text-center py-16 ">
        {/* 🟡 Section Title */}
        <div className="flex  justify-center gap-6">
          <div className="circle h-10 w-10 rounded-full bg-[#FFD700] items-center"></div>
          <h2 className="text-5xl font-bold text-white mb-8">
            What's the actual Purpose of <span className="text-[#868181]">D-</span><span className="text-[#FFD700]">Club?</span>
          </h2>
          <div className="circle h-10 w-10 rounded-full bg-[#FFD700] items-center"></div>
        </div>

        <h1></h1>

        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          D-Club was created to break barriers in nightlife culture.
          Whether you're tired of solo entry restrictions, looking for a fun-loving club partner, or simply want to enhance your clubbing experience,
          D-Club makes it easy, safe, and exciting to connect and party.
        </motion.p>


      </section>





    </div>
  );
};

export default Home;





