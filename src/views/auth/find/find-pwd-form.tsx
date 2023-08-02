import styled from '@emotion/styled';
import { observer } from 'mobx-react';
import { Controller, useForm } from 'react-hook-form';

import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import AuthViewModel from 'viewModel/auth/auth.viewModel';
import { SignUphModel } from 'models/auth/signUp.model';
import { authFormState, authItemState } from 'configs/form.config';

import Flex from 'components/atoms/Group/flex';
import Typography from 'components/atoms/Typograph/default-typography';
import TextField from 'components/molecules/TextField/default-textField';
import RectangleButton from 'components/atoms/Button/rectangle-button';

const FindPwdForm = () => {
    const authViewModel: AuthViewModel = useViewModel(ViewModelName.AUTH);

    const {
        control,
        handleSubmit,
        formState: { isSubmitting, dirtyFields },
    } = useForm<SignUphModel>({
        defaultValues: {
            name: '',
            email: '',
        },
    });
    return (
        <>
            <Typography
                as="span"
                textAlign="center"
                variant="H3"
                color="grey"
                marginTop={16}
                marginBottom={16}
            >
                비밀번호를 찾으시겠습니까?
            </Typography>
            <form aria-label="find-pwd" noValidate>
                <FormContainer id="form_wrapper" direction="column">
                    <Controller
                        name={authItemState.name.property}
                        control={control}
                        defaultValue={''}
                        rules={authFormState.name}
                        render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                            <TextField error={!!error}>
                                <TextField.Wrapper style={{ height: '100px' }}>
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
                                            style={{ width: '300px' }}
                                        />
                                    </TextField.Container>
                                    <TextField.HelperText
                                        leftIcon={authItemState.name.icon.helper}
                                        style={{ padding: '0 8px' }}
                                    >
                                        {error?.message}
                                    </TextField.HelperText>
                                </TextField.Wrapper>
                            </TextField>
                        )}
                    />
                    <Controller
                        name={authItemState.phone.property}
                        control={control}
                        defaultValue=""
                        rules={authFormState.phone}
                        render={({ field: { value, onChange }, fieldState: { error } }) => (
                            <TextField error={!!error}>
                                <TextField.Wrapper style={{ height: '100px' }}>
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
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                const onlyNumber = e.target.value
                                                    .replace(/[^0-9]/g, '')
                                                    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
                                                    .replace(/(\-{1,2})$/g, '');
                                                onChange(onlyNumber);
                                            }}
                                            style={{ width: '300px' }}
                                        />
                                    </TextField.Container>
                                    <TextField.HelperText
                                        leftIcon={authItemState.phone.icon.helper}
                                        style={{ padding: '0 8px' }}
                                    >
                                        {error?.message}
                                    </TextField.HelperText>
                                </TextField.Wrapper>
                            </TextField>
                        )}
                    />
                </FormContainer>
            </form>
        </>
    );
};

export default observer(FindPwdForm);

const FormContainer = styled(Flex.Default)`
    opacity: 0;
    transition: opacity 0.35s ease-in-out;
`;
