import styled from '@emotion/styled';
import { observer } from 'mobx-react';
import { Controller, useForm } from 'react-hook-form';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { SignInModel } from 'models/auth/signIn.model';
import AuthViewModel from 'viewModel/auth/auth.viewModel';
import { authItemState } from 'configs/form.config';

import Flex from 'components/atoms/Group/flex';
import Div from 'components/atoms/Div/default-div';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import TextField from 'components/molecules/TextField/default-textField';

const SignInDefaultForm = () => {
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
                <Controller
                    name={authItemState.email.property as 'email'}
                    control={control}
                    defaultValue={authViewModel.data.email}
                    render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                        <TextField error={!!error}>
                            <TextField.Wrapper style={{ height: '100px' }}>
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
                                        style={{ width: '300px' }}
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

                <Controller
                    name={authItemState.password.property as 'password'}
                    control={control}
                    defaultValue={authViewModel.data.password}
                    render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                        <TextField error={!!error}>
                            <TextField.Wrapper style={{ height: '100px' }}>
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
                                        style={{ width: '300px' }}
                                    />
                                </TextField.Container>
                                <TextField.HelperText
                                    leftIcon={authItemState.password.icon.helper}
                                    style={{ padding: '0 8px' }}
                                >
                                    {error?.message}
                                </TextField.HelperText>
                            </TextField.Wrapper>
                        </TextField>
                    )}
                />
                <Div id="submit_btn" width={100} padding={8} style={{ backgroundColor: 'transparent' }}>
                    <SubmitButton type="submit" variant="primary" disabled={isSubmitting}>
                        로그인하기
                    </SubmitButton>
                </Div>
            </Wrapper>
        </form>
    );
};

export default observer(SignInDefaultForm);

const SubmitButton = styled(RectangleButton)`
    width: 100%;
`;

const Wrapper = styled(Flex)`
    opacity: 0;
    transition: opacity 0.35s ease-in-out;
`;
