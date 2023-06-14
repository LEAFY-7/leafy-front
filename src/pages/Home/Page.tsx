import React from "react";
import Header from "@components/ui/Header"

/**
 * Page의 관심사 분리 예시 입니다.
 *
 * 최상위 루트로 폴더를 잡고 페이지가 되는 컴포넌트는 Page로 명명하고
 * 같은 관심사의 컴포넌트는 해당 위치로 경로를 잡아주세요.
 *
 */

const Home = () => {
  return (<div>
    <Header userName="useName"/>
    Home 페이지
    </div>);
};

export default Home;
