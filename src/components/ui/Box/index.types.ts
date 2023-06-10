import type {
  AriaRole,
  CSSProperties,
  ElementType,
  HTMLAttributes,
} from "react";
import { theme } from "@styles/theme";

export interface BoxProps {
  /**
   * Box컴포넌트의 엘리먼트의 타입을 설정합니다.
   * @default div
   */
  as?: ElementType;
  /**
   * Box의 너비 속성을 설정합니다.
   * @default inherit
   */
  width?: CSSProperties["width"];

  /**
   * Box의 높이 속성을 설정합니다.
   * @default inherit
   */
  height?: CSSProperties["height"];

  /**
   * Box의 minHeight 속성을 설정합니다.
   * @default inherit
   */
  minHeight?: CSSProperties["minHeight"];
  /**
   * Box의  minWidth 속성을 설정합니다.
   * @default inherit
   */
  minWidth?: CSSProperties["minWidth"];

  /**
   * Box의 position의 타입을 설정합니다.
   * @default static
   */
  position?: CSSProperties["position"];

  /**
   * Box의 배경 색상을 설정합니다.
   * @default 'inherit'
   */
  backgroundColor?: keyof typeof theme.colors;

  /**
   * Box의 배경 색상을 설정합니다.
   * @default 'inherit'
   */
  backgroundImage?: CSSProperties["backgroundImage"];

  /**
   * Box의 Box Shadow을 설정합니다.
   * @default 'inherit'
   */
  boxShadow?: CSSProperties["boxShadow"];
  /**
   * Box의 padding  설정합니다.
   * @default auto
   */
  padding?: CSSProperties["padding"];

  /**
   * Box의 padding top(상단)을 설정합니다.
   * @default 0
   */
  paddingTop?: number;

  /**
   * Box의 padding bottom(우측)을 설정합니다.
   * @default 0
   */
  paddingRight?: number;

  /**
   * Box의 padding right(하단)을 설정합니다.
   * @default 0
   */
  paddingBottom?: number;

  /**
   * Box의 padding left(좌측)을 설정합니다.
   * @default 0
   */
  paddingLeft?: number;

  /**
   * Box의 margin  설정합니다.
   * @default auto
   */
  margin?: CSSProperties["margin"];

  /**
   * Box의 margin top(상단)을 설정합니다.
   * @default 0
   */
  marginTop?: number;

  /**
   * Box의 margin right(우측)을 설정합니다.
   * @default 0
   */
  marginRight?: number;

  /**
   * Box의 margin bottom(하단)을 설정합니다.
   * @default 0
   */
  marginBottom?: number;

  /**
   * Box의 margin left(좌측)을 설정합니다.
   * @default 0
   */
  marginLeft?: number;

  /**
   * Box의 top을 설정합니다.
   * @default inherit
   */
  top?: CSSProperties["top"];

  /**
   * Box의 bottom을 설정합니다.
   * @default static
   */
  bottom?: CSSProperties["bottom"];

  /**
   * Box의 right을 설정합니다.
   * @default static
   */
  right?: CSSProperties["right"];

  /**
   * Box의 left을 설정합니다.
   * @default static
   */
  left?: CSSProperties["left"];

  /**
   * Box의 z-index 의 타입을 설정합니다.
   * @default static
   */
  zIndex?: CSSProperties["zIndex"];

  /**
   * Box의 display 속성을 설정합니다.
   * @default 'block'
   */
  display?: CSSProperties["display"];

  /**
   * Box가 display가 flex일 때, flex-direction 속성을 설정합니다.
   * @default 'row'
   */
  direction?: CSSProperties["flexDirection"];

  /**
   * Box의 justify-content 속성을 설정합니다.
   * @default 'flex-start'
   */
  justifyContent?: CSSProperties["justifyContent"];

  /**
   * Box의 align-items 속성을 설정합니다.
   * @default 'flex-start'
   */
  alignItems?: CSSProperties["alignItems"];

  /**
   * Box의 cursor 속성을 설정합니다.
   * @default 'auto'
   */
  cursor?: CSSProperties["cursor"];

  /**
   * Box의 opacity 속성을 설정합니다.
   * @default 'inherit'
   */
  opacity?: CSSProperties["opacity"];

  /**
   * Box 테두리의 radius 설정합니다.
   * @default 8
   */
  radius?: number;

  /**
   * Box의 gap 설정합니다.
   * @default 0
   */
  gap?: CSSProperties["gap"];

  /**
   * Box의 뒤집기 옵션을 설정합니다.
   * @default visible
   */
  backfaceVisibility?: CSSProperties["backfaceVisibility"];

  borderWidth?: number;

  overflow?: CSSProperties["overflow"];
}
export interface Props extends HTMLAttributes<HTMLElement>, BoxProps {}
