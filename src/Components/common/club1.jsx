import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import photos from '../../assets/1.png';

const Club1 = () => {
    const { id } = useParams(); // Get the club ID from URL
    const [club, setClub] = useState(null);

    useEffect(() => {
        // Fetch the club data from clubsData.json (or API)
        const fetchClub = async () => {
            try {
                const response = await fetch('../club-api/clubsData.json');
                const data = await response.json();
                const selectedClub = data.find(club => club.id === parseInt(id));
                setClub(selectedClub);
            } catch (error) {
                console.error("Error fetching club data:", error);
            }
        };

        fetchClub();
    }, [id]);

    if (!club) {
        return <div className="pt-32 p-9 text-white">Loading...</div>;
    }

    return (
        <div className='pt-32 p-9 rounded-2xl'>
            <div className="club h-auto w-full bg-[#121112] rounded-2xl">
                {/* Club Photo */}
                <div className="photo w-full h-32 bg-white rounded-t-2xl">
                    <img 
                        src={club.photos?.[0] || photos} // Use club photo if available, else fallback
                        alt={club.name} 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Club Info */}
                <div className="title-des px-9 py-4 flex flex-col space-y-6">
                    <h1 className='clubs-name text-[#FFD700] font-bold text-3xl'>{club.name}</h1>
                    <div className="des flex flex-col space-y-4">
                        <p className='club-description text-[#BFBFBF] pe-4'>{club.description}</p>
                        <div className="amenities flex flex-row space-x-3">
                            {club.amenities?.slice(0, 3).map((amenity, index) => (
                                <div 
                                    key={index}
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-gray-400 border border-gray-400 text-base px-3 py-1 rounded-xl"
                                >
                                    {amenity}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Events */}
                <div className="eventmain px-9 pt-9">
                    <div className="event w-full h-auto bg-[#1b191b] rounded-2xl">
                        <h1 className='px-5 py-2 text-xl text-[#868181] font-semibold'>Events</h1>
                        <p className='justify-center items-center px-9 text-2xl pb-3 text-[#BFBFBF]'>
                            {club.events?.join(" | ")}
                        </p>
                    </div>
                </div>

                {/* Location, Contact, and Timings */}
                <div className="location-time-contact px-9 pt-9 text-[#F0E3E3] pb-7">
                    <p>{club.location}</p>
                    <p>{club.contact}</p>
                    <p>{club.opening_time} - {club.closing_time}</p>
                </div>
            </div>
        </div>
    );
};

export default Club1;