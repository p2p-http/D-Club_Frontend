import React from "react";
import login from "../../assets/login.png";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { loginEnd } from "../../http/api";
import toast from "react-hot-toast";
import { setAuth } from "../../store/slice/auth-slice.js";
import { useDispatch } from "react-redux";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons"; // Import Ant Design loader icon

const loginUser = async (credentials) => {
  const { data } = await loginEnd(credentials);
  return data;
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutate, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
    onSuccess: async (data) => {
      console.log(data);
      dispatch(
        setAuth({
          user: data.message.user,
          authToken: data.message.authToken,
        })
      );
      toast.success("Login Successful");
      navigate("/");
    },
    onError: (error) => {
      toast.error("Login Failed: " + (error?.message || "Something went wrong"));
    },
  });

  // Custom Loader Icon (Change color here)
  const customLoader = <LoadingOutlined style={{ fontSize: 50, color: "#FFD700" }} spin />;

  // ✅ Display Custom Spinner When Loading
  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <Spin indicator={customLoader} />
      </div>
    );
  }

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
    <div className="main flex flex-col text-white justify-center items-center min-h-screen gap-4 sm:gap-6 px-4 sm:px-6 md:px-8 pt-9">
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
      <div className="box w-full max-w-[90%] md:max-w-[70%] lg:max-w-[50%] bg-[#312F2F] flex justify-center items-center rounded-xl p-4 sm:p-6 md:p-8 shadow-md shadow-gray-600">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-sm text-white">
          {/* Email Input */}
          <FormItem name="email" label="Email">
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              className="mt-2 p-2 sm:p-3 rounded-s-xl bg-[#312F2F] border-[#4F4F4F] border text-white placeholder:text-gray-400 w-full focus:outline-none focus:ring-1 "
            />
          </FormItem>

          {/* Password Input with Eye Icon */}
          <FormItem name="password" label="Password">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="mt-2 p-2 rounded-s-xl bg-[#312F2F] border-[#4F4F4F] border text-white placeholder:text-gray-400 w-full"
            />
          </FormItem>

          {/* Buttons + Links */}
          <div className="flex flex-col items-center">
            <button type="submit" className="p-2 sm:p-3 rounded-s-xl bg-[#FFD700] text-black w-full hover:bg-[#e6c000] transition">
              Continue
            </button>
            <p
              onClick={() => navigate("/auth/forgotpass")}
              className="text-xs sm:text-sm mt-2 cursor-pointer hover:underline underline-offset-3 text-gray-400"
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
            onClick={() => navigate("/auth/signup")}
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
const FormItem = ({ name, label, children }) => {
  return (
    <div className="w-full">
      <label className="text-[#c2c2cb] font-medium">{label}</label>
      {children}
    </div>
  );
};

export default Login;
