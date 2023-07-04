import React from 'react';
import useToggle from 'hooks/useToggle';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

import Box from 'components/atoms/Box/default-box';
import Div from 'components/atoms/Div/default-div';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import TextLogo from 'components/atoms/Logo/text-logo';
import MonoTemplate from 'components/templates/mono-template';
import Typography from 'components/atoms/Typograph/default-typography';

const Auth = () => {
    const { isOn: toggle, handler } = useToggle();

    return (
        <>
            <MonoTemplate
                mainSection={
                    <Box width={100} display="flex" justifyContent="center" alignItems="center">
                        <Div id="box" size="lg" direction="column" isBorder>
                            <TextLogo to="" variant="default" fontSize="xxxl">
                                LEAFY
                            </TextLogo>
                            <Typography as="span" textAlign="center" variant="H3" marginTop={20}>
                                {toggle ? '로그인' : '회원가입'}
                            </Typography>
                            {toggle && <SignInForm />}
                            {!toggle && <SignUpForm />}
                            <RectangleButton size="md" onClick={handler}>
                                {toggle ? '회원가입 바로가기' : '로그인 바로가기'}
                            </RectangleButton>
                        </Div>
                    </Box>
                }
            />
        </>
    );
};

export default Auth;
