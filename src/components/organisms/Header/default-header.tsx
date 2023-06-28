/** @jsxImportSource @emotion/react */
import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';

import Module from './index.module.css';

import Flex from '@components/atoms/Group/flex';
import Button from '@components/atoms/Button/rectangle-button';
import Toggle from '@components/molecules/Toggle/default-toggle';
import useViewModel, { ViewModelName } from '@hooks/useViewModel';
import DefaultViewModel from '@viewModel/default.viewModel';
import TextLogo from '@components/atoms/Logo/text-logo';
import RectangleButton from '@components/atoms/Button/rectangle-button';
import Box from '@components/atoms/Box/default-box';
import Div from '@components/atoms/Div/default-div';
import { css, useTheme } from '@emotion/react';
import headerStyle from './header.style';

const userInfo = {
    email: 'test@test.com',
    displayName: '홍길동',
};

const Header = () => {
    const theme = useTheme();
    const headerTheme = headerStyle.header(theme);
    const defaultViewModel: DefaultViewModel = useViewModel(ViewModelName.DEFAULT);

    const [isLoggedIn, setIsLoggedIn] = useState(userInfo);

    // scroll시 헤더에 마우스가 없으면 헤더가 올라가는 이벤트
    const [isTop, setHeaderShow] = useState<boolean>(true);
    const handleHeaderScroll = () => {
        const topScroll: number = 300;
        let currentScroll: number = window.scrollY;
        currentScroll > topScroll ? setHeaderShow(false) : setHeaderShow(true);
    };

    const defaultHeaderStyles = css`
        z-index: 999;
        top: 0;
        position: fixed;
        left: 0;
        padding: 8px calc((100% - 1280px) / 2);
        ${headerTheme}
    `;

    return (
        <>
            <Box as="header" width={100} css={defaultHeaderStyles}>
                <Flex as="nav" justifyContent="space-between" alignItems="center">
                    <Div id="left_menu">
                        <Logo />
                        <GlobalMenuBar />
                    </Div>
                    <Div id="right_menu">
                        <Search />
                        <Toggle on={'☀️'} off={'🌙'} onToggle={defaultViewModel.handleThemeMode} />
                        {!isLoggedIn && (
                            <RectangleButton leftIcon={<AiOutlineUser />}>
                                {isLoggedIn.displayName}
                            </RectangleButton>
                        )}
                        {isLoggedIn && <Profile />}
                    </Div>
                </Flex>
            </Box>
            <Div height="120px" id={'temp'} />
        </>
    );
};
export default Header;

const Logo = () => {
    return (
        <Flex>
            {/* <img src="" alt="logo" /> */}
            <TextLogo variant="default">LEAFY</TextLogo>
        </Flex>
    );
};
const GlobalMenuBar = () => {
    return (
        <RectangleButton to="/notice" size="md">
            서비스 소개
        </RectangleButton>
    );
};

const Search = () => {
    const [show, setShow] = useState<string>('');
    const [query, setQuery] = useState<string>('');
    const [focus, setFocus] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setQuery(value);
        query !== '' ? setShow('Show') : setShow('');
    };
    const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate(`/search?keyword=${query}`);
        setQuery('');
    };
    return (
        <form
            onMouseOver={() => setShow('Show')}
            onMouseLeave={() => (query !== '' || focus ? setShow('Show') : setShow(''))}
            onSubmit={handleSubmit}
        >
            <Flex alignItems="center">
                <input
                    value={query}
                    onFocus={() => {
                        setShow('Show');
                        setFocus(true);
                    }}
                    onBlur={() => {
                        query !== '' ? setShow('Show') : setShow('');
                        setFocus(false);
                    }}
                    onChange={handleSearch}
                    className={`${show ? Module.searchInputShow : Module.searchInput}`}
                    placeholder={'검색어를 입력해주세요.'}
                    type="text"
                />

                <RectangleButton className={Module.searchButton} variant="default" type="submit">
                    <AiOutlineSearch />
                </RectangleButton>
            </Flex>
        </form>
    );
};

const Profile = () => {
    return (
        <Flex justifyContent="right">
            <RectangleButton to="/auth" size="md">
                로그인/회원가입
            </RectangleButton>
        </Flex>
    );
};
