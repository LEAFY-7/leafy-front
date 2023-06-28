import React from 'react';
import SideNavigation from '@components/organisms/Navigation/side-navigation';
import TriTemplate from '@components/templates/tri-template';

const Chat = () => {
    return (
        <TriTemplate
            variant="2/4/1"
            leftSection={<div>채팅목록</div>}
            middleSection={<div>채팅창</div>}
            rightSection={<SideNavigation />}
        />
    );
};

export default Chat;
