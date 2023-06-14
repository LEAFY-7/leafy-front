import React, {useState} from "react";
import * as Styled from "./index.styles";
import {ProfileProps, Props} from "./index.types";
import Module from "./index.module.css";
import { AiOutlineSearch } from "react-icons/ai";

import Flex from "@components/ui/Flex";
import Box from "@components/ui/Box";
import TextFiled from "@components/ui/TextField";
import Button from "@components/ui/Button";
import { Navigate, useNavigate } from "react-router-dom";

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
  const [show, setShow] = useState<string>("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  let focus:boolean = false;

  function handleSearch(event:any){
    setShow("Show");
    setQuery(event.target.value);
  }
  function handleSubmit(event:any){
    event.preventDefault();
    navigate(`/search?keyword=${query}`);
    setQuery("");
  }
  return (
    <form>
    <Flex 
    alignItems="center" 
    className={Module.search}
    onMouseOver={()=> setShow("Show")}
    >
      <input
      value={query}
      onFocus={() => focus=true}
      onChange={handleSearch}
      onMouseLeave={()=> {if(!focus)setShow("");else{focus = false}}}
      className={`${Module["searchInput"]}${show}`} 
      placeholder={placeholder} 
      type="text"
      />
      <Button 
      className={Module.searchButton} 
      variant="default" 
      onSubmit={handleSubmit}
      >
        <AiOutlineSearch/>
      </Button>
    </Flex>
    </form>
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
      <nav className={Module.gnb}>서비스 소개</nav>
  );
};

