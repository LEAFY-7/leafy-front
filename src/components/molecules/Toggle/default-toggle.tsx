/** @jsxImportSource @emotion/react */
import React from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { theme } from 'configs/style.config';

import useToggle from 'hooks/useToggle';
import { css } from '@emotion/react';

interface ToggleProps {
    isOn?: boolean;
}
interface ToggleWrapper extends ToggleProps {
    leftColor?: keyof typeof theme.colors;
    rightColor?: keyof typeof theme.colors;
}
interface ToggleContent extends ToggleProps {}

interface ToggleDesc extends ToggleProps {}
interface Props extends HTMLAttributes<HTMLElement>, ToggleWrapper {
    on: string | ReactNode;
    off: string | ReactNode;
    onToggle?: () => void;
}

const Toggle = ({
    on = 'on',
    off = 'off',
    leftColor = 'lgreen',
    rightColor = 'green',
    onToggle,
    children,
    ...rest
}: Props) => {
    const { isOn, handler } = useToggle(onToggle);

    const wrapperStyle = css`
        position: relative;
        cursor: pointer;
        width: 60px;
        height: 30px;
        background-color: ${isOn ? theme.colors[leftColor] : theme.colors[rightColor]};
        border-radius: 15px;
        position: relative;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${theme.colors.white};
        font-weight: ${theme.fontWeight.bold};
        padding: 0 5px;
    `;

    const contentStyle = css`
        width: 25px;
        height: 25px;
        background-color: white;
        border-radius: 50%;
        position: absolute;
        top: 2.5px;
        left: ${isOn ? 'calc(100% - 27.5px)' : '2.5px'};
        transition: left 0.3s ease-in-out;
    `;
    const descStyle = css`
        font-size: ${theme.fontSize.sm};
        flex: 1;
        text-align: ${isOn ? 'left' : 'right'};
        height: 100%;
        font-size: large;
    `;

    return (
        <div css={wrapperStyle} onClick={handler} {...rest}>
            <div css={contentStyle}>
                <div css={descStyle}>{isOn ? off : on}</div>
            </div>
        </div>
    );
};

export default Toggle;
