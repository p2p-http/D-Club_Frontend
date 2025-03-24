import React, { useState, useEffect } from "react";
import { Search, MapPin, Clock } from "lucide-react"; // Import Lucide icons
import clubsData from '../club-api/clubsData.json'; // Import the JSON data
import photos from '../../assets/1.png'; // Import the photo
import { useNavigate } from "react-router-dom";

const Events = () => {
    const navigate = useNavigate();
    const [clubs, setClubs] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    // Fetch data from the JSON file (simulate API call)
    useEffect(() => {
        setClubs(clubsData); // Set the clubs data directly from the JSON file
    }, []);

    // Filter clubs based on the search query (by city)
    const filteredClubs = clubs.filter((club) =>
        club.city.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Group clubs by city
    const groupedClubs = filteredClubs.reduce((acc, club) => {
        if (!acc[club.city]) {
            acc[club.city] = [];
        }
        acc[club.city].push(club);
        return acc;
    }, {});

    return (
        <>
            <div className="pt-32 justify-center items-center px-4 sm:px-10 md:px-20">
                {/* Search Bar */}
                <div className="search-bar-main mb-10 sm:mb-20">
                    <FormItem name="search">
                        <div className="relative w-full md:w-2/4">
                            <input
                                type="text"
                                name="search"
                                placeholder="Search by Location: 'pune', 'mumbai'"
                                className="mt-2 p-2 w-full sm:p-3 rounded-xl bg-[#312F2F] border-[#4F4F4F] border text-white placeholder:text-gray-400 focus:outline-none focus:ring-1"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {/* Search Icon */}
                            <Search
                                size={25}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#FFD700]"
                            />
                        </div>
                    </FormItem>
                </div>

                {/* Clubs List */}
                <div className="eventslist flex flex-col gap-10 sm:gap-14">
                    {Object.keys(groupedClubs).map((city) => (
                        <div key={city} className="eventmain">
                            <div className="flex flex-col gap-6 sm:gap-9">
                                {/* City Title */}
                                <div className="title">
                                    <h1 className="text-[#DFCB60] text-xl sm:text-2xl font-bold">{city}</h1>
                                </div>

                                {/* Clubs Container with Horizontal Scroll */}
                                <div className="boxes flex overflow-x-auto space-x-6 sm:space-x-20 pb-4 scrollbar-hide">
                                    {groupedClubs[city].map((club, index) => (
                                        <div
                                            key={index}
                                            className="box bg-gray-950 h-60 sm:h-60 w-72 sm:w-96 rounded-3xl border-gray-800 border-2 flex flex-row relative flex-shrink-0 "
                                        >
                                            {/* Club Photo */}
                                            <div className="photo h-full w-2/4 sm:w-1/4 bg-gray-500 object-cover rounded-s-3xl overflow-hidden">
                                                <img
                                                    src={club.photo || photos} // Use club.photo if available, else fallback to photos
                                                    alt={club.name}
                                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>

                                            {/* Club Info */}
                                            <div className="info px-4 sm:px-6 py-4 sm:py-4 flex flex-col space-y-2 sm:space-y-4  w-3/4 ">
                                                <div className="title-description flex flex-col space-y-1 sm:space-y-3">
                                                    <div>
                                                        <h1 className="title text-[#FFD700] font-semibold text-lg sm:text-xl">
                                                            {club.name}
                                                        </h1>
                                                    </div>
                                                    <div className="desc">
                                                        <p className="description text-[#BFBFBF] text-sm sm:text-sm line-clamp-3">
                                                            {club.description}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Location and Time with Icons */}
                                                <div className="location-timing flex flex-col text-[#BFBFBF] space-y-2">
                                                    <div className="flex items-center space-x-2">
                                                        <MapPin size={16} className="text-[#DFCB60]" />
                                                        <p className="text-sm sm:text-base">{club.location}</p>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <Clock size={16} className="text-[#DFCB60]" />
                                                        <p className="text-xs sm:text-sm font-bold text-[#DFCB60]">
                                                            {club.opening_time} - {club.closing_time}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Enroll Button */}
                                            <div className="absolute bottom-0 right-0">
                                                <button onClick={() => navigate(`/club1/${club.id}`)} className="p-2 px-4 sm:px-6 bg-gray-900 border-[#32312d]  rounded-ee-3xl rounded-ss-3xl text-[#aaa589] font-semibold text-xs sm:text-sm hover:bg-[#84837b] hover:text-[#312F2F] transition-colors duration-300">
                                                    Enroll
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

// Custom FormItem Component
const FormItem = ({ name, label, children }) => {
    return (
        <div className="w-full">
            <label className="text-[#c2c2cb] font-medium">{label}</label>
            {children}
        </div>
    );
};

export default Events;