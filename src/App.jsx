import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
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
import Support from "./Components/common/support";

// ✅ Page Transition Variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
};

function App() {
  const location = useLocation();

  return (
    <div className="bg-black min-h-screen w-screen">
      <Navbar />
      <LoadingBar /> {/* ✅ Loading Bar for Page Transitions */}

      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          {/* Home */}
          <Route
            path=""
            element={
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <Home />
              </motion.div>
            }
          />

          {/* Dashboard */}
          <Route
            path="dashboard"
            element={<DashboardLayout />}
          >
            <Route
              path="profile"
              element={
                <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                  <ProfilePage />
                </motion.div>
              }
            />
          </Route>

          {/* Support */}
          <Route
            path="support"
            element={
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <Support />
              </motion.div>
            }
          />

          {/* Authentication Routes */}
          <Route path="auth" element={<AuthLayout />}>
            <Route path="signup" element={<AnimatedPage><SignUp /></AnimatedPage>} />
            <Route path="login" element={<AnimatedPage><Login /></AnimatedPage>} />
            <Route path="create-password" element={<AnimatedPage><ConfirmPass /></AnimatedPage>} />
            <Route path="forgotpass" element={<AnimatedPage><ForgotPass /></AnimatedPage>} />
            <Route path="sendemail" element={<AnimatedPage><Sendemail /></AnimatedPage>} />
            <Route path="resendemail" element={<AnimatedPage><Resendmail /></AnimatedPage>} />
            <Route path="reset-password" element={<AnimatedPage><ResetPass /></AnimatedPage>} />
          </Route>

          {/* 404 Page */}
          <Route
            path="*"
            element={
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <NotPageFound />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

// ✅ Component to Show Loader on Page Change
const LoadingBar = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.configure({ showSpinner: false, speed: 500, trickleSpeed: 200 });
    NProgress.start(); // Start loading bar
    setTimeout(() => NProgress.done(), 500); // End loading after short delay
  }, [location.pathname]); // Runs when route changes

  return null;
};

// ✅ Wrapper for Animated Pages
const AnimatedPage = ({ children }) => (
  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
    {children}
  </motion.div>
);

export default App;
