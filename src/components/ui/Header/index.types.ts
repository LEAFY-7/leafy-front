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

export interface GlobalMenuProps {
    id: number,
    menu: string,
    menuLink: string
}

export interface SignProps{
    isLoggedIn?:boolean,
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

export interface HeaderWrapperProps{
  width: string;
  height: string;
    /**
   * HeaderWrapper display 속성을 설정합니다.
   *
   * @default 'flex'
   */
  display?: "flex" | "inline-flex";

  /**
   * HeaderWrapper flex-direction 속성을 설정합니다.
   *
   * @default 'row'
   */
  direction?: CSSProperties["flexDirection"];

  /**
   * HeaderWrapper flex-wrap 속성을 설정합니다.
   *
   * @default 'nowrap'
   */
  wrap?: CSSProperties["flexWrap"];

  /**
   * HeaderWrapper justify-content 속성을 설정합니다.
   *
   * @default 'center'
   */
  justifyContent?: CSSProperties["justifyContent"];

  /**
   * HeaderWrapper align-items 속성을 설정합니다.
   *
   * @default 'center'
   */
  alignItems?: CSSProperties["alignItems"];

  /**
   * HeaderWrapper 배경 색상을 설정합니다.
   *
   * @default 'inherit'
   */
  backgroundColor?: keyof typeof theme.colors;
}
export interface Props extends HTMLAttributes<HTMLElement>, HeaderProps {}