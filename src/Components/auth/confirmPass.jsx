import React from 'react';
import conpass from '../../assets/conpass.png';
import { createPassword } from '../../http/api';
import toast from 'react-hot-toast';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

const createPasswordEndPt = async (credentials) => {
  const { data } = await createPassword(credentials);
  return data;
};

const ConfirmPass = () => {
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const token = search.get("token");

  console.log("Token => ", token);

  const { mutate } = useMutation({
    mutationKey: ['createPassword'],
    mutationFn: createPasswordEndPt,
    onSuccess: async () => {
      toast.success("Registration is Done!!!");
      navigate("/");
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
    <div className="main flex flex-col text-white justify-center items-center min-h-screen gap-6 p-4">
      <div className="title flex flex-col items-center text-center font-dmMono">
        <img className="w-24 h-24" src={conpass} alt="User Icon" />
        <h1 className="text-3xl font-bold">Confirm <span className='text-[#FFD700]'>Password</span></h1>
      </div>

      {/* Box */}
      <div className="box w-full max-w-md bg-[#312F2F] flex justify-center items-center rounded-xl p-6 shadow-[5px_5px_15px_rgba(0,0,0,0.3)] shadow-gray-600 drop-shadow-xl">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
          {/* Password Input */}
          <FormItem
            name="password" label="New Password"
            rules={[{ required: false, message: 'Password is required' }]}
          >
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="mt-2 p-2 rounded-s-xl bg-[#312F2F] border-[#4F4F4F] border text-white placeholder:text-gray-400 w-full"
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
              placeholder="Confirm Password"
              className="mt-2 p-2 rounded-s-xl bg-[#312F2F] border-[#4F4F4F] border text-white placeholder:text-gray-400 w-full"
            />
          </FormItem>

          {/* Button */}
          <div className="flex flex-col items-center">
            <button type="submit" className="p-2 rounded-s-xl bg-[#FFD700] text-black w-full">Confirm Password</button>
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

export default ConfirmPass;