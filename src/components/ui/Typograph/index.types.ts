import type { CSSProperties, ElementType, HTMLAttributes } from "react";

import theme from "../../../styles/theme";

type Typography = "H1" | "H2" | "H3" | "default" | "BODY1" | "BODY2" | "BODY3";

export interface Props {
  /**
   * 엘리먼트의 타입을 설정합니다.
   *
   * @default span
   */
  as: ElementType;

  variant: Typography;

  /**
   * Typography 폰트 사이즈를 설정합니다.
   *
   * @default 'regular'
   */
  fontSize: keyof typeof theme.fontSize;

  /**
   * Typography 폰트 높이를 설정합니다.
   *
   * @default 'regular'
   */
  lineHeight: keyof typeof theme.lineHeight;

  /**
   * Typography 색상을 설정합니다.
   *
   * @default 'zinc_700'
   */
  color: keyof typeof theme.colors;

  /**
   * Typography 폰트 두께를 설정합니다.
   *
   * @default 400
   */
  fontWeight: CSSProperties["fontWeight"];

  /**
   * Typography 상단을 설정합니다.
   *
   * @default 0
   */
  marginTop: number;

  /**
   * Typography 우측을 설정합니다.
   *
   * @default 0
   */
  marginRight: number;

  /**
   * Typography 하단을 설정합니다.
   *
   * @default 0
   */
  marginBottom: number;

  /**
   * Typography 좌측을 설정합니다.
   *
   * @default 0
   */
  marginLeft: number;

  /**
   * Typography 상단을 설정합니다.
   *
   * @default 0
   */
  paddingTop: number;

  /**
   * Typography 우측을 설정합니다.
   *
   * @default 0
   */
  paddingRight: number;

  /**
   * Typography 하단을 설정합니다.
   *
   * @default 0
   */
  paddingBottom: number;

  /**
   * Typography 좌측을 설정합니다.
   *
   * @default 0
   */
  paddingLeft: number;

  /**
   * Typography 투명도를 설정합니다.
   *
   * @default 1
   */
  opacity: number;

  /**
   * Typography 정렬을 설정합니다.
   *
   * @default 'left'
   */
  textAlign: CSSProperties["textAlign"];
}

export interface TextProps
  extends Partial<Props>,
    Omit<
      HTMLAttributes<
        HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
      >,
      "color"
    > {}
