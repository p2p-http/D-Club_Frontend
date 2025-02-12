import React from 'react'
import login from '../assets/login.png'
import { useNavigate, useNavigation } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate()

    return (
        <div className="fixed shadow-[5px_5px_15px_rgba(0,0,0,0.3)] shadow-gray-700 drop-shadow-xl top-0 left-0 w-full bg-[#312F2F] text-white flex items-center justify-between px-16  py-2 z-50">
            <div className="flex flex-col cursor-pointer">
                <span onClick={()=>navigate('/')} className="logo text-4xl">D-<span className="text-[#FFD700]">Club</span></span>
                {/* <span className="font-dmMono text-[7px]  ">
                    Discover Dance Duo
                </span> */}
            </div>
            <div className="flex items-center justify-center space-x-6 text-lg font-[Poppins]">
                <span className="hover:text-[#ff9684] cursor-pointer hover:scale-105 duration-500  ">we</span>
                <span className="hover:text-[#ff9684] cursor-pointer hover:scale-105 duration-500">Support</span>
                <span className="hover:text-[#ff9684] cursor-pointer hover:scale-105 duration-500">Event</span>
                <span className="hover:text-[#ff9684] cursor-pointer hover:scale-105 duration-500">Chat</span>
                <img onClick={()=>navigate('/login')}  className="w-10 h-10 cursor-pointer" src={login} alt="Login Icon" />
            </div>
        </div>
    )
}

export default Navbar;



