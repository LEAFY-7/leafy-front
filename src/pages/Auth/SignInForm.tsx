import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { SignInModel } from 'models/auth/auth.model';
import AuthViewModel from 'viewModel/auth/auth.viewModel';
import { authFormState, authItemState } from 'configs/form.config';

import Flex from 'components/atoms/Group/flex';
import Div from 'components/atoms/Div/default-div';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import TextFiled from 'components/molecules/TextField';

const SignInForm = () => {
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
        <form onSubmit={handleSubmit(authViewModel.handleSubmit)} noValidate>
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
                    <SubmitButton type="submit" variant="primary" isBorder disabled={isSubmitting}>
                        로그인하기
                    </SubmitButton>
                </Div>
            </Flex>
        </form>
    );
};

export default observer(SignInForm);

const SubmitButton = styled(RectangleButton)`
    width: 100%;
`;
