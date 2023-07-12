import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

type Status = 'admin' | 'member' | 'normal';
type User = {
    id: string;
    username: string;
    displayName: string;
    token: string;
    status: Status[];
};

const user: User = {
    id: '',
    username: '',
    displayName: '',
    token: '',
    status: ['admin'],
};
type AllowedRole = 'admin' | 'normal' | 'member';

const PrivateRoute = ({ allowedRoles }: { allowedRoles: AllowedRole[] }) => {
    const location = useLocation();

    return user.status?.find((role) => allowedRoles?.includes(role)) ? (
        <Outlet />
    ) : user.status.includes('member') ? (
        <Navigate to="/unauthorized" state={{ from: location }} replace />
    ) : (
        <Navigate to="/auth" state={{ from: location }} replace />
    );
};
export default PrivateRoute;
