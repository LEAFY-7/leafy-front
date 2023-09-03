import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { theme } from 'configs/ui.config';

const signUpFirstAnimation = keyframes`

0% {
    transform: scaleX(-1) rotate(30deg) rotateZ(0) translate(0, 0);
  }

  50% {
    transform: scaleX(-1) rotate(30deg) rotateZ(3deg) translate(3px, -3px);
  }

  100% {
    transform: scaleX(-1) rotate(30deg) rotateZ(0) translateY(0);
  
  }

`;
const signUpSecondAnimation = keyframes`

0% {
    transform: scaleX(-1) rotate(-45deg) rotateZ(0) translate(0, 0);
  }

  50% {
    transform: scaleX(-1) rotate(-45deg)  rotateZ(3deg) translate(3px, -3px);
  }

  100% {
    transform: scaleX(-1) rotate(-45deg) rotateZ(0) translateY(0);
  
  }

`;

export const SignUpPlantImage = styled.img`
    position: absolute;
    z-index: -1;

    ${theme.mediaQuery.xsMobile} {
        display: none;
    }
    ${theme.mediaQuery.smMobile} {
        display: none;
    }

    ${theme.mediaQuery.mdMobile} {
        display: none;
    }
    ${theme.mediaQuery.smTablet} {
        display: none;
    }

    ${theme.mediaQuery.mdTablet} {
        display: none;
    }
    ${theme.mediaQuery.desktop} {
        display: block;
    }

    &:nth-of-type(1) {
        left: 1%;
        transform: scaleX(-1) rotate(30deg);
        margin-left: -10%;
        animation: ${signUpFirstAnimation} 2.5s infinite ease-in-out;
        animation-delay: 0.2s;
    }

    &:nth-of-type(2) {
        margin-top: -20%;
        right: -5%;
        transform: scaleX(-1) rotate(-45deg);
        animation: ${signUpSecondAnimation} 3.5s infinite ease-in-out;
    }
`;
