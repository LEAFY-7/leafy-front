import styled from '@emotion/styled';
import { authFormState, authItemState } from 'configs/form.config';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { SignInModel } from 'models/auth/signIn.model';
import { useForm } from 'react-hook-form';
import AuthViewModel from 'viewModel/auth/auth.viewModel';

import RectangleButton from 'components/atoms/Button/rectangle-button';
import Div from 'components/atoms/Div/default-div';
import Flex from 'components/atoms/Group/flex';
import TextFiled from 'components/molecules/TextField';

/**
 * 로그인
 */
const SignInView = () => {
    const authViewModel: AuthViewModel = useViewModel(ViewModelName.AUTH);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignInModel>({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    return (
        <form aria-label="signin" onSubmit={handleSubmit(authViewModel.handleSignIn)} noValidate>
            <Flex id="signInForm_wrapper" direction="column">
                <TextFiled
                    hookForm
                    type={authItemState.email.type}
                    labelTitle={authItemState.email.label}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    leftIcon={authItemState.email.icon.main}
                    helperIcon={authItemState.email.icon.helper}
                    {...register(authItemState.email.property as 'email', authFormState.email)}
                />
                <TextFiled
                    hookForm
                    type={authItemState.password.type}
                    labelTitle={authItemState.password.label}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    leftIcon={authItemState.password.icon.main}
                    helperIcon={authItemState.password.icon.helper}
                    {...register(authItemState.password.property as 'password', authFormState.password)}
                />
                <Div id="submit_btn" width={100} padding={8}>
                    <SubmitButton type="submit" variant="primary" disabled={isSubmitting}>
                        로그인하기
                    </SubmitButton>
                </Div>
            </Flex>
        </form>
    );
};

export default SignInView;

const SubmitButton = styled(RectangleButton)`
    width: 100%;
`;
