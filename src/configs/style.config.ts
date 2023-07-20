import { Theme, css } from '@emotion/react';

const globalStyle = (theme: Theme) => css`
    @font-face {
        font-family: 'SUIT-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2')
            format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    html,
    body,
    #root {
        margin: 0;
        padding: 0;
        height: 100%;
        background-color: ${theme.palette.bgColor};
        font-family: 'SUIT-Regular', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
            'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
            'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    }

    #root {
        max-width: 1280px;
        margin: 0 auto;
    }
    h1,
    h2,
    h3,
    p {
        margin: 0;
        padding: 0;
    }

    button {
        border: none;
        background-color: transparent;
        padding: 0;
        cursor: pointer;
        outline: none;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    li {
        list-style: none;
        color: ${theme.palette.text.black};
    }

    ol {
        margin: 0;
    }

    input {
        background: none;
        border: none;
        color: inherit;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    address {
        font-style: normal;
    }

    * {
        box-sizing: border-box;
        outline: none;
    }

    iframe {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border: 0;
    }
`;
export default globalStyle;

// ::-webkit-scrollbar {
//     width: 20px;
// }
// ::-webkit-scrollbar-track {
//     background-color: ${theme.colors.transparent};
//     box-shadow: 0 0 10px rgba(255, 255, 255, 0.1) inset;
// }
// ::-webkit-scrollbar-thumb {
//     background: radial-gradient(
//         66.35% 237.95% at 21.48% 25.52%,
//         rgba(250, 250, 250, 0.3) 0%,
//         rgba(250, 250, 250, 0.01) 18.75%,
//         #fafafa 100%
//     );
//     mix-blend-mode: normal;
//     box-shadow: 5px 10px 10px rgba(14, 17, 27, 0.1), inset 5px 10px 10px rgba(14, 17, 27, 0.15);

//     /* border: 3px solid ${theme.colors.primary}; */
//     border-radius: 0px 0px 20px 20px;
// }
// ::-webkit-scrollbar-thumb:hover {
//     background-color: ${theme.colors.secondary};
// }
