/** @jsxImportSource @emotion/react */
import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { css, useTheme, keyframes } from '@emotion/react';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';

import DefaultViewModel from 'viewModel/default.viewModel';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { theme } from 'configs/ui.config';
import headerStyle from './header.style';
import useMouseEvent from 'hooks/useMouseEvent';
import useAutoResize from 'hooks/useAutoResize';

import Flex from 'components/atoms/Group/flex';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import TextLogo from 'components/atoms/Logo/text-logo';
import Box from 'components/atoms/Box/default-box';
import Div from 'components/atoms/Div/default-div';
import Toggle from 'components/atoms/Switch/default-toggle';

type UserInfo = {
    email: string;
    displayName: string;
};

const userInfo = {
    email: 'test@test.com',
    displayName: '홍길동',
};

const Header = () => {
    const theme = useTheme();
    const headerTheme = headerStyle.header(theme);
    const [isLoggedIn, setIsLoggedIn] = useState(userInfo);

    const defaultHeaderStyles = css`
        z-index: 999;
        top: 0;
        position: fixed;
        left: 0;
        padding: 0px calc((100% - 1200px) / 2);
        ${headerTheme}
    `;
    const divStyle = css`
        padding: 0;
        padding-top: 1rem;
        padding-bottom: 1rem;
    `;

    return (
        <>
            <Box as="header" width={100} css={defaultHeaderStyles} radius={0}>
                <Flex as="nav" justifyContent="space-between" alignItems="center">
                    <Div id="left_menu" css={divStyle}>
                        <LeftMenu />
                    </Div>
                    <Div id="right_menu" css={divStyle}>
                        <RightMenu {...isLoggedIn} />
                    </Div>
                </Flex>
            </Box>
            <Div id={'temp'} height="80px" />
        </>
    );
};
export default Header;

const LeftMenu = () => {
    return (
        <>
            <TextLogo variant="default" fontSize="xxl">
                LEAFY
            </TextLogo>
            <RectangleButton to="/notice" size="md" fontSize="sm">
                서비스소개
            </RectangleButton>
        </>
    );
};

const RightMenu = ({ ...userInfo }: UserInfo) => {
    const defaultViewModel: DefaultViewModel = useViewModel(ViewModelName.DEFAULT);

    return (
        <>
            <Search />
            <Toggle
                variant="primary"
                on={'☀️'}
                off={'🌙'}
                onToggle={defaultViewModel.handleThemeMode}
                darkMode
            />
            {!userInfo && (
                <RectangleButton variant="default" fontSize="sm" leftIcon={<AiOutlineUser />}>
                    {userInfo.displayName}
                </RectangleButton>
            )}
            {userInfo && (
                <Flex justifyContent="right">
                    <RectangleButton to="/auth" size="md" fontSize="sm">
                        로그인 / 회원가입
                    </RectangleButton>
                </Flex>
            )}
        </>
    );
};

const Search = () => {
    const navigate = useNavigate();
    const { value: keyword, inputRef, handleChange } = useAutoResize({ width: 200, maximumWidth: 500 });
    const { isShow, handleMouseEnter, handleMouseLeave, handleShow } = useMouseEvent();

    const handleSearch = () => {
        if (!isShow) return;
        navigate(`/search?keyword=${keyword}`);
    };

    const defaultInputStyle = css`
        display: ${isShow ? 'block' : 'none'};
        width: calc(100%-30px);
        height: 40px;
        border: 1px solid ${theme.colors.green};
        border-radius: 50px;
        opacity: 0;
        transform: translateX(-50%);
        transition: opacity 0.3s, transform 0.3s;
        animation: ${headerStyle.slideIn} 0.6s ease-out forwards;
        flex-grow: 1;
        padding-left: 1rem;
        padding-right: 2rem;
    `;

    const btnStyle = css`
        padding-left: 3rem;
    `;
    return (
        <>
            <Flex alignItems="center" onClick={handleShow} onMouseLeave={handleMouseLeave}>
                <input
                    value={keyword}
                    onChange={handleChange}
                    onMouseEnter={handleMouseEnter}
                    placeholder={'검색어를 입력해주세요.'}
                    onClick={handleShow}
                    onKeyPress={handleSearch}
                    css={defaultInputStyle}
                    ref={inputRef}
                />
                <RectangleButton variant="default" type="submit" onClick={handleSearch} css={btnStyle}>
                    <AiOutlineSearch />
                </RectangleButton>
            </Flex>
        </>
    );
};
