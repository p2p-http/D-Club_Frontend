import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Camera, LogOut } from "lucide-react"; // Icons
import loginp from "../../assets/user.png"; // Default profile image
import { logout } from "../../store/slice/auth-slice"; // Logout action

const Prostack = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    // Handle image upload
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setSelectedImage(imageURL);
        }
    };

    // Handle logout
    const handleLogout = () => {
        dispatch(logout());
        navigate("/auth/login");
    };

    return (
        <div className="main flex flex-col items-center justify-center min-h-[65vh] space-y-6 sm:space-y-8 pb-6 sm:pb-10 pt-10 sm:pt-20 px-3 sm:px-6 bg-black text-white">
            {/* Profile Section */}
            <div className="flex flex-col w-full max-w-md sm:max-w-lg space-y-6 p-4 rounded-2xl bg-[#312F2F] shadow-md">
                {/* Profile Card */}
                <div className="profile_pic relative flex flex-col items-center justify-center w-full gap-4 p-4 sm:p-6">
                    {/* Profile Image Section */}
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                        <img
                            className="w-full h-full rounded-full object-cover border border-[#FFD700]"
                            src={selectedImage || loginp}
                            alt="Profile"
                        />
                        {/* Camera Icon (For Image Upload) */}
                        <label className="absolute bottom-1 right-1 bg-[#FFD700] p-1 rounded-full cursor-pointer hover:bg-[#e6c000] transition">
                            <Camera size={16} className="text-black" />
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageChange}
                            />
                        </label>
                    </div>

                    {/* Name, Bio & Button */}
                    <div className="text-center">
                        <h2 className="text-[#F0E3E3] text-xl sm:text-2xl font-semibold">
                            {user?.fullName || "User"}
                        </h2>
                        <p className="text-[#868181] text-xs sm:text-sm">
                            {user?.bio || "Dance like nobody's watching, party like never before! 💫🍾"}
                        </p>
                    </div>

                    {/* Gender and Date of Birth */}
                    <div className="text-[#868181] text-xs sm:text-sm flex flex-row gap-2">
                        <p>{user.dateOfBirth ? new Intl.DateTimeFormat("fr-CA").format(new Date(user.dateOfBirth)) : "Not Selected"}</p>
                        <p>|</p>
                        <p>{user?.gender || "Not Selected"}</p>
                    </div>

                    {/* Buttons */}
                    <div className="btn flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                        <button
                            className="p-2 text-xs sm:text-sm rounded-xl bg-[#FFD700] text-black w-full sm:w-32 hover:bg-[#e6c000] transition"
                        >
                            Connect {" <"}3
                        </button>
                        <button
                            className="p-2 text-xs sm:text-sm rounded-xl bg-[#FFD700] text-black w-full sm:w-32 hover:bg-[#e6c000] transition"
                        >
                            Not Interested
                        </button>
                    </div>

                    {/* Logout Button */}
                    <div className="absolute top-3 right-3 cursor-pointer" onClick={handleLogout}>
                        <LogOut size={20} className="text-gray-400 hover:text-red-500 transition" />
                    </div>
                </div>

                {/* About Yourself Section */}
                
                    <div className="bg-[#1b191b] rounded-xl p-4 sm:p-6 text-center shadow-sm flex flex-col space-y-4">
                        <h1 className="text-[#BFBFBF] text-sm sm:text-base font-semibold  text-start">About {user?.fullName || "Yourself"} 😌</h1>
                        <p className="text-[#868181] text-xs sm:text-sm text-start">
                            {user?.about || "Write a few lines about yourself. Make your profile more interesting!"}
                        </p>
                    </div>
                
            </div>
        </div>
    );
};

export default Prostack;
