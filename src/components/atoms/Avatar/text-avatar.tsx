/** @jsxImportSource @emotion/react */
import React, { HTMLAttributes } from 'react';
import { css } from '@emotion/react';
import { theme } from '@configs/style.config';

interface Props extends HTMLAttributes<HTMLDivElement> {
    text: string;
    size?: 'sm' | 'md' | 'lg';
}

const TextAvatar = React.forwardRef(function TextAvatar(
    { text, size = 'md' }: Props,
    forwardedRef: React.Ref<HTMLDivElement>,
) {
    const stringToColor = (str: string): string => {
        let hash = 0;
        let i;

        for (i = 0; i < str.length; i += 1) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        let color = '#';

        for (i = 0; i < 3; i += 1) {
            // 16진수 0xff = 255
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        return color;
    };

    const avatarStyle = css`
        width: ${theme.imgSize[size]};
        height: ${theme.imgSize[size]};
        border-radius: 50%;
        background-color: ${stringToColor(text)};
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        color: #fff;
    `;

    return <div css={avatarStyle} ref={forwardedRef}>{`${text.split(' ')[0][0]}`}</div>;
});

export default TextAvatar;
