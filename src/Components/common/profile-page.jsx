import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slice/auth-slice";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth/login");
  };

  return (
    <div className="text-white flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 px-4 py-2 rounded-md text-white hover:bg-red-700 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
