import React, { useRef } from 'react';
import SignInForm from './SignInForm';
import Box from '@components/atoms/Box';
import Div from '@components/atoms/Div/default-div';
import RectangleButton from '@components/atoms/Button/rectangle-button';

const Auth = () => {
    const ref = useRef(null);
    return (
        <>
            <Box>이전의 박스 컴포넌트</Box>

            <Div id="box" size="lg" isBorder>
                새로운 박스 컴포넌트
            </Div>
            <Div id="greenBox" size="lg" variant="green" isBorder>
                그린 박스
            </Div>
            <RectangleButton variant="green" isBorder>
                버튼
            </RectangleButton>
            <RectangleButton variant="red">버튼</RectangleButton>
        </>
    );
};

export default Auth;
