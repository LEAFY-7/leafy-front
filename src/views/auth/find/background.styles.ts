import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { theme } from 'configs/ui.config';

const findFirstAnimation = keyframes`

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
const findSecondAnimation = keyframes`

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

export const FindPlantImage = styled.img`
    position: absolute;
    top: 0;
    left: -2%;
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
        transform: scaleX(-1) rotate(30deg);
        margin-top: 20%;

        margin-left: -3%;
        animation: ${findFirstAnimation} 2.5s infinite ease-in-out;
        animation-delay: 0.2s;
    }

    &:nth-of-type(2) {
        margin-top: 10%;
        transform: scaleX(-1);
        animation: ${findSecondAnimation} 3.5s infinite ease-in-out;
    }
`;
