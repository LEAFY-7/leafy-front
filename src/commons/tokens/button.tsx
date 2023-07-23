/** @jsxImportSource @emotion/react */
import React from 'react';
import { buttonSize, buttonState, buttonStep, buttonText } from './button.style';
import { RxArrowTopRight } from 'react-icons/rx';

interface Props {
    id?: string;
    size?: 'xl' | 'l' | 's';
    variant?: 'primary' | 'secondary' | 'basic';
    state?: 'default' | 'disabled' | 'hover' | 'focus' | 'pressed';
    text: string;
    leftIcon?: React.ReactNode;
    showIcon: boolean;
    showText: boolean;
}

export const Button = ({
    id,
    variant = 'secondary',
    size = 'xl',
    state = 'default',
    text = 'click',
    showText = true,
    showIcon = true,
    leftIcon = <RxArrowTopRight />,
}: React.PropsWithChildren<Props>) => {
    const sizeCss = buttonSize(size).size.styles;
    const stepCss = buttonStep[state][variant].styles;
    const stateCss = buttonState(state, variant).state;
    const textCss = buttonText(showText && 'text', variant).state.styles;
    return (
        <button css={[sizeCss, stepCss, stateCss, textCss]}>
            {text}
            {showIcon && leftIcon}
        </button>
    );
};

export default Button;
