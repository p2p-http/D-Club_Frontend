import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slice/auth-slice";
import { useNavigate } from "react-router-dom";
import { Camera, LogOut } from "lucide-react"; // Camera & Logout icons
import loginp from "../../assets/user.png";
import insta from "../../assets/instagram.png";
import snap from "../../assets/snap.png";
import twiter from "../../assets/twitter.png";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

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
    <div className="main flex flex-col items-center justify-center min-h-screen space-y-12 pb-32 pt-24">
      {/* Profile Section */}
      <div className="profile_pic relative flex flex-row items-center justify-start w-3/4 h-60 bg-[#121112] gap-28 rounded-xl shadow-[12px_12px_20px_rgba(49,47,47,0.6)] px-10">
        
        {/* Profile Image Section */}
        <div className="relative w-44 h-44">
          <img className="w-full h-full rounded-full object-cover border-2 border-[#FFD700]" src={selectedImage || loginp} alt="Profile" />
          
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
        <div className="name_bio_btn space-y-9">
          <div className="name_bio flex flex-col">
            <h2 className="text-[#F0E3E3] text-3xl font-semibold">Onkar Dhotarkar</h2>
            <p className="text-[#868181]">Dance like nobody's watching, party like never before! 💫🍾</p>
          </div>

          <div className="btn flex flex-row space-x-1">

          <button
            type="submit" onClick={() => navigate("/")}
            className="p-2 sm:p-3 rounded-s-xl text-base font-normal bg-[#FFD700] text-black w-40 hover:bg-[#e6c000] transition"
          >
            {" < "} Back to Home
          </button>
          <button
            type="submit" 
            className="p-2 sm:p-3 rounded-r-xl text-base font-normal bg-[#FFD700] text-black w-40 hover:bg-[#e6c000] transition"
          >
            Edit
          </button>
          </div>
        </div>

        {/* Logout Icon (Placed at Right-Bottom) */}
        <div className="absolute bottom-4 right-4 cursor-pointer" onClick={handleLogout}>
          <LogOut size={28} className="text-gray-400 hover:text-red-500 transition" />
        </div>
      </div>

      {/* Personal Information Section */}
      <div className="personal_info flex flex-col items-start w-3/4 bg-[#121112] rounded-xl shadow-[12px_12px_20px_rgba(49,47,47,0.6)] px-10 py-6 space-y-10">
        <h1 className="text-[#FFD700] text-xl font-semibold">Personal Information</h1>

        {/* Age & Gender Selection */}
        <div className="age_gender flex flex-col sm:flex-row gap-8 w-full">
          {/* Age Selection */}
          <div className="age">
            <label className="text-gray-300 text-sm font-medium">Age:</label>
            <div className="flex gap-4 mt-2">
              {["16-18", "19-21", "22-29", "30+"].map((option) => (
                <label key={option} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="age"
                    value={option}
                    checked={age === option}
                    onChange={(e) => setAge(e.target.value)}
                    className="appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-[#FFD700] checked:border-transparent"
                  />
                  <span className="text-gray-300">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Gender Selection */}
          <div className="gender">
            <label className="text-gray-300 text-sm font-medium">Gender:</label>
            <div className="flex gap-4 mt-2">
              {["Male", "Female", "Other"].map((option) => (
                <label key={option} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value={option}
                    checked={gender === option}
                    onChange={(e) => setGender(e.target.value)}
                    className="appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-[#FFD700] checked:border-transparent"
                  />
                  <span className="text-gray-300">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* About Yourself */}
        <div className="About_yourself flex flex-col w-full bg-[#1b191b] rounded-xl shadow-md px-10 py-6 space-y-5">
          <h1 className="text-[#BFBFBF] text-2xl">About Yourself</h1>
          <p className="text-[#868181]">Write a few lines about yourself. Tell us about your life, experience. This will make your profile more interesting and attract more attention.</p>
        </div>

        {/* Looking For */}
        <div className="Looking_for flex flex-col w-full bg-[#1b191b] rounded-xl shadow-md px-10 py-6 space-y-5">
          <h1 className="text-[#BFBFBF] text-2xl">Looking For..?</h1>
          <p className="text-[#868181]">Tell us who you would like to meet and why. Specify your wishes for a partner. This will help you find the right person faster.</p>
        </div>

        {/* Social Platforms */}
        <div className="socialp flex flex-col space-y-5">
          <h1 className="text-[#BFBFBF] text-2xl">Social Platforms</h1>
          <div className="flex flex-row space-x-6">
            <img className="h-12 w-12 rounded-full cursor-pointer" src={insta} alt="Instagram" />
            <img className="h-12 w-12 rounded-full cursor-pointer" src={snap} alt="Snapchat" />
            <img className="h-12 w-12 rounded-full cursor-pointer" src={twiter} alt="Twitter" />
          </div>
        </div>
      </div>

      {/* Account Creation Date */}
      <p className="text-[#868181]">Account Created with 💜 on {"12-12-2025"}</p>
    </div>
  );
};

export default ProfilePage;
