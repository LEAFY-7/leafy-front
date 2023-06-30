/** @jsxImportSource @emotion/react */
import React from 'react';
import CheckboxWrapper from '@components/atoms/CheckBox/default-checkBox';
import MonoTemplate from '@components/templates/mono-template';
import { css, keyframes } from '@emotion/react';
import Div from '@components/atoms/Div/default-div';
import Flex from '@components/atoms/Group/flex';
import RectangleButton from '@components/atoms/Button/rectangle-button';

// 연습장
const Temp = () => {
    const [isChecked, setIsChecked] = React.useState(false);

    const wrapper = css`
        width: 100%;
        height: 30px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #00927a;
        border-radius: 15px;
    `;

    const leftInner = css`
        position: absolute;
        top: 2px;
        left: 2px;
        width: 15px;
        height: 15px;
        word-break: keep-all;
        overflow: hidden;
        background: transparent;
        border-radius: 74% 26% 79% 21% / 58% 66% 34% 42%;
        box-shadow: inset 3px 3px 3px rgba(0, 0, 0, 0.05), 5px 5px 8px rgba(0, 0, 0, 0.1),
            5px 5px 5px rgba(255, 255, 255, 0.05), inset -3px 5px 8px rgba(255, 255, 255, 1);
        &::before {
            content: '';
            position: absolute;
            top: 3.5px;
            left: 3.5px;
            background: #eae7e7f8;
            width: 4px;
            height: 4px;
            border-radius: 58% 42% 71% 29% / 49% 26% 74% 51%;
        }
        &:nth-child(2) {
            transform: scale(0.5) translate(30px, -5px);
            border-radius: 45% 55% 68% 32% / 49% 28% 72% 51%;
        }
        &:nth-child(3) {
            transform: scale(0.5) translate(2px, 3px);
            border-radius: 45% 55% 68% 32% / 49% 28% 72% 51%;
        }
    `;

    const rightInner = css`
        position: absolute;
        right: 2px;
        bottom: 2px;
        width: 20px;
        height: 20px;
        background: transparent;
        border-radius: 35% 65% 61% 39% / 58% 48% 52% 42%;
        box-shadow: inset -3px 3px 3px rgba(0, 0, 0, 0.05), 5px 5px 8px rgba(0, 0, 0, 0.1),
            5px 5px 5px rgba(255, 255, 255, 0.05), inset -3px 5px 8px rgba(255, 255, 255, 1);
        &::before {
            content: '';
            position: absolute;
            top: 3.5px;
            right: 3.5px;
            background: #eae7e7f8;
            width: 4px;
            height: 4px;
            border-radius: 40% 60% 26% 74% / 61% 28% 72% 39%;
        }
        &:nth-child(2) {
            transform: scale(0.5) translate(30px, -5px);
            border-radius: 45% 55% 68% 32% / 49% 28% 72% 51%;
        }
    `;
    const content = css`
        z-index: 3;
        color: #fff;
        font-size: 0.5rem;
        width: 100%;
    `;

    const waterStyle = css`
        width: 80px;
        position: absolute;

        &:focus::before {
            font-size: 1px;
            content: '';
            position: absolute;
            left: 80px;
            top: 2px;
            width: 20px;
            height: 20px;
            background-color: transparent;
            border-radius: 66% 34% 49% 51% / 66% 56% 44% 34%;
            box-shadow: inset 3px 5px 5px rgba(0, 0, 0, 0.07), 5px 5px 10px rgba(0, 0, 0, 0.1),
                5px 5px 5px rgba(255, 255, 255, 0.05), inset -3px -5px 10px rgba(255, 255, 255, 1);
            transition: all 0.5s ease-out;
        }
        &:focus::after {
            content: '';
            position: absolute;
            right: 80px;
            bottom: 2px;
            width: 20px;
            height: 20px;
            background: transparent;
            border-radius: 35% 65% 61% 39% / 58% 48% 52% 42%;
            box-shadow: inset -3px 3px 3px rgba(0, 0, 0, 0.05), 5px 5px 8px rgba(0, 0, 0, 0.1),
                5px 5px 5px rgba(255, 255, 255, 0.05), inset -3px 5px 8px rgba(255, 255, 255, 1);
        }
    `;

    const wrapperStyle = css`
        width: 100%;
        height: 30px;
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #00927a;
        border-radius: 15px;
        color: #fff;
        cursor: pointer;
        transition: all 0.5s ease-out;
        position: relative;

        &:focus::before {
            position: absolute;
            content: '';
            top: 2px;
            left: 5%;
            /* transform: translateX(-130%); */
            width: 20px;
            height: 20px;
            background-color: transparent;
            border-radius: 66% 34% 49% 51% / 66% 56% 44% 34%;
            box-shadow: inset 3px 5px 5px rgba(0, 0, 0, 0.07), 5px 5px 10px rgba(0, 0, 0, 0.1),
                5px 5px 5px rgba(255, 255, 255, 0.05), inset -3px -5px 10px rgba(255, 255, 255, 1);
            transition: all 0.5s ease-out;
        }
        &:focus::after {
            content: '';
            position: absolute;
            //   transform: translateX(130%);
            bottom: 3px;
            right: 5%;
            width: 20px;
            height: 20px;
            background: transparent;
            border-radius: 53% 47% 49% 51% / 66% 56% 44% 34%;
            box-shadow: inset -3px 3px 3px rgba(0, 0, 0, 0.05), 5px 5px 8px rgba(0, 0, 0, 0.1),
                5px 5px 5px rgba(255, 255, 255, 0.05), inset -3px 5px 8px rgba(255, 255, 255, 1);
        }
        &:hover {
            box-shadow: inset 3px 3px 3px rgba(0, 0, 0, 0.02), 5px 5px 8px rgba(0, 0, 0, 0.1),
                5px 5px 5px rgba(255, 255, 255, 0.05), inset -4px -4px 10px 7px rgba(255, 255, 255, 0.91);
        }
    `;

    const contentStyle = css`
        width: 100%;
        height: 100%;
        font-size: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 3;
        word-break: keep-all;
    `;

    return (
        <>
            <MonoTemplate
                mainSection={
                    <Div id="temp" direction="column">
                        <Div id="temp" height="100px">
                            {/*#80D0C7 #00927a  #007D8B #005D78 */}
                            <button css={wrapperStyle}>
                                <div css={contentStyle}>짧은 텍스트</div>
                            </button>
                        </Div>
                        <Div id="temp" height="100px">
                            {/*#80D0C7 #00927a  #007D8B #005D78 */}
                            <button css={wrapperStyle}>
                                <div css={contentStyle}>이것은 중간길이 텍스트</div>
                            </button>
                        </Div>
                        <Div id="temp" height="100px">
                            {/*#80D0C7 #00927a  #007D8B #005D78 */}
                            <button css={wrapperStyle}>
                                <div css={contentStyle}>이것은 버튼의 긴 텍스트를 나타냅니다</div>
                            </button>
                        </Div>
                    </Div>
                }
            />
        </>
    );
};

export default Temp;

{
    /* <CheckboxWrapper
                        id="checkbox-1"
                        isChecked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                    >
                        <CheckboxWrapper.Checkbox />
                        <CheckboxWrapper.Label>체크박스 만들기</CheckboxWrapper.Label>
                    </CheckboxWrapper> */
}

// width: 400px;
// height: 400px;
// border: 1px solid lightgray;
// margin: 0 auto;
// background-image: repeating-radial-gradient(
//     farthest-corner at 100px 100px,
//     darkorange 30%,
//     yellow 60%
// );
/* &:hover::before {
            content: '';
            position: absolute;
            background: yellow;
            left: 10px;
            width: 10px;
            height: 10px;
            border-radius: 40% 60% 26% 74% / 61% 28% 72% 39%;
            transform: scale(0.5) translate(30px, -5px);
            border-radius: 45% 55% 68% 32% / 49% 28% 72% 51%;
        } */

// &:hover::before {
//     font-size: 1px;
//     content: '';
//     position: absolute;
//     left: 2px;
//     top: 2px;
//     width: 20px;
//     height: 20px;
//     background-color: transparent;
//     border-radius: 66% 34% 49% 51% / 66% 56% 44% 34%;
//     box-shadow: inset 3px 5px 5px rgba(0, 0, 0, 0.07), 5px 5px 10px rgba(0, 0, 0, 0.1),
//         5px 5px 5px rgba(255, 255, 255, 0.05), inset -3px -5px 10px rgba(255, 255, 255, 1);
//     transition: all 0.5s ease-out;

// }

/* &::after {
                content: '';
                position: absolute;
                right: 2px;
                bottom: 2px;
                width: 20px;
                height: 20px;
                background: transparent;
                border-radius: 35% 65% 61% 39% / 58% 48% 52% 42%;
                box-shadow: inset -3px 3px 3px rgba(0, 0, 0, 0.05), 5px 5px 8px rgba(0, 0, 0, 0.1),
                    5px 5px 5px rgba(255, 255, 255, 0.05), inset -3px 5px 8px rgba(255, 255, 255, 1);
            } */
