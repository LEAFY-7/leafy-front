import { createBrowserRouter } from 'react-router-dom';

import DefaultLayout from 'components/organisms/layouts/default-layout';
import PrivateRoute from 'components/organisms/routes/PrivateRoute';
import Unauthorized from 'components/organisms/Error/Unauthorized';

import Admin from 'pages/Admin/Page';
import Auth from 'pages/Auth/Page';
import Chat from 'pages/Chat/Page';
import FeedDetail from 'pages/FeedDetail/Page';
import Follow from 'pages/Follow/Page';
import Home from 'pages/Home/Page';
import Edit from 'pages/MyPage/EditPage';
import MyPage from 'pages/MyPage/Page';
import NotFound from 'components/organisms/Error/NotFound';
import Notice from 'pages/Notice/Page';
import NoticeDetail from 'pages/NoticeDetail/Page';
import FeedPost from 'pages/Post/page';
import Qna from 'pages/QnaDetail/Page';
import Search from 'pages/Search/Page';
import FeedUpdate from 'pages/Update/Page';
import User from 'pages/User/Page';
import Temp from 'pages/Temp/Page';
import TempDetail from 'pages/TempDetail/Page';
import Practice from 'pages/temp';

import pageUrlConfig from 'configs/pageUrl.config';

const routeConfig = [
    {
        path: pageUrlConfig.main,
        element: <DefaultLayout />,
        children: [
            { path: '', element: <Home /> },
            { path: `${pageUrlConfig.feed}/:feedId`, element: <FeedDetail /> },
            { path: pageUrlConfig.auth, element: <Auth /> },
            { path: pageUrlConfig.search, element: <Search /> },
            { path: pageUrlConfig.notice, element: <Notice /> },
            { path: `${pageUrlConfig}/:noticeId`, element: <NoticeDetail /> },
            { path: pageUrlConfig.unauthorized, element: <Unauthorized /> },
            { path: `${pageUrlConfig.user}/:userId`, element: <User /> },
            { path: pageUrlConfig.notFound, element: <NotFound /> },
            {
                path: 'practice',
                element: <Practice />,
            },
            {
                element: <PrivateRoute allowedRoles={['admin', 'member']} />,
                children: [
                    { path: pageUrlConfig.post, element: <FeedPost /> },
                    { path: pageUrlConfig.follow, element: <Follow /> },
                    { path: pageUrlConfig.chat, element: <Chat /> },
                    { path: pageUrlConfig.myPage, element: <MyPage /> },
                    { path: pageUrlConfig.edit, element: <Edit /> },
                    { path: `${pageUrlConfig.feed}/:feedId/update`, element: <FeedUpdate /> },
                    { path: `${pageUrlConfig.notice}/qna/:qnaId`, element: <Qna /> },
                    { path: `${pageUrlConfig.temp}`, element: <Temp /> },
                    { path: `${pageUrlConfig}/:tempId`, element: <TempDetail /> },
                ],
            },
            {
                element: <PrivateRoute allowedRoles={['admin']} />,
                children: [{ path: pageUrlConfig.admin, element: <Admin /> }],
            },
        ],
    },
];
const routers = createBrowserRouter(routeConfig);
export default routers;

export const routesGen = {
    home: '/',
    feedDetail: (feedId: string) => `/${feedId}`,
    post: '/post',
    update: (feedId: string) => `/post/${feedId}`,
    follow: '/follow',
    auth: '/auth',
    user: (userId: string) => `/user/${userId}`,
    mypage: '/mypage',
    edit: '/mypage/edit',
    notice: '/notice',
    noticeDetail: (noticeId: string) => `/notice/${noticeId}`,
    search: '/search',
    chat: '/chat',
    unauthorized: '/unauthorized',
    notFound: '*',
    userFeed: (userId: string) => `/user/${userId}`,
    temp: '/temp',
    tempDetail: (tempId: string) => `/temp/${tempId}`,
};
