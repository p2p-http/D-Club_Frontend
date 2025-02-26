import React from "react";
import { motion } from "framer-motion";
import { Search, Handshake, CheckCircle, Users, PartyPopper } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Home = () => {
  return (
    <div className="flex flex-col items-center text-white min-h-screen px-6 py-12 bg-black pt-32 space-y-24">
      
      {/* 🚀 Hero Section */}
      <motion.section 
        initial="hidden" 
        animate="visible" 
        variants={fadeIn} 
        className="text-center max-w-5xl space-y-6"
      >
        {/* D-Club Logo with Typing Effect */}
        {/* <div className="flex flex-row items-center justify-center space-x-2 text-4xl sm:text-5xl font-extrabold">
          <span className="text-white">D-</span>
          <span className="text-[#FFD700]">Club :</span>
          <span className="text-[#FFD700] text-2xl sm:text-3xl font-light">
            <TypeAnimation
              sequence={[
                "Discover.",
                1500,
                "Dance.",
                1500,
                "Duo.",
                1500
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </div> */}

        {/* Tagline & CTA */}
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-400 leading-tight">
          <span className="text-[#FFD700]">Find</span> Your Perfect Club 
          <span className="text-[#FFD700]"> Partner</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Welcome to D-Club! 🎉 Match with the right club partner, **skip solo entries**, and make unforgettable **nightlife memories!** 💃🔥 Join a **safe, fun, and exciting** clubbing experience now! 🌟✨
        </p>
        <button className="mt-6 px-6 py-3 bg-[#FFD700] text-slate-800 font-semibold rounded-full hover:bg-[#e6c000] transition text-lg">
          Get Started 🚀
        </button>
      </motion.section>

      {/* 🟡 How It Works (Minimal & Clean UI) */}
      <section className="w-full max-w-5xl text-center space-y-12">
        <h2 className="text-4xl font-bold text-[#FFD700]">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { icon: <Search size={40} />, title: "Create Profile", desc: "Set up your profile & preferences." },
            { icon: <Handshake size={40} />, title: "Find a Partner", desc: "Get matched with club partners who share your vibe." },
            { icon: <CheckCircle size={40} />, title: "Enjoy the Night!", desc: "Meet up, skip the solo entry, and have fun!" }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ delay: index * 0.2 }}
              className="bg-[#1b191b] p-6 rounded-xl shadow-md text-center border border-[#333]"
            >
              <div className="text-[#FFD700] flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
              <p className="text-gray-400 mt-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

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
          Be part of an **exclusive clubbing network**! 🎉 **Find partners, create connections, and enjoy nightlife** like never before! 🔥💃  
        </p>
        <button className="mt-6 px-8 py-3 bg-[#ff4d6d] text-white font-semibold rounded-full hover:bg-[#e63956] transition text-lg">
          Sign Up Now 🎉
        </button>
      </section>
    </div>
  );
};

export default Home;
