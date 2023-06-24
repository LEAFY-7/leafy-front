import React, { ReactNode } from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import * as Styled from "./button.styles";

export interface ButtonStyleProp {
  variant?: "green" | "red" | "green_border" | "default";
  height: string;
  padding: string;
  fontSize: string;
  radius: string;
}

interface Props extends Pick<ButtonStyleProp, "variant"> {
  size?: "sm" | "md" | "lg";
  isBorder?: boolean;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  to?: string;
}

const Button = ({
  variant = "default",
  size = "md",
  isBorder = false,
  disabled,
  leftIcon,
  rightIcon,
  children,
  to,
  ...rest
}: React.PropsWithChildren<Props>) => {
  const height = size === "sm" ? "2rem" : size === "md" ? "2.5rem" : "3rem";
  const padding = size === "sm" ? "0.5rem" : size === "md" ? "1rem" : "1.5rem";
  const fontSize = size === "sm" ? "0.5rem" : size === "md" ? "1rem" : "1.5rem";
  const radius = size === "sm" ? "0.5rem" : size === "md" ? "1rem" : "1.5rem";

  const buttonStyle = css({
    paddingLeft: `${padding}`,
    paddingRight: `${padding}`,
    paddingTop: `${padding}`,
    paddingBottom: `${padding}`,
  });
  return (
    <>
      {to && <Link to={to} css={buttonStyle}></Link>}
      <Styled.Button
        variant={variant}
        height={height}
        padding={padding}
        fontSize={fontSize}
        radius={radius}
        disabled={disabled}
        {...rest}
      >
        <Styled.InnerWrapper>
          {leftIcon && leftIcon}
          {children}
          {rightIcon && rightIcon}
        </Styled.InnerWrapper>
      </Styled.Button>
    </>
  );
};

export default Button;
