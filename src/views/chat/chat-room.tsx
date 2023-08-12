import React from 'react';
import { observer } from 'mobx-react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { IoIosArrowBack as BackIcon } from 'react-icons/io';
import { GiHamburgerMenu as HamburgerIcon } from 'react-icons/gi';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import ChatViewModel from 'viewModel/chat/chat.viewModel';
import useIntersectionObserver from 'hooks/useIntersectionObserver';

import Room from 'components/organisms/Chat/chat-room';
import Typography from 'components/atoms/Typograph/typography';
import Flex from 'components/atoms/Group/flex';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import ChatSend from './chat-send';
import Flyout from 'components/molecules/Flyout/default-flyout';
import useToggle from 'hooks/useToggleProvider';
import { theme } from 'configs/ui.config';
import pageUrlConfig from 'configs/pageUrl.config';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChatMessageDto } from 'dto/chat/chat-message.dto';

const ChatRoom = () => {
    const chatViewModel: ChatViewModel = useViewModel(ViewModelName.CHAT);
    const { values: openState } = useToggle({});
    const targetPrevRef = useIntersectionObserver(chatViewModel.handleGetMoreMessages, {
        root: null,
        rootMargin: '200px',
        threshold: 1,
    });
    const targeNextRef = useIntersectionObserver(chatViewModel.handleGetMoreNextMessages, {
        root: null,
        rootMargin: '50px',
        threshold: 1,
    });
    const navigate = useNavigate();
    const location = useLocation();

    React.useEffect(() => {
        chatViewModel.handleJoinRoom(location.search);

        return () => {
            chatViewModel.handleDisconnectSocket();
        };
    }, [location]);

    const handleOutRoom = () => {
        chatViewModel.handleLeaveChatRoom();
        navigate('/chat');
    };

    return (
        <>
            {chatViewModel?.roomState.you ? (
                <Room currentId={chatViewModel.roomState.you} height="100%">
                    <Wrapper id="chat_room_wrapper">
                        {/* 헤더 */}
                        <Room.Header>
                            <Flex.Default
                                justifyContent="center"
                                alignItems="center"
                                style={{ padding: '8px' }}
                            >
                                <RectangleButton
                                    backgroundColor="transparent"
                                    onClick={handleOutRoom}
                                    style={{ padding: 0, margin: 0 }}
                                >
                                    <BackIcon size={25} />
                                </RectangleButton>

                                <HeaderTitle variant="BODY1" marginLeft={8} style={{ width: '100%' }}>
                                    {chatViewModel.roomState.you}님과의 채팅
                                </HeaderTitle>
                            </Flex.Default>

                            <Flyout isOpen={openState.isOpen} toggle={openState.toggle}>
                                <Toggle id="user__wrapper" style={{ padding: '8px' }}>
                                    <RectangleButton
                                        backgroundColor="transparent"
                                        style={{ padding: 0, margin: 0 }}
                                    >
                                        <HamburgerIcon size={25} />
                                    </RectangleButton>
                                </Toggle>
                                <OverLay />
                                <MyMenuWrapper>
                                    <MenuList size="md" variant="default">
                                        <UserItem to={pageUrlConfig.myPage}>마이페이지</UserItem>
                                        <UserItem to={`${pageUrlConfig.user}/1`}>내 채널 바로가기</UserItem>
                                        <UserItem to={`${pageUrlConfig}/2`}>상대방 채널 보러가기</UserItem>
                                        <UserItem>구독 하기</UserItem>
                                        <UserItem>신고 하기</UserItem>
                                    </MenuList>
                                </MyMenuWrapper>
                            </Flyout>
                        </Room.Header>
                        {/* 헤더 */}
                        {/* 바디 */}
                        <Room.Body id="chat_room_body" ref={chatViewModel.chatContainerRef}>
                            <div id="prev-target" ref={targetPrevRef} style={{ height: '200px' }}></div>
                            <>
                                {/* .reverse() // 키를 역순으로 순회 */}
                                {Array.from(chatViewModel?.prevMessageList.pages.keys())
                                    .reverse()
                                    .map((pageNumber) => {
                                        const pageMessages =
                                            chatViewModel?.prevMessageList.pages.get(pageNumber);
                                        if (Array.isArray(pageMessages)) {
                                            const currentPage = chatViewModel?.prevMessageList.currentPage;
                                            return (
                                                <React.Fragment key={pageNumber}>
                                                    {pageMessages.map((message, i) => (
                                                        <React.Fragment key={i}>
                                                            {message.sender === chatViewModel.roomState.me ? (
                                                                <Room.MeMessage
                                                                    id={message.id}
                                                                    key={message.id}
                                                                    isRead={message.isRead}
                                                                    data-index={`${currentPage}-${i}`}
                                                                    createdAt={message.createdAt}
                                                                >
                                                                    {message.text}
                                                                </Room.MeMessage>
                                                            ) : (
                                                                <Room.YouMessage
                                                                    id={message.id}
                                                                    key={message.id}
                                                                    isRead={message.isRead}
                                                                    data-index={`${currentPage}-${i}`}
                                                                    createdAt={message.createdAt}
                                                                >
                                                                    {message.text}
                                                                </Room.YouMessage>
                                                            )}
                                                        </React.Fragment>
                                                    ))}
                                                </React.Fragment>
                                            );
                                        }
                                        return null;
                                    })}
                            </>
                            <>
                                {Array.from(chatViewModel?.nextMessageList.pages.keys()).map((pageNumber) => {
                                    const pageMessages = chatViewModel?.nextMessageList.pages.get(pageNumber);
                                    if (Array.isArray(pageMessages)) {
                                        const currentPage = chatViewModel?.nextMessageList.currentPage;
                                        return (
                                            <React.Fragment key={pageNumber}>
                                                {pageMessages.map((message, i) => (
                                                    <React.Fragment key={i}>
                                                        {message.sender === chatViewModel.roomState.me ? (
                                                            <Room.MeMessage
                                                                id={message.id}
                                                                key={message.id}
                                                                isRead={message.isRead}
                                                                data-index={`${currentPage}-${i}`}
                                                                createdAt={message.createdAt}
                                                            >
                                                                {message.text}
                                                            </Room.MeMessage>
                                                        ) : (
                                                            <Room.YouMessage
                                                                id={message.id}
                                                                key={message.id}
                                                                isRead={message.isRead}
                                                                data-index={`${currentPage}-${i}`}
                                                                createdAt={message.createdAt}
                                                            >
                                                                {message.text}
                                                            </Room.YouMessage>
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                            </React.Fragment>
                                        );
                                    }
                                    return null;
                                })}
                            </>

                            <>
                                {chatViewModel.newMessageList.map(
                                    (message: ChatMessageDto, index: number) => (
                                        <React.Fragment key={index}>
                                            <React.Fragment key={`${message.id}`}>
                                                {message.sender === chatViewModel.roomState.me ? (
                                                    <Room.MeMessage
                                                        id={`${message.id}`}
                                                        key={`${message.id}-${index}`}
                                                        isRead={message.isRead}
                                                        createdAt={message.createdAt}
                                                    >
                                                        {message.text}
                                                    </Room.MeMessage>
                                                ) : (
                                                    <Room.YouMessage
                                                        id={`${message.id}`}
                                                        key={`${message.id}-${index}`}
                                                        isRead={message.isRead}
                                                        createdAt={message.createdAt}
                                                    >
                                                        {message.text}
                                                    </Room.YouMessage>
                                                )}
                                            </React.Fragment>
                                        </React.Fragment>
                                    ),
                                )}
                                <div id="next-target" ref={targeNextRef} style={{ height: '50px' }}></div>
                            </>
                        </Room.Body>
                        {/* 바디 */}
                        {/* 푸터 */}
                        <Room.Footer>
                            <ChatSend />
                        </Room.Footer>
                        {/* 푸터 */}
                    </Wrapper>
                </Room>
            ) : null}
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

const NoneChatRoomBody = styled(Room.Body)`
    overflow-y: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`;
// Flyout - 햄버거 버튼
const Toggle = styled(Flyout.Toggle)`
    position: relative;
    cursor: pointer;
`;

const MyMenuWrapper = styled(Flyout.Wrapper)`
    position: absolute;
    top: 60px;
    right: 20px;
`;

const OverLay = styled(Flyout.OverLay)`
    height: 100vh;
`;
const MenuList = styled(Flyout.List)`
    overflow-y: scroll;
    position: relative;
    border-radius: 4px;
    box-shadow: 5px 5px 10px rgba(14, 17, 27, 0.15);
`;

const UserItem = styled(Flyout.Item)`
    cursor: pointer;
    list-style: none;
    margin-top: 4px;
    margin-bottom: 4px;
    z-index: 9;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    transition: background-color 0.35s ease-in-out, color 0.25s ease-in-out;
    &:hover {
        border-color: ${theme.palette.secondary.borderColor};
        background-color: ${theme.palette.secondary.backgroundColor};
        color: ${theme.palette.text.white};
    }
`;

const HeaderTitle = styled(Typography.Default)`
    ${theme.mediaQuery.xsMobile} {
        display: none;
    }
    ${theme.mediaQuery.smMobile} {
        display: none;
    }

    ${theme.mediaQuery.mdMobile} {
        display: block;
    }
`;
