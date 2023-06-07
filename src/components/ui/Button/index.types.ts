import theme from "@styles/theme";
import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

export type ButtonType =
  | "default"
  | "green"
  | "green_border"
  | "blue"
  | "blue_border"
  | "red";

export interface ButtonProps {
  /**
   * 버튼의 variant을 설정합니다.
   * @required
   */
  variant: ButtonType;

  /**
   * Button 내의 텍스트 폰트 사이즈를 설정합니다.
   * @default 'md'
   */
  fontSize?: keyof typeof theme.fontSize;
  /**
   * Button 내의 텍스트 폰트 높이를 설정합니다
   * @default 'md'
   */
  lineHeight?: keyof typeof theme.lineHeight;

  /**
   * Button 내의 텍스트 폰트 두께를 설정합니다.
   * @default 400
   */
  fontWeight?: CSSProperties["fontWeight"];

  /**
   * Button의 배경 색상을 설정합니다.
   * @default 'inherit'
   */
  backgroundColor?: keyof typeof theme.colors;

  /**
   * Button의 radius 설정합니다.
   * @default 8
   */
  radius?: number;

  /**
   * margin 상단을 설정합니다.
   * @default 0
   */
  marginTop?: number;

  /**
   * margin 우측을 설정합니다.
   * @default 0
   */
  marginRight?: number;

  /**
   * margin 하단을 설정합니다.
   * @default 0
   */
  marginBottom?: number;

  /**
   * margin 좌측을 설정합니다.
   * @default 0
   */
  marginLeft?: number;

  /**
   * padding x축을 설정합니다.
   * @default 16
   */
  paddingX?: number;

  /**
   * padding y축을 설정합니다.
   * @default 8
   */
  paddingY?: number;

  /**
   * Button의 width를 설정합니다.
   * @default 'auto'
   */
  width?: string;

  /**
   * Button의 활성/비활성 상태
   * @default true
   */
  disabled?: boolean;
}

export interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}
