import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "@pages/Home/Page";
import FeedDetail from "@pages/FeedDetail/Page";
import Auth from "@pages/Auth/Page";
import Chat from "@pages/Chat/Page";
import User from "@pages/User/Page";
import NotFound from "@pages/NotFound/Page";
import ProtectedPage from "@components/ProtectedPage";
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

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          {/* ------ 일반 라우터 ------ */}

          {/* 메인 피드 페이지 */}
          <Route index path="/" element={<Home />} />
          {/* 메인 피드 페이지 */}

          {/* 피드 상세 페이지 */}
          <Route path="/:feedId" element={<FeedDetail />} />
          {/* 피드 상세 페이지 */}

          {/* 로그인/회원가입 페이지 */}
          <Route path="/auth" element={<Auth />} />
          {/* 로그인/회원가입 페이지 */}

          {/* 유저 피드 페이지 */}
          <Route path="/user/:userId" element={<User />} />
          {/* 유저 피드 페이지 */}

          {/* 검색 결과 페이지 */}
          <Route path="/search" element={<Search />} />
          {/* 검색 결과 페이지 */}

          {/* 공지사항 페이지 */}
          <Route path="/notice" element={<Notice />} />
          {/* 공지사항 페이지 */}

          {/* 공지사항 상세 페이지 */}
          <Route path="/notice/:noticeId" element={<NoticeDetail />} />
          {/* 공지사항 상세 페이지 */}

          {/* ------ 일반 라우터 ------ */}

          {/* 404 페이지 */}
          <Route path="/*" element={<NotFound />} />
          {/* 404 페이지 */}

          {/* ------ 로그인 라우터 ------ */}

          {/* // 피드 작성 페이지 */}
          <PrivateRoute path="/post" component={FeedPost} />
          {/* // 피드 작성 페이지 */}

          {/*  피드 수정 페이지 */}
          <PrivateRoute path="/:feedId/update" component={FeedUpdate} />
          {/*  피드 수정 페이지 */}

          {/* 팔로우 페이지 */}
          <PrivateRoute path="/follow" component={Follow} />
          {/* 팔로우 페이지 */}

          {/* 채팅 페이지 */}
          <PrivateRoute path="/chat" component={Chat} />
          {/* 채팅 페이지 */}

          {/* 회원 정보 페이지 */}
          <PrivateRoute path="/mypage" component={MyPage} />
          {/* 회원 정보 페이지 */}

          {/* 설정 페이지 */}
          <PrivateRoute path="/mypage/setting" component={Setting} />
          {/* 설정 페이지 */}

          {/* ------ 로그인 라우터 ------ */}
        </Route>
      </Routes>
    </>
  );
};
export default Router;
