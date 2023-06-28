import { Theme, css } from '@emotion/react';

const header = (theme: Theme) => css`
    padding: 8px calc((100% - 1280px) / 2);
    background-color: ${theme.colors.transparent};
    /* border-bottom: ${`2px solid ${theme.palette.normal.borderBottom}`}; */
    background: linear-gradient(#fff 0%, rgba(0, 0, 0, 0) 100%);
`;
export default { header };
