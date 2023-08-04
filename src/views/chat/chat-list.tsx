import { observer } from 'mobx-react';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import ChatViewModel from 'viewModel/chat/chat.viewModel';

import ChatCard from 'components/organisms/Chat/chat-card';
import Typography from 'components/atoms/Typograph/typography';

const url =
    'https://img.khan.co.kr/news/2023/04/04/news-p.v1.20230404.57d4bed2d0b4401f83dff7102d430885_P1.png';
const noneUrl = '';

const profiles = new Array(20).fill(null).map((_, index) => ({
    userId: index,
    url: index % 2 === 0 ? url : noneUrl,
    count: 1000,
    email: 'test@test.com',
    time: '2023-08-01',
}));

const ChatList = () => {
    const chatViewModel: ChatViewModel = useViewModel(ViewModelName.CHAT);
    return (
        <>
            {profiles.map((profile, index) =>
                profile.userId ? (
                    <ChatCard
                        key={index}
                        userId={profile.userId}
                        isVisit={profile.userId === chatViewModel.currentId}
                    >
                        <ChatCard.Wrapper
                            width="100%"
                            onClick={() => chatViewModel.handleChangeCurrentUserId(profile.userId)}
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
