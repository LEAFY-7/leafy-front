import React from 'react';
import type { ReactNode } from 'react';
import styled from '@emotion/styled';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import UserViewModel from 'viewModel/user/user.viewModel';
import { UserDto } from 'dto/user/user.dto';
import useToggle from 'hooks/useToggle';
import menuConfig from 'configs/menu.config';
import { theme } from 'configs/ui.config';
import FlyOut from './headless-flyout';

import Div from '../Div/default-div';
import Flex from '../Group/flex';
import RectangleButton from '../Button/rectangle-button';
import TextAvatar from '../Avatar/text-avatar';
import Typography from '../Typograph/default-typography';
import LinkWrapper from '../Wrapper/link-wrapper';
import pageUrlConfig from 'configs/pageUrl.config';

interface Props {
    toggleEl: ReactNode;
    userId?: UserDto['id'];
}
const defaultName = 'tk';
const FlyoutMenu = ({ toggleEl, userId }: React.PropsWithChildren<Props>) => {
    const userViewModel: UserViewModel = useViewModel(ViewModelName.USER);
    const { isOn, setIsOn, handler } = useToggle();
    const divideMenu = React.useMemo(() => userViewModel.user.id === userId, [userViewModel.user.id, userId]);
    return (
        <FlyOut open={isOn} toggle={handler}>
            <Toggle>{toggleEl}</Toggle>
            <Wrapper>
                <FlyOut.List size="xl">
                    <Header>
                        <TextAvatar text={userViewModel.user.name || defaultName} />
                        <Flex direction="column">
                            <Typography variant="BODY2" marginLeft={8}>
                                {userViewModel.user.name || defaultName}
                            </Typography>
                            <Typography variant="BODY2" marginLeft={8}>
                                비공개
                            </Typography>
                        </Flex>
                    </Header>
                    {divideMenu
                        ? menuConfig.authMenuList.map(({ route, display }, index) =>
                              route ? (
                                  <Item key={index}>
                                      <LinkWrapper to={pageUrlConfig[route]}>{display}</LinkWrapper>
                                  </Item>
                              ) : (
                                  <Item key={index}>{display}</Item>
                              ),
                          )
                        : menuConfig.userMenuList.map(({ route, display }, index) =>
                              route ? (
                                  <Item key={index}>
                                      <LinkWrapper to={pageUrlConfig[route]}>{display}</LinkWrapper>
                                  </Item>
                              ) : (
                                  <Item key={index}>{display}</Item>
                              ),
                          )}
                </FlyOut.List>
            </Wrapper>
        </FlyOut>
    );
};
export default FlyoutMenu;

const Wrapper = styled.span`
    position: relative;
`;

const Header = styled(FlyOut.Header)`
    width: 100%;
    height: 100%;
    padding: 8px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const Toggle = styled(FlyOut.Toggle)`
    position: relative;
`;

const Item = styled(FlyOut.Item)`
    list-style: none;
    margin-top: 8px;
    margin-bottom: 8px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: ${theme.palette.default.borderColor};
    background-color: ${theme.palette.default.backgroundColor};
    font-size: ${theme.fontSize.lg};
    transition: background-color 0.35s ease-in-out, color 0.25s ease-in-out;
    &:hover {
        border-color: ${theme.palette.secondary.borderColor};
        background-color: ${theme.palette.secondary.backgroundColor};
        color: ${theme.palette.text.white};
    }
`;
