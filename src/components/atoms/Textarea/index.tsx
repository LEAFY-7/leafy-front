import React from "react";
import * as Styled from "./index.styles";
import { Props } from "./index.types";

const Textarea = React.forwardRef(function Textarea(
  {
    value = "",
    name = "",
    width = "inherit",
    height = "inherit",
    fontSize = "md",
    fontWeight = "regular",
    color = "inherit",
    textAlign = "left",
    letterSpacing = "inherit",
    margin = 0,
    marginTop = 0,
    marginRight = 0,
    marginBottom = 0,
    marginLeft = 0,
    paddingTop = 0,
    paddingRight = 0,
    paddingBottom = 0,
    paddingLeft = 0,
    backgroundColor = "inherit",
    borderColor = "inherit",
    boxShadow = "inherit",
    radius = 8,
    opacity = 1,
    children,
    ...rest
  }: React.PropsWithChildren<Props>,
  forwardedRef: React.Ref<HTMLTextAreaElement>
) {
  return (
    <Styled.TextArea
      value={value}
      name={name}
      width={width}
      height={height}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      textAlign={textAlign}
      letterSpacing={letterSpacing}
      margin={margin}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      boxShadow={boxShadow}
      radius={radius}
      opacity={opacity}
      ref={forwardedRef}
      {...rest}
    >
      {children}
    </Styled.TextArea>
  );
});

export default Textarea;
