import { CompositionTokenValue } from '@tokens-studio/types';
import button from 'commons/tokens/button.json';

const TokenButton = {
    size: button.size,
    default: button.default,
    disabled: button.disabled,
    pressed: button.pressed,
    text: button.text,
    hover: button.hover,
    focus: button.focus,
    drop: button.drop,
};

const TokenButtonSize = {
    xl: TokenButton.size['sys-button-xl'],
    l: TokenButton.size['sys-button-l'],
    s: TokenButton.size['sys-button-s'],
};

type size = 'xl' | 'l' | 's';

export const TokenButtonSizeList = (size: size) : CompositionTokenValue => {
    return {
        width: TokenButtonSize[size].width.value,
        height: TokenButtonSize[size].height.value,
        verticalPadding: TokenButtonSize[size].verticalPadding.value,
        horizontalPadding: TokenButtonSize[size].horizontalPadding.value,
        borderRadius: TokenButtonSize[size].borderRadius.value,
        lineHeights: TokenButtonSize[size].typography.lineHeight.value,
        fontSizes: TokenButtonSize[size].typography.fontSize.value,
        fontWeights: TokenButtonSize[size].typography.fontWeight.value,
    };
};

export type states = 'default' | 'disabled' | 'pressed' | 'text' | 'hover' | 'focus';

export type steps = 'primary' | 'secondary' | 'basic' | 'basic-disabled';

//state에서 step찾기
export const TokenButtonState = (state: states, step: steps) => {
    return TokenButton[state][`sys-button-${step}`];
};
export const TokenButtonStyle = (state: states, step: steps) : CompositionTokenValue => {
    const token = TokenButtonState(state, step);
    return {
        fill: token.fill.value,
        borderColor: token.border.color.value,
        composition: token.borderColor?.value,
        borderWidth: token.border.width.value,
        border: token.border.style.value,
    };
};

export type drop = true | false;

const TokenButtonDropList = {
    drop: TokenButton.drop['sys-button-drop'],
    reverse: TokenButton.drop['sys-button-drop-reverse'],
};

export const TokenButtonDrop = (state) => {
    const dropList = state === 'pressed' ? 'reverse' : 'drop';
    return {
        fill: TokenButtonDropList[dropList].fill.value,
        opacity: TokenButtonDropList[dropList].opacity.value,
        size: TokenButtonDropList[dropList].sizing.value,
    };
};
