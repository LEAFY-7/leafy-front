const allowSideNavigationList = ["follow", "post", "chat", "user", "mypage"];

const sideMenuList = [
  {
    id: "mypage",
    name: "나의 정보",
  },
  {
    id: "edit",
    name: "회원 정보 수정",
  },
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
    id: "setting",
    name: "설정",
  },
  {
    id: "auth",
    name: "로그아웃",
    page: "none",
  },
];

export default { allowSideNavigationList, sideMenuList };
