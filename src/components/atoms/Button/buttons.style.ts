/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {TokenButtonSizeList, TokenButtonState, TokenButtonStyle} from "./button.types";
import { values } from "mobx";
//{buttonShadowValue, TokenButtonSizeList, TokenButtonStyle}
export const buttonSize = (size) => {
    return {
        size : css`
            width: ${TokenButtonSizeList(size).width};
            height: ${TokenButtonSizeList(size).height};
            padding: ${TokenButtonSizeList(size).vPadding} ${TokenButtonSizeList(size).hPadding};
            border-radius: ${TokenButtonSizeList(size).borderRadius};
            font-size: ${TokenButtonSizeList(size).typography.fontSize.value};
            font-weight: ${TokenButtonSizeList(size).typography.fontWeight.value};
            line-height: ${TokenButtonSizeList(size).typography.lineHeight.value};
        `
    }
}

export const buttonStep = (state, step) => {
    return{
        [state] : {
        [step] : css `
            background-color: ${TokenButtonStyle(state, step).backgroundColor};
            border-width: ${TokenButtonStyle(state, step).borderWidth};
            border-style: ${TokenButtonStyle(state, step).borderStyle};
            border-color: ${TokenButtonStyle(state, step).borderColor};
        `
        }}
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
            color: ${TokenButtonState(state, step).fill.value};
        `
    }
}