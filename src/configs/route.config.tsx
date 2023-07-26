import { createBrowserRouter } from 'react-router-dom';

import Unauthorized from 'components/organisms/Error/Unauthorized';
import DefaultLayout from 'components/organisms/layouts/default-layout';
import PrivateRoute from 'components/organisms/routes/private-route';

import NotFound from 'components/organisms/Error/NotFound';
import Admin from 'pages/Admin/Page';
import Chat from 'pages/Chat/Page';
import FeedDetail from 'pages/FeedDetail/Page';
import Follow from 'pages/Follow/Page';
import Home from 'pages/Home/Page';
import Edit from 'pages/MyPage/EditPage';
import MyPage from 'pages/MyPage/Page';
import Notice from 'pages/Notice/Page';
import NoticeDetail from 'pages/NoticeDetail/Page';
import FeedPost from 'pages/Post/page';
import Search from 'pages/Search/Page';
import Temp from 'pages/Temp/Page';
import TempDetail from 'pages/TempDetail/Page';
import FeedUpdate from 'pages/Update/Page';
import User from 'pages/User/Page';
import Practice from 'pages/temp';

import pageUrlConfig from 'configs/pageUrl.config';
import SignUp from 'pages/Auth/SignUp';
import SignIn from 'pages/Auth/SignIn';
import NormalRoute from 'components/organisms/routes/normal-route';

const routeConfig = [
    {
        path: pageUrlConfig.main,
        element: <DefaultLayout />,
        children: [
            { path: '', element: <Home /> },
            { path: `${pageUrlConfig.feed}/:id`, element: <FeedDetail /> },
            {
                path: `${pageUrlConfig.auth}/signin`,
                element: <NormalRoute allowedRoles={['NORMAL']} />,
                children: [{ path: '', element: <SignIn /> }],
            },
            {
                path: `${pageUrlConfig.auth}/signup`,
                element: <NormalRoute allowedRoles={['NORMAL']} />,
                children: [{ path: '', element: <SignUp /> }],
            },

            { path: pageUrlConfig.search, element: <Search /> },
            { path: pageUrlConfig.notice, element: <Notice /> },
            { path: `${pageUrlConfig}/:id`, element: <NoticeDetail /> },
            { path: pageUrlConfig.unauthorized, element: <Unauthorized /> },
            { path: `${pageUrlConfig.user}/:id`, element: <User /> },
            { path: pageUrlConfig.notFound, element: <NotFound /> },
            {
                path: 'practice',
                element: <Practice />,
            },
            {
                element: <PrivateRoute allowedRoles={['ADMIN', 'MEMBER']} />,
                children: [
                    { path: pageUrlConfig.feedUpload, element: <FeedPost /> },
                    { path: pageUrlConfig.follow, element: <Follow /> },
                    { path: pageUrlConfig.chat, element: <Chat /> },
                    { path: pageUrlConfig.myPage, element: <MyPage /> },
                    { path: pageUrlConfig.edit, element: <Edit /> },
                    { path: `${pageUrlConfig.feedEdit}/:id`, element: <FeedUpdate /> },
                    { path: `${pageUrlConfig.temp}`, element: <Temp /> },
                    { path: `${pageUrlConfig}/:id`, element: <TempDetail /> },
                ],
            },
            {
                element: <PrivateRoute allowedRoles={['ADMIN']} />,
                children: [{ path: pageUrlConfig.admin, element: <Admin /> }],
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
