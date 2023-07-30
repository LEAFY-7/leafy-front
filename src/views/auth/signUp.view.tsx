import styled from '@emotion/styled';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { SignUphModel } from 'models/auth/signUp.model';
import { useForm } from 'react-hook-form';
import AuthViewModel from 'viewModel/auth/auth.viewModel';

import RectangleButton from 'components/atoms/Button/rectangle-button';
import Div from 'components/atoms/Div/default-div';
import Flex from 'components/atoms/Group/flex';
import TextFiled from 'components/molecules/TextField';
import { authFormState, authItemState } from 'configs/form.config';

/**
 * 회원가입
 */
const SignUpView = () => {
    const authViewModel: AuthViewModel = useViewModel(ViewModelName.AUTH);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<SignUphModel>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });
    return (
        <form aria-label="signup" onSubmit={handleSubmit(authViewModel.handleSignUp)} noValidate>
            <Flex id="signUpForm_wrapper" direction="column">
                <TextFiled
                    // hookForm
                    type={authItemState.name.type}
                    labelTitle={authItemState.name.label}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    leftIcon={authItemState.name.icon.main}
                    helperIcon={authItemState.name.icon.helper}
                    {...register(authItemState.name.property, authFormState.name)}
                />
                <TextFiled
                    // hookForm
                    type={authItemState.email.type}
                    labelTitle={authItemState.email.label}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    leftIcon={authItemState.email.icon.main}
                    helperIcon={authItemState.email.icon.helper}
                    {...register(authItemState.email.property, authFormState.email)}
                />
                <TextFiled
                    // hookForm
                    type={authItemState.password.type}
                    labelTitle={authItemState.password.label}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    leftIcon={authItemState.password.icon.main}
                    helperIcon={authItemState.password.icon.helper}
                    {...register(authItemState.password.property, authFormState.password)}
                />
                <TextFiled
                    // hookForm
                    type={authItemState.confirmPassword.type}
                    labelTitle={authItemState.confirmPassword.label}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message || '비밀번호가 일치하지 않습니다.'}
                    leftIcon={authItemState.confirmPassword.icon.main}
                    helperIcon={authItemState.confirmPassword.icon.helper}
                    {...register(
                        authItemState.confirmPassword.property,
                        authFormState.confirmPassword(
                            (value) => value === watch(authItemState.password.property),
                        ),
                    )}
                />
                <Div id="submit_btn" width={100} padding={8}>
                    <SubmitButton type="submit" variant="primary" disabled={isSubmitting}>
                        회원가입하기
                    </SubmitButton>
                </Div>
            </Flex>
        </form>
    );
};

export default SignUpView;

const SubmitButton = styled(RectangleButton)`
    width: 100%;
`;
