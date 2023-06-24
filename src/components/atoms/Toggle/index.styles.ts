import styled from "@emotion/styled";
import { ToggleContent, ToggleDesc, ToggleWrapper } from "./index.types";
import theme from "@styles/theme";
import { css } from "@emotion/react";

export const Wrapper = styled.div<Required<ToggleWrapper>>`
  position: relative;
  cursor: pointer;
  width: 60px;
  height: 30px;
  background-color: ${({ isOn, leftColor, rightColor }) =>
    isOn ? theme.colors[leftColor] : theme.colors[rightColor]};
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeight.bold};
  padding: 0 5px;
`;

export const Content = styled.div<Required<ToggleContent>>`
  width: 25px;
  height: 25px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 2.5px;
  left: ${({ isOn }) => (isOn ? "calc(100% - 27.5px)" : "2.5px")};
  transition: left 0.3s ease-in-out;
`;

export const Desc = styled.div<Required<ToggleDesc>>`
  font-size: ${theme.fontSize.sm};
  flex: 1;
  text-align: ${({ isOn }) => (isOn ? "left" : "right")};
`;
