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
import Footer from "./Components/common/footer";
import Intro from "./Components/home-ui/intro";
import Working from "./Components/home-ui/working";
import Prostack from "./Components/common/prostack";
import Terms from "./Components/term-privacy/terms";
import Privacy from "./Components/term-privacy/privacy";
import We from "./Components/common/we";
import Events from './Components/common/event'
import Club1 from "./Components/common/club1";
import Testimonials from "./Components/home-ui/Testimonials";
import Parternmatch from "./Components/common/parternmatch";
import Matchedprofile from "./Components/common/matchedprofile";
import Acceptedpro from "./Components/common/acceptedprofile";
import Loading1 from "./Components/home-ui/loading1";
import Chat from "./Components/common/chat";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
};

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-black min-h-screen w-screen">
      <Navbar />
      <LoadingBar />

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
          <Route path="dashboard" element={<DashboardLayout />}>
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

          {/* Chat */}
          <Route
            path="chat"
            element={
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <Chat />
              </motion.div>
            }
          />

          {/* We */}
          <Route
            path="we"
            element={
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <We />
              </motion.div>
            }
          />

          <Route
            path="intro"
            element={
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <Intro />
              </motion.div>
            }
          />

          <Route
            path="working"
            element={
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <Working />
              </motion.div>
            }
          />

          <Route
            path="partnermatch"
            element={
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <Parternmatch />
              </motion.div>
            }
          />

          <Route
            path="testimonials"
            element={
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <Testimonials />
              </motion.div>
            }
          />

          {/* Updated Club1 Route with ID parameter */}
          <Route
            path="club1/:id"
            element={
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <Club1 />
              </motion.div>
            }
          />

          <Route
            path="events"
            element={
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <Events />
              </motion.div>
            }
          />

          <Route
            path="profile/:id"
            element={
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <Matchedprofile />
              </motion.div>
            }
          />

          <Route
            path="prostack"
            element={
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <Prostack />
              </motion.div>
            }
          />
          <Route
            path="accepted/:id"
            element={
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <Acceptedpro />
              </motion.div>
            }
          />

          <Route
            path="terms"
            element={
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <Terms />
              </motion.div>
            }
          />
          <Route
            path="loading1"
            element={
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <Loading1 />
              </motion.div>
            }
          />

          <Route
            path="privacy"
            element={
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <Privacy />
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
      <Footer />
    </div>
  );
}

const LoadingBar = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.configure({ showSpinner: false, speed: 500, trickleSpeed: 200 });
    NProgress.start();
    setTimeout(() => NProgress.done(), 500);
  }, [location.pathname]);

  return null;
};

const AnimatedPage = ({ children }) => (
  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
    {children}
  </motion.div>
);

export default App;