import React from 'react';
import DiTemplate from '@components/templates/di-template';
import SideNavigation from '@components/organisms/Navigation/side-navigation';

const FeedPost = () => {
    return <DiTemplate variant="1/3" leftSection={<div>작성페이지</div>} rightSection={<SideNavigation />} />;
};

export default FeedPost;
