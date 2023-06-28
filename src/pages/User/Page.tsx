import React from 'react';
import SideNavigation from '@components/organisms/Navigation/side-navigation';
import DiTemplate from '@components/templates/di-template';

const User = () => {
    return (
        <DiTemplate
            variant="1/3"
            templateWidth={'1280px'}
            leftSection={<div>유저 정보</div>}
            rightSection={<SideNavigation />}
        />
    );
};

export default User;
