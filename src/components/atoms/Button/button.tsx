/** @jsxImportSource @emotion/react */
import React from 'react';
import { buttonSize, buttonState, buttonStep, buttonText, buttonDrop } from './buttons.style';
import { RxArrowTopRight } from 'react-icons/rx';
import { TokenButtonState, states, steps, drop } from './button.types';

interface Props {
    id?: string;
    size: 'xl' | 'l' | 's';
    variant: 'primary' | 'secondary' | 'basic';
    state: states;
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
    /* 필수, 변경 값*/
    state = 'default',
    /* 필수, 고정 값*/
    text = 'click',
    variant = 'secondary',
    size = 'xl',
    showText = true,
    showIcon = true,
    leftIcon = <RxArrowTopRight />,
}: React.PropsWithChildren<Props>) => {
    const [handle, setState] = React.useState(state);

    const onClick = () => setState('pressed');
    const onHover = () => setState('hover');
    const onLeave = () => setState('default');
    const onFocus = () => setState('focus');

    const states = TokenButtonState(handle, variant);
    const sizeCss = buttonSize(size).size.styles;
    const stepCss = buttonStep(handle, variant)[handle][variant].styles;
    const stateCss = buttonState(handle, variant).state.styles;
    const textCss = buttonText('text', variant).state.styles;
    const dropCss = dropState(handle) && buttonDrop(handle, states)[states].styles;
    return (
        <button
            onClick={onClick}
            onMouseOver={onHover}
            onFocus={onFocus}
            onBlur={onLeave}
            onMouseLeave={onLeave}
            css={[sizeCss, stepCss, stateCss, textCss, dropCss]}
        >
            {showText && text}
            {showIcon && leftIcon}
        </button>
    );
};

export default Button;
