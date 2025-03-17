import React from 'react';
import conpass from '../../assets/conpass.png';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { resetPassword } from '../../http/api';

const resetPasswordEndPt = async (credentials) => {
  const { data } = await resetPassword(credentials);
  return data;
};

const ResetPass = () => {
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const token = search.get('token');

  console.log('Token => ', token);

  const { mutate } = useMutation({
    mutationKey: ['resetPassword'],
    mutationFn: resetPasswordEndPt,
    onSuccess: async () => {
      toast.success('Password Reset Successful!');
      navigate('/auth/login');
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    mutate({ password, confirmPassword, token });
  };

  return (
    <div className="main flex flex-col text-white justify-center items-center min-h-screen gap-6 px-4 sm:px-6 lg:px-8">
      <div className="title flex flex-col items-center text-center font-dmMono">
        <img className="w-20 h-20 sm:w-24 sm:h-24" src={conpass} alt="User Icon" />
        <h1 className="text-2xl sm:text-3xl font-bold">
          Reset <span className="text-[#FFD700]">Password</span>
        </h1>
      </div>

      {/* Box */}
      <div className="box w-full max-w-md bg-[#312F2F] flex justify-center items-center rounded-xl p-6 sm:p-8 shadow-md shadow-gray-600">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
          {/* Password Input */}
          <FormItem
            name="password"
            label="New Password"
            rules={[{ required: false, message: 'Password is required' }]}
          >
            <input
              type="password"
              name="password"
              placeholder="Enter New Password"
              className="mt-2 p-2 sm:p-3 rounded-s-xl bg-[#312F2F] border-[#4F4F4F] border text-white placeholder:text-gray-400 w-full focus:outline-none focus:ring-1 focus:ring-[#FFD700]"
            />
          </FormItem>

          {/* Confirm Password Input */}
          <FormItem
            name="confirmPassword"
            label="Verify"
            rules={[{ required: false, message: 'Confirm Password is required' }]}
          >
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm New Password"
              className="mt-2 p-2 sm:p-3 rounded-s-xl bg-[#312F2F] border-[#4F4F4F] border text-white placeholder:text-gray-400 w-full focus:outline-none focus:ring-1 focus:ring-[#FFD700]"
            />
          </FormItem>

          {/* Button */}
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="p-2 sm:p-3 rounded-s-xl bg-[#FFD700] text-black w-full font-medium hover:bg-yellow-500 transition"
            >
              Reset Password
            </button>
          </div>
        </form>
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

export default ResetPass;