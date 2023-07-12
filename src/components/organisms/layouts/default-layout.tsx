import { Outlet } from 'react-router-dom';
import Header from 'components/organisms/Header/default-header';
import Footer from 'components/organisms/Footer/default-footer';
import Flex from 'components/atoms/Group/flex';

const DefaultLayout = () => {
    return (
        <>
            <Flex as="div" direction="column">
                {/* Header */}
                <Header />
                {/* Header */}
                {/* Main */}
                <Outlet />
                {/* Main */}
                {/* Footer */}
                <Footer />
                {/* Footer */}
            </Flex>
        </>
    );
};

export default DefaultLayout;
