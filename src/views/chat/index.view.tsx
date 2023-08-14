import React from 'react';
import { observer } from 'mobx-react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { useLocation, useNavigate } from 'react-router-dom';

import { BiUserCircle as UserIcon } from 'react-icons/bi';
import { BsFillChatDotsFill as ChatIcon } from 'react-icons/bs';
import { GrHomeOption as HomeIcon } from 'react-icons/gr';

import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import ChatViewModel from 'viewModel/chat/chat.viewModel';
import useWindowSize from 'hooks/useWindowSize';
import { theme } from 'configs/ui.config';

import PageContainer from 'components/templates/page-container';
import Flex from 'components/atoms/Group/flex';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import Typography from 'components/atoms/Typograph/typography';
import Room from 'components/organisms/Chat/chat-room';

import ChatList from './chat-list';
import ChatRoom from './chat-room';
import pageUrlConfig from 'configs/pageUrl.config';

const ChatView = () => {
    const chatViewModel: ChatViewModel = useViewModel(ViewModelName.CHAT);
    const windowSize = useWindowSize();
    const location = useLocation();
    const navigate = useNavigate();

    React.useEffect(() => {
        chatViewModel.handleShowChatRoom(300);

        return () => {
            chatViewModel.handleClear();
        };
    }, [, location]);

    return (
        <>
            <PageContainer
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    //  alignItems: 'flex-start',
                    paddingTop: '4rem',
                    height: '900px',
                    overflow: 'hidden',
                }}
            >
                {windowSize.width > 575 ? (
                    <>
                        <LeftSection id="chat_list_section">
                            <ChatList />
                        </LeftSection>

                        <RightSection id="chat_room_section">
                            {!chatViewModel?.roomState.you ? (
                                <Room currentId={chatViewModel.roomState.you} height="100%">
                                    <Wrapper id="chat_room_wrapper">
                                        <NoneChatRoomBody>
                                            <Typography.ResponsiveSize variant="H2" textAlign="center">
                                                현재 참여중인 채팅이 없습니다.
                                            </Typography.ResponsiveSize>
                                        </NoneChatRoomBody>
                                    </Wrapper>
                                </Room>
                            ) : (
                                <ChatRoom />
                            )}
                        </RightSection>
                    </>
                ) : (
                    <>
                        {!chatViewModel.roomState.you && (
                            <LeftSection id="chat_list_section">
                                <ChatList />
                            </LeftSection>
                        )}

                        {chatViewModel.roomState.you ? (
                            <RightSection id="chat_room_section">
                                <ChatRoom />
                            </RightSection>
                        ) : null}
                    </>
                )}
            </PageContainer>

            <ShowAtMobile>
                <RectangleButton
                    backgroundColor="transparent"
                    onClick={async () => {
                        chatViewModel.handleLeaveChatRoom();
                        await navigate('/chat');
                    }}
                >
                    <UserIcon size={35} color="#fff" />
                </RectangleButton>
                <IconButton backgroundColor="transparent" to={pageUrlConfig.main}>
                    <HomeIcon size={35} color="#fff" />
                </IconButton>
                <IconButton
                    backgroundColor="transparent"
                    disabled={!!chatViewModel.roomState.you}
                    onClick={async () => {
                        const { me, prev } = chatViewModel.roomState;
                        chatViewModel.handleChangeCurrentId(prev);
                        await navigate(`?me=${me}&you=${prev}`);
                    }}
                >
                    <ChatIcon size={35} color="#fff" />
                </IconButton>
            </ShowAtMobile>
        </>
    );
};
export default observer(ChatView);

const CommonSection = styled.section`
    height: 800px;
    display: flex;
    overflow-y: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar,
    ::-webkit-scrollbar-thumb {
        overflow: visible;
        border-radius: 4px;
        width: 4px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${theme.colors.lgrey};
    }
`;

const LeftSection = styled(CommonSection)`
    flex-direction: column;
    gap: 8px;
    padding-right: 8px;

    ${theme.mediaQuery.mdMobile} {
        width: 100%;
    }
    ${theme.mediaQuery.mdTablet} {
        width: 400px;
        align-items: center;
    }
    ${theme.mediaQuery.desktop} {
        width: 300px;
    }
`;
const RightSection = styled(CommonSection)`
    box-sizing: border-box;
    overflow: hidden;
`;

const ShowAtMobile = styled(Flex.Default)`
    background-color: ${theme.colors.primary};
    width: 100%;
    height: 120px;
    padding-left: 16px;
    padding-right: 16px;
    justify-content: center;
    align-items: center;

    ${theme.mediaQuery.mdMobile} {
        display: flex;
    }

    ${theme.mediaQuery.lgMobile} {
        display: flex;
    }
    ${theme.mediaQuery.smTablet} {
        display: none;
    }
`;
const IconButton = styled(RectangleButton)`
    margin: 0;

    &:disabled {
        background-color: transparent;
    }
`;
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
