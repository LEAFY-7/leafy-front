import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import UserViewModel from 'viewModel/user/user.viewModel';

type AllowedRole = 'ADMIN' | 'NORMAL' | 'MEMBER';

const NormalRoute = ({ allowedRoles }: { allowedRoles: AllowedRole[] }) => {
    const userViewModel: UserViewModel = useViewModel(ViewModelName.USER);
    const location = useLocation();

    if (
        (location.pathname.includes('/auth/signin') || location.pathname.includes('/auth/signup')) &&
        ![userViewModel.auth.userAuth || 'NORMAL']?.some((role: AllowedRole) => allowedRoles?.includes(role))
    ) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
};
export default NormalRoute;
