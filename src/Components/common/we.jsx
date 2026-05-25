import React from 'react';
import ss from '../../assets/ss.png';
import ks from '../../assets/krishna.png';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { Linkedin, Github } from 'lucide-react';

const We = () => {
    return (
        <div className='pt-32 flex flex-col justify-center items-center gap-28 px-4 sm:px-6 lg:px-8 relative min-h-screen'>
            {/* "Behind the Vision" Heading */}
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#DFCB60] text-left md:text-center'>
                Behind the Vision
            </h1>

            <div className="space-y-36 w-full">
                {/* Main Content - Onkar Dhotarkar */}
                <div className="main flex flex-col justify-center items-center md:flex-row md:space-x-48">
                    {/* Profile Photo */}
                    <div className="photo relative">
                        <div className="circle h-[29vh] w-[29vh] rounded-full bg-[#312F2F] shadow-xl flex items-center justify-center md:h-[50vh] md:w-[50vh] border-2 border-[#FFD700]">
                            <img src={ss} alt="Onkar Dhotarkar" className="rounded-full h-[100%] w-[100%] object-cover" />
                        </div>
                    </div>

                    {/* Name and Description */}
                    <div className="name flex flex-col text-center mt-7 font-bold">
                        <p className='text-[#868181] mb-6 md:text-2xl'>Hello, I`m</p>
                        <h1 className='text-center text-2xl text-[#FFFFFF] mb-1 md:text-5xl md:mb-2'>Onkar Dhotarkar</h1>
                        <p className='text-center text-lg text-gray-500 md:text-2xl'>
                            <Typewriter
                                words={['UI Designer', 'Frontend Developer', 'Backend Developer', 'Web Developer', 'Full Stack Developer']}
                                loop={true}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </p>

                        {/* Buttons */}
                        <div className="btn flex flex-row gap-5 justify-center items-center mt-6">
                            <a
                                href="https://www.linkedin.com/in/onkar-dhotarkar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn1 cursor-pointer bg-[#312F2F] p-3 rounded-xl text-white font-bold flex items-center gap-2 hover:bg-[#3a3838] transition"
                            >
                                <Linkedin size={20} className='text-[#FFD700]' /> LinkedIn
                            </a>
                            <a
                                href="https://github.com/Onkar-Dhotarkar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn1 cursor-pointer bg-[#312F2F] p-3 rounded-xl text-white font-bold flex items-center gap-2 hover:bg-[#3a3838] transition"
                            >
                                <Github size={20} className='text-[#FFD700]' /> GitHub
                            </a>
                        </div>
                    </div>
                </div>



                {/* Arrow Icon - Right side of screen, higher up */}
                <motion.div
                    className="hidden md:block absolute right-4 top-2/4"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                >
                    <RiArrowDownDoubleLine className="text-5xl cursor-pointer text-[#FFD700]" />
                </motion.div>



                {/* Main Content - Krishna Mungase */}
                <div className="main flex flex-col justify-center items-center md:flex-row md:space-x-48">
                    {/* Profile Photo */}
                    <div className="photo relative">
                        <div className="circle h-[29vh] w-[29vh] rounded-full bg-[#312F2F] shadow-xl flex items-center justify-center md:h-[50vh] md:w-[50vh] border-2 border-[#FFD700]">
                            <img src={ks} alt="Krishna Mungase" className="rounded-full h-[100%] w-[100%] object-cover" />
                        </div>
                    </div>

                    {/* Name and Description */}
                    <div className="name flex flex-col text-center mt-7 font-bold">
                        <p className='text-[#868181] mb-6 md:text-2xl'>Hello, I`m</p>
                        <h1 className='text-center text-2xl text-[#FFFFFF] mb-1 md:text-5xl md:mb-2'>Krishna Mungase</h1>
                        <p className='text-center text-lg text-gray-500 md:text-2xl'>
                            <Typewriter
                                words={[ 'Full Stack Developer', 'Competitive Programmer']}
                                loop={true}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </p>

                        {/* Buttons */}
                        <div className="btn flex flex-row gap-5 justify-center items-center mt-6">
                            <a
                                href="https://www.linkedin.com/in/krishna-mungase-5365ab27b/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn1 cursor-pointer bg-[#312F2F] p-3 rounded-xl text-white font-bold flex items-center gap-2 hover:bg-[#3a3838] transition"
                            >
                                <Linkedin size={20} className='text-[#FFD700]' /> LinkedIn
                            </a>
                            <a
                                href="https://github.com/krishmungase"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn1 cursor-pointer bg-[#312F2F] p-3 rounded-xl text-white font-bold flex items-center gap-2 hover:bg-[#3a3838] transition"
                            >
                                <Github size={20} className='text-[#FFD700]' /> GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default We;