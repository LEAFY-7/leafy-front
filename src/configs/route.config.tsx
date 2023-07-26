import { createBrowserRouter } from 'react-router-dom';

import Unauthorized from 'components/organisms/Error/Unauthorized';
import DefaultLayout from 'components/organisms/layouts/default-layout';
import PrivateRoute from 'components/organisms/routes/PrivateRoute';

import Auth from 'pages/Auth/Page';
import Chat from 'pages/Chat/Page';
import Practice from 'pages/temp';

import NotFound from 'components/organisms/Error/NotFound';
import pageUrlConfig from 'configs/pageUrl.config';

import FindView from 'views/auth/find.view';
import SignInView from 'views/auth/signIn.view';
import SignUpView from 'views/auth/signUp.view';
import FeedDetailView from 'views/feed/detail.view';
import FeedEditView from 'views/feed/edit.view';
import FeedView from 'views/feed/index.view';
import FeedUploadView from 'views/feed/upload.view';
import HomeView from 'views/home/index.view';
import MyEditView from 'views/my/edit.view';
import MyView from 'views/my/index.view';
import LeaveView from 'views/my/leave.view';
import NoticeDetailView from 'views/notice/detail.view';
import NoticeEditView from 'views/notice/edit.view';
import NoticeView from 'views/notice/index.view';
import NoticeUploadView from 'views/notice/upload.view';
import QnaDetailView from 'views/qna/detail.view';
import QnaUploadView from 'views/qna/upload.view';
import SearchView from 'views/search/index.view';
import UserView from 'views/user/index.view';

const routeConfig = [
    {
        path: pageUrlConfig.main,
        element: <DefaultLayout />,
        children: [
            { path: '', element: <HomeView /> },
            { path: pageUrlConfig.auth, element: <Auth /> },
            { path: pageUrlConfig.signIn, element: <SignInView /> },
            { path: pageUrlConfig.signUp, element: <SignUpView /> },
            { path: pageUrlConfig.find, element: <FindView /> },
            { path: `${pageUrlConfig.feedDetail}/:id`, element: <FeedDetailView /> },
            { path: pageUrlConfig.search, element: <SearchView /> },
            { path: pageUrlConfig.notice, element: <NoticeView /> },
            { path: `${pageUrlConfig.notice}/:id`, element: <NoticeDetailView /> },
            { path: `${pageUrlConfig.user}/:id`, element: <UserView /> },
            { path: pageUrlConfig.unauthorized, element: <Unauthorized /> },
            { path: pageUrlConfig.notFound, element: <NotFound /> },
            {
                path: 'practice',
                element: <Practice />,
            },
            {
                element: <PrivateRoute allowedRoles={['admin', 'member']} />,
                children: [
                    { path: pageUrlConfig.chat, element: <Chat /> },
                    { path: pageUrlConfig.feed, element: <FeedView /> },
                    { path: `${pageUrlConfig.feedEdit}/:id`, element: <FeedEditView /> },
                    { path: pageUrlConfig.feedUpload, element: <FeedUploadView /> },
                    { path: pageUrlConfig.myPage, element: <MyView /> },
                    { path: pageUrlConfig.myEdit, element: <MyEditView /> },
                    { path: pageUrlConfig.leave, element: <LeaveView /> },
                    { path: pageUrlConfig.qnaUpload, element: <QnaUploadView /> },
                    { path: `${pageUrlConfig.qnaDetail}/:id`, element: <QnaDetailView /> },
                ],
            },
            {
                element: <PrivateRoute allowedRoles={['admin']} />,
                children: [
                    { path: pageUrlConfig.noticeUpload, element: <NoticeUploadView /> },
                    { path: pageUrlConfig.noticeEdit, element: <NoticeEditView /> },
                ],
            },
        ],
    },
];
const routers = createBrowserRouter(routeConfig);
export default routers;

class RouteModule {
    public userState: string;

    constructor(props) {
        this.userState = props.member;
    }

    setState(member: string) {
        this.userState = member;
    }
}
