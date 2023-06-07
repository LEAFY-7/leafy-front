import Home from "@pages/Home/Page";
import Feed from "@pages/Feed/Page";
import FeedDetail from "@pages/FeedDetail/Page";
import Auth from "@pages/Auth/Page";
import Chat from "@pages/Chat/Page";
import User from "@pages/User/Page";
import NotFound from "@pages/NotFound/Page";

export const routesGen = {
  home: "/",
  feed: "/feed",
  feedDetail: (id: string) => `/feed/${id}`,
  edit: "/edit",
  editWithParam: (id: string) => `/edit/${id}`,
  search: "/search",
  user: (userId: string) => `/user/${userId}`,
  chat: "/chat",
};

const routes = [
  {
    index: true,
    element: <Home />,
    state: "home",
  },
  {
    path: "/auth",
    element: <Auth />,
    state: "auth",
  },
  {
    path: "/user:userId",
    element: <User />,
    state: "user",
  },
  {
    path: "/feed",
    element: <Feed />,
    state: "feed",
  },
  {
    path: "/feed/:feedId",
    element: <FeedDetail />,
    state: "feedDetail",
  },
  {
    path: "/feed/:feedId",
    element: <FeedDetail />,
    state: "feedDetail",
  },

  {
    path: "/chat",
    element: <Chat />,
    state: "chat",
  },
  {
    path: "/*",
    element: <NotFound />,
    state: "notfound",
  },
];
export default routes;