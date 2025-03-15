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
import { span } from "framer-motion/client";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { user } = useSelector((state) => state.auth);
  // console.log(user);

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
            <h2 className="text-[#F0E3E3] text-3xl font-semibold">{user.fullName}</h2>
            <p className="text-[#868181]">{user.bio || "Dance like nobody's watching, party like never before! 💫🍾"}</p>
          </div>

          <div className="btn flex flex-row space-x-1">

            <button
              type="submit" onClick={() => navigate("/")}
              className="p-2 flex gap-2 justify-center items-center sm:p-3 rounded-s-xl text-base font-normal bg-[#FFD700] text-black w-40 hover:bg-[#e6c000] transition"
            >
              {" < "} Back to Home
            </button>
            <button
              type="submit"
              onClick={() => setDrawerOpen(true)}
              className="p-2 flex gap-2 justify-center items-center sm:p-3 rounded-r-xl text-base font-normal bg-[#FFD700] text-black w-40 hover:bg-[#e6c000] transition"
            >
              <Pencil size={15} className="text-semi black cursor-pointer hover:text-[#FFD700] transition" />


              Edit profile

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
        <div className="flex items-center space-x-2">
          <h1 className="text-[#FFD700] text-xl font-semibold">Personal Information</h1>
          <Pencil size={20} className="text-gray-400 cursor-pointer hover:text-[#FFD700] transition" />
        </div>

        {/* Age & Gender Selection */}
        <div className="age_gender flex flex-col sm:flex-row gap-16 w-full">
          {/* Age Selection */}
          <div className="age">
            <label className="text-gray-300 text-base font-medium">Date Of Birth:</label>
            <div className="flex gap-4 mt-2">
              <div className="box text-white bg-[#1b191b] py-2 px-4 rounded-xl"> {user.dateOfBirth ? new Intl.DateTimeFormat("fr-CA").format(new Date(user.dateOfBirth)) : "Not Selected"}</div>
            </div>
          </div>

          {/* Gender Selection */}
          <div className="gender">
            <label className="text-gray-300 text-base font-medium">Gender:</label>

            <div className="flex gap-4 mt-2">
              <div className="box text-white bg-[#1b191b] py-2 px-4 rounded-xl"> {user.gender || "Not Selected"}</div>
            </div>
          </div>

        </div>


        {/*  Interest */}
        <div className="flex flex-col w-full space-y-2">
  <h1 className="text-[#BFBFBF] text-3xl">Interest</h1>
  <div className="Interest flex flex-col w-full bg-[#1b191b] rounded-xl shadow-md px-10 py-6 space-y-5">
    
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
        <div className="About_yourself flex flex-col w-full bg-[#1b191b] rounded-xl shadow-md px-10 py-6 space-y-5">
          <h1 className="text-[#BFBFBF] text-2xl">About Yourself 😌</h1>
          <p className="text-[#868181]">{user.about || "Write a few lines about yourself. Tell us about your life, experience. This will make your profile more interesting and attract more attention."}</p>
        </div>

        {/* Looking For */}
        <div className="Looking_for flex flex-col w-full bg-[#1b191b] rounded-xl shadow-md px-10 py-6 space-y-5">
          <h1 className="text-[#BFBFBF] text-2xl">Looking For..? 👀</h1>
          <p className="text-[#868181]">{user.lookingFor || "Tell us who you would like to meet and why. Specify your wishes for a partner. This will help you find the right person faster."}</p>
        </div>

        {/* Social Platforms */}
        <div className="socialp flex flex-col space-y-2">
          {/* <h1 className="text-[#BFBFBF] text-2xl">Social Platforms</h1> */}
          <div className="flex flex-row space-x-4">
            <img className="h-8 w-8 rounded-full cursor-pointer" src={insta} alt="Instagram" />
            <img className="h-8 w-8 rounded-full cursor-pointer" src={snap} alt="Snapchat" />
            <img className="h-8 w-8 rounded-full cursor-pointer" src={twiter} alt="Twitter" />
          </div>
        </div>
      </div>

      {/* Account Creation Date */}
      <div className=" flex flex-col items-start w-3/4 text-[#868181]">
        <p>Account Created with 💜 on {user.createdAt ? new Intl.DateTimeFormat("fr-CA").format(new Date(user.createdAt)) : "DD-MM-YYYY"}  </p>
        <p>Last Updated on {user.updatedAt ? new Intl.DateTimeFormat("fr-CA").format(new Date(user.updatedAt)) : "DD-MM-YYYY"}  </p>

      </div>

      <ProfileUpdateDrawer
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
      />

    </div>
  );
};

export default ProfilePage;
