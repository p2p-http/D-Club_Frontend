import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import loginp from "../../assets/user.png";
import insta from "../../assets/instagram.png";
import snap from "../../assets/snap.png";
import twiter from "../../assets/twitter.png";

const PartnerMatch = () => {
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Mock data for recommended profiles (replace with your actual data)
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
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
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
            avatar: "https://randomuser.me/api/portraits/women/44.jpg"
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
            avatar: "https://randomuser.me/api/portraits/men/75.jpg"
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
        <div className="main flex flex-col items-center justify-center min-h-[50vh] space-y-4 sm:space-y-8 pb-4 sm:pb-10 pt-32 sm:pt-8 px-3 sm:px-6 text-white">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className='text-3xl text-[#94A3B8] font-bold text-center mb-8 pt-44'
            >
                TOP {recommendedProfiles.length} Recommendations Based on your Preference
            </motion.h1>

            {/* Profile Section */}
            <motion.div
                key={currentProfile.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative flex flex-col w-full max-w-md md:max-w-2xl lg:max-w-4xl space-y-4 p-3 sm:p-4 rounded-2xl bg-[#312F2F] shadow-md shadow-gray-800"
            >
                {/* Score div positioned at top right */}
                <div className="absolute -top-0 -right-0 bg-[#4F4F4F] h-14 w-16 flex justify-center items-center rounded-se-2xl rounded-es-3xl z-10">
                    <button className='font-bold text-[#FF9684] text-xl'>80%</button>
                </div>
                
                {/* Profile Card */}
                <div className="profile_pic relative flex flex-col items-center sm:flex-row sm:items-start sm:justify-start w-full gap-3 sm:gap-11 p-3 sm:p-6">
                    {/* Profile Image Section */}
                    <div className="photo-icon relative w-20 h-20 sm:w-32 sm:h-32 flex items-center justify-center">
                        <img
                            className="w-full h-full rounded-full border-2 object-cover border-[#FFD700] p-1"
                            src={currentProfile.avatar || loginp}
                            alt="Profile"
                        />
                    </div>

                    {/* Name, Bio & Button */}
                    <div className="name,bio,btn flex flex-col justify-start sm:items-start space-y-2 sm:text-start">
                        <div className="text-center sm:text-start">
                            <h2 className="text-[#F0E3E3] text-lg sm:text-2xl font-semibold">
                                {currentProfile.fullName}
                            </h2>
                            <p className="text-[#868181] text-xs sm:text-sm">
                                {currentProfile.bio}
                            </p>
                        </div>

                        {/* Gender and Date of Birth */}
                        <div className="text-[#868181] justify-center items-center text-xs sm:text-sm flex flex-row gap-2">
                            <p>
                                {currentProfile.dateOfBirth
                                    ? new Intl.DateTimeFormat("fr-CA").format(new Date(currentProfile.dateOfBirth))
                                    : "Select Age"}
                            </p>
                            <p>|</p>
                            <p>{currentProfile.gender}</p>
                        </div>

                        {/* Buttons */}
                        <div className="btn flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                            <button
                                className="p-2 text-xs sm:text-sm rounded-xl bg-[#FFD700] text-black w-full sm:w-32 hover:bg-[#e6c000] transition"
                            >
                                Connect {" <"}3
                            </button>
                            <button
                                className="p-2 text-xs sm:text-sm rounded-xl bg-[#FFD700] text-black w-full sm:w-32 hover:bg-[#e6c000] transition"
                            >
                                Not Interested
                            </button>
                        </div>
                    </div>
                </div>

                {/* About Yourself Section */}
                <div className="bg-[#1b191b] rounded-xl p-3 sm:p-6 text-center shadow-sm flex flex-col space-y-3">
                    <h1 className="text-[#BFBFBF] text-sm sm:text-base font-semibold text-start">
                        About {currentProfile.fullName} 😌
                    </h1>
                    <p className="text-[#868181] text-xs sm:text-sm text-start">
                        {currentProfile.about}
                    </p>

                    <div className="socialp flex flex-col items-end">
                        <div className="flex flex-row space-x-3">
                            <a
                                href={currentProfile.socialMedia.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img className="h-7 w-7 rounded-full cursor-pointer" src={insta} alt="Instagram" />
                            </a>
                            <a
                                href={currentProfile.socialMedia.snapchat}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img className="h-7 w-7 rounded-full cursor-pointer" src={snap} alt="Snapchat" />
                            </a>
                            <a
                                href={currentProfile.socialMedia.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img className="h-7 w-7 rounded-full cursor-pointer" src={twiter} alt="Twitter" />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
                {recommendedProfiles.map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => goToProfile(index)}
                        whileHover={{ scale: 1.2 }}
                        className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition-all ${currentIndex === index ? 'bg-[#FFD700] w-6 sm:w-8' : 'bg-[#4F4F4F] hover:bg-[#FFD700]/50'}`}
                        aria-label={`Go to profile ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default PartnerMatch;