import { RootState } from "@redux/store";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";

// 인증 상태를 확인하는 함수
const isAuthenticated = (user: any): boolean => {
  // 로그인 상태를 확인하고 true 또는 false를 반환
  if (!user) false;
  return true;
};

// PrivateRoute 컴포넌트
interface PrivateRouteProps {
  path: string;
  component: React.ComponentType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <Route
      {...rest}
      element={
        isAuthenticated(user) ? (
          <Component />
        ) : (
          <Navigate
            to="/auth"
            replace
            state={{ from: window.location.pathname }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
