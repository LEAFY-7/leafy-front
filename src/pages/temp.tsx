/** @jsxImportSource @emotion/react */
import React from 'react';
import MonoTemplate from '@components/templates/mono-template';
import Div from '@components/atoms/Div/default-div';
import RectangleButton from '@components/atoms/Button/rectangle-button';
import EffectiveButton from '@components/atoms/Button/effective-button';
import { RiLockPasswordLine } from 'react-icons/ri';

// 연습장
const Temp = () => {
    const [isChecked, setIsChecked] = React.useState(false);

    return (
        <>
            <MonoTemplate
                mainSection={
                    <Div id="temp" direction="column">
                        <Div id="temp" height="100px">
                            <EffectiveButton variant="primary" leftIcon={<RiLockPasswordLine />}>
                                버튼
                            </EffectiveButton>
                            <EffectiveButton variant="secondary" leftIcon={<RiLockPasswordLine />}>
                                클릭입니다.
                            </EffectiveButton>
                            <EffectiveButton variant="tertiary" leftIcon={<RiLockPasswordLine />}>
                                클릭입니다.
                            </EffectiveButton>
                            <EffectiveButton variant="quaternary" leftIcon={<RiLockPasswordLine />}>
                                클릭입니다.
                            </EffectiveButton>
                            <EffectiveButton variant="important" leftIcon={<RiLockPasswordLine />}>
                                클릭입니다.
                            </EffectiveButton>
                        </Div>
                        <EffectiveButton variant="secondary" leftIcon={<RiLockPasswordLine />} isBorder>
                            버튼 버튼 버튼 버튼 버튼
                        </EffectiveButton>
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
