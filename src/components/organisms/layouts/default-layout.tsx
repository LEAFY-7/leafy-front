import { Outlet } from 'react-router-dom';
import DefaultHeader from '../Header/default-header';
import DefaultFooter from 'components/organisms/Footer/default-footer';

const DefaultLayout = () => {
    return (
        <>
            <DefaultHeader />
            <Outlet />
            <DefaultFooter />
        </>
    );
};

export default DefaultLayout;
