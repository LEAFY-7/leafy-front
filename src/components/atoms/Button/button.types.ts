import { Properties, BorderValues} from "@tokens-studio/types";
import button from "../../../commons/tokens/button.json";

const TokenButton = { 
    size : button.size,
    default : button.default,
    disabled : button.disabled,
    pressed : button.pressed,
    text : button.text,
    hover : button.hover,
    focus: button.focus,
    drop: button.drop
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

export type states = "default" | "disabled"| "pressed" | "text" | "hover" | "focus";

export type steps = "primary" | "secondary" | "basic" | "basic-disabled";

//state에서 step찾기
export const TokenButtonState = (state:states, step:steps) => {
    return TokenButton[state][`sys-button-${step}`];
}
export const TokenButtonStyle = (state:states, step:steps) => {
    const token = TokenButtonState(state,  step);
    return {
        background : token[Properties.fill].value,
        borderColors : token[Properties.border][BorderValues.BORDER_COLOR].value,
        borderColor : token[Properties.borderColor]?.value,
        borderWidth : token[Properties.border][BorderValues.BORDER_WIDTH].value,
        borderStyle : token[Properties.border][BorderValues.BORDER_STYLE].value
    }
};

export type drop = true | false;

const TokenButtonDropList = {
    drop : TokenButton.drop["sys-button-drop"],
    reverse : TokenButton.drop["sys-button-drop-reverse"]
}

export const TokenButtonDrop = (state) =>{
    let dropList = state==="pressed" ? "reverse" : "drop";
    return{
        fill : TokenButtonDropList[dropList][Properties.fill].value,
        opacity : TokenButtonDropList[dropList][Properties.opacity].value,
        size : TokenButtonDropList[dropList][Properties.sizing].value
    }
};