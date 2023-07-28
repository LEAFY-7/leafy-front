import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { AiOutlineBell, AiOutlineUser } from 'react-icons/ai';

import RectangleButton from 'components/atoms/Button/rectangle-button';
import Div from 'components/atoms/Div/default-div';
import Flex from 'components/atoms/Group/flex';
import LinkWrapper from 'components/atoms/Wrapper/link-wrapper';
import Flyout from 'components/molecules/Flyout/headless-flyout';
import pageUrlConfig from 'configs/pageUrl.config';
import { theme } from 'configs/ui.config';
import useToggle from 'hooks/useToggleProvider';

import tokenModule from 'modules/token.module';
import TextAvatar from 'components/atoms/Avatar/text-avatar';

const publicURL = process.env.PUBLIC_URL;

const DefaultHeader = () => {
    const { values } = useToggle({});
    const navigate = useNavigate();
    const location = useLocation();

    const auth = React.useMemo(() => tokenModule.get(), [location]);

    const handleLogOut = () => {
        tokenModule.remove();
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
                <Flex
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    style={{ position: 'relative' }}
                >
                    {!auth.userAuth ? (
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
                                <Toggle>
                                    <Div backgroundColor="transparent" marginRight={8}>
                                        {/* 알람 아이콘 */}
                                        <AiOutlineBell size={20} color="grey" />
                                        {/* 알람 아이콘 */}
                                    </Div>
                                </Toggle>
                                <AlarmMenuWrapper>
                                    <Flyout.OverLay />
                                    <MenuList size="lg" variant="default">
                                        <Item>알람 아이템1</Item>
                                        <Item>알람 아이템2</Item>
                                        <Item>알람 아이템3</Item>
                                        <Item>알람 아이템4</Item>
                                        <Item>알람 아이템5</Item>
                                        <Item>알람 아이템6</Item>
                                        <Item>알람 아이템7</Item>
                                        <Item>알람 아이템8</Item>
                                        <Item>알람 아이템9</Item>
                                        <Item>알람 아이템10</Item>
                                        <Item>알람 아이템11</Item>
                                        <Item>알람 아이템12</Item>
                                        <Item>알람 아이템13</Item>
                                        <Item>알람 아이템14</Item>
                                        <Item>알람 아이템15</Item>
                                    </MenuList>
                                </AlarmMenuWrapper>
                            </Flyout>

                            <Flyout isOpen={values.isOpen} toggle={values.toggle}>
                                <Toggle>
                                    <Div marginLeft={8} backgroundColor="transparent">
                                        {/* 회원정보 아이콘 */}
                                        {/* <TextAvatar text={'하하'} size="md" /> */}
                                        <AiOutlineUser size={20} color="grey" />
                                        {/* 회원정보 아이콘 */}
                                    </Div>
                                </Toggle>
                                <MyMenuWrapper>
                                    <Flyout.OverLay />
                                    <MenuList size="md" variant="default">
                                        <Item to={pageUrlConfig.myPage}>마이페이지</Item>
                                        <Item to={`${pageUrlConfig.user}`}>내 피드 바로가기</Item>
                                        <Item to={pageUrlConfig.feed}>피드 보러가기</Item>
                                        <Item to={pageUrlConfig.chat}>채팅하러 가기</Item>
                                        <Item to={pageUrlConfig.feedUpload}>게시글 올리기</Item>
                                        <Item to={pageUrlConfig.temp}>임시 글 보기</Item>
                                        <Item onClick={handleLogOut}>로그아웃</Item>
                                    </MenuList>
                                </MyMenuWrapper>
                            </Flyout>
                        </>
                    )}
                </Flex>
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
`;

const HeaderWrap = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & div {
        display: flex;
        align-items: center;
    }

    & img {
        width: 196px;
        height: 56px;
    }
`;
const IconBox = styled.div`
    margin: 24px;
    background-color: transparent;
    &:last-child {
        margin-right: 0;
    }
`;

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
    /* width: max-content; */
    /* height: 100%; */
    overflow-y: scroll;
    position: relative;
    border-radius: 4px;
    box-shadow: 5px 5px 10px rgba(14, 17, 27, 0.15);
`;

const Item = styled(Flyout.Item)`
    cursor: pointer;
    list-style: none;
    margin-top: 8px;
    margin-bottom: 8px;
    z-index: 99;
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
