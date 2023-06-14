import React from "react";

import * as Styled from "./index.styles";
import { Props } from "./index.types";
import { Link } from "react-router-dom";

const Button = React.forwardRef(function Button(
  {
    variant = "default",
    disabled = false,
    backgroundColor = "inherit",
    fontSize = "md",
    lineHeight = "md",
    fontWeight = 400,
    radius = 8,
    marginTop = 0,
    marginRight = 0,
    marginBottom = 0,
    marginLeft = 0,
    paddingX = 16,
    paddingY = 8,
    width = "auto",
    leftIcon,
    rightIcon,
    to = "",
    children,
    ...rest
  }: React.PropsWithChildren<Props>,
  forwardedRef: React.Ref<HTMLButtonElement>
) {
  const buttonEl = (
    <Styled.Button
      variant={variant}
      disabled={disabled}
      backgroundColor={backgroundColor}
      radius={radius}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      paddingX={paddingX}
      paddingY={paddingY}
      width={width}
      fontSize={fontSize}
      lineHeight={lineHeight}
      fontWeight={fontWeight}
      ref={forwardedRef}
      {...rest}
    >
      <Styled.InnerWrapper>
        {leftIcon && leftIcon}
        {children}
        {rightIcon && rightIcon}
      </Styled.InnerWrapper>
    </Styled.Button>
  );
  return (
    <>
      {to ? (
        <Link
          to={to}
          style={{
            width: `${typeof width === "number" ? `${width}%` : width}`,
          }}
        >
          {buttonEl}
        </Link>
      ) : (
        <>{buttonEl}</>
      )}
    </>
  );
});

export default Button;
