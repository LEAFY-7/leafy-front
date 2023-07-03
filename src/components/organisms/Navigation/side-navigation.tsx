import React from 'react';
import { routesGen } from 'routes/router';
import Box from 'components/atoms/Box/default-box';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import menuConfig from 'configs/menu.config';
import Flex from 'components/atoms/Group/flex';

const myId = 'myId-asdsad';

const SideNavigation = () => {
    const onLogOut = () => {
        console.log('로그아웃~');
    };
    return (
        <Box as="nav" radius={0} width={100} height={100} overflow="hidden" display="flex" direction="column">
            {menuConfig.sideMenuList.map(({ id, name, state, page }, index) =>
                page ? (
                    <Flex
                        key={`${id}-$${index}`}
                        justifyContent="center"
                        alignContent="center"
                        style={{ width: '100%' }}
                    >
                        <RectangleButton key={`${id}-$${index + 1}`} onClick={onLogOut}>
                            {name}
                        </RectangleButton>
                    </Flex>
                ) : state ? (
                    <RectangleButton key={`${id}-$${index}`} to={routesGen.userFeed(myId)}>
                        {name}
                    </RectangleButton>
                ) : (
                    <RectangleButton key={`${id}-$${index}`} to={routesGen[id as ButtonList['id']] as string}>
                        {name}
                    </RectangleButton>
                ),
            )}
        </Box>
    );
};

export default SideNavigation;

type ButtonList = {
    id: 'userFeed' | 'follow' | 'chat' | 'post' | 'myPage' | 'setting' | 'auth';
};
