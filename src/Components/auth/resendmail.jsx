import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoMdMailUnread } from 'react-icons/io';

const Resendmail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth); // Access user from Redux store
    const email = location.state?.email || user?.email || 'Your email'; // Use email from location state or Redux store

    return (
        <div
            
            className="flex items-center justify-center min-h-screen bg-black flex-col px-4 sm:px-6 lg:px-8"
        >
            {/* Title and Animation Outside the Box */}
            <div className="text-center mb-4 sm:mb-4"> {/* Increased spacing */}
                <div className="h-48 w-48 bg-gray-900 p-2 flex justify-center items-center rounded-full">
                    <div className="h-32 w-32 bg-gray-800 p-2 flex justify-center items-center rounded-full">
                        <div className="h-20 w-20 bg-gray-700 p-2 flex justify-center items-center rounded-full">
                            <IoMdMailUnread className="text-[#cfc387] text-5xl text-center justify-center items-center" />
                        </div>
                    </div>
                </div>
                <h1 className="text-2xl sm:text-3xl font-semibold text-white font-dmMono mt-6"> {/* Added margin-top */}
                    Reset <span className="text-[#FFD700]">Password</span>
                </h1>
            </div>

            {/* Box Content */}
            <div className="bg-[#312F2F] w-full max-w-md p-6 sm:p-8 rounded-xl shadow-lg text-center">
                <p className="text-white text-lg sm:text-xl">
                    An email with instructions has been sent to
                    <br />
                    <span className="text-[#ff9684]">{email}</span> {/* Display the email */}
                </p>
                <p className="text-gray-400 text-sm sm:text-base mt-2">
                    The message may end up in your spam folder.
                </p>

                <div className="flex flex-col items-center mt-6">
                    <button
                        type="submit"
                        className="p-2 sm:p-3 rounded-xl bg-[#FFD700] text-black w-full hover:bg-[#e6c000] transition"
                        onClick={() => navigate('/')}
                    >
                        OK, Got it.
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Resendmail;