/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {TokenButtonSizeList, TokenButtonState, TokenButtonStyle} from "./button.types";
import { values } from "mobx";
//{buttonShadowValue, TokenButtonSizeList, TokenButtonStyle}
export const buttonSize = (size) => {
    return {
        size : css`
            width: ${TokenButtonSizeList[size].width.value};
            height: ${TokenButtonSizeList[size].height};
            padding: ${TokenButtonSizeList[size].vPadding} ${TokenButtonSizeList[size].hPadding};
            border-radius: ${TokenButtonSizeList[size].borderRadius};
            font-size: ${TokenButtonSizeList[size].typography.fontSize.value};
            font-weight: ${TokenButtonSizeList[size].typography.fontWeight.value};
            line-height: ${TokenButtonSizeList[size].typography.lineHeight.value};
        `
    }
}

export const buttonStep = {
    default : {
        primary : css `
            background-color: ${TokenButtonStyle("default", "primary").backgroundColor};
            border-width: ${TokenButtonStyle("default", "primary").borderWidth};
            border-style: ${TokenButtonStyle("default", "primary").borderStyle};
            border-color: ${TokenButtonStyle("default", "primary").borderColor};
        `,
        secondary : css`
            background-color: ${TokenButtonStyle("default", "secondary").backgroundColor};
            border: ${TokenButtonStyle("default", "secondary").borderWidth}
            ${TokenButtonStyle("default", "secondary").borderStyle}
            ${TokenButtonStyle("default", "secondary").borderColor};

        `

    },
    disabled: {
        primary : css `
            background-color: ${TokenButtonStyle("disabled", "primary").backgroundColor};
            border: ${TokenButtonStyle("disabled", "primary").borderWidth}
            ${TokenButtonStyle("disabled", "primary").borderStyle}
            ${TokenButtonStyle("disabled", "primary").borderColor};
        `,
        secondary : css`
            background-color: ${TokenButtonStyle("disabled", "secondary").backgroundColor};
            border: ${TokenButtonStyle("disabled", "secondary").borderWidth}
            ${TokenButtonStyle("disabled", "secondary").borderStyle}
            ${TokenButtonStyle("disabled", "secondary").borderColor};

        `
    }
}

export const buttonState = (state, step) => {
    return {
        state : css`
            background-color: ${TokenButtonStyle(state, step).backgroundColor};
        `
    }
}

export const buttonText = (state, step) =>{
    return{
        state : css`
            color: ${TokenButtonState(state, step).color.value};
        `
    }
}

export const buttonText = (state, step) =>{
    return{
        state : css`
            color: ${TokenButtonState(state, step).color.value};
        `
    }
}

// const boxShadow = css`
// box-shadow: ${buttonShadowValue.type} ${buttonShadowValue.x} ${buttonShadowValue.y} ${buttonShadowValue.blur} ${buttonShadowValue.spread} ${buttonShadowValue.color};
// `
