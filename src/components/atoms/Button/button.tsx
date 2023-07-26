/** @jsxImportSource @emotion/react */
import React from 'react';
import { buttonSize, buttonState, buttonStep, buttonText, buttonDrop } from './buttons.style';
import { RxArrowTopRight } from 'react-icons/rx';
import { TokenButtonState, states, steps, drop } from './button.types';

interface Props {
    id?: string;
    //disabled 상태에서 벗어나기 위한 조건
    condition?: boolean;
    size: 'xl' | 'l' | 's';
    variant: 'primary' | 'secondary' | 'basic';
    state: states;
    text: string;
    leftIcon?: React.ReactNode;
    showIcon: boolean;
    showText: boolean;
    showDrop?: drop;
    disabled?: boolean;
}
const dropState = (state: states): drop => {
    if (state === 'default' || state === 'disabled' || state === 'text') return false;
    return true;
};
export const Button = ({
    id,
    condition = false,
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
    const dropCss = dropState(handle) && buttonDrop(handle, states)[states].styles;
    const sizeCss = buttonSize(size).size.styles;
    const stepCss = buttonStep(handle, variant)[handle][variant].styles;
    const stateCss = buttonState(handle, variant).state.styles;
    const textCss = buttonText('text', variant).state.styles;
    if (handleButtonState(condition) === 'disabled') {
        return (
            <button css={[sizeCss, stepCss, stateCss, textCss, dropCss]}>
                {showText && text}
                {showIcon && leftIcon}
            </button>
        );
    }
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

//button disabled 상태 변경 함수
export const handleButtonState = (condition) => {
    if (condition) return 'default';
    return 'disabled';
};
