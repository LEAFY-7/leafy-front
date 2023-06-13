import React from "react";
import * as Styled from "./index.styles";
import {HeaderWrapperProps, LogoProps, GlobalMenuProps, SignProps, Props } from "./index.types";

import Box from "../Box";
import Flex from "../Flex";
import { type } from "os";

//login 상태에 따라 달라지는 Header 만들기
//header 구성
//logoBox
//gnb
//searchIcon
//profile - login
//innerWrapper
//Header
//header 이벤트
//profile -> hover -> side menu
//profile - bell -> hover -> side menu
//searchIcon -> click -> searchBar


const Logo = () => {
  return (
      <Flex>
        <img src="" alt="logo" />
        <h1>LEAFY</h1>
      </Flex>
  );
};

const Search = React.forwardRef(function Search(
  { 
    placeholder = "write your plant" 
  }: React.PropsWithChildren<Props>,
  forwardedRef: React.Ref<HTMLDivElement>
) {
  return <input placeholder={placeholder}></input>;
});
// const [signIn, setSignIn] = React.useState(false);
const Sign = (props:boolean) =>{
    
    let content = props ? `로그인/회원가입` : `{userName}`;

    return(
      <div>
        <p>{content}</p>
      </div>
    );
};
function handleSearchBar(){
  //아이콘 클릭시 검색바가 show 자동 focus
  
  //나타난 상태에서 입력없이 setTime( , 5000) 지나면 자동으로 hide
  // const [query, setQuery] = React.useState("");
  // const queryHandler = () => setQuery(query);
}
const Header = () => {
  
  const menus:GlobalMenuProps[] = [
    {id: 1, menu:`서비스소개`, menuLink:`#`},
  ];
  const GlobalMenuBar = (props:GlobalMenuProps[]) =>{
    const globalMenu = [<li><a>menu</a></li>];
    props.map(e => {
      globalMenu.push(<li key={e.id}><a href={`/${e.menuLink}`}>{e.menu}</a></li>);
    })
    return (
      <ul>
      </ul>
    );
  };
  const HeaderWrapper = React.forwardRef(function HeaderWrapper(
    { 
      width = `100%`,
      height = `100%`,
      justifyContent=`center`,
      alignItems=`center`
    }: React.PropsWithChildren<HeaderWrapperProps>,
    forwardedRef: React.Ref<HTMLDivElement>
  ) {
    return (
      <HeaderWrapper 
        width={width}
        height={height}
        justifyContent={justifyContent}
        alignItems={alignItems}
      >
      </HeaderWrapper>
    );
  });
  
  return (
    <Styled.Header 
    width={"100%"}
    height={"80px"}
    paddingX={0}
    paddingY={0}
    >
      <HeaderWrapper
        width={`100%`}
        height={`100%`}
        justifyContent={`center`}
        alignItems={`center`}
      >
        <Logo></Logo>
        <Flex>
          {GlobalMenuBar(menus)}
        </Flex>
        <Flex>
          <Search></Search>
          <img src="" alt="검색" onClick={handleSearchBar}></img>
        </Flex>
        <Flex>
          {
            // Sign(true)
          }
        </Flex>
      </HeaderWrapper>
    </Styled.Header>
  );
};

export default Header;
