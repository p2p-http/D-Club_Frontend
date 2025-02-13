import React from 'react'
import login from '../assets/login.png'
import { useNavigate, useNavigation } from 'react-router-dom'


// bg-[#312F2F]  shadow-gray-700 drop-shadow-xl


const Navbar = () => {
  const navigate = useNavigate()
  const isLoggedIn = false;

    return (
        <div className="fixed shadow-[5px_5px_15px_rgba(0,0,0,0.3)] bg-black  shadow-gray-700 drop-shadow-xl  top-0 left-0 w-full  text-white flex items-center justify-between px-16  py-2 z-50">
            <div className="flex flex-col cursor-pointer -space-y-1">
                <span onClick={()=>navigate('/')} className="logo text-3xl font-semibold">D-<span className="text-[#FFD700] font-semibold ">Club</span></span>
                <span className="font-Poppins text-[8.5px] tracking-wider   ">
                    Discover. Dance. Duo.
                </span>
            </div>
            <div className="flex items-center justify-center space-x-8 text-lg font-[Poppins]">
                <span className="hover:text-[#ff9684] cursor-pointer hover:scale-105 duration-500  ">we</span>
                <span className="hover:text-[#ff9684] cursor-pointer hover:scale-105 duration-500">Support</span>
                <span className="hover:text-[#ff9684] cursor-pointer hover:scale-105 duration-500">Event</span>
                <span className="hover:text-gray-300  hover:scale-105 duration-500 cursor-default bg-gray-800 px-2 py-1 text-gray-500 rounded-lg">Chat</span>
                <img onClick={()=>navigate('/login')}  className="w-10 h-10 cursor-pointer" src={login} alt="Login Icon" />
            </div>
        </div>
    )
}

export default Navbar;



