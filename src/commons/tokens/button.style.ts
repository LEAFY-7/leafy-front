import { css } from "@emotion/react";
import {buttonShadowValue, TokenButtonSize,TokenButtonSizeList, TokenButtonStyle, valueSelector} from "./button.types";
import { values } from "mobx";
//{buttonShadowValue, TokenButtonSizeList, TokenButtonStyle}
const buttonSize = {
    xl : (TokenButtonSizeList) => css `
        width: ${TokenButtonSizeList.xl.width.value};
        height: ${TokenButtonSizeList.xl.height.value};
        padding: ${TokenButtonSizeList.xl.vPadding.value} ${TokenButtonSizeList.xl.hPadding.value};
        border-radius: ${TokenButtonSizeList.xl.borderRadius.value};
        font-size: ${TokenButtonSizeList.xl.typography.fontSize};
        font-weight: ${TokenButtonSizeList.xl.typography.fontWeight};
        line-height: ${TokenButtonSizeList.xl.typography.lineHeight};
    `
}

const boxShadow = css`
box-shadow: ${buttonShadowValue.type} ${buttonShadowValue.x} ${buttonShadowValue.y} ${buttonShadowValue.blur} ${buttonShadowValue.spread} ${buttonShadowValue.color};
`