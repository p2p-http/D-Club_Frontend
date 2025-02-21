import React from "react";
import account from "../../assets/user.png";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { sendVerificationEmail } from "../../http/api";
import toast from "react-hot-toast";



const sendVeficationEmail = async (credentials) => {
  const { data } = await sendVerificationEmail(credentials);
  return data;
};


const SignUp = () => {
  const navigate = useNavigate();


  const { mutate } = useMutation({
    mutationKey: ['sendVerificationEmail'],
    mutationFn: sendVeficationEmail,
    onSuccess: async () => {
      navigate("/auth/sendemail");
    },
    onError: (error) => {
      console.log(error)
      toast.error("Something went wrong check email or password");
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fullName = formData.get("fullName");
    const email = formData.get("email");

    mutate({ fullName, email });
  };

  return (
    <div className="main flex flex-col text-white justify-center items-center min-h-screen gap-4 sm:gap-6 px-4 sm:px-6 md:px-8">
      {/* Title Section */}
      <div className="title flex flex-col items-center text-center font-dmMono">
        <img className="w-20 h-20 sm:w-24 sm:h-24" src={account} alt="User Icon" />
        <h1 className="text-2xl sm:text-3xl font-bold">
          Create <span className="text-[#FFD700]">Account</span>
        </h1>
        <p className="text-sm sm:text-base tracking-widest py-2 text-gray-400">
          Sign Up and Create your account 💜
        </p>
      </div>

      {/* Sign Up Box */}
      <div className="box w-full max-w-[90%] md:max-w-[70%] lg:max-w-[50%] bg-[#312F2F] flex justify-center items-center rounded-xl p-4 sm:p-6 md:p-12 shadow-[5px_5px_15px_rgba(0,0,0,0.3)] shadow-gray-600 drop-shadow-xl">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-sm">
          {/* Full Name Input */}
          <FormItem name="fullName" label="Full Name">
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              className="mt-2 p-2 sm:p-3 rounded-s-xl bg-[#312F2F] border-[#4F4F4F] border text-white placeholder:text-gray-400 w-full focus:outline-none focus:ring-1 "
            />
          </FormItem>

          {/* Email Input */}
          <FormItem name="email" label="Email">
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              className="mt-2 p-2 sm:p-3 rounded-s-xl bg-[#312F2F] border-[#4F4F4F] border text-white placeholder:text-gray-400 w-full focus:outline-none focus:ring-1 "
            />
          </FormItem>

          {/* Submit Button */}
          <div className="flex flex-col items-center">
            <button type="submit" className="p-2 sm:p-3 rounded-s-xl bg-[#FFD700] text-black w-full hover:bg-[#e6c000] transition">
              Continue
            </button>
          </div>
        </form>
      </div>

      {/* Login Redirect */}
      <div className="text-sm sm:text-base text-gray-400 mt-2">
        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/auth/login")} className="text-[#FFD700] cursor-pointer hover:underline">
            Log In
          </span>
        </p>
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

export default SignUp;
