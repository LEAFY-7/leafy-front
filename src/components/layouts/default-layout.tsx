import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@components/organisms/Header';
import Footer from '@components/organisms/Footer/default-footer';

const DefaultLayout = () => {
    return (
        <>
            {/* Header */}
            <Header userName="useName" />
            {/* Header */}
            {/* Main */}
            <Outlet />
            {/* Main */}
            {/* Footer */}
            <Footer />
            {/* Footer */}
        </>
    );
};

export default DefaultLayout;
