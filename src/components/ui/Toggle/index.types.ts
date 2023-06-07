import type { HTMLAttributes, ReactNode } from "react";
import theme from "@styles/theme";

export interface ToggleProps {
  isOn?: boolean;
}
export interface ToggleWrapper extends ToggleProps {
  onColor?: keyof typeof theme.colors;
  offColor?: keyof typeof theme.colors;
}

export interface ToggleContent extends ToggleProps {}

export interface ToggleDesc extends ToggleProps {}
export interface Props extends HTMLAttributes<HTMLElement>, ToggleWrapper {
  on: string | ReactNode;
  off: string | ReactNode;
}