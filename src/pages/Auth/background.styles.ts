import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

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
    left: 5%;
    z-index: -1;

    &:nth-of-type(1) {
        transform: scaleX(-1) rotate(30deg);
        margin-left: -3%;
        animation: ${signInFirstAnimation} 2.5s infinite ease-in-out;
        animation-delay: 0.2s;
    }

    &:nth-of-type(2) {
        margin-top: -20%;
        transform: scaleX(-1);
        animation: ${signInSecondAnimation} 3.5s infinite ease-in-out;
    }
`;

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
        left: 5%;
        transform: scaleX(-1) rotate(30deg);
        margin-left: -3%;
        animation: ${signUpFirstAnimation} 2.5s infinite ease-in-out;
        animation-delay: 0.2s;
    }

    &:nth-of-type(2) {
        top: 0;
        right: 0;
        transform: scaleX(-1) rotate(-45deg);
        animation: ${signUpSecondAnimation} 3.5s infinite ease-in-out;
    }
`;