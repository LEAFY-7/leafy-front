import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { theme } from 'configs/ui.config';

const signInFirstAnimation = keyframes`

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
const signInSecondAnimation = keyframes`

0% {
    transform: scaleX(-1) rotateZ(0) translate(0, 0);
  }

  50% {
    transform: scaleX(-1)  rotateZ(3deg) translate(3px, -3px);
  }

  100% {
    transform: scaleX(-1) rotateZ(0) translateY(0);
  
  }

`;

export const SignInPlantImage = styled.img`
    position: absolute;
    top: 0;
    left: -2%;
    z-index: -1;

    &:nth-of-type(1) {
        transform: scaleX(-1) rotate(30deg);
        margin-top: -10%;

        margin-left: -3%;
        animation: ${signInFirstAnimation} 2.5s infinite ease-in-out;
        animation-delay: 0.2s;
    }

    &:nth-of-type(2) {
        margin-top: -20%;
        transform: scaleX(-1);
        animation: ${signInSecondAnimation} 3.5s infinite ease-in-out;
    }

    ${theme.mediaQuery.mobile} {
        display: none;
    }
    ${theme.mediaQuery.tablet} {
        display: none;
    }
    ${theme.mediaQuery.desktop} {
        display: flex;
    }
`;
