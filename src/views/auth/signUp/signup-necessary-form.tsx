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
import TextField from 'components/molecules/TextField/default-textField';
import ResponsiveTextFieldWrapper from 'components/molecules/TextField/textField';

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
                {/* 이름 */}
                <Controller
                    name={authItemState.name.property}
                    control={control}
                    defaultValue={authViewModel.data.name}
                    rules={authFormState.name}
                    render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                        <TextField error={!!error}>
                            <ResponsiveTextFieldWrapper.AUTH style={{ height: '100px' }}>
                                <TextField.Label required>{authItemState.name.label}</TextField.Label>
                                <TextField.Container
                                    id="name_container"
                                    leftIcon={authItemState.name.icon.main}
                                >
                                    <TextField.Input
                                        value={value}
                                        type={authItemState.name.type}
                                        placeholder={authItemState.name.placeHolder}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            const { value } = e.target;
                                            onChange(value);
                                        }}
                                    />
                                </TextField.Container>
                                <TextField.HelperText
                                    leftIcon={authItemState.name.icon.helper}
                                    style={{ padding: '0 8px' }}
                                >
                                    {error?.message}
                                </TextField.HelperText>
                            </ResponsiveTextFieldWrapper.AUTH>
                        </TextField>
                    )}
                />
                {/* 이름 */}
                <Flex.TextFieldFlexWrapper>
                    {/* 닉네임 */}
                    <Controller
                        name={authItemState.nickName.property}
                        control={control}
                        defaultValue={authViewModel.data.nickName}
                        rules={authFormState.nickName}
                        render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                            <>
                                <TextField error={!!error}>
                                    <TextField.Wrapper style={{ height: '100px', width: '80%' }}>
                                        <TextField.Label required>
                                            {authItemState.nickName.label}
                                        </TextField.Label>
                                        <TextField.Container
                                            id="nickName_container"
                                            leftIcon={authItemState.nickName.icon.main}
                                        >
                                            <TextField.Input
                                                value={value}
                                                type={authItemState.nickName.type}
                                                placeholder={authItemState.nickName.placeHolder}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                    const { value } = e.target;
                                                    onChange(value);
                                                    authViewModel.handleInputChange('nickName', value);
                                                }}
                                            />
                                        </TextField.Container>
                                        <TextField.HelperText
                                            leftIcon={authItemState.nickName.icon.helper}
                                            style={{ padding: '0 8px' }}
                                        >
                                            {error?.message}
                                        </TextField.HelperText>
                                    </TextField.Wrapper>
                                </TextField>
                            </>
                        )}
                    />
                    <RectangleButton
                        variant="secondary"
                        size="sm"
                        style={{ width: '15%', height: '30px', transform: 'translateY(110%)' }}
                        onClick={authViewModel.handleCheckNickName}
                    >
                        확인
                    </RectangleButton>
                    {/* 닉네임 */}
                </Flex.TextFieldFlexWrapper>

                <Flex.TextFieldFlexWrapper>
                    {/* 이메일 */}
                    <Controller
                        name={authItemState.email.property}
                        control={control}
                        defaultValue={authViewModel.data.email}
                        rules={authFormState.email}
                        render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                            <TextField error={!!error}>
                                <TextField.Wrapper style={{ height: '100px', width: '80%' }}>
                                    <TextField.Label required>{authItemState.email.label}</TextField.Label>
                                    <TextField.Container
                                        id="email_container"
                                        leftIcon={authItemState.email.icon.main}
                                    >
                                        <TextField.Input
                                            value={value}
                                            type={authItemState.email.type}
                                            placeholder={authItemState.email.placeHolder}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                const { value } = e.target;
                                                onChange(value);
                                                authViewModel.handleInputChange('email', value);
                                            }}
                                        />
                                    </TextField.Container>
                                    <TextField.HelperText
                                        leftIcon={authItemState.email.icon.helper}
                                        style={{ padding: '0 8px' }}
                                    >
                                        {error?.message}
                                    </TextField.HelperText>
                                </TextField.Wrapper>
                            </TextField>
                        )}
                    />
                    <RectangleButton
                        variant="secondary"
                        size="sm"
                        style={{ width: '15%', height: '30px', transform: 'translateY(110%)' }}
                        onClick={authViewModel.handleCheckEmail}
                    >
                        확인
                    </RectangleButton>
                    {/* 이메일 */}
                </Flex.TextFieldFlexWrapper>
                {/* 비밀번호 */}
                <Controller
                    name={authItemState.password.property}
                    control={control}
                    defaultValue={authViewModel.data.password}
                    rules={authFormState.password}
                    render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                        <TextField error={!!error}>
                            <ResponsiveTextFieldWrapper.AUTH style={{ height: '100px' }}>
                                <TextField.Label required>{authItemState.password.label}</TextField.Label>
                                <TextField.Container
                                    id="password_container"
                                    leftIcon={authItemState.password.icon.main}
                                >
                                    <TextField.Input
                                        value={value}
                                        type={authItemState.password.type}
                                        placeholder={authItemState.password.placeHolder}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            const { value } = e.target;
                                            onChange(value);
                                        }}
                                    />
                                </TextField.Container>
                                <TextField.HelperText
                                    leftIcon={authItemState.password.icon.helper}
                                    style={{ padding: '0 8px' }}
                                >
                                    {error?.message}
                                </TextField.HelperText>
                            </ResponsiveTextFieldWrapper.AUTH>
                        </TextField>
                    )}
                />
                {/* 비밀번호 */}
                {/* 비밀번호 확인 */}
                <Controller
                    name={authItemState.confirmPassword.property}
                    control={control}
                    defaultValue={authViewModel.data.confirmPassword}
                    rules={authFormState.confirmPassword(
                        (value) => value === watch(authItemState.password.property),
                    )}
                    render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                        <TextField error={!!error}>
                            <ResponsiveTextFieldWrapper.AUTH style={{ height: '100px' }}>
                                <TextField.Label required>
                                    {authItemState.confirmPassword.label}
                                </TextField.Label>
                                <TextField.Container
                                    id="confirmPassword_container"
                                    leftIcon={authItemState.confirmPassword.icon.main}
                                >
                                    <TextField.Input
                                        value={value}
                                        type={authItemState.confirmPassword.type}
                                        placeholder={authItemState.confirmPassword.placeHolder}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            const { value } = e.target;
                                            onChange(value);
                                        }}
                                    />
                                </TextField.Container>
                                <TextField.HelperText
                                    leftIcon={authItemState.confirmPassword.icon.helper}
                                    style={{ padding: '0 8px' }}
                                >
                                    {error?.message || '비밀번호가 일치하지 않습니다.'}
                                </TextField.HelperText>
                            </ResponsiveTextFieldWrapper.AUTH>
                        </TextField>
                    )}
                />
                {/* 비밀번호 확인 */}
                <div
                    id="submit_btn"
                    style={{
                        display: 'flex',
                        width: '100%',
                        backgroundColor: 'transparent',
                        padding: '8px',
                    }}
                >
                    <SubmitButton type="submit" variant="primary">
                        다음
                    </SubmitButton>
                </div>
            </Wrapper>
        </form>
    );
};

export default observer(SignUpNecessaryForm);

const SubmitButton = styled(RectangleButton)`
    width: 100%;
`;
const Wrapper = styled(Flex.Default)`
    opacity: 0;
    transition: opacity 0.35s ease-in-out;
`;
