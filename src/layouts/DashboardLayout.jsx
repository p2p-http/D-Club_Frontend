import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const DashboardLayout = () => {
  const { user } = useSelector(state => state.auth);

  if (user === null) return <Navigate to="/auth/login" replace={true} />;
  return (
    <div>
      <h1>Dashboard Layout</h1>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
