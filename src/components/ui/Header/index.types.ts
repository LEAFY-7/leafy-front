import type { CSSProperties, ElementType, HTMLAttributes } from "react";
import theme from "@styles/theme";

export interface LogoProps{
     /**
   * Logo 내의 텍스트 폰트 사이즈를 설정합니다.
   * @default 'xxl'
   */
  fontSize?: keyof typeof theme.fontSize;
  /**
   * Logo 내의 텍스트 폰트 높이를 설정합니다
   * @default 'xxl'
   */
  lineHeight?: keyof typeof theme.lineHeight;
  /**
   * Logo 내의 텍스트 폰트 두께를 설정합니다.
   * @default 700
   */
  fontWeight?: CSSProperties["fontWeight"];
}
export interface ProfileProps{
    isLoggedIn?:boolean,
    userName?: string
}
export interface HeaderProps{
    /**
   * HeaderProps width를 설정합니다.
   * @default 'auto'
   */
    width?: string;
    /**
   * HeaderProps width를 설정합니다.
   * @default 'auto'
   */
    height?: string;
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
}


export interface Props extends HTMLAttributes<HTMLElement>, HeaderProps {}