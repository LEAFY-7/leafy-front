import React from 'react';
import { observer } from 'mobx-react';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import AuthViewModel from 'viewModel/auth/auth.viewModel';
import styled from '@emotion/styled';

import Flex from 'components/atoms/Group/flex';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import TextFiled from 'components/molecules/TextField';
import Div from 'components/atoms/Div/default-div';

import { useForm } from 'react-hook-form';
import { SignUphModel } from 'models/auth/signUp.model';
import { authFormState, authItemState } from 'configs/form.config';

const SignUpNecessaryForm = () => {
    const authViewModel: AuthViewModel = useViewModel(ViewModelName.AUTH);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, dirtyFields },
    } = useForm<SignUphModel>({
        defaultValues: {
            name: authViewModel.data?.name,
            nickName: authViewModel.data?.nickName,
            email: authViewModel.data?.email,
            password: authViewModel.data?.password,
            confirmPassword: authViewModel.data?.confirmPassword,
        },
    });

    return (
        <form onSubmit={handleSubmit(authViewModel.handleSignUpNecessary)} noValidate>
            <Wrapper id="signup_wrapper" direction="column">
                <TextFiled
                    type={authItemState.name.type}
                    labelTitle={authItemState.name.label}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    leftIcon={authItemState.name.icon.main}
                    helperIcon={authItemState.name.icon.helper}
                    {...register(authItemState.name.property, authFormState.name)}
                />
                <TextFiled
                    type={authItemState.nickName.type}
                    labelTitle={authItemState.nickName.label}
                    error={!!errors.nickName}
                    helperText={errors.nickName?.message}
                    leftIcon={authItemState.nickName.icon.main}
                    helperIcon={authItemState.nickName.icon.helper}
                    {...register(authItemState.nickName.property, authFormState.name)}
                />
                <TextFiled
                    type={authItemState.email.type}
                    labelTitle={authItemState.email.label}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    leftIcon={authItemState.email.icon.main}
                    helperIcon={authItemState.email.icon.helper}
                    {...register(authItemState.email.property, authFormState.email)}
                />
                <TextFiled
                    type={authItemState.password.type}
                    labelTitle={authItemState.password.label}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    leftIcon={authItemState.password.icon.main}
                    helperIcon={authItemState.password.icon.helper}
                    {...register(authItemState.password.property, authFormState.password)}
                />
                <TextFiled
                    type={authItemState.confirmPassword.type}
                    labelTitle={authItemState.confirmPassword.label}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message || '비밀번호가 일치하지 않습니다.'}
                    leftIcon={authItemState.confirmPassword.icon.main}
                    helperIcon={authItemState.confirmPassword.icon.helper}
                    {...register(
                        authItemState.confirmPassword.property,
                        authFormState.confirmPassword(
                            (value) => value === watch(authItemState.password.property as 'password'),
                        ),
                    )}
                />

                <Div id="submit_btn" width={100} padding={8}>
                    <SubmitButton type="submit" variant="primary">
                        다음
                    </SubmitButton>
                </Div>
            </Wrapper>
        </form>
    );
};

export default observer(SignUpNecessaryForm);

const SubmitButton = styled(RectangleButton)`
    width: 100%;
`;
const Wrapper = styled(Flex)`
    opacity: 0;
    transition: opacity 0.35s ease-in-out;
`;
