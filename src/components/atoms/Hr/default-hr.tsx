/** @jsxImportSource @emotion/react */
import type { HTMLAttributes, CSSProperties } from 'react';
import React from 'react';
import { theme } from 'configs/ui.config';
import { css } from '@emotion/react';

interface HrProps {
    borderStyle?: CSSProperties['border'];
    borderColor?: keyof typeof theme.colors;
    borderWidth?: number;
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
}

type Props = React.PropsWithChildren<HrProps> & HTMLAttributes<HTMLHRElement>;

const Hr = ({
    borderColor = 'lgrey_50',
    borderStyle = 'solid',
    borderWidth = 1,
    marginTop = 8,
    marginRight = 0,
    marginBottom = 8,
    marginLeft = 0,
    children,
    ...rest
}: Props) => {
    const hrStyle = css`
        width: 100%;
        border: ${borderStyle};
        border-width: ${borderWidth + 'px'};
        border-color: ${theme.colors[borderColor]};
        margin: ${`${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`};
    `;

    return (
        <hr css={hrStyle} {...rest}>
            {children}
        </hr>
    );
};

export default Hr;
