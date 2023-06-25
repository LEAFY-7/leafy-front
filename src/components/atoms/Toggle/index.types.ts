import type { HTMLAttributes, ReactNode } from "react";
import stylesConfig from "@configs/style.config";

export interface ToggleProps {
  isOn?: boolean;
}
export interface ToggleWrapper extends ToggleProps {
  leftColor?: keyof typeof stylesConfig.theme.colors;
  rightColor?: keyof typeof stylesConfig.theme.colors;
}

export interface ToggleContent extends ToggleProps {}

export interface ToggleDesc extends ToggleProps {}
export interface Props extends HTMLAttributes<HTMLElement>, ToggleWrapper {
  on: string | ReactNode;
  off: string | ReactNode;
}
