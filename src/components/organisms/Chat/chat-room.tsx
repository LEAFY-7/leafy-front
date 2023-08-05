import type { CSSProperties, HTMLAttributes, HtmlHTMLAttributes } from 'react';
import React from 'react';
import styled from '@emotion/styled';
import { theme } from 'configs/ui.config';
import Flex from 'components/atoms/Group/flex';

interface ContextProps {
    currentId: number;
    height?: CSSProperties['height'];
}
interface WrapperProps extends Pick<ContextProps, 'height'> {
    width?: CSSProperties['width'];
}
interface HeaderProps extends Pick<ContextProps, 'height'> {}
interface BodyProps extends Pick<ContextProps, 'height'> {
    isScrollMoved?: boolean;
}
interface CommonMessageProps {
    isMe?: boolean;
}
interface YouMessageProps extends CommonMessageProps {
    id?: HTMLElement['id'];
}
interface MeMessageProps extends CommonMessageProps {
    id?: HTMLElement['id'];
}
interface FooterProps extends Pick<ContextProps, 'height'> {}

type ChatRoomProviderProps = React.PropsWithChildren<ContextProps>;
type ChatRoomWrapperProps = React.PropsWithChildren<WrapperProps> & HTMLAttributes<HTMLElement>;
type ChatRoomHeaderProps = React.PropsWithChildren<HeaderProps> & HTMLAttributes<HTMLElement>;
type ChatRoomBodyProps = React.PropsWithChildren<BodyProps> & HTMLAttributes<HTMLElement>;
type ChatRoomYouMessageProps = React.PropsWithChildren<YouMessageProps> & HTMLAttributes<HTMLElement>;
type ChatRoomMeMessageProps = React.PropsWithChildren<MeMessageProps> & HtmlHTMLAttributes<HTMLElement>;
type ChatRoomFooterProps = React.PropsWithChildren<FooterProps> & HtmlHTMLAttributes<HTMLElement>;

const ChatRoomContext = React.createContext<ContextProps>({
    currentId: 0,
    height: '100%',
});
const useChatRoomContext = () => React.useContext(ChatRoomContext);

// Provider
const ChatRoomProvider = ({ currentId, height, children }: ChatRoomProviderProps) => {
    return <ChatRoomContext.Provider value={{ currentId, height }}>{children}</ChatRoomContext.Provider>;
};

// Wrapper
const ChatRoomWrapper = ({ width = '700px', children, ...rest }: ChatRoomWrapperProps) => {
    const { height } = useChatRoomContext();

    return (
        <Wrapper width={width} height={height} {...rest}>
            {children}
        </Wrapper>
    );
};

// Header
const ChatRoomHeader = ({ children, ...rest }: ChatRoomHeaderProps) => {
    const { height } = useChatRoomContext();
    return (
        <Header height={height} {...rest}>
            {children}
        </Header>
    );
};
// Body
const ChatRoomBody = React.forwardRef(function ChatRoomBody(
    { isScrollMoved = false, children, ...rest }: ChatRoomBodyProps,
    forwardedRef: React.Ref<HTMLElement>,
) {
    const { height } = useChatRoomContext();
    return (
        <Body height={height} isScrollMoved={isScrollMoved} ref={forwardedRef} {...rest}>
            {children}
        </Body>
    );
});
// Footer
const ChatRoomFooter = ({ children, ...rest }: ChatRoomFooterProps) => {
    const { height } = useChatRoomContext();
    return (
        <Footer height={height} {...rest}>
            {children}
        </Footer>
    );
};

// YouMessage
const ChatRoomYouMessage = ({ isMe = false, id = '', children, ...rest }: ChatRoomYouMessageProps) => {
    return (
        <MessageWrapper isMe={isMe} id={`${id}_wrapper`}>
            <YouMessage {...rest}>{children}</YouMessage>
            <Flex.Default>
                <span>시간</span>
                <span>unread</span>
            </Flex.Default>
        </MessageWrapper>
    );
};

// MeMessage
const ChatRoomMeMessage = ({ isMe = true, id = '', children, ...rest }: ChatRoomMeMessageProps) => {
    return (
        <MessageWrapper isMe={isMe} id={`${id}_wrapper`}>
            <MeMessage {...rest}>{children}</MeMessage>
            <Flex.Default>
                <span>unread</span>
                <span>시간</span>
            </Flex.Default>
        </MessageWrapper>
    );
};

const ChatRoom = Object.assign(ChatRoomProvider, {
    Wrapper: ChatRoomWrapper,
    Header: ChatRoomHeader,
    Body: ChatRoomBody,
    Footer: ChatRoomFooter,
    YouMessage: ChatRoomYouMessage,
    MeMessage: ChatRoomMeMessage,
});

export default ChatRoom;

// Wrapper Style
const Wrapper = styled.div<WrapperProps>`
    position: relative;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4px;
    border: 1px solid ${theme.colors.lgrey};
    border-radius: 20px;
`;
// Header Style
const Header = styled.header<HeaderProps>`
    position: absolute;
    top: 0;
    width: 100%;
    height: ${({ height }) => `calc(${height} / 6)`};
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    border-radius: 20px;
    background: linear-gradient(180deg, #fafafa 0%, rgba(250, 250, 250, 0.6) 100%);
`;
// Body Style
const Body = styled.section<BodyProps>`
    width: 100%;
    height: ${({ height }) => `calc(${height} / 6 * 5)`};
    background-color: #fff8f8;
    gap: 16px;
    overflow-y: scroll;
    padding: 8px;

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
// Footer Style
const Footer = styled.footer<FooterProps>`
    width: 100%;
    height: ${({ height }) => `calc(${height} / 6)`};
    padding: 8px;
    box-sizing: border-box;
`;
// Message Style
const MessageWrapper = styled.div<CommonMessageProps>`
    position: relative;
    box-sizing: border-box;
    margin: 16px;
    border-radius: 8%;
    display: flex;
    flex-direction: column;
    align-items: ${({ isMe }) => (isMe ? 'flex-end' : 'flex-start')};
    min-height: 40px;
`;
const MessageBase = styled.span`
    max-width: 60%;
    padding: 16px 8px;
    border-radius: 20px;
    word-wrap: break-word;
    overflow-wrap: break-word;
`;
const YouMessage = styled(MessageBase)`
    background-color: ${theme.colors.lgrey_50};
`;

const MeMessage = styled(MessageBase)`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
`;
