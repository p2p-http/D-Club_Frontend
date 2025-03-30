import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            quote: "D-Club changed the way I party! I used to struggle with solo entries, but now I can easily find like-minded club partners. Safe, fun, and hassle-free!",
            author: "Sahil C",
            date: "18-03-2025",
            avatar: "https://res.cloudinary.com/dkv6tb2fq/image/upload/v1742954428/ibnns4lne6vhjcqrhi7u"
        },
        {
            id: 2,
            quote: "I met my regular clubbing crew through D-Club. The matching algorithm is spot on - we have similar music tastes and party styles!",
            author: "Biju D",
            date: "22-03-2025",
            avatar: "https://res.cloudinary.com/dkv6tb2fq/image/upload/v1742954428/fuvm8vd8xofinvznl2b5"
        },
        {
            id: 3,
            quote: "As someone new to the city, D-Club helped me discover amazing nightlife spots and make friends who love to party as much as I do!",
            author: "Aditya D",
            date: "05-05-2025",
            avatar: "https://res.cloudinary.com/dkv6tb2fq/image/upload/v1742954428/t6wdkddj2bnsiusvt8br"
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const goToTestimonial = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative min-h-screen text-white flex flex-col items-center justify-center px-4 py-12 overflow-hidden w-full">
            {/* Background square pattern */}
            <div className="absolute inset-0 z-0 opacity-10 w-full">
                <div className="absolute inset-0 bg-[length:40px_40px] bg-repeat" 
                     style={{ 
                         backgroundImage: 'linear-gradient(to right, #BFBFBF 1px, transparent 1px), linear-gradient(to bottom, #BFBFBF 1px, transparent 1px)' 
                     }}>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full">
                {/* Title with subtle animation */}
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-12 text-[#BFBFBF] sm:text-7xl tracking-tight text-center"
                >
                    Testimonials
                </motion.h2>

                <div className="w-full max-w-md sm:max-w-2xl lg:max-w-4xl relative mx-auto">
                    {/* Testimonial Card with enhanced shadow and hover effect */}
                    <motion.div
                        key={testimonials[currentIndex].id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-[#2A2A2A] w-full h-auto min-h-[400px] p-8 sm:p-10 rounded-3xl shadow-xl border border-[#3D3D3D] hover:border-[#FFD700]/30 transition-all duration-300 backdrop-blur-sm"
                    >
                        {/* Profile Section with better alignment */}
                        <div className="flex items-start gap-6 mb-8">
                            <div className="relative">
                                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden border-4 border-[#FFD700] flex-shrink-0 shadow-lg">
                                    <img
                                        src={testimonials[currentIndex].avatar}
                                        alt={testimonials[currentIndex].author}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-2 -right-2 bg-[#4F4F4F] text-[#FF9684] text-xs font-bold px-2 py-1 rounded-full">
                                    ★★★★★
                                </div>
                            </div>

                            <div className="flex flex-col justify-center">
                                <h3 className="text-2xl sm:text-4xl font-bold text-[#FFD700] leading-tight">
                                    {testimonials[currentIndex].author}
                                </h3>
                                <div className="flex items-center text-gray-400 mt-2">
                                    <span className="text-base font-semibold">
                                        {testimonials[currentIndex].date}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Quote with improved typography */}
                        <div className="relative">
                            <p className="text-lg sm:text-2xl text-[#BFBFBF] font-normal leading-relaxed pl-4">
                                "{testimonials[currentIndex].quote}"
                            </p>
                            <div className="h-1 w-44 bg-gradient-to-r from-[#FFD700] to-transparent mt-8 rounded-full"></div>
                        </div>
                    </motion.div>

                    {/* Navigation Dots with hover effects */}
                    <div className="flex justify-center mt-8 space-x-3">
                        {testimonials.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => goToTestimonial(index)}
                                whileHover={{ scale: 1.2 }}
                                className={`h-2.5 w-2.5 rounded-full transition-all ${currentIndex === index ? 'bg-[#FFD700] w-8' : 'bg-[#4F4F4F] hover:bg-[#FFD700]/50'}`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;