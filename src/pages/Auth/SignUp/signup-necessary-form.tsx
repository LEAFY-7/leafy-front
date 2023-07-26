import React from 'react';
import { observer } from 'mobx-react';
import { Controller, useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import AuthViewModel from 'viewModel/auth/auth.viewModel';
import { SignUphModel } from 'models/auth/signUp.model';
import { authFormState, authItemState } from 'configs/form.config';

import Flex from 'components/atoms/Group/flex';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import Div from 'components/atoms/Div/default-div';
import TextFiled from 'components/molecules/TextField';

const SignUpNecessaryForm = () => {
    const authViewModel: AuthViewModel = useViewModel(ViewModelName.AUTH);
    const { control, handleSubmit, watch } = useForm<SignUphModel>({
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
            <Wrapper id="form_wrapper" direction="column">
                <Controller
                    name={authItemState.name.property}
                    control={control}
                    defaultValue={authViewModel.data.name}
                    rules={authFormState.name}
                    render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                        <TextFiled
                            value={value}
                            type={authItemState.name.type}
                            labelTitle={authItemState.name.label}
                            leftIcon={authItemState.name.icon.main}
                            helperIcon={authItemState.name.icon.helper}
                            placeholder={authItemState.name.placeHolder}
                            error={!!error}
                            helperText={error?.message}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                const { value } = e.target;
                                onChange(value);
                            }}
                        />
                    )}
                />
                <Controller
                    name={authItemState.nickName.property}
                    control={control}
                    defaultValue={authViewModel.data.nickName}
                    rules={authFormState.nickName}
                    render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                        <TextFiled
                            value={value}
                            type={authItemState.nickName.type}
                            labelTitle={authItemState.nickName.label}
                            leftIcon={authItemState.nickName.icon.main}
                            helperIcon={authItemState.nickName.icon.helper}
                            placeholder={authItemState.nickName.placeHolder}
                            error={!!error}
                            helperText={error?.message}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                const { value } = e.target;
                                onChange(value);
                            }}
                        />
                    )}
                />

                <Controller
                    name={authItemState.email.property}
                    control={control}
                    defaultValue={authViewModel.data.email}
                    rules={authFormState.email}
                    render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                        <TextFiled
                            value={value}
                            type={authItemState.email.type}
                            labelTitle={authItemState.email.label}
                            leftIcon={authItemState.email.icon.main}
                            helperIcon={authItemState.email.icon.helper}
                            placeholder={authItemState.email.placeHolder}
                            error={!!error}
                            helperText={error?.message}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                const { value } = e.target;
                                onChange(value);
                            }}
                        />
                    )}
                />

                <Controller
                    name={authItemState.password.property}
                    control={control}
                    defaultValue={authViewModel.data.password}
                    rules={authFormState.password}
                    render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                        <TextFiled
                            value={value}
                            type={authItemState.password.type}
                            labelTitle={authItemState.password.label}
                            leftIcon={authItemState.password.icon.main}
                            helperIcon={authItemState.password.icon.helper}
                            placeholder={authItemState.password.placeHolder}
                            error={!!error}
                            helperText={error?.message}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                const { value } = e.target;
                                onChange(value);
                            }}
                        />
                    )}
                />
                <Controller
                    name={authItemState.confirmPassword.property}
                    control={control}
                    defaultValue={authViewModel.data.confirmPassword}
                    rules={authFormState.confirmPassword(
                        (value) => value === watch(authItemState.password.property),
                    )}
                    render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                        <TextFiled
                            value={value}
                            type={authItemState.confirmPassword.type}
                            labelTitle={authItemState.confirmPassword.label}
                            leftIcon={authItemState.confirmPassword.icon.main}
                            helperIcon={authItemState.confirmPassword.icon.helper}
                            placeholder={authItemState.confirmPassword.placeHolder}
                            error={!!error}
                            helperText={error?.message || '비밀번호가 일치하지 않습니다.'}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                const { value } = e.target;
                                onChange(value);
                            }}
                        />
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
