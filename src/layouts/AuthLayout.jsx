import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthLayout = () => {
  const { user } = useSelector(state => state.auth);
  console.log("USER => ", user);
  if (user !== null) return <Navigate to="/" replace={true} />;
  return (
    <div>
      <h1>Auth Layout</h1>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
