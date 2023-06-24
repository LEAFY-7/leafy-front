import React, { useState } from "react";
import * as Styled from "./index.styles";
import { ProfileProps, Props } from "./index.types";
import Module from "./index.module.css";
import { AiOutlineSearch } from "react-icons/ai";

import { Navigate, useNavigate } from "react-router-dom";
import Flex from "@components/atoms/Group/flex";
import Button from "@components/atoms/Button/rectangle-button";

const Header = ({ userName = "" }: { userName: string }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // scroll시 헤더에 마우스가 없으면 헤더가 올라가는 이벤트
  const [isTop, setHeaderShow] = useState<boolean>(true);

  function handleHeaderScroll() {
    const topScroll: number = 300;
    let currentScroll: number = window.scrollY;
    currentScroll > topScroll ? setHeaderShow(false) : setHeaderShow(true);
  }
  return (
    <header className={`${isTop ? Module.header : Module.headerHide}`}>
      <Flex
        className={Module.headerWrapper}
        justifyContent="space-between"
        alignItems="center"
      >
        <Logo />
        <GlobalMenuBar />
        <Search />
        <Profile isLoggedIn={isLoggedIn} userName={userName} />
      </Flex>
    </header>
  );
};
export default Header;

const Logo = () => {
  const navi = useNavigate();
  function HandleNavi() {
    navi(`/`);
  }
  return (
    <Flex
      onClick={HandleNavi}
      className={Module.logo}
      justifyContent="center"
      alignItems="center"
    >
      <img src="" alt="logo" />
      <h1>LEAFY</h1>
    </Flex>
  );
};

const Search = ({
  placeholder = "write your plant",
}: {
  placeholder?: string;
}) => {
  const [show, setShow] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [focus, setFocus] = useState<boolean>(false);
  const navigate = useNavigate();

  function handleSearch(event: any) {
    setQuery(event.target.value);
    query !== "" ? setShow("Show") : setShow("");
  }
  function handleSubmit(event: any) {
    event.preventDefault();
    navigate(`/search?keyword=${query}`);
    setQuery("");
  }
  return (
    <form
      className={Module.search}
      onMouseOver={() => {
        setShow("Show");
      }}
      onMouseLeave={() => {
        query !== "" || focus ? setShow("Show") : setShow("");
      }}
    >
      <Flex alignItems="center">
        <input
          value={query}
          onFocus={() => {
            setShow("Show");
            setFocus(true);
          }}
          onBlur={() => {
            query !== "" ? setShow("Show") : setShow("");
            setFocus(false);
          }}
          onChange={handleSearch}
          className={`${show ? Module.searchInputShow : Module.searchInput}`}
          placeholder={placeholder}
          type="text"
        />
        <Button
          className={Module.searchButton}
          variant="default"
          onClick={handleSubmit}
        >
          <AiOutlineSearch />
        </Button>
      </Flex>
    </form>
  );
};

const Profile = ({ isLoggedIn = false, userName = "" }: ProfileProps) => {
  const navi = useNavigate();
  function HandleNavi() {
    navi(`/auth`);
  }
  return (
    <Flex className={Module.profile} justifyContent="right" alignItems="center">
      {isLoggedIn ? (
        <ul>
          <li>Icon</li>
          <li>{userName}</li>
        </ul>
      ) : (
        <div onClick={HandleNavi}>로그인/회원가입</div>
      )}
    </Flex>
  );
};
const GlobalMenuBar = () => {
  const navi = useNavigate();
  function HandleNavi() {
    navi(`/notice`);
  }
  return (
    <nav onClick={HandleNavi} className={Module.gnb}>
      서비스 소개
    </nav>
  );
};
