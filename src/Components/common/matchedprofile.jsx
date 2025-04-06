import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Camera, LogOut, Pencil } from "lucide-react";
import loginp from "../../assets/user.png";
import insta from "../../assets/instagram.png";
import snap from "../../assets/snap.png";
import twiter from "../../assets/twitter.png";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { getUserByIdEnd, sendRequestEnd } from "../../http/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { message } from "antd";

const getUserById = async (id) => {
    const { data } = await getUserByIdEnd({ params: id });
    return data;
};

const sendRequest = async (credentials) => {
    const { data } = await sendRequestEnd(credentials);
    return data;
};

const Matchedprofile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isBlinking, setIsBlinking] = useState(true);
    const { user: SenderUser } = useSelector((state) => state.auth);
    const [rgbColor, setRgbColor] = useState("rgb(255, 0, 0)");

    // RGB Animation if user has party mode on
    useEffect(() => {
        const interval = setInterval(() => {
            const r = Math.floor(Math.random() * 155) + 100;
            const g = Math.floor(Math.random() * 155) + 100;
            const b = Math.floor(Math.random() * 155) + 100;
            setRgbColor(`rgb(${r}, ${g}, ${b})`);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Blinking Animation for Request Button
    useEffect(() => {
        const interval = setInterval(() => {
            setIsBlinking(prev => !prev);
        }, 800);
        return () => clearInterval(interval);
    }, []);

    const { data, isLoading, isError } = useQuery({
        queryKey: ["get-user-by-id", id],
        queryFn: () => getUserById(id),
        enabled: !!id,
    });

    const { mutate } = useMutation({
        mutationKey: ['send-request'],
        mutationFn: sendRequest,
        onSuccess: async () => {
            toast.success("Request sent!!!");
        },
        onError: (error) => {
            message.error(error.response?.data?.message || "Failed to send request");
        }
    });

    if (isLoading) {
        return (
            <div className="flex justify-center items-center pt-44 min-h-screen">
                <Spin indicator={<LoadingOutlined style={{ fontSize: 24, color: "#FFD700" }} spin />} />
            </div>
        );
    }

    if (isError || !data?.message?.user) {
        return <div className="text-red-500 flex justify-center items-center min-h-screen">User not found</div>;
    }

    const user = data?.message.user || {};

    const handleOnSendRequest = () => {
        const credentials = {
            senderName: SenderUser.fullName,
            fullName: user.fullName,
            email: user.email,
            senderId: SenderUser._id,
        };
        mutate(credentials);
    }

    return (
        <div className="main flex flex-col items-center justify-center min-h-screen space-y-8 sm:space-y-12 pb-16 sm:pb-32 pt-24 sm:pt-24 px-4 sm:px-0 bg-black">
            {/* Profile Section */}
            <div className="profile_pic relative flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start w-full sm:w-3/4 h-auto sm:h-60 bg-[#121112] gap-6 sm:gap-28 rounded-xl shadow-[12px_12px_20px_rgba(49,47,47,0.6)] p-6 sm:p-10">
                {/* Profile Image Section */}
                <div className="relative w-32 h-32 sm:w-44 sm:h-44">
                    <img
                        className="w-full h-full rounded-full object-cover border-2 border-[#FFD700] p-1"
                        src={user.avatar?.url || loginp}
                        alt="Profile"
                    />
                </div>

                {/* Name, Bio & Button */}
                <div className="name_bio_btn space-y-4 sm:space-y-2 text-center sm:text-left">
                    <div className="name_bio flex flex-col">
                        <h2 className="text-[#F0E3E3] text-2xl sm:text-3xl font-semibold">
                            {user.fullName}
                        </h2>
                        <p className="text-[#868181] text-sm sm:text-base">
                            {user.bio || "This user hasn't added a bio yet."}
                        </p>
                    </div>
                    <div className="DOB-Gender flex flex-row space-x-3 text-[#868181] font-medium pb-2 justify-center items-center sm:justify-start sm:items-start">
                        <p>{user.dateOfBirth
                            ? new Intl.DateTimeFormat("fr-CA").format(new Date(user.dateOfBirth))
                            : "Not Selected"}</p>
                            <p> | </p>
                            <p> {user.gender || "Not Selected"}</p>
                    </div>

                    <div className="btn flex flex-col sm:flex-row gap-2 sm:gap-1">
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="p-2 flex gap-2 justify-center items-center sm:p-3 rounded-s-xl text-sm sm:text-base font-normal bg-[#FFD700] text-black w-full sm:w-40 hover:bg-[#e6c000] transition"
                        >
                            {" < "} Go Back
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate("/chat")}
                            className="p-2 flex gap-2 justify-center items-center sm:p-3 rounded-r-xl text-sm sm:text-base font-normal bg-[#FFD700] text-black w-full sm:w-40 hover:bg-[#e6c000] transition"
                        >
                            Start Chat
                        </button>
                    </div>
                </div>
            </div>

            {/* Personal Information Section */}
            <div className="personal_info flex flex-col items-start w-full sm:w-3/4 bg-[#121112] rounded-xl shadow-[12px_12px_20px_rgba(49,47,47,0.6)] p-6 sm:p-10 space-y-6 sm:space-y-10">
                <div className="flex items-center space-x-2">
                    <h1 className="text-[#FFD700] text-lg sm:text-xl font-semibold">
                        Personal Information
                    </h1>
                </div>

                

                {/* Interest */}
                <div className="flex flex-col w-full space-y-2">
                    <h1 className="text-[#BFBFBF] text-xl sm:text-3xl">Interest</h1>
                    <div className="Interest flex flex-col w-full bg-[#1b191b] rounded-xl shadow-md p-4 sm:p-6 space-y-4">
                        <div className="interest_box flex flex-wrap gap-3">
                            {user.interest ? (
                                user.interest.map((tag, index) => (
                                    <p
                                        key={index}
                                        className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-gray-400 border border-gray-400 px-3 py-1 rounded-xl"
                                    >
                                        {tag}
                                    </p>
                                ))
                            ) : (
                                <p className="text-gray-400">No interests added yet.</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* About Yourself */}
                <div className="About_yourself flex flex-col w-full bg-[#1b191b] rounded-xl shadow-md p-4 sm:p-6 space-y-4">
                    <h1 className="text-[#BFBFBF] text-xl sm:text-2xl">About Yourself 😌</h1>
                    <p className="text-[#868181] text-sm sm:text-base">
                        {user.about || "This user hasn't shared anything about themselves yet."}
                    </p>
                </div>

                {/* Looking For */}
                <div className="Looking_for flex flex-col w-full bg-[#1b191b] rounded-xl shadow-md p-4 sm:p-6 space-y-4">
                    <h1 className="text-[#BFBFBF] text-xl sm:text-2xl">Looking For..? 👀</h1>
                    <p className="text-[#868181] text-sm sm:text-base">
                        {user.lookingFor || "This user hasn't specified what they're looking for yet."}
                    </p>
                </div>

                {/* Social Platforms */}
                <div className="social-btn flex flex-row justify-between items-center w-full">
                    <div className="socialp flex flex-col space-y-2">
                        <div className="flex flex-row space-x-4">
                            <a href={user.socialMedia?.instagram || "#"} target="_blank" rel="noopener noreferrer">
                                <img className="h-8 w-8 rounded-full cursor-pointer" src={insta} alt="Instagram" />
                            </a>
                            <a href={user.socialMedia?.snapchat || "#"} target="_blank" rel="noopener noreferrer">
                                <img className="h-8 w-8 rounded-full cursor-pointer" src={snap} alt="Snapchat" />
                            </a>
                            <a href={user.socialMedia?.twitter || "#"} target="_blank" rel="noopener noreferrer">
                                <img className="h-8 w-8 rounded-full cursor-pointer" src={twiter} alt="Twitter" />
                            </a>
                        </div>
                    </div>
                    <div className="btn">
                        <button
                            onClick={handleOnSendRequest}
                            className={`p-2 sm:p-3 text-[#FF9684] font-bold text-sm sm:text-base bg-[#4F4F4F] rounded-xl hover:bg-[#5a5a5a] transition-colors duration-300 whitespace-nowrap ${isBlinking ? 'opacity-100' : 'opacity-70'
                                }`}
                            style={{
                                animation: 'pulse 1.5s infinite',
                            }}
                        >
                            Send Request
                        </button>
                    </div>
                </div>
            </div>

            {/* Account Creation Date */}
            <div className="flex flex-col items-start w-full sm:w-3/4 text-[#868181] text-sm sm:text-sm md:text-base px-4">
                <p className="whitespace-nowrap">
                    Member since{" "}
                    {user?.createdAt
                        ? new Intl.DateTimeFormat("fr-CA", {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit'
                        }).format(new Date(user.createdAt))
                        : "DD-MM-YYYY"}
                </p>
            </div>

            {/* Add CSS animation for the button */}
            <style jsx>{`
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
            `}</style>
        </div>
    );
};

export default Matchedprofile;