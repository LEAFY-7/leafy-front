import React from "react";
import * as Styled from "./index.styles";
import { TextProps } from "./index.types";
import { Link, useNavigate } from "react-router-dom";

const Typography = React.forwardRef(function Typography(
  {
    as = "span",
    variant = "default",
    children,
    fontSize = "md",
    color = "black",
    lineHeight = "md",
    fontWeight = "bold",
    marginTop = 0,
    marginRight = 0,
    marginBottom = 0,
    marginLeft = 0,
    paddingTop = 0,
    paddingRight = 0,
    paddingBottom = 0,
    paddingLeft = 0,
    opacity = 1,
    textAlign = "left",
    to = "",
    width = "auto",
    curLocation = true,
    ...rest
  }: React.PropsWithChildren<TextProps>,
  forwardedRef: React.Ref<HTMLElement>
) {
  const navigate = useNavigate();

  const handleUrl = () => {
    navigate(`/${to}`);
  };

  const typographyEl = (
    <Styled.Text
      as={as}
      variant={variant}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      opacity={opacity}
      textAlign={textAlign}
      ref={forwardedRef}
      onClick={handleUrl}
      {...rest}
    >
      {children}
    </Styled.Text>
  );
  return <>{to ? <>{typographyEl}</> : <>{typographyEl}</>}</>;
});

export default Typography;
