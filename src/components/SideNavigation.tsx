import React from "react";

import { routesGen } from "@routes/router";
import Box from "@components/atoms/Box";
import Button from "../Button";

const SideNavigation = () => {
  return (
    <Box
      radius={0}
      height={100}
      overflow="hidden"
      display="flex"
      direction="column"
      paddingTop={40}
      marginLeft={10}
    >
      {buttonList.map((button, index) =>
        button.page ? (
          <Button key={`${button.id}-$${index}`} variant="blue" width={100}>
            {button.name}
          </Button>
        ) : button.state ? (
          <Button
            key={`${button.id}-$${index}`}
            to={routesGen.userFeed("a")}
            variant="blue"
            width={100}
          >
            {button.name}
          </Button>
        ) : (
          <Button
            key={`${button.id}-$${index}`}
            to={routesGen[button.id as ButtonList["id"]] as string}
            variant="blue"
            width={100}
          >
            {button.name}
          </Button>
        )
      )}
    </Box>
  );
};

export default SideNavigation;

type ButtonList = {
  id: "userFeed" | "follow" | "chat" | "post" | "myPage" | "setting" | "auth";
};

const buttonList = [
  {
    id: "userFeed",
    name: "내 피드 바로가기",
    state: "param",
  },
  {
    id: "follow",
    name: "팔로우 피드",
  },
  {
    id: "chat",
    name: "채팅하러 가기",
  },
  {
    id: "post",
    name: "게시글 올리기",
  },
  {
    id: "myPage",
    name: "회원 정보 수정",
  },
  {
    id: "setting",
    name: "설정",
  },
  {
    id: "auth",
    name: "로그아웃",
    page: "none",
  },
];
