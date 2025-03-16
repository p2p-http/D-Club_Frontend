import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slice/auth-slice";
import { useNavigate } from "react-router-dom";
import { Camera, LogOut, Pencil } from "lucide-react"; // Camera & Logout icons
import loginp from "../../assets/user.png";
import insta from "../../assets/instagram.png";
import snap from "../../assets/snap.png";
import twiter from "../../assets/twitter.png";
import ProfileUpdateDrawer from "../drawer/profile-update-drawer";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth/login");
  };

  // Handle Image Upload
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
    }
  };

  return (
    <div className="main flex flex-col items-center justify-center min-h-screen space-y-8 sm:space-y-12 pb-16 sm:pb-32 pt-16 sm:pt-24 px-4 sm:px-0">
      {/* Profile Section */}
      <div className="profile_pic relative flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start w-full sm:w-3/4 h-auto sm:h-60 bg-[#121112] gap-6 sm:gap-28 rounded-xl shadow-[12px_12px_20px_rgba(49,47,47,0.6)] p-6 sm:p-10">
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
        <div className="name_bio_btn space-y-4 sm:space-y-9 text-center sm:text-left">
          <div className="name_bio flex flex-col">
            <h2 className="text-[#F0E3E3] text-2xl sm:text-3xl font-semibold">
              {user.fullName}
            </h2>
            <p className="text-[#868181] text-sm sm:text-base">
              {user.bio || "Dance like nobody's watching, party like never before! 💫🍾"}
            </p>
          </div>

          <div className="btn flex flex-col sm:flex-row gap-2 sm:gap-1">
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
        {/* Single Logout Button with Responsive Positioning */}
        <div
          className="absolute top-4 right-4 sm:top-auto sm:bottom-6 sm:right-6 cursor-pointer"
          onClick={handleLogout}
        >
          <LogOut size={28} className="text-gray-400 hover:text-red-500 transition" />
        </div>




      </div>




      {/* Personal Information Section */}
      <div className="personal_info flex flex-col items-start w-full sm:w-3/4 bg-[#121112] rounded-xl shadow-[12px_12px_20px_rgba(49,47,47,0.6)] p-6 sm:p-10 space-y-6 sm:space-y-10">
        <div className="flex items-center space-x-2">
          <h1 className="text-[#FFD700] text-lg sm:text-xl font-semibold">Personal Information</h1>
          <Pencil size={20} className="text-gray-400 cursor-pointer hover:text-[#FFD700] transition" />
        </div>

        {/* Age & Gender Selection */}
        <div className="age_gender flex flex-col sm:flex-row gap-6 sm:gap-16 w-full">
          {/* Age Selection */}
          <div className="age w-full sm:w-auto">
            <label className="text-gray-300 text-sm sm:text-base font-medium">Date Of Birth:</label>
            <div className="flex gap-4 mt-2">
              <div className="box text-white bg-[#1b191b] py-2 px-4 rounded-xl w-full sm:w-auto">
                {user.dateOfBirth ? new Intl.DateTimeFormat("fr-CA").format(new Date(user.dateOfBirth)) : "Not Selected"}
              </div>
            </div>
          </div>

          {/* Gender Selection */}
          <div className="gender w-full sm:w-auto">
            <label className="text-gray-300 text-sm sm:text-base font-medium">Gender:</label>
            <div className="flex gap-4 mt-2">
              <div className="box text-white bg-[#1b191b] py-2 px-4 rounded-xl w-full sm:w-auto">
                {user.gender || "Not Selected"}
              </div>
            </div>
          </div>
        </div>

        {/* Interest */}
        <div className="flex flex-col w-full space-y-2">
          <h1 className="text-[#BFBFBF] text-xl sm:text-3xl">Interest</h1>
          <div className="Interest flex flex-col w-full bg-[#1b191b] rounded-xl shadow-md p-4 sm:p-6 space-y-4">
            <div className="interest_box flex flex-wrap gap-3">
              {user.interests && user.interests.length > 0 ? (
                user.interests.map((interest, index) => (
                  <p key={index} className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-gray-400 border border-gray-400 px-3 py-1 rounded-xl">
                    {interest}
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
            {user.about || "Write a few lines about yourself. Tell us about your life, experience. This will make your profile more interesting and attract more attention."}
          </p>
        </div>

        {/* Looking For */}
        <div className="Looking_for flex flex-col w-full bg-[#1b191b] rounded-xl shadow-md p-4 sm:p-6 space-y-4">
          <h1 className="text-[#BFBFBF] text-xl sm:text-2xl">Looking For..? 👀</h1>
          <p className="text-[#868181] text-sm sm:text-base">
            {user.lookingFor || "Tell us who you would like to meet and why. Specify your wishes for a partner. This will help you find the right person faster."}
          </p>
        </div>

        {/* Social Platforms */}
        <div className="socialp flex flex-col space-y-2">
          <div className="flex flex-row space-x-4">
            <img className="h-8 w-8 rounded-full cursor-pointer" src={insta} alt="Instagram" />
            <img className="h-8 w-8 rounded-full cursor-pointer" src={snap} alt="Snapchat" />
            <img className="h-8 w-8 rounded-full cursor-pointer" src={twiter} alt="Twitter" />
          </div>
        </div>
      </div>

      {/* Account Creation Date */}
      <div className="flex flex-col items-start w-full sm:w-3/4 text-[#868181] text-sm sm:text-base">
        <p>Account Created with 💜 on {user.createdAt ? new Intl.DateTimeFormat("fr-CA").format(new Date(user.createdAt)) : "DD-MM-YYYY"}</p>
        <p>Last Updated on {user.updatedAt ? new Intl.DateTimeFormat("fr-CA").format(new Date(user.updatedAt)) : "DD-MM-YYYY"}</p>
      </div>

      <ProfileUpdateDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </div>
  );
};

export default ProfilePage;