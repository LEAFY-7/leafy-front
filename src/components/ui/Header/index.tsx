import React, {useState} from "react";
import * as Styled from "./index.styles";
import {ProfileProps, Props} from "./index.types";
import Module from "./index.module.css";
import { AiOutlineSearch } from "react-icons/ai";

import Flex from "@components/ui/Flex";
import Button from "@components/ui/Button";
import { Navigate, useNavigate} from "react-router-dom";

const Header = ({userName = ""}:{userName:string}) =>{
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  let state;
  return (
      <header className={Module.header}>
        <Flex className={Module.headerWrapper} justifyContent="space-between" alignItems="center">
          <Logo/>
          <GlobalMenuBar/>
          <Search />
          <Profile isLoggedIn={isLoggedIn} userName={userName}/>
        </Flex>
      </header>
    
  );
}
export default Header;

const Logo = () => {
  const navi = useNavigate();
  function HandleNavi(){
    navi(`/`);
  }
  return (
      <Flex onClick={HandleNavi} className={Module.logo} justifyContent="center" alignItems="center">
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
    setQuery(event.target.value);
    query !== "" ? setShow("Show") : setShow("");
  }
  function handleSubmit(event:any){
    event.preventDefault();
    navigate(`/search?keyword=${query}`);
    setQuery("");
  }
  return (
    <Flex 
    alignItems="center" 
    className={Module.search}
    onMouseOver={()=>{ setShow("Show");}}
    onMouseLeave={()=> {query !== "" || focus ? setShow("Show") : setShow("");}}
    >
      <input
      value={query}
      onFocus={() => {setShow("Show"); focus = true}}
      onBlur={()=> {query !== ""  ?  setShow("Show") : setShow(""); focus = false}}
      onChange={handleSearch}
      className={`${Module["searchInput"]}${show}`} 
      placeholder={placeholder} 
      type="text"
      />
      <Button 
      className={Module.searchButton} 
      variant="default" 
      onClick={handleSubmit}
      >
        <AiOutlineSearch/>
      </Button>
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
  const navi = useNavigate();
  function HandleNavi(){
    navi(`/notice`);
  }
  
  return (
      <nav onClick={HandleNavi} className={Module.gnb}>서비스 소개</nav>
  );
};

