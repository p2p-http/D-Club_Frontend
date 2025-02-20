import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // Import NProgress styles
import Navbar from "./Components/navbar";
import Home from "./Components/home";
import SignUp from "./Components/SignUp";
import Login from "./Components/login";
import ConfirmPass from "./Components/confirmPass";
import ForgotPass from "./Components/forgotpass";
import Sendemail from "./Components/sendemail";
import Resendmail from "./Components/resendmail";
import Resetpass from "./Components/resetpass";
import AuthLayout from "./layouts/AuthLayout"
import DashboardLayout from "./layouts/DashboardLayout"

function App() {
  return (
    <div className="bg-black min-h-screen w-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="create-password" element={<ConfirmPass />} />
          <Route path="forgotpass" element={<ForgotPass />} />
          <Route path="sendemail" element={<Sendemail />} />
          <Route path="resendemail" element={<Resendmail />} />
          <Route path="reset-password" element={<Resetpass />} />
        </Route>
      </Routes>

    </div >
  );
}

// ✅ Component to show loader on page change
const LoadingBar = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.configure({ showSpinner: false });
    NProgress.start(); // Start loading bar
    setTimeout(() => NProgress.done(), 500); // End loading after short delay
  }, [location.pathname]); // Runs when route changes

  return null;
};

export default App;
