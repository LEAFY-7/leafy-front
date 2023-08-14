import React from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import ChatViewModel from 'viewModel/chat/chat.viewModel';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';

import ChatCard from 'components/organisms/Chat/chat-card';
import Typography from 'components/atoms/Typograph/typography';

const url =
    'https://img.khan.co.kr/news/2023/04/04/news-p.v1.20230404.57d4bed2d0b4401f83dff7102d430885_P1.png';
const noneUrl = '';

const me = JSON.parse(localStorage.getItem('me'));
const you = JSON.parse(localStorage.getItem('you'));

const profiles = new Array(4).fill(null).map((_, index) => ({
    userId: +you + index,
    url: index % 2 === 0 ? url : noneUrl,
    count: 10,
    email: 'test@test.com',
    time: '2023-08-01',
}));

const ChatList = () => {
    const chatViewModel: ChatViewModel = useViewModel(ViewModelName.CHAT);
    const navigate = useNavigate();

    const handleChangeRoom = async (id: number) => {
        if (id === chatViewModel.roomState.you) return;
        chatViewModel.handleChangeCurrentId(id);
        await navigate(`?me=${+me}&you=${id}`);
    };

    return (
        <>
            {profiles.map((profile, index) =>
                profile.userId ? (
                    <ChatCard
                        key={index}
                        userId={profile.userId}
                        isVisit={profile.userId === chatViewModel.roomState.you}
                    >
                        <ChatCard.Wrapper
                            width="100%"
                            onClick={() => handleChangeRoom(profile.userId)}
                            style={{ height: '100px' }}
                        >
                            <ChatCard.Image src={profile.url} alt="기본이미지" />
                            <ChatCard.Counter>{profile.count}</ChatCard.Counter>
                            <ChatCard.UserId>{profile.email}</ChatCard.UserId>
                            <ChatCard.RightTop>
                                <Typography.Default variant="BODY3" fontSize="xs">
                                    {profile.time}
                                </Typography.Default>
                            </ChatCard.RightTop>
                        </ChatCard.Wrapper>
                    </ChatCard>
                ) : null,
            )}
        </>
    );
};
export default observer(ChatList);
