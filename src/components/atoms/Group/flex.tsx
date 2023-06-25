import React from "react";
import styled from "@emotion/styled";
import { FlexProps, Props } from "./flex.types";

const Flex = React.forwardRef(function Flex(
  {
    as = "span",
    display = "flex",
    direction = "row",
    wrap = "nowrap",
    justifyContent = "flex-start",
    alignItems = "flex-start",
    alignContent = "normal",
    backgroundColor = "inherit",
    children,
    ...rest
  }: React.PropsWithChildren<Props>,
  forwardedRef: React.Ref<HTMLElement>
) {
  return (
    <Wrapper
      as={as}
      display={display}
      direction={direction}
      wrap={wrap}
      justifyContent={justifyContent}
      alignItems={alignItems}
      alignContent={alignContent}
      backgroundColor={backgroundColor}
      ref={forwardedRef}
      {...rest}
    >
      {children}
    </Wrapper>
  );
});

export default Flex;

export const Wrapper = styled.span<Required<FlexProps>>`
  display: ${({ display }) => display};
  flex-direction: ${({ direction }) => direction};
  flex-wrap: ${({ wrap }) => wrap};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  align-content: ${({ alignContent }) => alignContent};
  background-color: ${({ backgroundColor, theme }) =>
    theme.colors[backgroundColor]};
`;
