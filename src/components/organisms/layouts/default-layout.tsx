import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import DefaultHeader from '../Header/default-header';
import DefaultFooter from 'components/organisms/Footer/default-footer';

const DefaultLayout = () => {
    const location = useLocation();
    const notFooter = React.useMemo(() => location.pathname.split('/')[1], [location]);
    return (
        <>
            <DefaultHeader />
            <Outlet />
            {<DefaultFooter />}
        </>
    );
};

export default DefaultLayout;
