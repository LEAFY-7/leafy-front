import React from 'react';
import useToggle from 'hooks/useToggle';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

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
                    <Div id="box" size="lg" direction="column" isBorder>
                        <TextLogo to="" variant="default" fontSize="xxxl">
                            LEAFY
                        </TextLogo>
                        <Typography variant="BODY1">{toggle ? '로그인' : '회원가입'}</Typography>
                        {toggle && <SignInForm />}
                        {!toggle && <SignUpForm />}
                        <RectangleButton size="sm" onClick={handler}>
                            {toggle ? '회원가입 바로가기' : '로그인 바로가기'}
                        </RectangleButton>
                    </Div>
                }
            />
        </>
    );
};

export default Auth;
