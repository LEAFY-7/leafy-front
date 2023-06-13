import styled from "@emotion/styled";
import theme from "@styles/theme";
import { HeaderWrapperProps, LogoProps, HeaderProps } from "./index.types";

const breakPoints = [1200, 360];
export const Header = styled.header<Required<HeaderProps>>`
    width: ${100}%;
    height: ${80}px;
    padding: ${({ paddingX, paddingY }) => `${paddingY}px ${paddingX}px`};
`;
export const HeaderWrapper = styled.div<Required<HeaderWrapperProps>>`
    width: ${breakPoints[0]}px;
    height: ${100}%;
    display: flex;
    justifyContent: center;
    alignItems: center;
`;
export const Logo = styled.div<Required<LogoProps>>`
    width: 100%;

    font-size: ${({ fontSize, theme }) => theme.fontSize[fontSize]};
    font-weight: ${({ fontWeight }) => fontWeight};
    line-height: ${({ lineHeight, theme }) => theme.lineHeight[lineHeight]};

`;
