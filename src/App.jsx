import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import SignUp from "./Components/auth/SignUp";
import Login from "./Components/auth/login";
import ConfirmPass from "./Components/auth/confirmPass";
import ForgotPass from "./Components/auth/forgotpass";
import Sendemail from "./Components/auth/sendemail";
import Resendmail from "./Components/auth/resendmail";
import ResetPass from "./Components/auth/resetpass";
import Navbar from "./Components/common/navbar";
import Home from "./Components/common/home";
import ProfilePage from "./Components/common/profile-page";
import NotPageFound from "./Components/common/page-not-found";

function App() {
  return (
    <div className="bg-black min-h-screen w-screen">
      <Navbar />
      <LoadingBar /> {/* ✅ Added Loading Bar Here */}
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="create-password" element={<ConfirmPass />} />
          <Route path="forgotpass" element={<ForgotPass />} />
          <Route path="sendemail" element={<Sendemail />} />
          <Route path="resendemail" element={<Resendmail />} />
          <Route path="reset-password" element={<ResetPass />} />
        </Route>
        <Route path="*" element={<NotPageFound />} />
      </Routes>
    </div>
  );
}

// ✅ Component to show loader on page change
const LoadingBar = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.configure({ showSpinner: false, speed: 500, trickleSpeed: 200 });
    NProgress.start(); // Start loading bar
    setTimeout(() => NProgress.done(), 500); // End loading after short delay
  }, [location.pathname]); // Runs when route changes

  return null;
};

export default App;
