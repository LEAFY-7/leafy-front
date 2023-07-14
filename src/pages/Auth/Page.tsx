import styled from '@emotion/styled';
import { observer } from 'mobx-react';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import AuthViewModel from 'viewModel/auth/auth.viewModel';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

import Div from 'components/atoms/Div/default-div';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import TextLogo from 'components/atoms/Logo/text-logo';
import Typography from 'components/atoms/Typograph/default-typography';
import MonoTemplate from 'components/templates/mono-template';

const Auth = () => {
    const authViewModel: AuthViewModel = useViewModel(ViewModelName.AUTH);

    return (
        <MonoTemplate
            margin="0 auto"
            mainSection={
                <Div variant="translucent" direction="column" width="700px" padding={24}>
                    {/* <TextLogo to="" variant="default" fontSize="xxxl">
                        LEAFY
                    </TextLogo> */}
                    <Typography
                        as="span"
                        textAlign="center"
                        variant="H2"
                        color="grey"
                        marginTop={16}
                        marginBottom={16}
                    >
                        {authViewModel.toggle && (
                            <>
                                {AuthMessage.main} <br /> {AuthMessage.signIn}
                            </>
                        )}

                        {!authViewModel.toggle && (
                            <>
                                {AuthMessage.main} {AuthMessage.signUp}
                            </>
                        )}
                    </Typography>
                    {authViewModel.toggle && <SignInForm />}
                    {!authViewModel.toggle && <SignUpForm />}
                    <RectangleButton size="md" onClick={authViewModel.handleToggle}>
                        {authViewModel.toggle ? AuthMessage.goSignUp : AuthMessage.goSignIn}
                    </RectangleButton>
                </Div>
            }
        />
    );
};

export default observer(Auth);

const AuthMessage = {
    main: '식집사님',
    signIn: '오늘은 어떤 식물을 보러 오셨나요?',
    signUp: '초대합니다.',
    goSignUp: '회원가입 바로가기',
    goSignIn: '로그인 바로가기',
};
