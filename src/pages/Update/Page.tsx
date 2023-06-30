import SideNavigation from '@components/organisms/Navigation/side-navigation';
import DiTemplate from '@components/templates/di-template';
import React from 'react';

const FeedUpdate = () => {
    return (
        <DiTemplate variant="1/3" leftSection={<div>설정 페이지</div>} rightSection={<SideNavigation />} />
    );
};

export default FeedUpdate;
