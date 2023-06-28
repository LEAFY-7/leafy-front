/** @jsxImportSource @emotion/react */
import React from 'react';
import { Theme, css, useTheme } from '@emotion/react';
import Flex from '../Group/flex';

const FlowerAnimation = () => {
    const theme = useTheme();

    const containerStyle = (theme: Theme) => css`
        padding-top: 10%;
        position: absolute;
        z-index: 99999;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: ${theme.palette.normal.overlayColor};
        backdrop-filter: blur(2px);
    `;

    const rowStyle = css`
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    const boxStyle = css`
        width: 150px;
        height: 150px;
        z-index: 10;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19);
        animation: 1s scale linear;

        @keyframes scale {
            0% {
                scale: 0.1;
            }
            100% {
                scale: 1;
            }
        }
    `;

    const box1Style = css`
        ${boxStyle}
        transform-origin: bottom right;
        border-radius: 0px 100px 0px 100px;
        background: linear-gradient(160deg, #ee0979 0%, #ff6a00 100%);
    `;
    const box2Style = css`
        ${boxStyle}
        transform-origin: bottom left;
        border-radius: 100px 0px 100px 0px;
        background: linear-gradient(220deg, #ee0979 0%, #ff6a00 100%);
    `;

    const box3Style = css`
        ${boxStyle}
        transform-origin: top right;
        border-radius: 100px 0px 100px 0px;
        background: linear-gradient(30deg, #ee0979 0%, #ff6a00 100%);
    `;
    const box4Style = css`
        ${boxStyle}
        transform-origin: top left;
        border-radius: 0px 100px 0px 100px;
        background: linear-gradient(320deg, #ee0979 0%, #ff6a00 100%);
    `;

    const circleStyle = css`
        width: 40px;
        height: 40px;
        border-radius: 100%;
        background: #ffef00;
        z-index: 100;
        margin-top: -298px;
    `;

    const lineStyle = css`
        background: #0f9b0f;
        margin-top: -130px;
        width: 25px;
        height: 310px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    `;

    const potStyle = css`
        background: #7a2828;
        border-radius: 0px 0px 40px 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: 100px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.042), 0 6px 6px rgba(0, 0, 0, 0.23);
    `;

    const textStyle = css`
        color: #fff;
        font-size: 3rem;
    `;
    return (
        <div css={containerStyle(theme)} className="container" id="flower_animate">
            <div css={rowStyle}>
                <div css={box1Style}></div>
                <div css={box2Style}></div>
            </div>
            <div css={rowStyle}>
                <div css={box3Style}></div>
                <div css={box4Style}></div>
            </div>
            <div css={rowStyle}>
                <div css={circleStyle}></div>
            </div>
            <div css={rowStyle}>
                <div css={lineStyle}></div>
            </div>
            <div css={rowStyle}>
                <div css={potStyle}>
                    <Flex justifyContent="center" alignItems="center">
                        <h1 css={textStyle}>LEFAY</h1>
                    </Flex>
                </div>
            </div>
        </div>
    );
};

export default FlowerAnimation;
