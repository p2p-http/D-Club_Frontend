import React from "react";
import login from "../assets/login.png";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { loginEnd } from "../http/api";
import toast from "react-hot-toast";
import { setAuth } from "../store/slice/auth-slice.js";

const loginUser = async (credentials) => {
  const { data } = await loginEnd(credentials);
  return data;
};

const Login = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
    onSuccess: async (data) => {
      console.log(data)
      setAuth({
        user: data.message.user,
        authToken: data.message.authToken
      })
      toast.success("Login Successful");
      navigate("/");
    },
    onError: (error) => {
      toast.error("Login Failed: " + (error?.message || "Something went wrong"));
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    console.log("Email:", email);
    console.log("Password:", password);

    mutate({ email, password });
  };

  return (
    <div className="main flex flex-col text-white justify-center items-center min-h-screen gap-4 sm:gap-6 px-4 sm:px-6 md:px-8">
      {/* Title Section */}
      <div className="title flex flex-col items-center text-center font-dmMono">
        <img className="w-20 h-20 sm:w-24 sm:h-24" src={login} alt="User Icon" />
        <h1 className="text-2xl sm:text-3xl font-bold">
          Log <span className="text-[#FFD700]">In</span>
        </h1>
        <p className="text-sm sm:text-base tracking-widest py-2 text-gray-400">
          Welcome back to the beat! 💛
        </p>
      </div>

      {/* Login Box */}
      <div className="box w-full max-w-[90%] md:max-w-[70%] lg:max-w-[50%] bg-[#312F2F] flex justify-center items-center rounded-xl p-4 sm:p-6 md:p-8 shadow-[5px_5px_15px_rgba(0,0,0,0.3)] shadow-gray-600 drop-shadow-xl">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-sm">
          {/* Email Input */}
          <FormItem name="email" label="Email">
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              className="mt-2 p-2 sm:p-3 rounded-s-xl bg-[#312F2F] border-[#4F4F4F] border text-white placeholder:text-gray-400 w-full focus:outline-none focus:ring-1"
            />
          </FormItem>

          {/* Password Input */}
          <FormItem name="password" label="Password">
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              className="mt-2 p-2 sm:p-3 rounded-s-xl bg-[#312F2F] border-[#4F4F4F] border text-white placeholder:text-gray-400 w-full focus:outline-none focus:ring-1"
            />
          </FormItem>

          {/* Buttons + Links */}
          <div className="flex flex-col items-center">
            <button type="submit" className="p-2 sm:p-3 rounded-s-xl bg-[#FFD700] text-black w-full hover:bg-[#e6c000] transition">
              Continue
            </button>
            <p
              onClick={() => navigate("/forgotpass")}
              className="text-xs sm:text-sm mt-2 cursor-pointer hover:underline underline-offset-3"
            >
              Forgot Password?
            </p>
          </div>
        </form>
      </div>

      {/* Sign-Up Redirect */}
      <div className="text-sm sm:text-base text-gray-400 mt-2">
        <p>
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-[#FFD700] cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
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
        <span className="text-red-500 text-sm">
          {rules.find((rule) => rule.required)?.message}
        </span>
      )}
    </div>
  );
};

export default Login;
