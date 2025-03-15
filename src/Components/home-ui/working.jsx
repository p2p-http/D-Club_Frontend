import React from "react";
import { motion } from "framer-motion";
import { Search, Handshake, CheckCircle } from "lucide-react";
import { RiArrowDownDoubleLine } from "react-icons/ri";

// Fade-in animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Working = () => {
  return (
    <div className="relative"> {/* Add relative positioning to the parent container */}
      <section className="w-full max-w-5xl text-center space-y-12">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-[#FFD700]">How It Works</h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              icon: <Search size={40} />,
              title: "Create Profile",
              desc: "Set up your profile & preferences.",
            },
            {
              icon: <Handshake size={40} />,
              title: "Find a Partner",
              desc: "Get matched with club partners who share your vibe.",
            },
            {
              icon: <CheckCircle size={40} />,
              title: "Enjoy the Night!",
              desc: "Meet up, skip the solo entry, and have fun!",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ delay: index * 0.2 }}
              className="bg-[#1b191b] p-6 rounded-xl shadow-md text-center border border-[#333]"
            >
              {/* Step Icon */}
              <div className="text-[#FFD700] flex justify-center">{step.icon}</div>

              {/* Step Title */}
              <h3 className="text-xl font-semibold mt-4">{step.title}</h3>

              {/* Step Description */}
              <p className="text-gray-400 mt-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default Working;