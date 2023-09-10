import type { ChangeEvent, FormEventHandler, HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { Controller, useForm } from 'react-hook-form';
import { SignUphModel } from 'models/auth/signUp.model';
import { authFormState, authItemState } from 'configs/form.config';

import Flex from 'components/atoms/Group/flex';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import TextField from 'components/molecules/TextField/default-textField';
import ResponsiveTextFieldWrapper from 'components/molecules/TextField/textField';

interface FormProps {
    handleSignUp: FormEventHandler<HTMLFormElement>;
    handleCheckEmail: (e: any) => Promise<void>;
    handleInputChange: (key: any, value: any) => void;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    disabled: boolean;
}

type Props = React.PropsWithChildren<FormProps> & HTMLAttributes<HTMLFormElement>;

const SignUpForm = ({
    name = '',
    email = '',
    password = '',
    confirmPassword = '',
    handleCheckEmail,
    handleInputChange,
    handleSignUp,
    disabled = false,
}: Props) => {
    const { control, handleSubmit, watch } = useForm<SignUphModel>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            phone: '',
        },
    });

    return (
        <>
            <form onSubmit={handleSubmit(handleSignUp)} noValidate>
                <Wrapper id="form_wrapper" direction="column">
                    {/* 이름 */}
                    <Controller
                        name={authItemState.name.property}
                        control={control}
                        defaultValue={name}
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
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
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
                        {/* 이메일 */}
                        <Controller
                            name={authItemState.email.property}
                            control={control}
                            defaultValue={email}
                            rules={authFormState.email}
                            render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                                <TextField error={!!error}>
                                    <TextField.Wrapper style={{ height: '100px', width: '80%' }}>
                                        <TextField.Label required>
                                            {authItemState.email.label}
                                        </TextField.Label>
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
                                                    handleInputChange('email', value);
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
                            variant="primary"
                            size="sm"
                            style={{ width: '15%', height: '30px', transform: 'translateY(110%)' }}
                            onClick={handleCheckEmail}
                        >
                            확인
                        </RectangleButton>
                        {/* 이메일 */}
                    </Flex.TextFieldFlexWrapper>
                    {/* 비밀번호 */}
                    <Controller
                        name={authItemState.password.property}
                        control={control}
                        defaultValue={password}
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
                    {/* 비밀번호 확인 */}
                    <Controller
                        name={authItemState.confirmPassword.property}
                        control={control}
                        defaultValue={confirmPassword}
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
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
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

                    <Controller
                        name={authItemState.phone.property}
                        control={control}
                        defaultValue=""
                        rules={authFormState.phone}
                        render={({ field: { value, onChange }, fieldState: { error } }) => (
                            <TextField error={!!error}>
                                <ResponsiveTextFieldWrapper.AUTH style={{ height: '100px' }}>
                                    <TextField.Label required>{authItemState.phone.label}</TextField.Label>
                                    <TextField.Container
                                        id="phone_container"
                                        leftIcon={authItemState.phone.icon.main}
                                    >
                                        <TextField.Input
                                            id="phone_input"
                                            value={value}
                                            type={authItemState.phone.type}
                                            placeholder={authItemState.phone.placeHolder}
                                            maxLength={13}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                                const onlyNumber = e.target.value
                                                    .replace(/[^0-9]/g, '')
                                                    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
                                                    .replace(/(\-{1,2})$/g, '');
                                                onChange(onlyNumber);
                                            }}
                                        />
                                    </TextField.Container>
                                    <TextField.HelperText
                                        leftIcon={authItemState.phone.icon.helper}
                                        style={{ padding: '0 8px' }}
                                    >
                                        {error?.message}
                                    </TextField.HelperText>
                                </ResponsiveTextFieldWrapper.AUTH>
                            </TextField>
                        )}
                    />

                    <div
                        id="submit_btn"
                        style={{
                            display: 'flex',
                            width: '100%',
                            backgroundColor: 'transparent',
                            padding: '8px',
                        }}
                    >
                        <SubmitButton type="submit" variant="primary" disabled={disabled}>
                            확인
                        </SubmitButton>
                    </div>
                </Wrapper>
            </form>
        </>
    );
};
export default SignUpForm;

const SubmitButton = styled(RectangleButton)`
    width: 100%;
`;
const Wrapper = styled(Flex.Default)`
    opacity: 0;
    transition: opacity 0.35s ease-in-out;
`;
