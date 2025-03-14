import React from "react";
import { motion } from "framer-motion";
import { Search, Handshake, CheckCircle, Users, PartyPopper, Star } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import soloWalking from "../../assets/solo.json"; // Lottie Animation (Solo Walker)
import coupleWalking from "../../assets/couple.json";
import Lottie from "lottie-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};


const Home = () => {
  return (
    <div className="flex flex-col items-center text-white min-h-screen px-6 py-12 bg-black pt-72 space-y-52">

      {/* 🚀 Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center max-w-5xl space-y-12"
      >
        <div className="titel flex flex-row items-center justify-center space-x-3">
          {/* Tagline & CTA */}
          <h1 className="text-6xl sm:text-8xl font-bold text-slate-400 leading-tight ">
            <span className="text-[#FFD700]">Find</span> Your perfect club <span className="text-[#FFD700]">partner</span>
          </h1>
          <h1 className=" text-9xl flex items-center justify-center">👋</h1>
        </div>

        <p className="text-lg text-[#cbae8a] max-w-3xl mx-auto">
          Welcome to D-Club! 🎉 Match with the right club partner, skip solo entries, and make unforgettable nightlife memories! 💃🔥 Join a safe, fun, and exciting clubbing experience now! 🌟✨
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
          Be part of an exclusive clubbing network! 🎉 Find partners, create connections, and enjoy nightlife like never before! 🔥💃
        </p>
        <button className="mt-6 px-8 py-3 bg-[#ff4d6d] text-white font-semibold rounded-full hover:bg-[#e63956] transition text-lg">
          Sign Up Now 🎉
        </button>
      </section>


      <section className="w-full max-w-6xl text-center py-16">
        {/* 🟡 Section Title */}
        <h2 className="text-5xl font-bold text-[#FFD700] mb-8">
          What's the <span className="text-white">Purpose of D-Club?</span>
        </h2>

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

        {/* 🚀 Purpose Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {[
            { icon: <Users size={50} />, title: "Meet Like-Minded People", desc: "Find clubbers who match your energy and interests, making nightlife more enjoyable and social." },
            { icon: <PartyPopper size={50} />, title: "No More Solo Clubbing", desc: "Skip awkward solo entries! Get matched with the perfect club partner for an exciting night out." },
            { icon: <Handshake size={50} />, title: "Build Real Connections", desc: "D-Club isn't just about clubbing—it's about creating meaningful friendships and experiences." },
            { icon: <Star size={50} />, title: "Elevate Your Clubbing Experience", desc: "Enjoy exclusive events, VIP access, and safe, hassle-free party nights, all with D-Club!" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-[#1b191b] rounded-xl shadow-lg flex flex-col items-center text-center"
            >
              <div className="text-[#FFD700] mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-gray-400 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>




      <section className="relative w-full text-white overflow-hidden py-24 px-6">
        {/* 🖤 Background Effect */}
        <div className="absolute inset-0 bg-[#1b191b] transform -skew-y-3" style={{ height: "120%" }}></div>

        {/* 🎉 Content */}
        <div className="relative flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto space-y-12 md:space-y-0">

          {/* 🚶 Left Side: Solo Walking (Before D-Club) */}
          <div className="w-full md:w-1/2 flex flex-col items-center text-center md:text-left space-y-6">
            <Lottie animationData={soloWalking} className="w-64 h-64 rounded-2xl" />

            <motion.h2 initial="hidden" whileInView="visible" variants={fadeIn} className="text-4xl font-extrabold text-gray-400">
              Feeling <span className="text-[#FFD700]">Alone?</span>
            </motion.h2>

            <motion.p initial="hidden" whileInView="visible" variants={fadeIn} transition={{ delay: 0.2 }} className="text-lg text-gray-300">
              No clubbing partner? Tired of solo entries?
              Clubs rejecting stack entries? We get it!
              Finding the right party match shouldn't be hard.
            </motion.p>
          </div>

          {/* 💃 Right Side: Couple Walking (After D-Club) */}
          <div className="w-full md:w-1/2 flex flex-col items-center text-center md:text-left space-y-6">
            <Lottie animationData={coupleWalking} className="w-64 h-64" />

            <motion.h2 initial="hidden" whileInView="visible" variants={fadeIn} className="text-4xl font-extrabold text-white">
              **D-Club's Got You!**
            </motion.h2>

            <motion.p initial="hidden" whileInView="visible" variants={fadeIn} transition={{ delay: 0.2 }} className="text-lg text-gray-300">
              Match with like-minded clubbers,
              Find your perfect duo, and enjoy limitless nightlife.
              Vibe, Dance, & Party without restrictions!
            </motion.p>

            <motion.button initial="hidden" whileInView="visible" variants={fadeIn} transition={{ delay: 0.4 }}
              className="mt-4 px-6 py-3 bg-[#FFD700] text-slate-800 font-semibold rounded-full hover:bg-[#e6c000] transition text-lg"
            >
              Find Your Duo Now! 🚀
            </motion.button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;




{/* D-Club Logo with Typing Effect */ }
{/* <div className="flex flex-row items-center justify-center space-x-2 text-4xl sm:text-5xl font-extrabold">
          <span className="text-white">D-</span>
          <span className="text-[#FFD700]">Club :</span>
          <span className="text-[#FFD700] text-2xl sm:text-3xl font-light">
            <TypeAnimation
              sequence={[
                "Discover. Dance. Duo.",
                1500,
                "", // Empty string to simulate deletion
                500,

              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </div> */}
