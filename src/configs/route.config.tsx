import { createBrowserRouter } from 'react-router-dom';

import pageUrlConfig from 'configs/pageUrl.config';
import DefaultLayout from 'components/organisms/layouts/default-layout';
import PrivateRoute from 'components/organisms/routes/private-route';
import NormalRoute from 'components/organisms/routes/normal-route';
import PageWrapper from 'components/atoms/Wrapper/page-wrapper';

import Unauthorized from 'components/organisms/Error/unauthorized';
import NotFound from 'components/organisms/Error/notFound';
import SignUpView from 'views/auth/signUp/index.view';
import SignInView from 'views/auth/signIn/index.view';
import FindView from 'views/auth/find/index.view';
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
import ChatView from 'views/chat/index.view';

const routeConfig = [
    {
        path: pageUrlConfig.main,
        element: <DefaultLayout />,
        children: [
            { path: '', element: <HomeView /> },
            {
                path: `${pageUrlConfig.auth}${pageUrlConfig.signIn}`,
                element: <NormalRoute allowedRoles={['NORMAL']} />,
                children: [{ path: '', element: <SignInView /> }],
            },
            {
                path: `${pageUrlConfig.auth}${pageUrlConfig.signUp}`,
                element: <NormalRoute allowedRoles={['NORMAL']} />,
                children: [{ path: '', element: <SignUpView /> }],
            },
            { path: `${pageUrlConfig.auth}${pageUrlConfig.find}`, element: <FindView /> },
            { path: `${pageUrlConfig.feedDetail}/:id`, element: <FeedDetailView /> },
            { path: pageUrlConfig.search, element: <SearchView /> },
            { path: pageUrlConfig.notice, element: <NoticeView /> },
            { path: `${pageUrlConfig.notice}/:id`, element: <NoticeDetailView /> },
            { path: `${pageUrlConfig.user}/:id`, element: <UserView /> },
            { path: pageUrlConfig.unauthorized, element: <Unauthorized /> },
            { path: pageUrlConfig.notFound, element: <NotFound /> },
            {
                element: <PrivateRoute allowedRoles={['ADMIN', 'MEMBER']} />,
                children: [
                    { path: pageUrlConfig.chat, element: <ChatView /> },
                    { path: pageUrlConfig.feed, element: <FeedView /> },
                    { path: `${pageUrlConfig.feedEdit}/:id`, element: <FeedEditView /> },
                    { path: pageUrlConfig.feedUpload, element: <FeedUploadView /> },
                    {
                        path: pageUrlConfig.myPage,
                        element: (
                            <PageWrapper>
                                <MyView />
                            </PageWrapper>
                        ),
                    },
                    {
                        path: pageUrlConfig.myEdit,
                        element: (
                            <PageWrapper>
                                <MyEditView />
                            </PageWrapper>
                        ),
                    },
                    { path: pageUrlConfig.leave, element: <LeaveView /> },
                    { path: pageUrlConfig.qnaUpload, element: <QnaUploadView /> },
                    { path: `${pageUrlConfig.qnaDetail}/:id`, element: <QnaDetailView /> },
                ],
            },
            {
                element: <PrivateRoute allowedRoles={['ADMIN']} />,
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
