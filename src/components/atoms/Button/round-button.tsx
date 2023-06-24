import React, { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonStyleProp {
  variant?: "green" | "red" | "green_border" | "default";
  height: string;
  padding: string;
  fontSize: string;
  radius: string;
}

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Pick<ButtonStyleProp, "variant"> {
  size?: "sm" | "md" | "lg";
  isBorder?: boolean;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  to?: string;
}

const RoundButton = ({
  variant = "default",
  to,
  size = "md",
  isBorder = false,
  disabled,
  leftIcon,
  rightIcon,
  children,
  ...rest
}: React.PropsWithChildren<Props>) => {
  return <div>round-button</div>;
};

export default RoundButton;
