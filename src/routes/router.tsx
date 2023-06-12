import { Route, Routes } from "react-router-dom";

import Home from "@pages/Home/Page";
import FeedDetail from "@pages/FeedDetail/Page";
import Auth from "@pages/Auth/Page";
import Chat from "@pages/Chat/Page";
import User from "@pages/User/Page";
import NotFound from "@pages/NotFound/Page";
import FeedPost from "@pages/Post/page";
import FeedUpdate from "@pages/Update/Page";
import Follow from "@pages/Follow/Page";
import MyPage from "@pages/MyPage/Page";
import Notice from "@pages/Notice/Page";
import NoticeDetail from "@pages/NoticeDetail/Page";
import Setting from "@pages/Setting/Page";
import Search from "@pages/Search/Page";
import PrivateRoute from "@components/PrivateRoute";
import MainLayout from "@components/layout/MainLayout";
import Unauthorized from "@components/Unauthorized";
import Qna from "@pages/QnaDetail/Page";
import Admin from "@pages/Admin/Page";

export const routesGen = {
  home: "/",
  feedDetail: (feedId: string) => `/${feedId}`,
  post: "/post",
  update: (feedId: string) => `/${feedId}`,
  follow: "/follow",
  auth: "/auth",
  user: (userId: string) => `/user/${userId}`,
  myPage: "/mypage",
  setting: "/mypage/setting",
  notice: "/notice",
  noticeDetail: (noticeId: string) => `/notice/${noticeId}`,
  search: "/search",
  chat: "/chat",
};

const STATUS = {
  ADMIN: "admin",
  NORMAL: "normal",
  MEMBER: "member",
};

const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* 공용 */}
        {/* 메인 피드 페이지 */}
        <Route index path="/" element={<Home />} />
        {/* 메인 피드 페이지 */}

        {/* 피드 상세 페이지 */}
        <Route path=":feedId" element={<FeedDetail />} />
        {/* 피드 상세 페이지 */}

        {/* 로그인/회원가입 페이지 */}
        <Route path="auth" element={<Auth />} />
        {/* 로그인/회원가입 페이지 */}

        {/* 유저 피드 페이지 */}
        <Route path="user/:userId" element={<User />} />
        {/* 유저 피드 페이지 */}

        {/* 검색 결과 페이지 */}
        <Route path="search" element={<Search />} />
        {/* 검색 결과 페이지 */}

        {/* 공지사항 페이지 */}
        <Route path="notice" element={<Notice />} />
        {/* 공지사항 페이지 */}

        {/* 공지사항 상세 페이지 */}
        <Route path="notice/:noticeId" element={<NoticeDetail />} />
        {/* 공지사항 상세 페이지 */}

        {/* 404 페이지 */}
        <Route path="/*" element={<NotFound />} />
        {/* 404 페이지 */}

        {/* 허가 되지않은 페이지 */}
        <Route path="unauthorized" element={<Unauthorized />} />
        {/* 허가 되지않은 페이지 */}
        {/* 공용 */}

        {/* 관리자, 회원 */}
        <Route element={<PrivateRoute allowedRoles={["admin", "member"]} />}>
          {/* // 피드 작성 페이지 */}
          <Route path="post" element={<FeedPost />} />
          {/* // 피드 작성 페이지 */}

          {/*  피드 수정 페이지 */}
          <Route path=":feedId/update" element={<FeedUpdate />} />
          {/*  피드 수정 페이지 */}

          {/* 팔로우 페이지 */}
          <Route path="follow" element={<Follow />} />
          {/* 팔로우 페이지 */}

          {/* 채팅 페이지 */}
          <Route path="chat" element={<Chat />} />
          {/* 채팅 페이지 */}

          {/* 회원 정보 페이지 */}

          <Route path="mypage" element={<MyPage />} />
          {/* 회원 정보 페이지 */}

          {/* 설정 페이지 */}
          <Route path="mypage/setting" element={<Setting />} />
          {/* 설정 페이지 */}

          {/* Qna 상세 페이지 */}
          <Route path="notice/qna/:qnaId" element={<Qna />} />
          {/* Qna 상세페이지 */}
        </Route>
        {/* 관리자, 회원 */}

        {/* 관리자 */}
        <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>
        {/* 관리자 */}
      </Route>
    </Routes>
  );
};
export default Router;
