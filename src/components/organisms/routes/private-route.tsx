import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import UserViewModel from 'viewModel/user/user.viewModel';

type AllowedRole = 'ADMIN' | 'NORMAL' | 'MEMBER';

const PrivateRoute = ({ allowedRoles }: { allowedRoles: AllowedRole[] }) => {
    const userViewModel: UserViewModel = useViewModel(ViewModelName.USER);
    const location = useLocation();

    return [userViewModel.auth.userAuth || 'NORMAL']?.some((role: AllowedRole) =>
        allowedRoles?.includes(role),
    ) ? (
        <Outlet />
    ) : (
        <Navigate to="/auth/signin" state={{ from: location }} replace />
    );
};
export default PrivateRoute;
