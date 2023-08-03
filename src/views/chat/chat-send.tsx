import { observer } from 'mobx-react';
import styled from '@emotion/styled';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import ChatViewModel from 'viewModel/chat/chat.viewModel';

import Textarea from 'components/atoms/Textarea/default-textarea';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import Flex from 'components/atoms/Group/flex';

const ChatSend = () => {
    const chatViewModel: ChatViewModel = useViewModel(ViewModelName.CHAT);
    return (
        <Wrapper>
            <Textarea
                ref={chatViewModel?.textareaRef}
                value={chatViewModel?.myMessage}
                onChange={chatViewModel.handleMessage}
                onKeyDown={(e) => chatViewModel.createMessageByEnter(e, 'HOST')}
                fontSize="md"
                style={{ padding: '16px 24px' }}
            />
            <SendButton variant="primary" onClick={() => chatViewModel.createMessageByButton('HOST')}>
                입력
            </SendButton>
        </Wrapper>
    );
};

export default observer(ChatSend);

const Wrapper = styled(Flex.Default)`
    padding: 16px;
    height: 100%;
`;

const SendButton = styled(RectangleButton)`
    height: 100%;
`;
