import React from 'react';

import SideNavigation from '@components/organisms/Navigation/side-navigation';
import DiTemplate from '@components/templates/di-template';

const Setting = () => {
    return (
        <DiTemplate
            templateWidth={'1400px'}
            variant="1/3"
            leftSection={<div>설정 페이지</div>}
            rightSection={<SideNavigation />}
        />
    );
};

export default Setting;
