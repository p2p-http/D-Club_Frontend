import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginp from "../../assets/user.png"; // Default profile image
import { logout } from "../../store/slice/auth-slice"; // Logout action
import insta from "../../assets/instagram.png";
import snap from "../../assets/snap.png";
import twiter from "../../assets/twitter.png";
import userr from "../../assets/login.png";

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
        <div className="main flex flex-col items-center justify-center min-h-[50vh] space-y-4 sm:space-y-8 pb-4 sm:pb-10 pt-6 sm:pt-8 px-3 sm:px-6 text-white">
            {/* Profile Section */}
            <div className="flex flex-col w-full max-w-md md:max-w-2xl lg:max-w-4xl space-y-4 p-3 sm:p-4 rounded-2xl bg-[#312F2F] shadow-md">
                {/* Profile Card */}
                <div className="profile_pic relative flex flex-col items-center sm:flex-row sm:items-start sm:justify-start w-full gap-3 sm:gap-11 p-3 sm:p-6">
    {/* Profile Image Section */}
    <div className="photo-icon relative w-20 h-20 sm:w-32 sm:h-32 flex items-center justify-center">
        <img
            className="w-full h-full rounded-full border-2 object-cover  border-[#FFD700] p-1"
            src={selectedImage || loginp}
            alt="Profile"
        />
    </div>

    {/* Name, Bio & Button */}
    <div className="name,bio,btn flex flex-col justify-start sm:items-start space-y-2 sm:text-start">
        <div className="text-center sm:text-start">
            <h2 onClick={() => navigate("/dashboard/profile")} className="text-[#F0E3E3] text-lg sm:text-2xl font-semibold hover:text-[#ffc45e] cursor-pointer"> 
                {user?.fullName || "User Name"}
            </h2>
            <p className="text-[#868181] text-xs sm:text-sm">
                {user?.bio || "Dance like nobody's watching, party like never before! 💫🍾"}
            </p>
        </div>

        {/* Gender and Date of Birth */}
        <div className="text-[#868181] justify-center items-center text-xs sm:text-sm flex flex-row gap-2">
            <p>
                {user?.dateOfBirth
                    ? new Intl.DateTimeFormat("fr-CA").format(new Date(user.dateOfBirth))
                    : "Selecte Age"}
            </p>
            <p>|</p>
            <p>{user?.gender || "Selecte Gender"}</p>
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
    </div>
</div>

                {/* About Yourself Section */}
                <div className="bg-[#1b191b] rounded-xl p-3 sm:p-6 text-center shadow-sm flex flex-col space-y-3">
                    <h1 className="text-[#BFBFBF] text-sm sm:text-base font-semibold text-start">
                        About {user?.fullName || "Yourself"} 😌
                    </h1>
                    <p className="text-[#868181] text-xs sm:text-sm text-start">
                        {user?.about || "Write a few lines about yourself. Make your profile more interesting!"}
                    </p>

                    <div className="socialp flex flex-col items-end">
                        <div className="flex flex-row space-x-3">
                            <a
                                href={user?.socialMedia?.instagram || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img className="h-7 w-7 rounded-full cursor-pointer" src={insta} alt="Instagram" />
                            </a>
                            <a
                                href={user?.socialMedia?.snapchat || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img className="h-7 w-7 rounded-full cursor-pointer" src={snap} alt="Snapchat" />
                            </a>
                            <a
                                href={user?.socialMedia?.twitter || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img className="h-7 w-7 rounded-full cursor-pointer" src={twiter} alt="Twitter" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prostack;