import React from "react";
import { motion } from "framer-motion";
import { RiArrowDownDoubleLine } from "react-icons/ri";

// Fade-in animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Intro = () => {
    return (
        <div className="flex flex-col items-center text-white min-h-screen px-6 py-8 bg-black pt-48 space-y-52 relative">
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
                        <span className="text-[#FFD700]">Find</span> Your perfect club{" "}
                        <span className="text-[#FFD700]">partner</span>
                    </h1>
                    <h1 className=" text-9xl flex items-center justify-center">👋</h1>
                </div>

                <p className="text-lg text-[#cbae8a] max-w-3xl mx-auto">
                    Welcome to D-Club! Match with the right club partner, skip solo entries,
                    and make unforgettable nightlife memories! 💃🔥 Join a safe, fun, and
                    exciting clubbing experience now! 🌟✨
                </p>

                <button className="mt-6 px-6 py-3 bg-[#FFD700] text-slate-800 font-semibold rounded-full hover:bg-[#e6c000] transition text-lg">
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