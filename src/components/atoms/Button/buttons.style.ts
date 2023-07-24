/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {TokenButtonDrop, TokenButtonSizeList, TokenButtonState, TokenButtonStyle} from "./button.types";

//{buttonShadowValue, TokenButtonSizeList, TokenButtonStyle}
export const buttonSize = (size) => {
    return {
        size : css`
            position: relative;
            overflow: hidden;
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
            background: ${TokenButtonStyle(state, step).background};
            border-width: ${TokenButtonStyle(state, step).borderWidth};
            border-style: ${TokenButtonStyle(state, step).borderStyle};
            border-color: ${TokenButtonStyle(state, step).borderColors};
            border-color: ${TokenButtonStyle(state, step).borderColor};
        `
        }}
}

export const buttonState = (state, step) => {
    return {
        state : css`
            background-color: ${TokenButtonStyle(state, step).background};
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

export const buttonDrop = (state, button) =>{
    if(state === "focus"){
        return{
            [button] : css`
            &::before{
                content: "";
                display:block;
                position: absolute;
                top: 20%;
                right: 20%;
                width: 20%;
                height: 20%;
                border-radius: 60% 60% 50% 40%;
                background: ${TokenButtonDrop(state).fill};
                opacity: ${TokenButtonDrop(state).opacity};
            }
            &::after{
                content: "";
                display:block;
                position: absolute;
                top: 20%;
                left: 20%;
                width: 20%;
                height: 20%;
                border-radius: 60% 60% 50% 40%;
                background: ${TokenButtonDrop(state).fill};
                opacity: ${TokenButtonDrop(state).opacity};
            }
            `
        }
    }
    return{
        [button] : css`
            &::after{
                content: "";
                display:block;
                position: absolute;
                top: -10%;
                left: -10%;
                width:120%;
                height: 120%;
                background: ${TokenButtonDrop(state).fill};
                opacity: ${TokenButtonDrop(state).opacity};
            }
        `
    }
}