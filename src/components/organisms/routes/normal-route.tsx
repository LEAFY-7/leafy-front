import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import tokenModule from 'modules/token.module';
import pageUrlConfig from 'configs/pageUrl.config';
import { AllowedRole } from './index.types';

const NormalRoute = ({ allowedRoles }: { allowedRoles: AllowedRole[] }) => {
    const location = useLocation();
    const auth = React.useMemo(() => tokenModule.get(), [location]);
    if (
        (location.pathname.includes(`${pageUrlConfig.auth}${pageUrlConfig.signIn}`) ||
            location.pathname.includes(`${pageUrlConfig.auth}${pageUrlConfig.signUp}`)) &&
        ![auth.userAuth || 'NORMAL']?.some((role: AllowedRole) => allowedRoles?.includes(role))
    ) {
        return <Navigate to={`${pageUrlConfig.main}`} />;
    }

    return <Outlet />;
};
export default NormalRoute;
