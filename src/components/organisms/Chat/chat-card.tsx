import type { CSSProperties, HTMLAttributes } from 'react';
import React from 'react';
import styled from '@emotion/styled';
import { theme } from 'configs/ui.config';

import LazyImage from 'components/atoms/LazyImage/default-image';
import Typography from 'components/atoms/Typograph/default-typography';

interface ContextProps {
    userId: number;
    isVisit?: boolean;
}

interface WrapperProps {
    width?: CSSProperties['width'];
    isVisit?: ContextProps['isVisit'];
}

interface ImageProps {
    src: HTMLImageElement['src'];
    alt: HTMLImageElement['alt'];
    width?: CSSProperties['width'];
    height?: CSSProperties['height'];
    radius?: CSSProperties['borderRadius'];
}
interface CounterProps {}
interface UserIdProps {}
interface MessageText {}
interface RightTopProps {}
interface LeftBottomProps {}

type ChatCardProviderProps = React.PropsWithChildren<ContextProps>;
type ChatCardWrapperProps = React.PropsWithChildren<WrapperProps> & HTMLAttributes<HTMLElement>;
type ChatCardImageProps = React.PropsWithChildren<ImageProps> & HTMLAttributes<HTMLImageElement>;
type ChatCardCounterProps = React.PropsWithChildren<CounterProps> & HTMLAttributes<HTMLDivElement>;
type ChatCardUserIdProps = React.PropsWithChildren<UserIdProps> &
    Omit<HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLTextAreaElement>, 'color'>;
type ChatCardMessageTextProps = React.PropsWithChildren<MessageText> &
    Omit<HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLTextAreaElement>, 'color'>;

type ChatUserRightTopProps = React.PropsWithChildren<RightTopProps>;
type ChatCardLeftBottomProps = React.PropsWithChildren<LeftBottomProps>;

const publicURL = process.env.PUBLIC_URL;
const ChatCardContext = React.createContext<ContextProps>({
    userId: 0,
    isVisit: false,
});

const useChatCardContext = () => React.useContext(ChatCardContext);

// Provider
const ChatCardProvider = ({ userId, isVisit, children }: ChatCardProviderProps) => {
    return <ChatCardContext.Provider value={{ userId, isVisit }}>{children}</ChatCardContext.Provider>;
};
// Wrapper
const ChatCardWrapper = ({ width = '200px', children, ...rest }: ChatCardWrapperProps) => {
    const { isVisit } = useChatCardContext();
    return (
        <Wrapper isVisit={isVisit} width={width} {...rest}>
            {children}
        </Wrapper>
    );
};
// Image
const ChatCardImage = ({
    src = '',
    alt = '',
    width = '50px',
    height = '50px',
    radius = '50%',
    ...rest
}: ChatCardImageProps) => {
    const newSrc = !src ? publicURL + 'image/default/default-chat-user-img.svg' : src;
    return <LaziedImage src={newSrc} alt={alt} style={{ width, height, borderRadius: radius }} {...rest} />;
};

// UserId
const ChatCardUserId = ({ children, ...rest }: ChatCardUserIdProps) => {
    return (
        <UserId variant="BODY3" {...rest} marginBottom={8}>
            {children}
        </UserId>
    );
};
const ChatCardMessageText = ({ children, ...rest }: ChatCardMessageTextProps) => {
    return (
        <Message variant="BODY3" {...rest}>
            {children}
        </Message>
    );
};
// Count
const ChatCardCounter = ({ children, ...rest }: ChatCardCounterProps) => {
    const counter = typeof children === 'number' ? formatNumber(children) : children;
    if (!counter) return null;
    return <CounterDiv {...rest}>{counter}</CounterDiv>;
};
// Right Top
const ChatCardRightTop = ({ children, ...rest }: ChatUserRightTopProps) => {
    return <RightTop {...rest}>{children}</RightTop>;
};
// Left Bottom
const ChatCardLeftBottom = ({ children, ...rest }: ChatCardLeftBottomProps) => {
    return <LeftBottom {...rest}>{children}</LeftBottom>;
};
const ChatCard = Object.assign(ChatCardProvider, {
    Wrapper: ChatCardWrapper,
    Image: ChatCardImage,
    Counter: ChatCardCounter,
    UserId: ChatCardUserId,
    Message: ChatCardMessageText,
    RightTop: ChatCardRightTop,
    LeftBottom: ChatCardLeftBottom,
});

export default ChatCard;

const Wrapper = styled.span<WrapperProps>`
    width: ${({ width }) => width};
    //  height: calc(100% + 20px);
    height: 300px;
    display: flex;
    /* border: 1px solid ${theme.colors.lgrey}; */
    border-radius: 8px;
    box-shadow: 0px 0px 10px 1px rgb(200, 200, 200);
    padding: 16px 8px;

    justify-content: flex-start;
    align-items: center;

    position: relative;
    overflow: visible;
    background-color: ${({ isVisit }) => (isVisit ? theme.colors.secondary : theme.colors.white)};
    cursor: pointer;
    transition: background-color 0.35s ease-in-out, color 0.25s ease-in-out;

    &:hover {
        background-color: ${theme.colors.lgrey_50};
    }
`;
const LaziedImage = styled(LazyImage)<ImageProps>`
    object-fit: cover;
`;

const CounterDiv = styled.div`
    right: 10px;
    bottom: 10px;
    /* transform: translate(150%, 150%); */

    width: 40px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    font-size: ${theme.fontSize.sm};
    color: ${theme.colors.white};
    background-color: ${theme.colors.sementic};
`;

const UserId = styled(Typography)`
    display: flex;
    /* align-items: center; */
    padding-left: 8px;
    font-size: ${theme.fontSize.md};
    font-weight: ${theme.fontWeight.regular};
    width: 200px;
`;
const Message = styled(Typography)`
    padding-left: 8px;
    width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const RightTop = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
`;

const LeftBottom = styled.div`
    position: absolute;
    right: 10px;
    bottom: 10px;
`;

function formatNumber(value) {
    return value >= 999 ? '999' : value;
}
