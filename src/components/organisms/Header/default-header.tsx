import React from 'react';
import styled from '@emotion/styled';
import { AiOutlineBell, AiOutlineUser } from 'react-icons/ai';

import useToggle from 'hooks/useToggleProvider';
import Flex from 'components/atoms/Group/flex';
import Flyout from 'components/molecules/Flyout/headless-flyout';
import Div from 'components/atoms/Div/default-div';
import { theme } from 'configs/ui.config';
import UserViewModel from 'viewModel/user/user.viewModel';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import LinkWrapper from 'components/atoms/Wrapper/link-wrapper';
import pageUrlConfig from 'configs/pageUrl.config';
import DefaultViewModel from 'viewModel/default.viewModel';

const Header = () => {
    const defaultViewModel: DefaultViewModel = useViewModel(ViewModelName.DEFAULT);

    const publicURL = process.env.PUBLIC_URL;
    const { values } = useToggle({});

    return (
        <HeaderContainer>
            <HeaderWrap>
                <div>
                    <LinkWrapper to={pageUrlConfig.main}>
                        <img src={`${publicURL}/image/logo/main-logo.png`} />
                        <h1>Leafyer</h1>
                    </LinkWrapper>
                </div>
                <Flex
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    style={{ position: 'relative' }}
                >
                    {!defaultViewModel.auth ? (
                        <>
                            <RectangleButton to="/auth/signin">로그인</RectangleButton>
                            <RectangleButton to="/auth/signup">회원가입</RectangleButton>
                        </>
                    ) : (
                        <>
                            <Flyout isOpen={values.isOpen} toggle={values.toggle}>
                                <Toggle>
                                    <Div>
                                        <RectangleButton>
                                            {/* 알람 아이콘 */}
                                            <AiOutlineBell />
                                        </RectangleButton>
                                    </Div>
                                </Toggle>
                                <AlarmMenuWrapper>
                                    <Flyout.OverLay />
                                    <MenuList size="lg" variant="default">
                                        <Item>알람 아이템1</Item>
                                        <Item>알람 아이템2</Item>
                                        <Item>알람 아이템3</Item>
                                        <Item>알람 아이템4</Item>
                                    </MenuList>
                                </AlarmMenuWrapper>
                            </Flyout>

                            <Flyout isOpen={values.isOpen} toggle={values.toggle}>
                                <Toggle>
                                    <Div width={100} height={100}>
                                        <RectangleButton>
                                            {/* 회원정보 아이콘 */}
                                            <AiOutlineUser />
                                        </RectangleButton>
                                    </Div>
                                </Toggle>
                                <MyMenuWrapper>
                                    <Flyout.OverLay />
                                    <MenuList size="md" variant="default">
                                        <Item to={pageUrlConfig.myPage}>마이페이지</Item>
                                        <Item>내 피드 바로가기</Item>
                                        <Item>팔로우 피드</Item>
                                        <Item to={pageUrlConfig.chat}>채팅하러 가기</Item>
                                        <Item>게시글 올리기</Item>
                                        <Item>임시 글 보기</Item>
                                        <Item onClick={defaultViewModel.handleLogOut}>로그아웃</Item>
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
export default Header;

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
        width: 48px;
        height: 56px;
    }

    & h1 {
        color: #00927a;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 56px;
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
