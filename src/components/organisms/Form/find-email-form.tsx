import type { HTMLAttributes, FormEventHandler, ChangeEvent } from 'react';
import React from 'react';
import styled from '@emotion/styled';
import { Controller, useForm } from 'react-hook-form';

import { SignUphModel } from 'models/auth/signUp.model';
import { authFormState, authItemState } from 'configs/form.config';

import TextField from 'components/molecules/TextField/default-textField';
import Flex from 'components/atoms/Group/flex';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import ResponsiveTextFieldWrapper from 'components/molecules/TextField/textField';

interface FormProps {
    handleFindEmail: FormEventHandler<HTMLFormElement>;
    name: string;
    phone: string;
}

type Props = React.PropsWithChildren<FormProps> & HTMLAttributes<HTMLFormElement>;

const FindEmailForm = ({ name = '', phone = '', handleFindEmail }: Props) => {
    const { control, handleSubmit } = useForm<SignUphModel>({
        defaultValues: {
            name: '',
            phone: '',
            email: '',
        },
    });

    return (
        <>
            <form onSubmit={handleSubmit(handleFindEmail)} noValidate>
                <Wrapper id="form_wrapper" direction="column">
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
                    <Controller
                        name={authItemState.phone.property}
                        control={control}
                        defaultValue={phone}
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
                    <ButtonWrapper>
                        <SubmitButton type="submit" variant="primary">
                            이메일 찾기
                        </SubmitButton>
                    </ButtonWrapper>
                </Wrapper>
            </form>
        </>
    );
};
export default FindEmailForm;

const Wrapper = styled(Flex.Default)`
    opacity: 0;
    transition: opacity 0.35s ease-in-out;
`;
const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    background-color: transparent;
    padding: 8px;
`;
const SubmitButton = styled(RectangleButton)`
    width: 100%;
`;
