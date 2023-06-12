import React from "react";
import { RootState } from "@redux/store";
import { useSelector } from "react-redux";
import { Navigate, useLocation, Outlet } from "react-router-dom";

type AllowedRole = "admin" | "normal" | "member";

const PrivateRoute = ({ allowedRoles }: { allowedRoles: AllowedRole[] }) => {
  const location = useLocation();
  const { user } = useSelector((state: RootState) => state.user);

  console.log(user);
  return user.status?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
};
export default PrivateRoute;
