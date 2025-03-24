import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import photos from '../../assets/club1bg.png';
import clubsData from '../club-api/clubsData.json';
import { MapPin, Clock, Phone } from 'lucide-react'; // Import icons

const Club1 = () => {
    const { id } = useParams();
    const [club, setClub] = useState(null);

    useEffect(() => {
        const fetchClub = () => {
            const selectedClub = clubsData.find(club => club.id === parseInt(id));
            setClub(selectedClub);
        };

        fetchClub();
    }, [id]);

    if (!club) {
        return (
            <div className="pt-32 p-9 text-white">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Loading...
                </motion.div>
            </div>
        );
    }

    return (
        <div className='pt-24 md:pt-32 p-4 md:p-9 rounded-2xl'> {/* Adjusted top padding */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="club h-auto w-full bg-[#121112] rounded-2xl"
            >
                {/* Club Photo */}
                <div className="photo w-full h-32 md:h-48 bg-white rounded-t-2xl overflow-hidden">
                    <img
                        src={photos}
                        alt={club.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Club Info */}
                <div className="title-des px-4 md:px-9 py-4 flex flex-col space-y-6">
                    <div className="flex items-center justify-between">
                        <h1 className='clubs-name text-[#FFD700] font-bold text-2xl md:text-3xl'>{club.name}</h1>
                        <div className='rating text-[#FF9684] font-bold bg-[#1b191b] p-2 rounded-3xl w-12 flex justify-center items-center'>
                            {club.rating}
                        </div>
                    </div>
                    <div className="des flex flex-col space-y-4">
                        <p className='club-description text-[#BFBFBF] text-sm md:text-base pe-4'>{club.description}</p>
                        <div className="amenities flex flex-row flex-wrap gap-2 md:gap-3">
                            {club.amenities?.map((amenity, index) => (
                                <div
                                    key={index}
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-gray-400 border border-gray-400 text-xs md:text-sm px-2 md:px-3 py-1 rounded-xl"
                                >
                                    {amenity}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Events */}
                <div className="eventmain px-4 md:px-9 pt-6 md:pt-9">
                    <div className="event w-full h-auto bg-[#1b191b] rounded-2xl">
                        <h1 className='px-4 md:px-5 py-2 text-lg md:text-xl text-[#868181] font-semibold'>Events</h1>
                        <p className='px-4 md:px-9 text-sm md:text-base pb-3 text-[#BFBFBF]'>
                            {club.events?.join(" | ")}
                        </p>
                    </div>
                </div>

                {/* Responsive Contact Section with Icons */}
                <div className="contactmain px-4 md:px-9 pt-6 md:pt-12 pb-6">
                    <div className="location-time-contact p-4 text-[#F0E3E3] space-y-4 bg-[#1b191b] rounded-3xl w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                        <h1 className='text-[#868181] font-bold text-sm md:text-base'>Contact</h1>
                        <div className="content space-y-3 text-[#BFBFBF] text-xs md:text-sm font-bold">
                            <div className="flex items-center space-x-2">
                                <MapPin className="text-[#FFD700] w-4 h-4" />
                                <p>{club.location}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="text-[#FFD700] w-4 h-4" />
                                <p>{club.contact}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Clock className="text-[#FFD700] w-4 h-4" />
                                <p>{club.opening_time} - {club.closing_time}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>



            
        </div>
    );
};

export default Club1;