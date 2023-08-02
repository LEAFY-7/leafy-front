// import io from 'socket.io-client';
import { observer } from 'mobx-react';
import PageContainer from 'components/templates/page-container';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import ChatViewModel from 'viewModel/chat/chat.viewModel';

import styled from '@emotion/styled';
import { theme } from 'configs/ui.config';

import ChatList from './chat-list';
import ChatRoom from './chat-room';
import useWindowSize from 'hooks/useWindowSize';
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
        <PageContainer
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                paddingTop: '4rem',
            }}
        >
            {windowSize.width > 700 ? (
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
    );
};

export default observer(ChatView);

const CommonSection = styled.section`
    height: 800px;
    display: flex;
    overflow-y: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        width: 10px;
        background-color: ${theme.colors.lgrey_50};
    }

    ::-webkit-scrollbar-thumb {
        width: 10px;
        background-color: ${theme.colors.lgrey};
    }
`;

const LeftSection = styled(CommonSection)`
    flex-direction: column;
    gap: 8px;
    padding-right: 8px;

    ${theme.mediaQuery.mobile} {
        width: 100%;
    }
    ${theme.mediaQuery.tablet} {
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
    /* ${theme.mediaQuery.mobile} {
        width: 100%;
    }
    ${theme.mediaQuery.tablet} {
        width: auto;
    }
    ${theme.mediaQuery.desktop} {
        width: 700px;
    } */
`;
