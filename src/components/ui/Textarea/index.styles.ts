import styled from "@emotion/styled";
import { TextareaProps } from "./index.types";

export const TextArea = styled.textarea<Required<TextareaProps>>`
  width: ${({ width }) => width};
  height: ${({ height }) => `${height}px`};

  color: ${({ theme, color }) => theme.colors[color]};
  ::placeholder {
    color: ${({ color }) => color};
  }
  font-size: ${({ fontSize, theme }) => theme.fontSize[fontSize]};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};

  letter-spacing: ${({ letterSpacing }) => letterSpacing};

  padding: ${({ paddingTop, paddingRight, paddingBottom, paddingLeft }) =>
    `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`};

  margin: ${({ margin, marginTop, marginRight, marginBottom, marginLeft }) =>
    margin ||
    `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`};

  border: 0;
  background-color: ${({ backgroundColor, theme }) =>
    `${theme.colors[backgroundColor]}!important`};
  border-color: ${({ borderColor, theme }) =>
    `${theme.colors[borderColor]}!important`};
  border-radius: ${({ radius }) => `${radius}px`};
  border-style: solid;
  border-width: 1px;
  box-shadow: ${({ boxShadow }) => boxShadow};

  opacity: ${({ opacity }) => opacity};

  box-sizing: border-box;
  ::-webkit-scrollbar {
    display: none;
  }
`;
