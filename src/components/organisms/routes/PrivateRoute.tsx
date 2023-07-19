import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import UserViewModel from 'viewModel/user/user.viewModel';

type AllowedRole = 'admin' | 'normal' | 'member';

const PrivateRoute = ({ allowedRoles }: { allowedRoles: AllowedRole[] }) => {
    const userViewModel: UserViewModel = useViewModel(ViewModelName.USER);
    console.log(userViewModel.me.isAdmin);
    const location = useLocation();

    return [userViewModel.user.status]?.find((role) => allowedRoles?.includes(role)) ? (
        <Outlet />
    ) : [userViewModel.user.status].includes('member') ? (
        <Navigate to="/unauthorized" state={{ from: location }} replace />
    ) : (
        <Navigate to="/auth" state={{ from: location }} replace />
    );
};
export default PrivateRoute;
