import { observer } from 'mobx-react';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import AuthViewModel from 'viewModel/auth/auth.viewModel';
import pageUrlConfig from 'configs/pageUrl.config';

import * as Styled from './background.styles';
import PageContainer from 'components/templates/page-container';
import AuthTemplate from 'components/templates/auth.template';
import SignUpForm from 'components/organisms/Form/signup-form';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import Typography from 'components/atoms/Typograph/default-typography';

const Image = process.env.PUBLIC_URL + '/image/background/plant_01.png';

const SignUpView = () => {
    const authViewModel: AuthViewModel = useViewModel(ViewModelName.AUTH);
    return (
        <PageContainer style={{ overflow: 'visible' }}>
            <AuthTemplate>
                <Typography
                    as="span"
                    textAlign="center"
                    variant="H3"
                    color="grey"
                    marginTop={16}
                    marginBottom={16}
                >
                    식집사님을 초대합니다.
                </Typography>
                <SignUpForm
                    handleSignUp={authViewModel.handleSignUp}
                    handleCheckEmail={authViewModel.handleCheckEmail}
                    handleInputChange={authViewModel.handleInputChange}
                    name={authViewModel.authState.name}
                    email={authViewModel.authState.email}
                    password={authViewModel.authState.password}
                    confirmPassword={authViewModel.authState.confirmPassword}
                    disabled={!authViewModel.isEmailCheck}
                />
                <RectangleButton
                    size="md"
                    to={`${pageUrlConfig.auth}${pageUrlConfig.signIn}`}
                    backgroundColor="transparent"
                    style={{ color: 'black' }}
                >
                    로그인 바로가기
                </RectangleButton>
            </AuthTemplate>
            <Styled.SignUpPlantImage src={Image} />
            <Styled.SignUpPlantImage src={Image} />
        </PageContainer>
    );
};

export default observer(SignUpView);
