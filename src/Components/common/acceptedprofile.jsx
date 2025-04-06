import React from "react";
import { Camera, LogOut, Pencil } from "lucide-react";
import loginp from "../../assets/user.png";
import insta from "../../assets/instagram.png";
import snap from "../../assets/snap.png";
import twiter from "../../assets/twitter.png";

const Acceptedprofile = () => {
  // Temporary mock data
  const user = {
    avatar: { url: loginp },
    fullName: "Alex Johnson",
    bio: "Digital creator & travel enthusiast",
    dateOfBirth: "1995-05-15",
    gender: "Male",
    interest: ["Photography", "Travel", "Music", "Fitness"],
    about: "I'm a passionate photographer who loves to explore new places and capture beautiful moments. When I'm not behind the camera, you can find me hiking or at a music festival.",
    lookingFor: "Someone who shares my love for adventure and creativity. Ideally, someone spontaneous who enjoys both city life and nature escapes.",
    socialMedia: {
      instagram: "https://instagram.com",
      snapchat: "https://snapchat.com",
      twitter: "https://twitter.com"
    }
  };
 
  return (
    <div className="main flex flex-col items-center justify-center min-h-screen space-y-8 sm:space-y-12 pb-16 sm:pb-32 pt-16 sm:pt-24 px-4 sm:px-0 bg-black">
      {/* Profile Section */}
      <div className="profile_pic relative flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start w-full sm:w-3/4 h-auto sm:h-60 bg-[#121112] gap-6 sm:gap-28 rounded-xl shadow-[12px_12px_20px_rgba(49,47,47,0.6)] p-6 sm:p-10">
        {/* Profile Image Section */}
        <div className="relative w-32 h-32 sm:w-44 sm:h-44">
          <img
            className="w-full h-full rounded-full object-cover border-2 border-[#FFD700] p-1"
            src={user.avatar.url}
            alt="Profile"
          />
          
        </div>

        {/* Name, Bio & Button */}
        <div className="name_bio_btn space-y-4 text-center sm:text-left">
          <div className="name_bio flex flex-col">
            <h2 className="text-[#F0E3E3] text-2xl sm:text-3xl font-semibold">
              {user.fullName}
            </h2>
            <p className="text-[#868181] text-sm sm:text-base">
              {user.bio}
            </p>
            <div className="gender-age text-[#868181] flex gap-3 pt-2 justify-center sm:justify-start">
              <p>{user.dateOfBirth}</p>
              <p>|</p>
              <p>{user.gender}</p>
            </div>
          </div>

          <div className="btn flex flex-col sm:flex-row gap-2 sm:gap-1">
            <button
              type="button"
              className="p-2 flex gap-2 justify-center items-center sm:p-3 rounded-s-xl text-sm sm:text-sm font-semibold bg-[#FFD700] text-gray-700 w-full sm:w-40 hover:bg-[#e6c000] transition"
            >
              {" < "} Go Back 
            </button>
            <button
              type="button"
              className="p-2 flex gap-2 justify-center items-center sm:p-3 rounded-r-xl text-sm sm:text-base font-semibold bg-[#FFD700] text-gray-700 w-full sm:w-40 hover:bg-[#3e8e41] transition"
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
              {user.interest.map((tag, index) => (
                <p
                  key={index}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-gray-400 border border-gray-400 px-3 py-1 rounded-xl"
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* About Yourself */}
        <div className="About_yourself flex flex-col w-full bg-[#1b191b] rounded-xl shadow-md p-4 sm:p-6 space-y-4">
          <h1 className="text-[#BFBFBF] text-xl sm:text-2xl">About Yourself 😌</h1>
          <p className="text-[#868181] text-sm sm:text-base">
            {user.about}
          </p>
        </div>

        {/* Looking For */}
        <div className="Looking_for flex flex-col w-full bg-[#1b191b] rounded-xl shadow-md p-4 sm:p-6 space-y-4">
          <h1 className="text-[#BFBFBF] text-xl sm:text-2xl">Looking For..? 👀</h1>
          <p className="text-[#868181] text-sm sm:text-base">
            {user.lookingFor}
          </p>
        </div>

        {/* Social Platforms */}
        <div className="social-btn flex flex-row justify-between items-center w-full">
          <div className="socialp flex flex-col space-y-2">
            <div className="flex flex-row space-x-4">
              <a href={user.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                <img className="h-8 w-8 rounded-full cursor-pointer" src={insta} alt="Instagram" />
              </a>
              <a href={user.socialMedia.snapchat} target="_blank" rel="noopener noreferrer">
                <img className="h-8 w-8 rounded-full cursor-pointer" src={snap} alt="Snapchat" />
              </a>
              <a href={user.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                <img className="h-8 w-8 rounded-full cursor-pointer" src={twiter} alt="Twitter" />
              </a>
            </div>
          </div>
          <div className="status-badge px-4 py-2 bg-[#4CAF50] rounded-full text-white font-semibold">
            Connected
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acceptedprofile;