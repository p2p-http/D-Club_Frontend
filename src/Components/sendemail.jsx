import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import emailAnimation from '../assets/email.json';

const Sendemail = () => {
    const location = useLocation(); // Declare hooks before return
    const navigate = useNavigate();
    const email = location.state?.email || 'your email';

    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="flex items-center justify-center h-screen bg-black flex-col">
            {/* Title and Animation Outside the Box */}
            <div className="text-center mb-2">
                <Lottie
                    animationData={emailAnimation}
                    loop={true}
                    className="w-32 h-32 mx-auto"
                />
                <h2 className="text-4xl font-bold text-white mb-2">Create Password</h2>

            </div>

            {/* Box Content */}
            <div
                
                className="bg-[#312F2F] w-96 p-8 rounded-xl shadow-lg text-center"
            >
                <p className="text-white">
                    An email with instructions has been sent to{' '}
                    <span className="text-[#ff9684]">{email}</span>
                </p>
                <p className="text-gray-400 text-sm mt-2">
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
        </motion.div>
    );
};

export default Sendemail;
