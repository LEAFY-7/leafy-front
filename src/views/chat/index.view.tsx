// import io from 'socket.io-client';
import { observer } from 'mobx-react';
import styled from '@emotion/styled';
import { BiUserCircle as UserIcon } from 'react-icons/bi';
import { BsFillChatDotsFill as ChatIcon } from 'react-icons/bs';
import PageContainer from 'components/templates/page-container';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import ChatViewModel from 'viewModel/chat/chat.viewModel';
import useWindowSize from 'hooks/useWindowSize';
import { theme } from 'configs/ui.config';

import ChatList from './chat-list';
import ChatRoom from './chat-room';
import Flex from 'components/atoms/Group/flex';
import RectangleButton from 'components/atoms/Button/rectangle-button';
// let socket;

const ChatView = () => {
    const chatViewModel: ChatViewModel = useViewModel(ViewModelName.CHAT);
    const windowSize = useWindowSize();
    // const ENDPOINT = 'http://localhost:5000/chat';
    // React.useEffect(() => {
    //     socket = io(ENDPOINT);
    //     console.log(socket);

    //     socket.emit('join', { name, room });
    // }, [ENDPOINT]);s

    return (
        <>
            <PageContainer
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    //  alignItems: 'flex-start',
                    paddingTop: '4rem',
                }}
            >
                {windowSize.width > 575 ? (
                    <>
                        <LeftSection id="chat_list_section">
                            <ChatList />
                        </LeftSection>

                        <RightSection id="chat_room_section">
                            <ChatRoom />
                        </RightSection>
                    </>
                ) : (
                    <>
                        {!chatViewModel.currentId && (
                            <LeftSection id="chat_list_section">
                                <ChatList />
                            </LeftSection>
                        )}

                        {chatViewModel.currentId ? (
                            <RightSection id="chat_room_section">
                                <ChatRoom />
                            </RightSection>
                        ) : null}
                    </>
                )}
            </PageContainer>

            <ShowAtMobile>
                <RectangleButton backgroundColor="transparent" onClick={chatViewModel.handleLeaveChatRoom}>
                    <UserIcon size={40} color="#fff" />
                </RectangleButton>
                <ChatIconButton
                    backgroundColor="transparent"
                    onClick={() => chatViewModel.handleChangeCurrentUserId(chatViewModel.prevCurrentId)}
                    disabled={!!chatViewModel.currentId}
                >
                    <ChatIcon size={40} color="#fff" />
                </ChatIconButton>
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
    height: 109px;
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
const ChatIconButton = styled(RectangleButton)`
    &:disabled {
        background-color: transparent;
    }
`;
