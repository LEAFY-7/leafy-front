import React from 'react';

import menuConfig from '@configs/menu.config';
import SideNavigation from '@components/organisms/Navigation/side-navigation';
import DiTemplate from '@components/templates/di-template';

const MyPage = () => {
    return <DiTemplate templateWidth="1400px" leftSection={'ddd'} rightSection={<SideNavigation />} />;
};

export default MyPage;
