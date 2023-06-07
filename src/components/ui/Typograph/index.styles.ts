import styled from "@emotion/styled";

import { Props } from "./index.types";
import { css } from "@emotion/react";

export const Text = styled.span<Props>`
  padding: ${({ paddingTop, paddingRight, paddingBottom, paddingLeft }) =>
    `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`};
  margin: ${({ marginTop, marginRight, marginBottom, marginLeft }) =>
    `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`};
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: ${({ fontSize, theme }) => theme.fontSize[fontSize]};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight, theme }) => theme.lineHeight[lineHeight]};
  opacity: ${({ opacity }) => opacity};
  text-align: ${({ textAlign }) => textAlign};

  ${({ as }) => as === "span" && `display: inline-block;`}

  ${({ variant, theme }) => {
    switch (variant) {
      case "H1": {
        return css`
          font-size: ${theme.fontSize.xxxxl};
          font-weight: ${theme.fontWeight.bold};
          line-height: ${theme.lineHeight.xxxxl};
        `;
      }
      case "H2": {
        return css`
          font-size: ${theme.fontSize.xxxl};
          font-weight: ${theme.fontWeight.bold};
          line-height: ${theme.lineHeight.xxxl};
        `;
      }
      case "H3": {
        return css`
          font-size: ${theme.fontSize.xxl};
          font-weight: ${theme.fontWeight.semiBold};
          line-height: ${theme.lineHeight.xxl};
        `;
      }
      case "BODY1": {
        return css`
          font-size: ${theme.fontSize.lg};
          font-weight: ${theme.fontWeight.semiBold};
          line-height: ${theme.lineHeight.lg};
        `;
      }
      case "BODY2": {
        return css`
          font-size: ${theme.fontSize.md};
          font-weight: ${theme.fontWeight.regular};
          line-height: ${theme.lineHeight.md};
        `;
      }
      case "BODY3": {
        return css`
          font-size: ${theme.fontSize.sm};
          font-weight: ${theme.fontWeight.regular};
          line-height: ${theme.lineHeight.sm};
        `;
      }

      default: {
        return css`
          border-color: ${theme.colors.inherit};
          background-color: ${theme.colors.inherit};
          color: ${theme.colors.black};
          transition: border-color 0.15s ease-in-out, color 0.15s ease-in-out;
          &:hover {
            border-color: ${theme.colors.transparent};
            color: ${theme.colors.blue};
          }
        `;
      }
    }
  }}
`;
