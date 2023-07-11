import { Theme, css, keyframes } from '@emotion/react';

const header = (theme: Theme) => css`
    padding: 8px calc((100% - 1280px) / 2);
    background: ${theme.palette.global.linearGradient};
`;

const slideIn = keyframes`
from {
  opacity: 0;
  transform: translateX(50%);
}
to {
  opacity: 1;
  transform: translateX(10%);
}
`;

export default { header, slideIn };
