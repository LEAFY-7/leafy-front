import React from "react";
import * as Styled from "./index.styles";
import { Props } from "./index.types";

const Toggle = React.forwardRef(function Toggle(
  {
    on = "on",
    off = "off",
    leftColor = "lgreen",
    rightColor = "green",
    children,
    ...rest
  }: React.PropsWithChildren<Props>,
  forwardedRef: React.Ref<HTMLDivElement>
) {
  const [isOn, setIsOn] = React.useState(false);
  const toggleHandler = () => setIsOn((prev) => !prev);
  return (
    <Styled.Wrapper
      isOn={isOn}
      leftColor={leftColor}
      rightColor={rightColor}
      ref={forwardedRef}
      onClick={toggleHandler}
      {...rest}
    >
      <Styled.Desc isOn={isOn}> {isOn ? on : off}</Styled.Desc>
      <Styled.Content isOn={isOn} />
      {children}
    </Styled.Wrapper>
  );
});

export default Toggle;
