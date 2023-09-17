import type { HTMLAttributes } from 'react';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from 'configs/ui.config';
import LinkWrapper from '../../molecules/Wrapper/link-wrapper';

interface IconProps {
    count?: number;
    to?: string;
}

type Props = React.PropsWithChildren<IconProps> & HTMLAttributes<HTMLElement>;

const ChatIcon = ({ to, count = 0, ...rest }: Props) => {
    return (
        <>
            <LinkWrapper to={to}>
                <Icon {...rest}>
                    {Array.from({ length: 3 }, (_, index) => (
                        <Dot key={index} isActive={count && true} />
                    ))}
                </Icon>
            </LinkWrapper>
            {count ? <Alarm>{count < 99 ? count : '99+'}</Alarm> : null}
        </>
    );
};
export default ChatIcon;

const dotBounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
`;

const Alarm = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transform: translate(50%, -100%);
    background-color: ${theme.colors.sementic};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.white};
    font-size: ${theme.fontSize.xs};
    z-index: 9;
`;

const Icon = styled.div`
    width: 50px;
    height: 50px;
    background-color: ${theme.colors.primary};
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;

    &:before {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 15px solid ${theme.colors.primary};
        top: 80%;
        left: 20%;
        transform: translateX(-50%) rotate(100deg);
    }
`;

const Dot = styled.div<{ isActive: boolean }>`
    width: 8px;
    height: 8px;
    background-color: #ffffff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 4px;

    ${({ isActive }) =>
        isActive &&
        css`
            animation: ${dotBounce} 1.5s infinite alternate;
        `}

    &:nth-of-type(1) {
        animation-delay: 0.5s;
    }

    &:nth-of-type(2) {
        animation-delay: 0.75s;
    }

    &:nth-of-type(3) {
        animation-delay: 1s;
    }
    &:last-child {
        margin-right: 0;
    }
`;
