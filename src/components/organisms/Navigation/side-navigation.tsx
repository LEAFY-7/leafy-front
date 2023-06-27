import React from 'react';

import { routesGen } from '@routes/router';
import Box from '@components/atoms/Box/default-box';
import RectangleButton from '@components/atoms/Button/rectangle-button';
import menuConfig from '@configs/menu.config';

const SideNavigation = () => {
    return (
        <Box
            as="nav"
            radius={0}
            width={100}
            height={100}
            overflow="hidden"
            display="flex"
            direction="column"
            // paddingTop={40}
            // marginLeft={10}
        >
            {menuConfig.sideMenuList.map(({ id, name, state, page }, index) =>
                page ? (
                    <RectangleButton key={`${id}-$${index}`}>{name}</RectangleButton>
                ) : state ? (
                    <RectangleButton key={`${id}-$${index}`} to={routesGen.userFeed('a')}>
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
