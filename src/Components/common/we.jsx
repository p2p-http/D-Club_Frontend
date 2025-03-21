import React from 'react';
import ss from '../../assets/ss.png';
import { Typewriter } from 'react-simple-typewriter';
import { Linkedin, Github } from 'lucide-react'; // Importing Lucide icons

const We = () => {
    return (
        <div className='pt-32 flex flex-col justify-center items-center gap-28 px-4 sm:px-6 lg:px-8'>
            {/* "Behind the Vision" Heading */}
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#DFCB60] text-left md:text-center'>
                Behind the Vision
            </h1>

            {/* Main Content */}
            <div className="main flex flex-col justify-center items-center md:flex-row md:space-x-48">
                {/* Profile Photo */}
                <div className="photo relative">
                    <div className="circle h-[29vh] w-[29vh] rounded-full bg-[#312F2F] shadow-xl flex items-center justify-center md:h-[50vh] md:w-[50vh]">
                        <img src={ss} alt="" className="rounded-full h-[100%] w-[100%] object-cover" />
                    </div>
                </div>

                {/* Name and Description */}
                <div className="name flex flex-col text-center mt-7 font-bold spay">
                    <p className='text-[#868181] mb-6 md:text-2xl'>Hello, I`m</p>
                    <h1 className='text-center text-2xl text-[#FFFFFF] mb-1 md:text-5xl md:mb-2'>Onkar Dhotarkar</h1>
                    <p className='text-center text-lg text-gray-500 md:text-2xl'>
                        <Typewriter
                            words={['Frontend Developer', 'UI Designer', 'Web Developer']}
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
                            className="btn1 cursor-pointer bg-[#312F2F] p-3 rounded-xl text-white font-bold flex items-center gap-2"
                        >
                            <Linkedin size={20} className='justify-center items-center text-[#FFD700] font-extrabold' /> Linked In
                        </a>
                        <a
                            href="https://github.com/Onkar-Dhotarkar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn1 cursor-pointer bg-[#312F2F] p-3 rounded-xl text-white font-bold flex items-center gap-2"
                        >
                            <Github size={20} className='justify-center items-center text-[#FFD700] font-extrabold' /> Git Hub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default We;