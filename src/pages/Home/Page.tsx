import React from "react";
import { css } from "@emotion/react";

import Button from "@components/atoms/Button/rectangle-button";
import Flex from "@components/atoms/Group/flex";
/**
 * Page의 관심사 분리 예시 입니다.
 *
 * 최상위 루트로 폴더를 잡고 페이지가 되는 컴포넌트는 Page로 명명하고
 * 같은 관심사의 컴포넌트는 해당 위치로 경로를 잡아주세요.
 *
 */

const Home = () => {
  return (
    <Flex direction="column">
      <Button size="sm" variant="green">
        재사용 버튼
      </Button>
      <Button size="sm" variant="green_border">
        재사용 버튼
      </Button>
      <Button size="sm" variant="green_border" disabled>
        재사용 버튼
      </Button>
    </Flex>
  );
};

export default Home;
