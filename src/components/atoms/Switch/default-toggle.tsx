/** @jsxImportSource @emotion/react */
import type { HTMLAttributes, ReactNode } from 'react';
import { css } from '@emotion/react';
import { theme } from 'configs/ui.config';
import useVariant from 'hooks/useVariant';
import useToggle from 'hooks/useToggle';
import toggleStyle from './toggle.style';

interface Props extends HTMLAttributes<HTMLElement> {
    isOn?: boolean;
    leftColor?: keyof typeof theme.colors;
    rightColor?: keyof typeof theme.colors;
    variant?: 'primary' | 'default';
    on: string | ReactNode;
    off: string | ReactNode;
    onToggle?: () => void;
    darkMode?: boolean;
}

const Toggle = ({
    on = 'on',
    off = 'off',
    variant = 'primary',
    leftColor = 'primary',
    rightColor = 'secondary',
    onToggle,
    darkMode = false,
    children,
    ...rest
}: Props) => {
    const toggleVariant = useVariant({ variant: variant, callback: toggleStyle.variantStyles });
    const { isOpen, handler } = useToggle({ callback: onToggle });

    console.log('toggle', isOpen);
    const wrapperStyle = css`
        position: relative;
        cursor: pointer;
        width: 60px;
        height: 30px;
        background-color: ${isOpen ? theme.colors[leftColor] : theme.colors[rightColor]};
        border-radius: 15px;
        position: relative;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${theme.colors.white};
        font-weight: ${theme.fontWeight.bold};
        padding: 0 5px;
        ${darkMode && toggleVariant}
    `;

    const contentStyle = css`
        width: 25px;
        height: 25px;
        background-color: white;
        border-radius: 50%;
        position: absolute;
        top: 2.5px;
        left: ${isOpen ? 'calc(100% - 27.5px)' : '2.5px'};
        transition: left 0.3s ease-in-out;
    `;
    const descStyle = css`
        font-size: ${theme.fontSize.sm};
        flex: 1;
        text-align: ${isOpen ? 'left' : 'right'};
        height: 100%;
        font-size: large;
    `;

    return (
        <div css={wrapperStyle} onClick={handler} {...rest}>
            <div css={contentStyle}>
                <div css={descStyle}>{isOpen ? off : on}</div>
            </div>
        </div>
    );
};

export default Toggle;
