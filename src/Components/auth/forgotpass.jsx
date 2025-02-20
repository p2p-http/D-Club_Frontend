import React from 'react';
import conpass from '../assets/conpass.png';
import { useNavigate } from 'react-router-dom';
import { sendForgotPasswordEmail } from '../http/api';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';


const sendForgotPassEmail = async (credentials) => {
  const { data } = await sendForgotPasswordEmail(credentials);
  return data;
};


const ForgotPass = () => {
  const navigate = useNavigate();


  const { mutate } = useMutation({
    mutationKey: ["sendForgotPassEmail"],
    mutationFn: sendForgotPassEmail,
    onSuccess: async () => {
      toast.success("Email send check your email");
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');

    // Handle form data (e.g., send to an API)
    console.log('Email:', email);

    mutate({ email })
  };

  return (
    <div className="flex flex-col text-white justify-center items-center min-h-screen gap-6 px-4 sm:px-6">
      <div className="flex flex-col items-center text-center font-dmMono">
        <img className="w-20 sm:w-24 h-20 sm:h-24" src={conpass} alt="User Icon" />
        <h1 className="text-2xl sm:text-3xl font-bold">
          Forgot <span className="text-[#FFD700]">Password?</span>
        </h1>
      </div>

      {/* Box */}
      <div className="w-full max-w-lg h[30vh] bg-[#312F2F] flex flex-col justify-center items-center rounded-xl p-14  sm:p-8 shadow-[5px_5px_15px_rgba(0,0,0,0.3)] shadow-gray-600 drop-shadow-xl">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
          {/* Email Input */}
          <FormItem name="email" label="Email">
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              className="mt-2 p-2 sm:p-3 rounded-s-xl bg-[#312F2F] border-[#4F4F4F] border text-white placeholder:text-gray-400 w-full focus:outline-none focus:ring-1  "
            />
          </FormItem>

          {/* Button */}
          <button type="submit" className="p-3 rounded-md bg-[#FFD700] text-black w-full font-medium hover:bg-yellow-500 transition">
            Continue
          </button>

          {/* Back to Login */}
          <p className="text-xs mt-2 text-gray-400 flex justify-center">
            Back to {'-->'}
            <span onClick={() => navigate('/login')} className="text-[#FFD700] cursor-pointer hover:underline ml-1">
              Log In
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

// Custom FormItem Component
const FormItem = ({ name, label, children }) => {
  return (
    <div className="w-full">
      <label className="text-[#c2c2cb] font-medium">{label}</label>
      {children}
    </div>
  );
};

export default ForgotPass;
