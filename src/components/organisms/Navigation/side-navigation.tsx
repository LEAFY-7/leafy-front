import { routesGen } from 'configs/route.config';
import Box from 'components/atoms/Box/default-box';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import Flex from 'components/atoms/Group/flex';
import menuConfig from 'configs/menu.config';

const myId = 'myId-asdsad';

const SideNavigation = () => {
    const onLogOut = () => {
        console.log('로그아웃~');
    };
    return (
        <Box as="nav" radius={0} width={100} height={100} overflow="hidden" display="flex" direction="column">
            {menuConfig.sideMenuList.map(({ path, display, state, page }, index) =>
                page ? (
                    <Flex key={index} justifyContent="center" alignContent="center" style={{ width: '100%' }}>
                        <RectangleButton key={index} onClick={onLogOut}>
                            {display}
                        </RectangleButton>
                    </Flex>
                ) : state ? (
                    <RectangleButton key={index} to={routesGen.userFeed(myId)}>
                        {display}
                    </RectangleButton>
                ) : (
                    <RectangleButton key={index} to={routesGen[path]}>
                        {display}
                    </RectangleButton>
                ),
            )}
        </Box>
    );
};

export default SideNavigation;

// type ButtonList = {
//     path: 'userFeed' | 'follow' | 'chat' | 'post' | 'mypage' | 'setting' | 'auth';
// };
