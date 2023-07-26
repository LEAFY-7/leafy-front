import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { observer } from 'mobx-react';
import AuthViewModel from 'viewModel/auth/auth.viewModel';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import * as Styled from './background.styles';

import RectangleButton from 'components/atoms/Button/rectangle-button';
import Div from 'components/atoms/Div/default-div';
import Typography from 'components/atoms/Typograph/default-typography';
import PageContainer from 'components/templates/page-container';
const Image = process.env.PUBLIC_URL + '/images/plant_01.png';

const Auth = () => {
    const authViewModel: AuthViewModel = useViewModel(ViewModelName.AUTH);

    return (
        <PageContainer style={{ margin: '0 auto', position: 'relative' }}>
            <>
                <Div variant="translucent" direction="column" width="700px" padding={24}>
                    {/* <TextLogo to="" variant="default" fontSize="xxxl">
                            LEAFY
                        </TextLogo> */}
                    <Typography
                        as="span"
                        textAlign="center"
                        variant="H3"
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
                {authViewModel.toggle && (
                    <>
                        <Styled.SignInPlantImage src={Image} />
                        <Styled.SignInPlantImage src={Image} />
                    </>
                )}
                {!authViewModel.toggle && (
                    <>
                        <Styled.SignUpPlantImage src={Image} />
                        <Styled.SignUpPlantImage src={Image} />
                    </>
                )}
            </>
        </PageContainer>
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
