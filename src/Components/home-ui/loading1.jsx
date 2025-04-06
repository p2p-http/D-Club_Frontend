import React, { useEffect, useState } from 'react';

const Loading1 = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex justify-center items-center h-screen w-full flex-col space-y-8 md:space-y-12 px-4'>
            <div className="box1 flex flex-col justify-center items-center">
                <h1 className='text-[#FFD700] font-bold pt-32 md:pt-72 text-7xl md:text-8xl lg:text-9xl'>
                    <span className='text-white'>D-</span>Club
                </h1>
                <p className='text-[#94A3B8] font-semibold text-sm sm:text-xl md:text-2xl mt-2 md:mt-0' 
                   style={{ letterSpacing: '0.4em' }}>
                    Discover. Dance. Duo.
                </p>
            </div>

            <div className="w-full max-w-xs sm:max-w-lg md:w-96 h-1.5 sm:h-2 bg-gray-900 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-200 transition-all duration-100"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default Loading1;