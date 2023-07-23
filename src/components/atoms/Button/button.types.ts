import { Properties } from "@tokens-studio/types";
import button from "../../../commons/tokens/button.json";

const TokenButton = { 
    size : button.size,
    default : button.default,
    disabled : button.disabled,
    pressed : button.pressed,
    text : button.text,
    hover : button.hover
};

 const TokenButtonSize = {
    xl : TokenButton.size["sys-button-xl"],
    l : TokenButton.size["sys-button-l"],
    s : TokenButton.size["sys-button-s"]
};

type size = "xl" | "l" | "s";

export const TokenButtonSizeList = ( size:size ) =>{
    return{
        width: TokenButtonSize[size][Properties.width].value,
        height: TokenButtonSize[size][Properties.height].value,
        vPadding: TokenButtonSize[size][Properties.verticalPadding].value,
        hPadding: TokenButtonSize[size][Properties.horizontalPadding].value,
        borderRadius: TokenButtonSize[size][Properties.borderRadius].value,
        typography: TokenButtonSize[size][Properties.typography]
    }   
}

type states = "default" | "disabled"| "pressed" | "text";

type steps = "primary" | "secondary" | "basic" | "basic-disabled";

//state에서 step찾기
export const TokenButtonState = (state:states, step:steps) => {
    return TokenButton[state][`sys-button-${step}`];
}
export const TokenButtonStyle = (state:states, step:steps) => {
    const token = TokenButtonState(state,  step);
    return {
        backgroundColor : token.fill.value,
        borderColor : token.border.color.value,
        borderWidth : token.border.width.value,
        borderStyle : token.border.style.value
    }
};
