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
import TextFiled from 'components/molecules/TextField';

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
                    name={authItemState.password.property as 'password'}
                    control={control}
                    defaultValue={authViewModel.data.password}
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
