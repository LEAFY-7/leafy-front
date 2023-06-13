import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ButtonProps } from "./index.types";
import theme from "@styles/theme";

export const Button = styled.button<Required<ButtonProps>>`
  width: ${({ width }) => width};
  padding: ${({ paddingX, paddingY }) => `${paddingY}px ${paddingX}px`};
  border-width: 1px;
  border-style: solid;
  margin: ${({ marginTop, marginRight, marginBottom, marginLeft }) =>
    `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`};
  border-radius: ${({ radius }) => `${radius}px`};

  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor]};

  font-size: ${({ fontSize, theme }) => theme.fontSize[fontSize]};

  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight, theme }) => theme.lineHeight[lineHeight]};

  ${({ variant, theme }) => {
    switch (variant) {
      case "green": {
        return css`
          border-color: ${theme.colors.transparent};
          background-color: ${theme.colors.transparent};
          color: ${theme.colors.lgreen};
          transition: background-color 0.25s ease-in-out,
            border-color 0.25s ease-in-out, color 0.25s ease-in-out;
          &:focus {
            border-color: ${theme.colors.vert};
            background-color: ${theme.colors.vert};
            color: ${theme.colors.white};
          }
          &:hover {
            border-color: ${theme.colors.bgreen};
            background-color: ${theme.colors.bgreen};
            color: ${theme.colors.white};
          }
          &:active {
            border-color: ${theme.colors.green};
            background-color: ${theme.colors.green};
            color: ${theme.colors.white};
          }
        `;
      }
      case "green_border": {
        return css`
          border-color: ${theme.colors.lgreen};
          background-color: ${theme.colors.transparent};
          color: ${theme.colors.lgreen};
          transition: background-color 0.25s ease-in-out,
            border-color 0.25s ease-in-out, color 0.25s ease-in-out;
          &:focus {
            border-color: ${theme.colors.vert};
            background-color: ${theme.colors.vert};
            color: ${theme.colors.white};
          }
          &:hover {
            border-color: ${theme.colors.bgreen};
            background-color: ${theme.colors.white};
            color: ${theme.colors.bgreen};
          }
          &:active {
            border-color: ${theme.colors.green};
            background-color: ${theme.colors.green};
            color: ${theme.colors.white};
          }
        `;
      }
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
      case "red": {
        return css`
          border-color: ${theme.colors.red};
          background-color: ${theme.colors.red};
          color: ${theme.colors.white};
          transition: background-color 0.25s ease-in-out,
            border-color 0.25s ease-in-out, color 0.25s ease-in-out;
          &:focus {
            border-color: ${theme.colors.red};
            background-color: ${theme.colors.red};
            color: ${theme.colors.white};
          }
          &:hover {
            border-color: ${theme.colors.tdred_600};
            background-color: ${theme.colors.tdred_600};
            color: ${theme.colors.white};
          }
          &:active {
            border-color: ${theme.colors.tdred_900};
            background-color: ${theme.colors.tdred_900};
            color: ${theme.colors.white};
          }
        `;
      }
      default: {
        return css`
          border-color: ${theme.colors.transparent};
          background-color: ${theme.colors.transparent};
          color: ${theme.colors.inherit};
          transition: border-color 0.15s ease-in-out, color 0.15s ease-in-out;
          &:hover {
            border-color: ${theme.colors.transparent};
            color: ${theme.colors.skyBlue};
          }
        `;
      }
    }
  }}
  ${({ disabled }) =>
    disabled &&
    css`
      &:disabled {
        border-color: ${theme.colors.gray};
        background-color: ${theme.colors.gray};
        color: ${theme.colors.white};
      }
    `}
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
