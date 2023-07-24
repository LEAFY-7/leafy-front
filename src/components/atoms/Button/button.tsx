/** @jsxImportSource @emotion/react */
import React from 'react';
import { buttonSize, buttonState, buttonStep, buttonText, buttonDrop } from './buttons.style';
import { RxArrowTopRight } from 'react-icons/rx';
import { TokenButtonState, states, steps, drop } from './button.types';

interface Props {
    id?: string;
    size: 'xl' | 'l' | 's';
    variant: 'primary' | 'secondary' | 'basic';
    state?: states;
    text: string;
    leftIcon?: React.ReactNode;
    showIcon: boolean;
    showText: boolean;
    showDrop?: drop;
}
const dropState = (state: states): drop => {
    if (state === 'default' || state === 'disabled' || state === 'text') return false;
    return true;
};
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
    const states = TokenButtonState(state, variant);
    const sizeCss = buttonSize(size).size.styles;
    const stepCss = buttonStep(state, variant)[state][variant].styles;
    const stateCss = buttonState(state, variant).state.styles;
    const textCss = buttonText('text', variant).state.styles;
    const dropCss = dropState(state) && buttonDrop(state, states)[states].styles;
    return (
        <button css={[sizeCss, stepCss, stateCss, textCss, dropCss]}>
            {showText && text}
            {showIcon && leftIcon}
        </button>
    );
};

export default Button;
