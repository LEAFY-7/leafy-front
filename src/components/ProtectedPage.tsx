import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

const ProtectedPage = ({ children }: { children: React.ReactNode }) => {
  const { user } = useSelector((state: RootState) => state.user);

  return <>{user ? children : null}</>;
};

export default ProtectedPage;
