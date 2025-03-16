import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Camera, LogOut, Pencil } from "lucide-react"; // Icons
import loginp from "../../assets/user.png"; // Default profile image
import { logout } from "../../store/slice/auth-slice"; // Logout action

const Prostack = () => {
    const [selectedImage, setSelectedImage] = useState(null); // For profile image
    const [drawerOpen, setDrawerOpen] = useState(false); // For drawer state
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
        <div className="main flex flex-col items-center justify-center min-h-screen space-y-8 sm:space-y-12 pb-16 sm:pb-32 pt-16 sm:pt-24 px-4 sm:px-0 bg-black text-white">
            {/* Profile Section */}
            <div className="flex flex-col w-full max-w-4xl space-y-8 p-4 rounded-3xl bg-[#312F2F]"> {/* Increased max-width */}
                {/* Profile Card */}
                <div className="profile_pic relative flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start w-full gap-6 sm:gap-8  p-6 sm:p-8">
                    {/* Profile Image Section */}
                    <div className="relative w-32 h-32 sm:w-44 sm:h-44">
                        <img
                            className="w-full h-full rounded-full object-cover border-2 border-[#FFD700]"
                            src={selectedImage || loginp}
                            alt="Profile"
                        />
                        {/* Camera Icon (For Image Upload) */}
                        <label className="absolute bottom-2 right-2 bg-[#FFD700] p-2 rounded-full cursor-pointer hover:bg-[#e6c000] transition">
                            <Camera size={20} className="text-black" />
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageChange}
                            />
                        </label>
                    </div>

                    {/* Name, Bio & Button */}
                    <div className="name_bio_btn space-y-4 sm:space-y-6 text-center sm:text-left">
                        <div className="name_bio flex flex-col">
                            <h2 className="text-[#F0E3E3] text-2xl sm:text-3xl font-semibold">
                                {user?.fullName || "User"}
                            </h2>
                            <p className="text-[#868181] text-sm sm:text-base">
                                {user?.bio || "Dance like nobody's watching, party like never before! 💫🍾"}
                            </p>
                        </div>

                        {/* Gender and Date of Birth */}
                        <div className="gender-DOB text-[#868181] flex flex-row gap-2 items-center">
                            <p>{user?.dateOfBirth ? new Intl.DateTimeFormat("en-US").format(new Date(user.dateOfBirth)) : "Not Selected"}</p>
                            <p>|</p>
                            <p>{user?.gender || "Not Selected"}</p>
                        </div>

                        {/* Buttons */}
                        <div className="btn flex flex-col sm:flex-row gap-2 sm:gap-4">
                            <button
                                type="submit"
                                onClick={() => navigate("/")}
                                className="p-2 flex gap-2 justify-center items-center sm:p-3 rounded-xl sm:rounded-s-xl text-sm sm:text-base font-normal bg-[#FFD700] text-black w-full sm:w-40 hover:bg-[#e6c000] transition"
                            >
                                {" < "} Back to Home
                            </button>
                            <button
                                type="submit"
                                onClick={() => setDrawerOpen(true)}
                                className="p-2 flex gap-2 justify-center items-center sm:p-3 rounded-xl sm:rounded-r-xl text-sm sm:text-base font-normal bg-[#FFD700] text-black w-full sm:w-40 hover:bg-[#e6c000] transition"
                            >
                                <Pencil size={15} className="text-semi black cursor-pointer hover:text-[#FFD700] transition" />
                                Edit profile
                            </button>
                        </div>
                    </div>

                    {/* Logout Button - Responsive Positioning */}
                    <div
                        className="absolute top-4 right-4 sm:top-auto sm:bottom-6 sm:right-6 cursor-pointer"
                        onClick={handleLogout}
                    >
                        <LogOut size={28} className="text-gray-400 hover:text-red-500 transition" />
                    </div>
                </div>

                {/* About Yourself Section */}
                <div className="About_yourself roundedxl shadow-xl shadow-gray-600 flex flex-col bg-[#312F2F] rounded-xl p-6 sm:p-8 space-y-4 w-full mx-auto"> {/* Full width */}
                    <h1 className="text-[#BFBFBF] text-xl sm:text-2xl font-semibold">About {user?.fullName || "Yourself"} 😌</h1>
                    <p className="text-[#868181] text-sm sm:text-base">
                        {user?.about || "Write a few lines about yourself. Tell us about your life, experience. This will make your profile more interesting and attract more attention."}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Prostack;