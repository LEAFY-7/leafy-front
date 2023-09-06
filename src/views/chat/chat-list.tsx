import React from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import ChatViewModel from 'viewModel/chat/chat.viewModel';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';

import Flex from 'components/atoms/Group/flex';
import Typography from 'components/atoms/Typograph/typography';
import ChatCard from 'components/organisms/Chat/chat-card';
import formatDate from 'utils/formatDate';

const url =
    'https://img.khan.co.kr/news/2023/04/04/news-p.v1.20230404.57d4bed2d0b4401f83dff7102d430885_P1.png';

const you = JSON.parse(localStorage.getItem('you'));

const ChatList = () => {
    const chatViewModel: ChatViewModel = useViewModel(ViewModelName.CHAT);
    const navigate = useNavigate();

    const handleChangeRoom = async (you: number) => {
        if (you === chatViewModel.roomState.you) return;
        chatViewModel.handleChangePartner(you);
        // await chatViewModel.router.go(`?me=${chatViewModel.roomState.me}&you=${you}`);
        await navigate(`?me=${chatViewModel.roomState.me}&you=${you}`);
    };

    React.useEffect(() => {
        chatViewModel.handleUserSocket();

        return () => {
            chatViewModel.handleDisconnectUserSocket();
        };
    }, [, chatViewModel.myText, chatViewModel.chatSocket]);

    // console.log('채팅리스트', chatViewModel.chatList, chatViewModel.roomState.me);

    return (
        <>
            {chatViewModel.chatList.map(({ latestMessage, id, count, partner }, index) =>
                id ? (
                    <ChatCard
                        key={index}
                        userId={latestMessage.sender.id}
                        isVisit={+partner.id === chatViewModel.roomState.you}
                    >
                        <ChatCard.Wrapper
                            width="100%"
                            onClick={() => handleChangeRoom(+partner?.id)}
                            style={{ height: '100px' }}
                        >
                            <ChatCard.Image src={partner?.profileImage || url} alt="기본이미지" />
                            <Flex.Default direction="column">
                                <ChatCard.UserId>{partner?.nickName || '(알수없음)'}</ChatCard.UserId>
                                <ChatCard.Message>{latestMessage.text}</ChatCard.Message>
                            </Flex.Default>
                            <Flex.Default>
                                <ChatCard.RightTop>
                                    <Typography.Default variant="BODY3" fontSize="sm">
                                        {formatDate.AMPMHM(latestMessage.createdAt)}
                                    </Typography.Default>
                                </ChatCard.RightTop>
                                <ChatCard.LeftBottom>
                                    <ChatCard.Counter>{count}</ChatCard.Counter>
                                </ChatCard.LeftBottom>
                            </Flex.Default>
                        </ChatCard.Wrapper>
                    </ChatCard>
                ) : null,
            )}
        </>
    );
};
export default observer(ChatList);
