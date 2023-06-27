import { Route, Routes } from 'react-router-dom';

import DefaultLayout from '@components/organisms/layouts/default-layout';
import PrivateRoute from '@routes/PrivateRoute';
import Unauthorized from '@routes/Unauthorized';

import Admin from '@pages/Admin/Page';
import Auth from '@pages/Auth/Page';
import Chat from '@pages/Chat/Page';
import FeedDetail from '@pages/FeedDetail/Page';
import Follow from '@pages/Follow/Page';
import Home from '@pages/Home/Page';
import Edit from '@pages/MyPage/EditPage';
import MyPage from '@pages/MyPage/Page';
import NotFound from '@pages/NotFound/Page';
import Notice from '@pages/Notice/Page';
import NoticeDetail from '@pages/NoticeDetail/Page';
import FeedPost from '@pages/Post/page';
import Qna from '@pages/QnaDetail/Page';
import Search from '@pages/Search/Page';
import Setting from '@pages/Setting/Page';
import FeedUpdate from '@pages/Update/Page';
import User from '@pages/User/Page';

export const routesGen = {
    home: '/',
    feedDetail: (feedId: string) => `/${feedId}`,
    post: '/post',
    update: (feedId: string) => `/post/${feedId}`,
    follow: '/follow',
    auth: '/auth',
    user: (userId: string) => `/user/${userId}`,
    myPage: '/mypage',
    edit: '/mypage/edit',
    setting: '/mypage/setting',
    notice: '/notice',
    noticeDetail: (noticeId: string) => `/notice/${noticeId}`,
    search: '/search',
    chat: '/chat',
    unauthorized: '/unauthorized',
    notFound: '*',
    userFeed: (userId: string) => `/user/${userId}`,
};

const STATUS = {
    ADMIN: 'admin',
    NORMAL: 'normal',
    MEMBER: 'member',
};

const Router = () => {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                {/* ------------- 페이지 접근 권한 - 공통 ------------- */}
                <Route index path="/" element={<Home />} /> {/* 메인 피드  */}
                <Route path="feed/:feedId" element={<FeedDetail />} /> {/* 피드 상세*/}
                <Route path="auth" element={<Auth />} /> {/* 로그인/회원가입 */}
                <Route path="search" element={<Search />} /> {/* 검색 결과  */}
                <Route path="notice" element={<Notice />} /> {/* 공지사항  */}
                <Route path="notice/:noticeId" element={<NoticeDetail />} />
                <Route path="*" element={<NotFound />} /> {/* 404 */}
                <Route path="unauthorized" element={<Unauthorized />} /> {/* 허가x */}
                <Route path="user/:userId" element={<User />} /> {/*유저피드*/}
                {/* ------------- 페이지 접근 권한 - 공통 ------------- */}
                {/* ------------- 페이지 접근 권한 - 관리자 멤버 ------------- */}
                <Route element={<PrivateRoute allowedRoles={['admin', 'member']} />}>
                    <Route path="post" element={<FeedPost />} /> {/* 피드 작성 */}
                    <Route path="follow" element={<Follow />} /> {/* 팔로우  */}
                    <Route path="chat" element={<Chat />} /> {/* 채팅 */}
                    <Route path="mypage" element={<MyPage />} /> {/* 마이페이지 */}
                    <Route path="mypage/edit" element={<Edit />} /> {/** 회원정보수정 */}
                    <Route path="mypage/setting" element={<Setting />} /> {/* 설정 */}
                    <Route path="feed/:feedId/update" element={<FeedUpdate />} />
                    <Route path="notice/qna/:qnaId" element={<Qna />} /> {/** QNA */}
                </Route>
                {/* ------------- 페이지 접근 권한 - 관리자 멤버 ------------- */}
                {/* ------------- 페이지 접근 권한 - 관리자 ------------- */}
                <Route element={<PrivateRoute allowedRoles={['admin']} />}>
                    <Route path="admin" element={<Admin />} /> {/* 관리자 */}
                </Route>
                {/* ------------- 페이지 접근 권한 - 관리자 ------------- */}
            </Route>
        </Routes>
    );
};
export default Router;
