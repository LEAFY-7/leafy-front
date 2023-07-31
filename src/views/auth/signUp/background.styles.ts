import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { theme } from 'configs/ui.config';
import Flex from 'components/atoms/Group/flex';
import RectangleButton from 'components/atoms/Button/rectangle-button';

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

    &:nth-of-type(1) {
        left: 1%;
        transform: scaleX(-1) rotate(30deg);
        margin-left: -10%;
        animation: ${signUpFirstAnimation} 2.5s infinite ease-in-out;
        animation-delay: 0.2s;
    }

    &:nth-of-type(2) {
        margin-top: -20%;
        right: -10%;
        transform: scaleX(-1) rotate(-45deg);
        animation: ${signUpSecondAnimation} 3.5s infinite ease-in-out;
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

export const ParallelToHorizon = styled(Flex)`
    ${theme.mediaQuery.mobile} {
        flex-direction: column;
    }
    ${theme.mediaQuery.tablet} {
        flex-direction: column;
    }
    ${theme.mediaQuery.desktop} {
        flex-direction: row;
    }
`;

export const ParallelToHorizonButton = styled(RectangleButton)`
    transform: translateY(170%);
    width: 100%;
`;
