import React from 'react';
import account from '../assets/user.png';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fullName = formData.get('fullName');
    const email = formData.get('email');

    // Handle form data (e.g., send to an API)
    console.log('Full Name:', fullName);
    console.log('Email:', email);

    // Navigate to another page if needed
    // navigate('/some-other-page');
  };

  return (
    <div className="main flex flex-col text-white justify-center items-center min-h-screen gap-6">
      <div className="title flex flex-col items-center text-center font-dmMono">
        <img className="w-24 h-24" src={account} alt="User Icon" />
        <h1 className="text-3xl font-bold">Create <span className='text-[#FFD700]'>Account</span></h1>
        <p className="text-base tracking-[0.29em] py-2 text-gray-400 ">Sign Up and Create your account 💜</p>
      </div>

      {/* Box */}
      <div className="box h-[45vh] w-[80vh] bg-[#312F2F] flex justify-center items-center rounded-xl p-4 shadow-[5px_5px_15px_rgba(0,0,0,0.3)] shadow-gray-600 drop-shadow-xl">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-sm">

          {/* Full Name Input */}
          <FormItem
            name="fullName"
            label="Full Name"
            rules={[{ required: false, message: 'Full Name is required' }]}
          >
            <input
              type="text"
              placeholder="Enter your full name"
              className="mt-2 p-2 rounded-md bg-[#312F2F] border-[#4F4F4F] border text-white placeholder:text-gray-400 w-full"
            />
          </FormItem>

          {/* Email Input */}
          <FormItem
            name="email"
            label="Email"
            rules={[{ required: false, message: 'Email is required' }]}
          >
            <input
              type="email"
              placeholder="example@gmail.com"
              className="mt-2 p-2 rounded-md bg-[#312F2F] border-[#4F4F4F] border text-white placeholder:text-gray-400 w-full"
            />
          </FormItem>

          {/* Button + Login Text */}
          <div className="flex flex-col items-center">
            <button type="submit" className="p-2 rounded-md bg-[#FFD700] text-black w-full">Continue</button>
            <p className="text-xs mt-2">
              Already have an account?
              <span onClick={() => navigate('/login')} className="text-[#FFD700] cursor-pointer"> Log In</span>
            </p>
          </div>
        </form>
      </div>

      <div className="already">
        {/* Other Content */}
      </div>
    </div>
  );
};

// Custom FormItem Component
const FormItem = ({ name, label, rules, children }) => {
  return (
    <div className="w-full">
      <label className="text-[#c2c2cb] font-medium">{label}</label>
      {children}
      {rules?.some((rule) => rule.required) && (
        <span className="text-red-500 text-sm">{rules.find((rule) => rule.required)?.message}</span>
      )}
    </div>
  );
};

export default SignUp;