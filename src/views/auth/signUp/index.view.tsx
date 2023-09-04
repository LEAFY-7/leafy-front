import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import AuthViewModel from 'viewModel/auth/auth.viewModel';
import { SignUphModel } from 'models/auth/signUp.model';
import { authFormState, authItemState } from 'configs/form.config';
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

    const { control, handleSubmit, watch } = useForm<SignUphModel>({
        defaultValues: {
            name: authViewModel.authState?.name,
            email: authViewModel.authState?.email,
            password: authViewModel.authState?.password,
            confirmPassword: authViewModel.authState?.confirmPassword,
            phone: authViewModel.authState?.phone,
        },
    });

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
                    handleSubmit={handleSubmit(authViewModel.handleSignUp)}
                    handleCheckEmail={authViewModel.handleCheckEmail}
                    handleInputChange={authViewModel.handleInputChange}
                    control={control}
                    name={authViewModel.authState.name}
                    email={authViewModel.authState.email}
                    password={authViewModel.authState.password}
                    confirmPassword={authViewModel.authState.confirmPassword}
                    confirmPasswordRule={authFormState.confirmPassword(
                        (value) => value === watch(authItemState.password.property),
                    )}
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
