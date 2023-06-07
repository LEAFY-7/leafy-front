import React from "react";
import * as Styled from "./index.styles";
import { Props, TextFieldHelperText } from "./index.types";

const TextFiled = React.forwardRef(function TextFiled(
  {
    value = "",
    type = "text",
    placeholder = "",
    labelTitle = "",
    onChange,
    error = false,
    helperText = "",
    fontSize = "md",
    lineHeight = "sm",
    fontWeight = 400,
    placeHolderFontSize = "md",
    paddingX = 16,
    paddingY = 8,
    radius = 5,
    leftIcon,
    helperIcon,
    children,
    ...rest
  }: React.PropsWithChildren<Props>,
  forwardedRef: React.Ref<HTMLInputElement>
) {
  return (
    <Styled.Wrapper
      error={error}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      paddingX={paddingX}
      paddingY={paddingY}
    >
      {labelTitle && (
        <Styled.Label
          error={error}
          fontSize={fontSize}
          fontWeight={fontWeight}
          lineHeight={lineHeight}
          paddingX={paddingX}
          paddingY={paddingY}
        >
          {labelTitle}
        </Styled.Label>
      )}

      <Styled.InputContainer>
        <Styled.Input
          type={type}
          value={value}
          error={error}
          helperText={helperText}
          placeholder={placeholder}
          fontSize={fontSize}
          fontWeight={fontWeight}
          lineHeight={lineHeight}
          placeHolderFontSize={placeHolderFontSize}
          paddingX={paddingX}
          paddingY={paddingY}
          onChange={onChange}
          ref={forwardedRef}
          radius={radius}
        />
        <Styled.Icon className="iconBox">{leftIcon}</Styled.Icon>

        {error && (
          <Styled.HelperText
            error={error}
            fontSize={fontSize}
            fontWeight={fontWeight}
            lineHeight={lineHeight}
            paddingX={paddingX}
            paddingY={paddingY}
          >
            {helperIcon || null} {helperText}
          </Styled.HelperText>
        )}
      </Styled.InputContainer>
    </Styled.Wrapper>
  );
});

export default TextFiled;
