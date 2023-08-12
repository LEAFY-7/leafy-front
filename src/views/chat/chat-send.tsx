import { observer } from 'mobx-react';
import styled from '@emotion/styled';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import ChatViewModel from 'viewModel/chat/chat.viewModel';

import Flex from 'components/atoms/Group/flex';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import Textarea from 'components/atoms/Textarea/default-textarea';

const ChatSend = () => {
    const chatViewModel: ChatViewModel = useViewModel(ViewModelName.CHAT);
    return (
        <Wrapper justifyContent="center" alignItems="center">
            <Textarea
                value={chatViewModel?.myMessage}
                onChange={chatViewModel.handleChangeMessage}
                onKeyDown={chatViewModel.handleSendMessageByEnter}
                fontSize="md"
                style={{ padding: '16px 24px', width: '80%', height: '100%' }}
            />
            <SendButton variant="primary" onClick={chatViewModel.handleSendMessage} style={{ width: '20%' }}>
                입력
            </SendButton>
        </Wrapper>
    );
};

export default observer(ChatSend);

const Wrapper = styled(Flex.Default)`
    padding: 16px;
    height: 100%;
    box-sizing: border-box;
`;

const SendButton = styled(RectangleButton)`
    height: 100%;
`;
