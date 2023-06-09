import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "redux/store";

const ProtectedPage = ({ children }: { children: React.ReactNode }) => {
  const navigation = useNavigate();
  const { user } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const token = localStorage.getItem("leafy");
    console.log("token", token);
    if (token) return;
    else navigation("/auth");
  }, [user, navigation]);
  return <>{user ? children : null}</>;
};

export default ProtectedPage;
