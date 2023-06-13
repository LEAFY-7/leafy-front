import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { BoxProps } from "./index.types";

export const Box = styled.span<Required<BoxProps>>`
  ${({ as }) => as === "span" && `display: inline-block;`};

  width: ${({ width }) => (typeof width === "number" ? `${width}%` : width)};
  height: ${({ height }) =>
    typeof height === "number" ? `${height}%` : height};
  min-width: ${({ minWidth }) => minWidth};
  min-height: ${({ minWidth }) => minWidth};

  position: ${({ position }) => position};
  display: ${({ display }) => display};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  left: ${({ left }) => left};
  z-index: ${({ zIndex }) => zIndex};

  padding: ${({
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
  }) =>
    padding ||
    `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`};

  margin: ${({ margin, marginTop, marginRight, marginBottom, marginLeft }) =>
    margin ||
    `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`};

  background-color: ${({ backgroundColor, theme }) =>
    `${theme.colors[backgroundColor]}!important`};
  background-image: ${({ backgroundImage }) => backgroundImage};

  border-radius: ${({ radius }) => `${radius}px`};
  box-shadow: ${({ boxShadow }) => boxShadow};
  border-style: solid;
  border-width: ${({ borderWidth }) => `${borderWidth}px`};
  box-sizing: border-box;

  backface-visibility: ${({ backfaceVisibility }) => backfaceVisibility};
  cursor: ${({ cursor }) => cursor};
  opacity: ${({ opacity }) => opacity};
  overflow: ${({ overflow }) => overflow};
  gap: ${({ gap }) => gap};
  flex-grow: 1;

  overflow-x: hidden;
`;
