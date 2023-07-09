import { BiUserCircle } from 'react-icons/bi';
import { LuBookTemplate } from 'react-icons/lu';
import { FiLogOut } from 'react-icons/fi';

const sideMenuList = [
    {
        path: 'mypage',
        display: '나의 정보',
    },
    {
        path: 'edit',
        display: '회원 정보 수정',
    },
    {
        path: 'userFeed',
        display: '내 피드 바로가기',
        state: 'param',
    },
    {
        path: 'follow',
        display: '팔로우 피드',
    },
    {
        path: 'chat',
        display: '채팅하러 가기',
    },
    {
        path: 'post',
        display: '게시글 올리기',
    },
    {
        path: 'auth',
        display: '로그아웃',
        page: 'none',
    },
];

const user = [
    {
        display: '마이페이지',
        path: '/myPage',
        icon: <BiUserCircle />,
    },
    {
        display: '임시 글',
        path: 'temp',
        icon: <LuBookTemplate />,
    },
    {
        display: '로그아웃',
        path: 'auth',
        icon: <FiLogOut />,
    },
];

export default { sideMenuList, user };
