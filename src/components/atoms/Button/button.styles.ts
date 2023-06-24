import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonStyleProp } from "./Button";

export const Button = styled.button<ButtonStyleProp>`
  padding-left: ${({ padding }) => padding};
  padding-top: ${({ padding }) => padding};
  padding-right: ${({ padding }) => padding};
  padding-bottom: ${({ padding }) => padding};
  border-radius: ${({ radius }) => radius};
  height: ${({ height }) => height};
  font-size: ${({ fontSize }) => fontSize};

  border: 1px solid #000;
  outline: none;
  word-break: keep-all;
  cursor: pointer;

  font-weight: ${({ theme }) => theme.fontWeight.bold};

  ${({ variant, theme }) => {
    switch (variant) {
      case "green": {
        return css`
          border-color: ${theme.colors.transparent};
          background-color: ${theme.colors.transparent};
          color: ${theme.palette.green.color};
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
  ${({ disabled, theme }) =>
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
`;
