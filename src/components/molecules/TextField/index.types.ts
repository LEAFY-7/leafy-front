import type {
  CSSProperties,
  ChangeEvent,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from "react";
import theme from "@styles/theme";

export interface TextFieldProps {
  /**
   * TextField 내의 텍스트 폰트 사이즈를 설정합니다.
   * @default 'md'
   */
  fontSize?: keyof typeof theme.fontSize;
  /**
   * TextField 내의 텍스트 폰트 높이를 설정합니다
   * @default 'md'
   */
  lineHeight?: keyof typeof theme.lineHeight;
  /**
   * TextField 내의 텍스트 폰트 두께를 설정합니다.
   * @default 400
   */
  fontWeight?: CSSProperties["fontWeight"];

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
   * 에러 상태
   * @default false
   */
  error?: boolean;
}
export interface TextFieldInputProps extends TextFieldProps {
  /**
   * TextField의 radius 설정합니다.
   * @default 8
   */
  radius?: number;
  /**
   * 에러 메시지
   * @default ""
   */
  helperText?: string;
  /**
   * placeHolder의 font 사이즈
   * @default xs
   */
  placeHolderFontSize?: keyof typeof theme.fontSize;

  /**
   * Button의 활성/비활성 상태
   * @default true
   */
  disabled?: boolean;
  readOnly?: boolean;
}
export interface TextFieldHelperText
  extends HTMLAttributes<HTMLElement>,
    TextFieldProps {
  helperText?: string;
}
export interface IconProps {
  disabled?: boolean;
}

export interface Props
  extends HTMLAttributes<HTMLElement>,
    TextFieldProps,
    TextFieldInputProps {
  hookForm?: boolean;
  /**
   * input의 value
   * @default ""
   */
  value?: string;
  type: "text" | "password";
  /**
   * input의 placeHolder
   * @default ""
   */
  placeholder?: string;
  /**
   * label 태그의 제목
   * @default ""
   */
  labelTitle?: string;
  leftIcon?: ReactNode;
  helperIcon?: ReactNode;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
