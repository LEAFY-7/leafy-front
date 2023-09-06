import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
// import { AiOutlineBell as AlarmIcon, AiOutlineUser as UserIcon } from 'react-icons/ai';
// import { AiOutlineUser as UserIcon } from 'react-icons/ai';

import tokenModule from 'modules/token.module';
import { theme } from 'configs/ui.config';
import pageUrlConfig from 'configs/pageUrl.config';
import useToggle from 'hooks/useToggleProvider';

import RectangleButton from 'components/atoms/Button/rectangle-button';
import Flex from 'components/atoms/Group/flex';
import LinkWrapper from 'components/atoms/Wrapper/link-wrapper';
import Flyout from 'components/molecules/Flyout/default-flyout';

import TextAvatar from 'components/atoms/Avatar/text-avatar';
import AlarmIcon from 'components/atoms/Icon/alarm-icon';
import UserIcon from 'components/atoms/Icon/user-icon';
import { AuthDto } from 'dto/auth/auth.dto';
const publicURL = process.env.PUBLIC_URL;

const DefaultHeader = () => {
    const { values } = useToggle({});
    const navigate = useNavigate();
    const location = useLocation();

    const { userAuth, userId } = React.useMemo(() => tokenModule.get().leafyer, [location]);

    const handleLogOut = async () => {
        await tokenModule.remove();
        navigate(`${pageUrlConfig.auth}${pageUrlConfig.signIn}`);
    };

    return (
        <HeaderContainer>
            <HeaderWrap>
                <div>
                    <LinkWrapper to={pageUrlConfig.main}>
                        <img src={`${publicURL}/image/logo/header-logo.svg`} />
                    </LinkWrapper>
                </div>
                <Flex.Default justifyContent="center" alignItems="center" style={{ position: 'relative' }}>
                    {userAuth === 'NORMAL' ? (
                        <>
                            <RectangleButton
                                to={`${pageUrlConfig.auth}${pageUrlConfig.signIn}`}
                                size="sm"
                                backgroundColor="transparent"
                            >
                                로그인
                            </RectangleButton>
                            <RectangleButton
                                to={`${pageUrlConfig.auth}${pageUrlConfig.signUp}`}
                                size="sm"
                                backgroundColor="transparent"
                            >
                                회원가입
                            </RectangleButton>
                        </>
                    ) : (
                        <>
                            <Flyout isOpen={values.isOpen} toggle={values.toggle}>
                                <Toggle id="alarm__wrapper">
                                    {/* 알람 아이콘 */}
                                    <IconWrapper>
                                        <AlarmIcon count={100} style={{ width: '25px', height: '25px' }} />
                                    </IconWrapper>
                                    {/* 알람 아이콘 */}
                                </Toggle>
                                <AlarmMenuWrapper>
                                    <Flyout.OverLay />
                                    <MenuList size="lg" variant="default">
                                        <AlarmItem>
                                            알람 아이템1알람 아이템1알람 아이템1알람 아이템1알람 아이템1알람
                                            아이템1알람 아이템1알람 아이템1알람 아이템1알람 아이템1
                                        </AlarmItem>
                                        <AlarmItem>알람 아이템2</AlarmItem>
                                        <AlarmItem>알람 아이템3</AlarmItem>
                                        <AlarmItem>알람 아이템4</AlarmItem>
                                        <AlarmItem>알람 아이템5</AlarmItem>
                                    </MenuList>
                                </AlarmMenuWrapper>
                            </Flyout>

                            <Flyout isOpen={values.isOpen} toggle={values.toggle}>
                                <Toggle id="user__wrapper">
                                    {/* 회원정보 아이콘 */}
                                    <IconWrapper>
                                        <UserIcon style={{ width: '25px', height: '25px' }} />
                                    </IconWrapper>
                                    {/* 회원정보 아이콘 */}
                                </Toggle>
                                <MyMenuWrapper>
                                    <Flyout.OverLay />
                                    <MenuList size="md" variant="default">
                                        <UserItem to={pageUrlConfig.myPage}>마이페이지</UserItem>
                                        <UserItem to={`${pageUrlConfig.user}/${userId}`}>
                                            내 피드 바로가기
                                        </UserItem>
                                        <UserItem to={pageUrlConfig.feed}>피드 보러가기</UserItem>
                                        <UserItem to={pageUrlConfig.chat}>채팅하러 가기</UserItem>
                                        <UserItem to={pageUrlConfig.feedUpload}>게시글 올리기</UserItem>
                                        <UserItem to={pageUrlConfig.temp}>임시 글 보기</UserItem>
                                        <UserItem onClick={handleLogOut}>로그아웃</UserItem>
                                    </MenuList>
                                </MyMenuWrapper>
                            </Flyout>
                        </>
                    )}
                </Flex.Default>
            </HeaderWrap>
        </HeaderContainer>
    );
};
export default DefaultHeader;

const HeaderContainer = styled.header`
    position: fixed;
    left: 0px;
    width: 100vw;
    height: 56px;
    background: linear-gradient(180deg, #fafafa 0%, rgba(250, 250, 250, 0) 100%);
    display: flex;
    justify-content: center;
    z-index: 3;
`;

const HeaderWrap = styled.div`
    width: 100%;
    max-width: 1080px;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & div {
        display: flex;
        align-items: center;
    }
    & img {
        width: 100%;
        height: 48px;
    }
`;

const IconWrapper = styled.div`
    width: fit-content;
    margin-right: 16px;
    padding-left: 8px;
    padding-right: 8px;
    &:last-of-type {
        margin-right: 0;
    }
`;

// Flyout - 하단 메뉴
const Toggle = styled(Flyout.Toggle)`
    position: relative;
    cursor: pointer;
`;

const AlarmMenuWrapper = styled(Flyout.Wrapper)`
    position: absolute;
    top: 48px;
    right: 10%;
`;

const MyMenuWrapper = styled(Flyout.Wrapper)`
    position: absolute;
    top: 48px;
    right: 0;
`;

const MenuList = styled(Flyout.List)`
    overflow-y: scroll;
    position: relative;
    border-radius: 4px;
    box-shadow: 5px 5px 10px rgba(14, 17, 27, 0.15);
    background-color: white;
`;

const AlarmItem = styled(Flyout.Item)`
    cursor: pointer;
    list-style: none;
    margin-top: 4px;
    margin-bottom: 4px;
    z-index: 9;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    transition: background-color 0.35s ease-in-out, color 0.25s ease-in-out;
    &:hover {
        border-color: ${theme.palette.secondary.borderColor};
        background-color: ${theme.palette.secondary.backgroundColor};
        color: ${theme.palette.text.white};
    }
`;

const UserItem = styled(Flyout.Item)`
    cursor: pointer;
    list-style: none;
    margin-top: 4px;
    margin-bottom: 4px;
    z-index: 9;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    transition: background-color 0.35s ease-in-out, color 0.25s ease-in-out;
    &:hover {
        border-color: ${theme.palette.secondary.borderColor};
        background-color: ${theme.palette.secondary.backgroundColor};
        color: ${theme.palette.text.white};
    }
`;
