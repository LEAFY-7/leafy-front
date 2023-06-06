import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ButtonProps } from "./index.types";

export const Button = styled.button<Required<ButtonProps>>`
  width: ${({ width }) => width};
  padding: ${({ paddingX, paddingY }) => `${paddingY}px ${paddingX}px`};
  border-width: 0.5px;
  border-style: solid;
  margin: ${({ marginTop, marginRight, marginBottom, marginLeft }) =>
    `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`};
  border-radius: ${({ radius }) => `${radius}px`};

  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor]};

  font-size: ${({ fontSize, theme }) => theme.fontSize[fontSize]};

  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight, theme }) => theme.lineHeight[lineHeight]};

  ${({ variant, theme, disabled }) => {
    switch (variant) {
      case "blue": {
        return css`
          border-color: ${theme.colors.transparent};
          background-color: ${theme.colors.transparent};
          color: ${theme.colors.blue};
          transition: background-color 0.25s ease-in-out,
            border-color 0.25s ease-in-out, color 0.25s ease-in-out;
          &:focus {
            border-color: ${theme.colors.blue};
            background-color: ${theme.colors.blue};
            color: ${theme.colors.white};
          }
          &:hover {
            border-color: ${theme.colors.transparent};
            background-color: ${theme.colors.transparent};
            color: ${theme.colors.skyBlue};
          }
          &:active {
            border-color: ${theme.colors.skyBlue};
            background-color: ${theme.colors.skyBlue};
            color: ${theme.colors.white};
          }

          ${disabled &&
          css`
            &:disabled {
              border-color: ${theme.colors.gray};
              background-color: ${theme.colors.gray};
              color: ${theme.colors.white};
            }
          `}
        `;
      }
      case "blue_border": {
        return css`
          border-color: ${theme.colors.blue};
          background-color: ${theme.colors.transparent};
          color: ${theme.colors.blue};
          transition: background-color 0.25s ease-in-out,
            border-color 0.25s ease-in-out, color 0.25s ease-in-out;
          &:focus {
            border-color: ${theme.colors.blue};
            background-color: ${theme.colors.blue};
            color: ${theme.colors.white};
          }
          &:hover {
            border-color: ${theme.colors.skyBlue};
            background-color: ${theme.colors.transparent};
            color: ${theme.colors.skyBlue};
          }
          &:active {
            border-color: ${theme.colors.skyBlue};
            background-color: ${theme.colors.skyBlue};
            color: ${theme.colors.white};
          }
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

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
