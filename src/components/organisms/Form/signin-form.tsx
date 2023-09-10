import type { FormEventHandler, HTMLAttributes, ChangeEvent } from 'react';
import styled from '@emotion/styled';
import { Control, Controller, useForm } from 'react-hook-form';
import { SignInModel } from 'models/auth/signIn.model';
import { authItemState } from 'configs/form.config';

import Flex from 'components/atoms/Group/flex';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import TextField from 'components/molecules/TextField/default-textField';
import ResponsiveTextFieldWrapper from 'components/molecules/TextField/textField';

interface FormProps {
    handleSignIn: FormEventHandler<HTMLFormElement>;
    email: string;
    password: string;
}

type Props = React.PropsWithChildren<FormProps> & HTMLAttributes<HTMLFormElement>;

const SignInForm = ({ email = '', password = '', handleSignIn }: Props) => {
    const { control, handleSubmit } = useForm<SignInModel>({
        defaultValues: {
            email: '',
            password: '',
        },
    });
    return (
        <>
            <form aria-label="signin" onSubmit={handleSubmit(handleSignIn)} noValidate>
                <Wrapper id="form_wrapper" direction="column">
                    {/* 이메일 */}
                    <Controller
                        name={authItemState.email.property as 'email'}
                        control={control}
                        defaultValue={email}
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
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
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
                        defaultValue={password}
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
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
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
                        <SubmitButton type="submit" variant="primary">
                            로그인하기
                        </SubmitButton>
                    </div>
                </Wrapper>
            </form>
        </>
    );
};
export default SignInForm;

const SubmitButton = styled(RectangleButton)`
    width: 100%;
`;

const Wrapper = styled(Flex.Default)`
    opacity: 0;
    transition: opacity 0.35s ease-in-out;
`;
