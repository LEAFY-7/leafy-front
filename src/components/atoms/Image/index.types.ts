import { HTMLAttributes } from "react";

export type ImageType =
  | "icon_sm"
  | "icon_md"
  | "icon_lg"
  | "square_sm"
  | "square_md"
  | "square_lg"
  | "default";

export interface ImageProps {
  variant: ImageType;
}
export interface Props extends HTMLAttributes<HTMLElement>, ImageProps {
  src: string;
  alt: string;
}
