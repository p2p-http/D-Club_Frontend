import React from "react";
import { Search } from "lucide-react"; // Import the Search icon

const Events = () => {
    return (
        <>
            <div className="pt-56 justify-center items-center px-20">
                <div className="search-bar-main mb-20">
                    <FormItem name="email">
                        <div className="relative w-2/4">
                            <input
                                type="email"
                                name="email"
                                placeholder="Search by Location : 'pune', 'mumbai'"
                                className="mt-2 p-2 w-full sm:p-3 rounded-xl bg-[#312F2F] border-[#4F4F4F] border text-white placeholder:text-gray-400 focus:outline-none focus:ring-1"
                            />
                            {/* Search Icon */}
                            <Search
                                size={25}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#FFD700]"
                            />
                        </div>
                    </FormItem>
                </div>

                <div className="eventmain">
                    <div className="1 flex flex-col gap-9">
                        <div className="title">
                            <h1 className="text-[#DFCB60] text-2xl font-bold">Pune</h1>
                        </div>

                        <div className="boxes">
                            <div className="box1 bg-[#4F4F4F] h-56 w-96 rounded-3xl border-gray-800 border-2 flex flex-row relative">
                                <div className="photo h-full w-28 bg-black object-fill rounded-s-3xl"></div>

                                <div className="info px-8 py-4 flex flex-col space-y-4">
                                    <div className="title-description flex flex-col space-y-3">
                                        <div>
                                            <h1 className="title text-[#FFD700] font-semibold text-xl">
                                                Title of Club
                                            </h1>
                                        </div>


                                        <div className="desc">
                                            <p className="description text-[#BFBFBF] text-base">
                                                Description of Club
                                            </p>
                                            <p className="description text-[#BFBFBF] text-base">
                                                Description of Club
                                            </p>
                                            <p className="description text-[#BFBFBF] text-base">
                                                Description of Club
                                            </p>
                                        </div>
                                    </div>

                                    <div className="location-timing flex flex-col">
                                        <p>Location of clubs</p>
                                        <div className="time flex flex-row">
                                            <p className="text-xs font-semibold">opening time</p>
                                            <p className="text-xs font-semibold">-</p>
                                            <p className="text-xs font-semibold">closing time</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Enroll Button */}
                                <div className="absolute bottom-0 right-0">
                                    <button className="p-2 px-4 bg-[#312F2F] rounded-ee-3xl rounded-ss-3xl text-[#FFD700] font-semibold">
                                        Enroll
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
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