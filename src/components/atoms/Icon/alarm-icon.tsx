import type { HTMLAttributes } from 'react';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from 'configs/ui.config';

interface IconProps {
    count?: number;
}

type Props = React.PropsWithChildren<IconProps> & HTMLAttributes<HTMLElement>;

const AlarmIcon = ({ count = 0, ...rest }: Props) => {
    const publicUrl = process.env.PUBLIC_URL;

    return (
        <>
            <Wrapper isActive={count && true}>
                <img src={`${publicUrl}/image/icons/alarm.svg`} {...rest} />
            </Wrapper>
            {count ? <Alarm>{count < 99 ? count : '99+'}</Alarm> : null}
        </>
    );
};
export default AlarmIcon;

const AlarmAnimation = keyframes`
   0%, 100% {
    transform: translateX(3px);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-3px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(0);
  }

`;

const Wrapper = styled.div<{ isActive: boolean }>`
    display: inline-block;
    ${({ isActive }) =>
        isActive &&
        css`
            animation: ${AlarmAnimation} 6s infinite alternate;
        `}
`;
const Alarm = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transform: translate(10%, -50%);
    background-color: ${theme.colors.sementic};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.white};
    font-size: ${theme.fontSize.xs};
`;
