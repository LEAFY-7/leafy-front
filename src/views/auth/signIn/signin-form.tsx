import styled from '@emotion/styled';
import { observer } from 'mobx-react';
import { Controller, useForm } from 'react-hook-form';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { SignInModel } from 'models/auth/signIn.model';
import AuthViewModel from 'viewModel/auth/auth.viewModel';
import { authItemState } from 'configs/form.config';

import Flex from 'components/atoms/Group/flex';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import TextField from 'components/molecules/TextField/default-textField';
import ResponsiveTextFieldWrapper from 'components/molecules/TextField/textField';

const SignInForm = () => {
    const authViewModel: AuthViewModel = useViewModel(ViewModelName.AUTH);

    const {
        control,
        handleSubmit,
        formState: { isSubmitting, dirtyFields },
    } = useForm<SignInModel>({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    return (
        <form aria-label="signin" onSubmit={handleSubmit(authViewModel.handleSignIn)} noValidate>
            <Wrapper id="form_wrapper" direction="column">
                {/* 이메일 */}
                <Controller
                    name={authItemState.email.property as 'email'}
                    control={control}
                    defaultValue={authViewModel.authState.email}
                    render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                        <TextField error={!!error}>
                            <ResponsiveTextFieldWrapper.AUTH style={{ height: '100px' }}>
                                <TextField.Label>{authItemState.email.label}</TextField.Label>
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
                                        }}
                                    />
                                </TextField.Container>
                                <TextField.HelperText
                                    leftIcon={authItemState.email.icon.helper}
                                    style={{ padding: '0 8px' }}
                                >
                                    {error?.message}
                                </TextField.HelperText>
                            </ResponsiveTextFieldWrapper.AUTH>
                        </TextField>
                    )}
                />
                {/* 이메일 */}
                {/* 비밀번호 */}
                <Controller
                    name={authItemState.password.property as 'password'}
                    control={control}
                    defaultValue={authViewModel.authState.password}
                    render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                        <TextField error={!!error}>
                            <ResponsiveTextFieldWrapper.AUTH style={{ height: '100px' }}>
                                <TextField.Label>{authItemState.password.label}</TextField.Label>
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
                <div
                    id="submit_btn"
                    style={{
                        display: 'flex',
                        width: '100%',
                        backgroundColor: 'transparent',
                        padding: '8px',
                    }}
                >
                    <SubmitButton type="submit" variant="primary" disabled={isSubmitting}>
                        로그인하기
                    </SubmitButton>
                </div>
            </Wrapper>
        </form>
    );
};

export default observer(SignInForm);

const SubmitButton = styled(RectangleButton)`
    width: 100%;
`;

const Wrapper = styled(Flex.Default)`
    opacity: 0;
    transition: opacity 0.35s ease-in-out;
`;
