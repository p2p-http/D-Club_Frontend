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
                return prev + 1; // Smooth increment
            });
        }, 20); // Faster interval for smoother animation
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex justify-center items-center h-full w-full flex-col space-y-12'>
            <div className="box1 flex flex-col justify-center items-center">
                <h1 className='text-[#FFD700] font-bold pt-72 text-9xl'>
                    <span className='text-white'>D-</span>Club
                </h1>
                <p className='text-[#94A3B8] font-semibold text-2xl' style={{ letterSpacing: '0.4em' }}>
                    Discover. Dance. Duo.
                </p>
            </div>

            <div className="w-80 h-2 bg-gray-900 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-200 transition-all duration-100"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default Loading1;