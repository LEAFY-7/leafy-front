import React from 'react';
import { observer } from 'mobx-react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { IoIosArrowBack } from 'react-icons/io';

import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import ChatViewModel from 'viewModel/chat/chat.viewModel';
import useIntersectionObserver from 'hooks/useIntersectionObserver';

import Room from 'components/organisms/Chat/chat-room';
import ChatSend from './chat-send';
import Typography from 'components/atoms/Typograph/typography';
import Flex from 'components/atoms/Group/flex';
import RectangleButton from 'components/atoms/Button/rectangle-button';

const ChatRoom = () => {
    const chatViewModel: ChatViewModel = useViewModel(ViewModelName.CHAT);
    const targetRef = useIntersectionObserver(chatViewModel.getMoreMessageAtTop, {
        root: null,
        rootMargin: '100px',
        threshold: 1,
    });

    React.useEffect(() => {
        chatViewModel.componentDidMount();
        chatViewModel.handleIsShowRoom(300);
        return () => clearTimeout(chatViewModel.handleIsShowRoom(300));
    }, [chatViewModel.currentId]);

    return (
        <>
            {!chatViewModel?.currentId ? (
                <Room currentId={chatViewModel.currentId}>
                    <Wrapper id="chat_room_wrapper">
                        <Typography.ResponsiveSize variant="H2" textAlign="center">
                            현재 참여중인 채팅이 없습니다.
                        </Typography.ResponsiveSize>
                    </Wrapper>
                </Room>
            ) : (
                <Room currentId={chatViewModel.currentId} height="100%">
                    <Wrapper id="chat_room_wrapper">
                        <Room.Header>
                            <Flex.Default justifyContent="center" alignItems="center">
                                <RectangleButton
                                    onClick={chatViewModel.handleOutChatRoom}
                                    style={{ padding: 0, margin: 0 }}
                                >
                                    <IoIosArrowBack />
                                </RectangleButton>

                                <Typography.Default
                                    variant="BODY1"
                                    color="grey"
                                    marginLeft={8}
                                    style={{ width: '100%' }}
                                >
                                    {chatViewModel.currentId}님과의 채팅
                                </Typography.Default>
                            </Flex.Default>
                        </Room.Header>
                        <Room.Body
                            id="chat_room_body"
                            ref={chatViewModel.chatContainerRef}
                            targetRef={targetRef}
                        >
                            {chatViewModel?.messages.map((m, i) => (
                                <React.Fragment key={i}>
                                    {m.state === 'HOST' ? (
                                        <Room.MeMessage
                                            id={`${m.state}_message`}
                                            key={`${m.state}-${m.index}`}
                                            data-index={i}
                                        >
                                            {m.message}
                                        </Room.MeMessage>
                                    ) : (
                                        <Room.YouMessage
                                            id={`${m.state}_message`}
                                            key={`${m.state}-${m.index}`}
                                            data-index={i}
                                        >
                                            {m.message}
                                        </Room.YouMessage>
                                    )}
                                </React.Fragment>
                            ))}
                        </Room.Body>
                        <Room.Footer>
                            <ChatSend />
                        </Room.Footer>
                    </Wrapper>
                </Room>
            )}
        </>
    );
};
export default observer(ChatRoom);

const slideInFromLeft = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
`;

const Wrapper = styled(Room.Wrapper)`
    opacity: 0;
    transition: opacity 0.55s ease-in-out;
    transform: translateX(-100%);
    animation: ${slideInFromLeft} 0.65s ease-in-out forwards;
`;
