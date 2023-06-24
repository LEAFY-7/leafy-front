import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ImageProps } from "./index.types";
import theme from "@styles/theme";

export const Img = styled.img<Required<ImageProps>>`
  cursor: pointer;
  ${({ variant }) => {
    switch (variant) {
      case "icon_sm": {
        return css`
          width: ${theme.imgSize.sm};
          height: ${theme.imgSize.sm};
          border-radius: 50%;
        `;
      }
      case "icon_md": {
        return css`
          width: ${theme.imgSize.md};
          height: ${theme.imgSize.md};
          border-radius: 50%;
        `;
      }
      case "icon_lg": {
        return css`
          width: ${theme.imgSize.lg};
          height: ${theme.imgSize.lg};
          border-radius: 50%;
        `;
      }
      case "square_sm": {
        return css``;
      }
      case "square_md": {
        return css`
          width: 260px;
          height: 250px;
        `;
      }
      case "square_lg": {
        return css`
          width: 600px;
          height: 250px;
        `;
      }
      default: {
        return css`
          width: 100%;
          height: 100%;
        `;
      }
    }
  }}
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3));
  z-index: 999;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  margin: auto;
  width: 50vw;
  height: 80vh;
  background-color: #fff;
  position: relative;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  padding: 10px;
`;

export const DialogImage = styled.img<{ src: string }>`
  width: 100%;
  height: 100%;
`;
