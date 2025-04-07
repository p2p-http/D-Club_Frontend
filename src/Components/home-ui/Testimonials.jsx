import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

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

    // Auto-rotate testimonials every 15 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prevIndex) => 
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 15000);
        
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const nextTestimonial = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevTestimonial = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const goToTestimonial = (index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    // Animation variants
    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center w-full overflow-x-hidden bg-black py-12 scroll -pb-14">
            {/* Background pattern - visible only on desktop */}
            <div className="hidden sm:block absolute inset-0 z-0 opacity-10 overflow-hidden">
                <div 
                    className="absolute inset-0 bg-[length:40px_40px] bg-repeat"
                    style={{ 
                        backgroundImage: 'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 2px, transparent 2px)' 
                    }}
                />
            </div>

            {/* Main content container */}
            <div className="relative z-10 w-full px-4 sm:px-6 mx-auto max-w-7xl">
                {/* Section title */}
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-7xl font-bold mb-6 sm:mb-12 text-[#BFBFBF] tracking-tight text-center pb-9"
                >
                    Testimonials
                </motion.h2>

                {/* Testimonial card container */}
                <div className="w-full max-w-4xl relative mx-auto">
                    {/* Decorative square */}
                    <div className="absolute -top-8 -right-8 sm:-top-12 sm:-right-12 md:-top-16 md:-right-16 h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 rounded-[2.5rem] sm:rounded-[3rem] bg-[#F0E3E3] opacity-80 z-0" />

                    

                    {/* Animated testimonial card */}
                    <div className="relative h-[400px] sm:h-[450px]">
                        <AnimatePresence custom={direction} initial={false}>
                            <motion.div
                                key={testimonials[currentIndex].id}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                whileHover={{ scale: 1.02 }}
                                className="bg-[#2A2A2A] w-full min-h-[320px] sm:min-h-[400px] p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-xl border border-[#3D3D3D] hover:border-[#FFD700]/30 transition-all duration-300 backdrop-blur-sm absolute inset-0"
                            >
                                {/* Profile section */}
                                <div className="flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                                    <div className="relative">
                                        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl sm:rounded-3xl overflow-hidden border-4 border-[#FFD700] flex-shrink-0 shadow-lg">
                                            <img
                                                src={testimonials[currentIndex].avatar}
                                                alt={testimonials[currentIndex].author}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="absolute -bottom-1.5 -right-1.5 sm:-bottom-2 sm:-right-2 bg-[#4F4F4F] text-[#FF9684] text-xs font-bold px-2 py-1 rounded-full">
                                            ★★★★★
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-center">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FFD700] leading-tight">
                                            {testimonials[currentIndex].author}
                                        </h3>
                                        <div className="flex items-center text-gray-400 mt-1 sm:mt-2">
                                            <span className="text-sm sm:text-base font-semibold">
                                                {testimonials[currentIndex].date}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Quote section */}
                                <div className="relative">
                                    <p className="text-base sm:text-lg md:text-xl text-[#BFBFBF] font-normal leading-relaxed sm:pl-4">
                                        "{testimonials[currentIndex].quote}"
                                    </p>
                                    <div className="h-1 w-32 sm:w-40 md:w-44 bg-gradient-to-r from-[#FFD700] to-transparent mt-6 sm:mt-8 rounded-full" />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation dots */}
                    <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
                        {testimonials.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => goToTestimonial(index)}
                                whileHover={{ scale: 1.2 }}
                                className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition-all ${currentIndex === index ? 'bg-[#FFD700] w-6 sm:w-8' : 'bg-[#4F4F4F] hover:bg-[#FFD700]/50'}`}
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