/** @jsxImportSource @emotion/react */
import React from 'react';
import { buttonSize, buttonState, buttonStep } from './button.style';
import { RxArrowTopRight } from 'react-icons/rx';
import { TokenButtonStyle } from './button.types';
import { css } from '@emotion/react';

interface Props {
    id?: string;
    size?: 'xl' | 'l' | 's';
    variant?: 'primary' | 'secondary' | 'basic';
    state?: 'default' | 'disabled' | 'hover' | 'focus' | 'pressed';
    text: string;
    leftIcon?: React.ReactNode;
    showIcon: boolean;
}

export const Button = ({
    id,
    variant = 'secondary',
    size = 'xl',
    state = 'default',
    text = 'click',
    showIcon = true,
    leftIcon = <RxArrowTopRight />,
}: React.PropsWithChildren<Props>) => {
    const sizeCss = buttonSize(size).styles;
    const stepCss = buttonStep[state][variant].styles;
    const stateCss = buttonState(state, variant);
    console.log(stateCss);
    return (
        <button css={[sizeCss, stepCss, stateCss]}>
            {text}
            {showIcon && leftIcon}
        </button>
    );
};

export default Button;
