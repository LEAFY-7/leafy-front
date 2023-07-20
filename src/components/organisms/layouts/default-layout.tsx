import { Outlet } from 'react-router-dom';
import Footer from 'components/organisms/Footer/default-footer';
import Flex from 'components/atoms/Group/flex';

const DefaultLayout = () => {
    return (
        <>
            <Flex as="div" direction="column">
                {/* Header */}
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
