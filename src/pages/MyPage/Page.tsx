import React from 'react';
import SideNavigation from 'components/organisms/Navigation/side-navigation';
import DiTemplate from 'components/templates/di-template';

const MyPage = () => {
    return (
        <DiTemplate
            variant="1/3"
            leftSection={<div>회원 정보 페이지</div>}
            rightSection={<SideNavigation />}
        />
    );
};

export default MyPage;
