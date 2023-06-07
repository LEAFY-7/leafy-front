import styled from "@emotion/styled";
import theme from "@styles/theme";
import { TextFieldProps, TextFieldInputProps } from "./index.types";
import { css } from "@emotion/react";

export const Wrapper = styled.div<Required<TextFieldProps>>`
  display: flex;
  width: 100%;
  padding: ${({ paddingX, paddingY }) => `${paddingY}px ${paddingX}px`};

  font-size: ${({ fontSize, theme }) => theme.fontSize[fontSize]};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight, theme }) => theme.lineHeight[lineHeight]};
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const Label = styled.label<Required<TextFieldProps>>`
  margin-inline: 1em;
  font-size: calc(${({ fontSize, theme }) => theme.fontSize[fontSize]} - 4px);
  padding: ${({ paddingX, paddingY }) => `${paddingY}px ${paddingX}px`};
`;

export const Icon = styled.div`
  position: absolute;
  left: 0;
  top: 10px;
  padding-left: 5px;
  color: ${theme.colors.gray};
`;
export const Input = styled.input<Required<TextFieldInputProps>>`
  padding: ${({ paddingX, paddingY }) => `${paddingY}px ${paddingX + 20}px`};
  border-width: 1px;
  border-style: solid;
  border-radius: ${({ radius }) => `${radius}px`};
  font-size: ${({ fontSize, theme }) => theme.fontSize[fontSize]};
  font-weight: ${({ fontWeight }) => fontWeight};
  opacity: 1;
  border-color: ${({ error }) =>
    error ? `${theme.colors.red}` : `${theme.colors.gray}`};

  &:focus {
    border-color: ${theme.colors.black};
    color: ${theme.colors.inherit};
    + .iconBox {
      color: ${theme.colors.black};
    }
  }
  &::placeholder {
    font-size: ${({ placeHolderFontSize, theme }) =>
      theme.fontSize[placeHolderFontSize]};
  }
`;

export const HelperText = styled.span<Required<TextFieldProps>>`
  width: 100%;
  padding: ${({ paddingX, paddingY }) =>
    `${paddingY - 12}px ${paddingX - 4}px`};

  font-size: ${theme.fontSize.sm};
  color: ${({ error }) => error && theme.colors.red};
  text-align: left;
  font-size: calc(${({ fontSize, theme }) => theme.fontSize[fontSize]} - 4px);
  font-weight: calc(${({ fontWeight }) => fontWeight} - 200);
  line-height: ${({ lineHeight, theme }) => theme.lineHeight[lineHeight]};
`;
// ${({ error }) =>
// error
//   ? css`
//       border-color: ${theme.colors.red};
//     `
//   : css`
//       border-color: ${theme.colors.gray};
//     `};
