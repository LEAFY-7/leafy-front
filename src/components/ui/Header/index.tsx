import React, {useState} from "react";
import * as Styled from "./index.styles";
import {ProfileProps, Props} from "./index.types";
import Module from "./index.module.css";
import { AiOutlineSearch } from "react-icons/ai";

import Flex from "@components/ui/Flex";
import Box from "@components/ui/Box";
import TextFiled from "@components/ui/TextField";
import Button from "@components/ui/Button";

const Header = ({userName = ""}:{userName:string}) =>{
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <>
      <header className={Module.header}>
        <Flex className={Module.headerWrapper} justifyContent="space-between" alignItems="center">
          <Logo/>
          <GlobalMenuBar/>
          <Search />
          <Profile isLoggedIn={isLoggedIn} userName={userName}/>
        </Flex>
      </header>
    </>
  );
}
export default Header;

const Logo = () => {
  return (
      <Flex className={Module.logo} justifyContent="center" alignItems="center">
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
  return (
    <Flex alignItems="center" className={Module.search}>
      <input className={Module.searchInput} placeholder={placeholder} type="text"/>
      <Button className={Module.searchButton} variant="default"><AiOutlineSearch/></Button>
    </Flex>
  );
};

const Profile = ({ 
  isLoggedIn = false, userName = "" 
}: ProfileProps) =>{
  return(
    <Flex className={Module.profile} justifyContent="right" alignItems="center">
      {isLoggedIn ? (
        <ul>
          <li>Icon</li>
          <li>{userName}</li>
        </ul>
      ) : (
        <div>로그인/회원가입</div>
      )}
    </Flex>
  );
};
const GlobalMenuBar = () =>{
  return (
      <nav className={Module.gnb}><a href="/notice">서비스 소개</a></nav>
  );
};

