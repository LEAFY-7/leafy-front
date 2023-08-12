import type { CSSProperties, HTMLAttributes } from 'react';
import React from 'react';
import styled from '@emotion/styled';

import LazyImage from 'components/atoms/LazyImage/default-image';
import Typography from 'components/atoms/Typograph/default-typography';
import { theme } from 'configs/ui.config';
import { css } from '@emotion/react';

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
interface RightTopProps {}
interface LeftBottomProps {}

type ChatCardProviderProps = React.PropsWithChildren<ContextProps>;
type ChatCardWrapperProps = React.PropsWithChildren<WrapperProps> & HTMLAttributes<HTMLElement>;
type ChatCardImageProps = React.PropsWithChildren<ImageProps> & HTMLAttributes<HTMLImageElement>;
type ChatCardCounterProps = React.PropsWithChildren<CounterProps> & HTMLAttributes<HTMLDivElement>;
type ChatCardUserIdProps = React.PropsWithChildren<UserIdProps> &
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
// Count
const ChatCardCounter = ({ children, ...rest }: ChatCardCounterProps) => {
    const counter = typeof children === 'number' ? formatNumber(children) : children;
    return <CounterDiv {...rest}>{counter}</CounterDiv>;
};
// UserId
const ChatCardUserId = ({ children, ...rest }: ChatCardUserIdProps) => {
    return (
        <UserId variant="BODY3" {...rest}>
            {children}
        </UserId>
    );
};

const ChatCardRightTop = ({ children, ...rest }: ChatUserRightTopProps) => {
    return <RightTop {...rest}>{children}</RightTop>;
};
const ChatCardLeftBottom = ({ children, ...rest }: ChatCardLeftBottomProps) => {
    return <LeftBottom {...rest}>{children}</LeftBottom>;
};
const ChatCard = Object.assign(ChatCardProvider, {
    Wrapper: ChatCardWrapper,
    Image: ChatCardImage,
    Counter: ChatCardCounter,
    UserId: ChatCardUserId,
    RightTop: ChatCardRightTop,
    LeftBottom: ChatCardLeftBottom,
});

export default ChatCard;

const Wrapper = styled.span<WrapperProps>`
    width: ${({ width }) => width};
    //  height: calc(100% + 20px);
    height: 300px;
    display: flex;
    border: 1px solid ${theme.colors.lgrey};
    border-radius: 8px;
    padding: 16px 8px;

    position: relative;
    overflow: visible;
    background-color: ${({ isVisit }) => (isVisit ? theme.colors.secondary : theme.colors.white)};
    cursor: pointer;
    transition: background-color 0.35s ease-in-out, color 0.25s ease-in-out;

    &:hover {
        background-color: ${theme.colors.primary};
    }
`;
const LaziedImage = styled(LazyImage)<ImageProps>`
    object-fit: cover;
`;

const CounterDiv = styled.div`
    position: absolute;
    transform: translate(150%, 150%);
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 10px;
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
    return value >= 999 ? '999' : value.toString();
}
