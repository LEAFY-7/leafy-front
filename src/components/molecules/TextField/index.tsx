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
    disabled = false,
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
    hookForm = false,
    readOnly = false,
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
        {hookForm ? (
          <Styled.Input
            type={type}
            error={error}
            disabled={disabled}
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
            readOnly={readOnly}
            {...rest}
          />
        ) : (
          <Styled.Input
            type={type}
            value={value}
            error={error}
            disabled={disabled}
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
            readOnly={readOnly}
            {...rest}
          />
        )}

        <Styled.Icon className="iconBox" disabled={disabled}>
          {leftIcon}
        </Styled.Icon>

        {!disabled && error && (
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
