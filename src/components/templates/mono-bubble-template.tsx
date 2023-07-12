/** @jsxImportSource @emotion/react */
import { useState, useEffect, useCallback } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { css } from '@emotion/react';
import Box from 'components/atoms/Box/default-box';

interface Props {
    mainSection: ReactNode;
    width?: CSSProperties['width'];
    height?: CSSProperties['height'];
    margin?: CSSProperties['margin'];
    padding?: CSSProperties['padding'];
    display?: 'none' | 'flex' | 'visible' | 'inline-flex';
    justifyContent?: CSSProperties['justifyContent'];
    alignItems?: CSSProperties['alignItems'];
    direction?: 'row' | 'column';
}

const useBubbleCount = () => {
    const [bubbleArray, setBubbleArray] = useState([]);

    useEffect(() => {
        const scrollHeight = document.documentElement.scrollHeight;
        const count = Math.floor(scrollHeight / 900);
        const emptyArray = Array.from({ length: count });
        setBubbleArray(emptyArray);

        return () => {
            setBubbleArray([]);
        };
    }, []);

    return { bubbleArray };
};

const MonoBubbleTemplate = ({
    mainSection,
    width = '100%',
    height = '100%',
    display = 'flex',
    alignItems = 'center',
    justifyContent = 'center',
    margin,
    padding = '3rem',
    children,
    ...rest
}: React.PropsWithChildren<Props>) => {
    const { bubbleArray } = useBubbleCount();

    return (
        <>
            <div css={bubbleWrapperStyle}>
                {bubbleArray.map((bubble, index) => (
                    <Bubble key={index} size={3 + index * 2} index={index} />
                ))}
            </div>

            <Box
                as="main"
                position="relative"
                width={width}
                height={height}
                display={display}
                justifyContent={justifyContent}
                alignItems={alignItems}
                padding={padding}
                margin={margin}
                radius={0}
                {...rest}
            >
                {mainSection}
            </Box>
        </>
    );
};

export default MonoBubbleTemplate;

function Bubble({ size, index }: { size: number; index: number }) {
    const newShadow = 5 * index || 5;
    const newSize = size * index;

    const templateStyle = css`
        position: absolute;
        /* width: ${index === 0 ? '0rem' : size + 'rem'};
        height: ${index === 0 ? '0rem' : size + 'rem'}; */
        background: radial-gradient(
            66.35% 237.95% at 21.48% 25.52%,
            rgba(250, 250, 250, 0.3) 0%,
            rgba(250, 250, 250, 0.01) 18.75%,
            #fafafa 100%
        );
        mix-blend-mode: normal;
        box-shadow: 5px ${newShadow + 'px'} ${newShadow + 'px'} rgba(14, 17, 27, 0.1),
            inset 5px ${newShadow + 'px'} ${newShadow + 'px'} rgba(14, 17, 27, 0.15);
        backdrop-filter: blur(15px);
        border-radius: 50%;

        &:nth-of-type(2n - 1) {
            top: ${`calc(${newSize * 5}% + 10px)`};
            left: 15%;
            /* transform: translateX(10%); */
            width: ${index === 0 ? '0rem' : size - 2 + 'rem'};
            height: ${index === 0 ? '0rem' : size - 2 + 'rem'};
            z-index: -2;
        }

        &:nth-of-type(2n) {
            top: ${`calc(${newSize * 5}% + 10px)`};
            right: 15%;
            /* transform: ${`translateY(${newSize + 5}%)`}; */
            width: ${index === 0 ? '0rem' : size - 1 + 'rem'};
            height: ${index === 0 ? '0rem' : size - 1 + 'rem'};
            z-index: -2;
        }

        @media (max-width: 768px) {
            display: none;
        }

        @media (max-width: 480px) {
            display: none;
        }
    `;
    return <div className="bubble" css={templateStyle} />;
}
const bubbleWrapperStyle = css`
    width: 100%;

    @media (max-width: 768px) {
        display: none;
    }

    @media (max-width: 480px) {
        display: none;
    }
`;
