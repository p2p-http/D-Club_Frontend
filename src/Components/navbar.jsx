import React from 'react'
import login from '../assets/login.png'
import { useNavigate, useNavigation } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate()

    return (
        <div className="fixed shadow-[5px_5px_15px_rgba(0,0,0,0.3)] shadow-gray-700 drop-shadow-xl top-0 left-0 w-full bg-[#312F2F] text-white flex items-center justify-between px-8 py-2 z-50">
            <div className="flex flex-col cursor-pointer">
                <span onClick={()=>navigate('/')} className="logo text-3xl">D-<span className="text-[#FFD700]">Club</span></span>
                <span className="font-dmMono text-[9px] underline decoration-dashed decoration-2 decoration-gray-600">
                    Discover Dance Duo
                </span>
            </div>
            <div className="flex items-center justify-center space-x-6 text-lg">
                <span className="hover:underline underline-offset-4 decoration-[#FFD700] cursor-pointer hover:scale-105 duration-300">we</span>
                <span className="hover:underline underline-offset-4 decoration-[#FFD700] cursor-pointer hover:scale-105 duration-300">Support</span>
                <span className="hover:underline underline-offset-4 decoration-[#FFD700] cursor-pointer hover:scale-105 duration-300">Event</span>
                <span className="hover:underline underline-offset-4 decoration-[#FFD700] cursor-pointer hover:scale-105 duration-300">Chat</span>
                <img onClick={()=>navigate('/login')}  className="w-10 h-10 cursor-pointer" src={login} alt="Login Icon" />
            </div>
        </div>
    )
}

export default Navbar;
