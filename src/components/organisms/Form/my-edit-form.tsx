import type { HTMLAttributes, FormEventHandler, ChangeEvent } from 'react';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import styled from '@emotion/styled';

import { SignUphModel } from 'models/auth/signUp.model';
import { authFormState, authItemState } from 'configs/form.config';

import TextField from 'components/molecules/TextField/default-textField';
import ResponsiveTextFieldWrapper from 'components/molecules/TextField/textField';
import Flex from 'components/atoms/Group/flex';
import DropButton from 'components/atoms/Button/drop-button';

interface FormProps {}
type Props = React.PropsWithChildren<FormProps> & HTMLAttributes<HTMLFormElement>;

const MyEditForm = ({}: Props) => {
    const { control, handleSubmit, watch } = useForm<SignUphModel>({
        defaultValues: {
            name: '',
            nickName: '',
            email: '',
            password: '',
            confirmPassword: '',
            phone: '',
            introduction: '',
        },
    });

    const handleSubmitMyEditForm = (e) => {
        console.log(e);
    };
    return (
        <>
            <form onSubmit={handleSubmit(handleSubmitMyEditForm)}>
                {/* 이름 */}
                <Controller
                    name={authItemState.name.property}
                    control={control}
                    defaultValue={''}
                    rules={authFormState.name}
                    render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                        <TextField error={!!error}>
                            <ResponsiveTextFieldWrapper.MY style={{ height: '100px' }}>
                                <TextField.Label>{authItemState.name.label}</TextField.Label>
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
                            </ResponsiveTextFieldWrapper.MY>
                        </TextField>
                    )}
                />
                {/* 이름 */}
                {/* 닉네임 */}
                <Controller
                    name={authItemState.nickName.property}
                    control={control}
                    defaultValue={''}
                    rules={authFormState.nickName}
                    render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                        <TextField error={!!error}>
                            <ResponsiveTextFieldWrapper.MY style={{ height: '100px' }}>
                                <TextField.Label>{authItemState.nickName.label}</TextField.Label>
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
                                        }}
                                    />
                                </TextField.Container>
                                <TextField.HelperText
                                    leftIcon={authItemState.nickName.icon.helper}
                                    style={{ padding: '0 8px' }}
                                >
                                    {error?.message}
                                </TextField.HelperText>
                            </ResponsiveTextFieldWrapper.MY>
                        </TextField>
                    )}
                />
                {/* 닉네임 */}
                {/* 이메일 */}
                <Controller
                    name={authItemState.email.property}
                    control={control}
                    defaultValue={''}
                    rules={authFormState.email}
                    render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                        <TextField error={!!error} disabled>
                            <ResponsiveTextFieldWrapper.MY style={{ height: '100px' }}>
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
                            </ResponsiveTextFieldWrapper.MY>
                        </TextField>
                    )}
                />
                {/* 이메일 */}
                <Flex.RowToColumnOnTabletMd>
                    {/* 비밀번호 */}
                    <Controller
                        name={authItemState.password.property}
                        control={control}
                        defaultValue={''}
                        rules={authFormState.password}
                        render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                            <TextField error={!!error}>
                                <ResponsiveTextFieldWrapper.MY style={{ height: '100px' }}>
                                    <TextField.Label required requiredtext="비밀번호는 필수입니다.">
                                        {authItemState.password.label}
                                    </TextField.Label>
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
                                </ResponsiveTextFieldWrapper.MY>
                            </TextField>
                        )}
                    />
                    {/* 비밀번호 */}
                    {/* 비밀번호확인 */}
                    <Controller
                        name={authItemState.confirmPassword.property}
                        control={control}
                        defaultValue={''}
                        rules={authFormState.confirmPassword(
                            (value) => value === watch(authItemState.password.property),
                        )}
                        render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                            <TextField error={!!error}>
                                <ResponsiveTextFieldWrapper.MY style={{ height: '100px' }}>
                                    <TextField.Label required requiredtext="비밀번호확인 필수입니다.">
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
                                        {error?.message}
                                    </TextField.HelperText>
                                </ResponsiveTextFieldWrapper.MY>
                            </TextField>
                        )}
                    />
                    {/* 비밀번호 */}
                </Flex.RowToColumnOnTabletMd>
                <Flex.RowToColumnOnTabletMd>
                    {/* 연락처 */}
                    <Controller
                        name={authItemState.phone.property}
                        control={control}
                        defaultValue=""
                        rules={authFormState.phone}
                        render={({ field: { value, onChange }, fieldState: { error } }) => (
                            <TextField error={!!error}>
                                <ResponsiveTextFieldWrapper.MY style={{ height: '100px' }}>
                                    <TextField.Label required>{authItemState.phone.label}</TextField.Label>
                                    <TextField.Container
                                        id="phone_container"
                                        leftIcon={authItemState.phone.icon.main}
                                    >
                                        <TextField.Input
                                            value={value}
                                            type={authItemState.phone.type}
                                            placeholder={'연락처를 입력해주세요.'}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
                                </ResponsiveTextFieldWrapper.MY>
                            </TextField>
                        )}
                    />
                    {/* 연락처 */}
                </Flex.RowToColumnOnTabletMd>

                {/* 간단 소개 */}
                <Controller
                    name={authItemState.introduction.property}
                    control={control}
                    defaultValue={''}
                    rules={authFormState.introduction}
                    render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                        <TextField error={!!error}>
                            <ResponsiveTextFieldWrapper.MY style={{ width: '100%' }}>
                                <TextField.Label required>{authItemState.introduction.label}</TextField.Label>
                                <TextField.Container id="address_detail_container">
                                    <TextField.Textarea
                                        id="address_detail"
                                        value={value}
                                        placeholder={authItemState.introduction.placeHolder}
                                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                            const { value } = e.target;
                                            onChange(value);
                                        }}
                                        style={{ height: '100px', padding: '24px' }}
                                    />
                                </TextField.Container>
                                <TextField.HelperText
                                    leftIcon={authItemState.introduction.icon.helper}
                                    style={{ padding: '0 8px' }}
                                >
                                    {error?.message}
                                </TextField.HelperText>
                            </ResponsiveTextFieldWrapper.MY>
                        </TextField>
                    )}
                />
                {/* 간단 소개 */}

                <SubmitButtonWrapper>
                    <SubmitButton type="submit">수정하기</SubmitButton>
                </SubmitButtonWrapper>
            </form>
        </>
    );
};
export default MyEditForm;

// 수정하기 버튼
const SubmitButtonWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 50px;
    margin-top: 8px;
`;

const SubmitButton = styled(DropButton)`
    position: absolute;
    right: 0;
    bottom: 0;
`;
