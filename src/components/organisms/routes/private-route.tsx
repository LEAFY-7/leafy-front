import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import tokenModule from 'modules/token.module';
import pageUrlConfig from 'configs/pageUrl.config';
import { AllowedRole } from './index.types';

const PrivateRoute = ({ allowedRoles }: { allowedRoles: AllowedRole[] }) => {
    const location = useLocation();
    const auth = React.useMemo(() => tokenModule.get(), [location]);

    return [auth.userAuth || 'NORMAL']?.some((role: AllowedRole) => allowedRoles?.includes(role)) ? (
        <Outlet />
    ) : (
        <Navigate to={`${pageUrlConfig.auth}${pageUrlConfig.signIn}`} state={{ from: location }} replace />
    );
};
export default PrivateRoute;
