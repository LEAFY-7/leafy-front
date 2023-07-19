import React from "react";
import button from "./button.json";

const buttonShadow = button["ref-pressed"];

export const buttonShadowValue = {
    x : valueSelector("x", buttonShadow),
    y : valueSelector("y", buttonShadow),
    blur: valueSelector("blur", buttonShadow),
    spread : valueSelector("spread", buttonShadow),
    color : valueSelector("color", buttonShadow),
    type : valueSelector("type", buttonShadow) === "innerShadow" ? "inset" : ""
} as const;

export const TokenButton = { 
    size : button.size,
    default : button.default,
    disabled : button.disabled,
    pressed : button.pressed,
    text : button.text,
    hover : button.hover,
    focus : button.focus
} as const;

export const TokenButtonSize = {
    xl : TokenButton.size["sys-button-xl"],
    l : TokenButton.size["sys-button-l"],
    s : TokenButton.size["sys-button-s"]
} as const;

export const TokenButtonSizeList = {
    xl : {
        width: TokenButtonSize.xl.width,
        height: TokenButtonSize.xl.height,
        vPadding: TokenButtonSize.xl.verticalPadding,
        hPadding: TokenButtonSize.xl.horizontalPadding,
        borderRadius: TokenButtonSize.xl.borderRadius,
        typography: TokenButtonSize.xl.typography
    },
    l : {
        width: TokenButtonSize.l.width,
        height: TokenButtonSize.l.height,
        vPadding: TokenButtonSize.l.verticalPadding,
        hPadding: TokenButtonSize.l.horizontalPadding,
        borderRadius: TokenButtonSize.l.borderRadius,
        typography: TokenButtonSize.l.typography
    },
    s : {
        width: TokenButtonSize.s.width,
        height: TokenButtonSize.s.height,
        vPadding: TokenButtonSize.s.verticalPadding,
        hPadding: TokenButtonSize.s.horizontalPadding,
        borderRadius: TokenButtonSize.s.borderRadius,
        typography: TokenButtonSize.s.typography
    }
    
}

type states = "default" | "disabled"| "pressed" | "text";

type steps = "primary" | "secondary" | "basic" | "basic-disabled";
//state에서 step찾기
export const TokenButtonState = (state:states, step:steps):string => {
    return TokenButton[state][`sys-button-${step}`];
}
export const TokenButtonStyle = (state:states, step:steps) => {
    const token = TokenButtonState(state,  step);
    return {
        backgroundColor : valueSelector("fill", token),
        borderColor : valueSelector("borderColor" || "border.color", token),
        borderWidth : valueSelector("border.width", token),
        borderStyle : valueSelector("border.style", token),
        // boxShadow : valueSelector(buttonShadowValue, token),
        color: valueSelector("color", token)
    }
};

export function valueSelector(key, token) {
    return token.find((t) => t === key).value;
}
