import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import loginp from "../../assets/user.png";
import insta from "../../assets/instagram.png";
import snap from "../../assets/snap.png";
import twiter from "../../assets/twitter.png";

const PartnerMatch = () => {
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Mock data for recommended profiles
    const recommendedProfiles = [
        {
            id: 1,
            fullName: "Alex Johnson",
            bio: "Love EDM and techno nights! Looking for party buddies",
            dateOfBirth: "1995-05-15",
            gender: "Male",
            about: "Professional DJ on weekends, always up for underground parties",
            socialMedia: {
                instagram: "#",
                snapchat: "#",
                twitter: "#"
            },
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            matchScore: 80
        },
        {
            id: 2,
            fullName: "Sarah Miller",
            bio: "Weekend warrior looking for clubbing partners",
            dateOfBirth: "1993-08-22",
            gender: "Female",
            about: "Work hard, party harder! Prefer cocktail bars and lounge music",
            socialMedia: {
                instagram: "#",
                snapchat: "#",
                twitter: "#"
            },
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            matchScore: 75
        },
        {
            id: 3,
            fullName: "Mike Chen",
            bio: "Basshead looking for festival buddies",
            dateOfBirth: "1990-11-05",
            gender: "Male",
            about: "EDM festival regular, love meeting new people in the scene",
            socialMedia: {
                instagram: "#",
                snapchat: "#",
                twitter: "#"
            },
            avatar: "https://randomuser.me/api/portraits/men/75.jpg",
            matchScore: 85
        }
    ];

    const nextProfile = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === recommendedProfiles.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevProfile = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? recommendedProfiles.length - 1 : prevIndex - 1
        );
    };

    const goToProfile = (index) => {
        setCurrentIndex(index);
    };

    const currentProfile = recommendedProfiles[currentIndex];

    return (
        <div className="partner-match-container flex flex-col items-center justify-center min-h-screen bg-black text-white py-8 px-4 sm:px-6">
            {/* Header Title */}
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl sm:text-3xl font-bold text-center text-[#94A3B8] mb-6 sm:mb-8 pt-16 sm:pt-24"
            >
                TOP {recommendedProfiles.length} Recommendations
                <br className="sm:hidden" />
                <span className="text-[#94A3B8]">Based on your Preferences</span>
            </motion.h1>

            {/* Profile Carousel Container */}
            <div className="relative w-full max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
                {/* Left Navigation Arrow */}
                <button
                    onClick={prevProfile}
                    className="absolute left-0 sm:-left-12 md:-left-14 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-[#2A2A2A] hover:bg-[#FFD700] transition-all duration-300"
                    aria-label="Previous profile"
                >
                    <ChevronLeft 
                        size={28} 
                        className="text-[#FFD700] hover:text-black" 
                    />
                </button>

                {/* Profile Card */}
                <motion.div
                    key={currentProfile.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="profile-card bg-[#312F2F] rounded-xl sm:rounded-2xl shadow-lg shadow-gray-800 overflow-hidden"
                >
                    {/* Match Score Badge */}
                    <div className="absolute top-0 right-0 bg-[#4F4F4F] w-16 h-14 flex items-center justify-center rounded-es-xl rounded-se-xl z-10">
                        <span className="text-[#FF9684] font-bold text-lg">
                            {currentProfile.matchScore}%
                        </span>
                    </div>

                    {/* Profile Content */}
                    <div className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-14">
                            {/* Profile Picture - Fixed Size */}
                            <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 relative">
                                <img
                                    src={currentProfile.avatar || loginp}
                                    alt={currentProfile.fullName}
                                    className="w-full h-full rounded-full object-cover border-2 border-[#FFD700]"
                                    loading="lazy"
                                />
                            </div>

                            {/* Profile Info */}
                            <div className="flex-1 text-center sm:text-left">
                                <h2 className="text-xl sm:text-2xl font-semibold text-[#F0E3E3]">
                                    {currentProfile.fullName}
                                </h2>
                                <p className="text-sm text-[#868181] mt-1">
                                    {currentProfile.bio}
                                </p>
                                
                                <div className="flex justify-center sm:justify-start items-center gap-2 text-xs sm:text-sm text-[#868181] mt-2">
                                    <span>
                                        {currentProfile.dateOfBirth
                                            ? new Intl.DateTimeFormat("fr-CA").format(new Date(currentProfile.dateOfBirth))
                                            : "Select Age"}
                                    </span>
                                    <span>|</span>
                                    <span>{currentProfile.gender}</span>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-2 mt-3 sm:mt-4">
                                    <button className="bg-[#FFD700] hover:bg-[#e6c000] text-black text-sm sm:text-base py-2 px-4 rounded-s-xl sm:rounded-xl transition-all duration-300">
                                        Connect {"<3"}
                                    </button>
                                    <button className="bg-[#FFD700] hover:bg-[#e6c000] text-black text-sm sm:text-base py-2 px-4 rounded-e-xl sm:rounded-xl transition-all duration-300">
                                        Not Interested
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* About Section */}
                        <div className="mt-4 sm:mt-6 bg-[#1b191b] rounded-xl sm:rounded-xl p-3 sm:p-4">
                            <h3 className="text-[#BFBFBF] font-semibold text-sm sm:text-base">
                                About {currentProfile.fullName} 😌
                            </h3>
                            <p className="text-[#868181] text-xs sm:text-sm mt-1">
                                {currentProfile.about}
                            </p>
                            
                            {/* Social Links */}
                            <div className="flex justify-end mt-3 sm:mt-4 gap-2 sm:gap-3">
                                <a href={currentProfile.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                                    <img src={insta} alt="Instagram" className="w-6 h-6 sm:w-7 sm:h-7" />
                                </a>
                                <a href={currentProfile.socialMedia.snapchat} target="_blank" rel="noopener noreferrer">
                                    <img src={snap} alt="Snapchat" className="w-6 h-6 sm:w-7 sm:h-7" />
                                </a>
                                <a href={currentProfile.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                                    <img src={twiter} alt="Twitter" className="w-6 h-6 sm:w-7 sm:h-7" />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Navigation Arrow */}
                <button
                    onClick={nextProfile}
                    className="absolute right-0 sm:-right-12 md:-right-14 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-[#2A2A2A] hover:bg-[#FFD700] transition-all duration-300"
                    aria-label="Next profile"
                >
                    <ChevronRight 
                        size={28} 
                        className="text-[#FFD700] hover:text-black" 
                    />
                </button>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 sm:mt-8 gap-2 sm:gap-3">
                {recommendedProfiles.map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => goToProfile(index)}
                        whileHover={{ scale: 1.2 }}
                        className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition-all duration-300 ${
                            currentIndex === index 
                                ? 'bg-[#FFD700] w-6 sm:w-8' 
                                : 'bg-[#4F4F4F] hover:bg-[#FFD700]/50'
                        }`}
                        aria-label={`View profile ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default PartnerMatch;