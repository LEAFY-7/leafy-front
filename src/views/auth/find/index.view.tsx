import React from 'react';
import { observer } from 'mobx-react';
import styled from '@emotion/styled';
import { Controller, useForm } from 'react-hook-form';

import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import AuthViewModel from 'viewModel/auth/auth.viewModel';
import pageUrlConfig from 'configs/pageUrl.config';
import { SignUphModel } from 'models/auth/signUp.model';
import { authFormState, authItemState } from 'configs/form.config';
import * as Styled from './background.styles';

import PageContainer from 'components/templates/page-container';
import AuthTemplate from 'components/templates/auth.template';
import TextField from 'components/molecules/TextField/default-textField';
import Flex from 'components/atoms/Group/flex';
import Typography from 'components/atoms/Typograph/default-typography';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import ResponsiveTextFieldWrapper from 'components/molecules/TextField/textField';

const Image = process.env.PUBLIC_URL + '/image/background/plant_01.png';

const FindView = () => {
    const authViewModel: AuthViewModel = useViewModel(ViewModelName.AUTH);

    const {
        control,
        handleSubmit,
        formState: { isSubmitting, dirtyFields },
    } = useForm<SignUphModel>({
        defaultValues: {
            name: '',
            phone: '',
            email: '',
        },
    });
    return (
        <PageContainer style={{ overflow: 'visible', height: '100vh', minHeight: 0 }}>
            <AuthTemplate isActive={authViewModel.isActive}>
                {/* 이메일 찾기 */}
                {!authViewModel.isActive && (
                    <>
                        <Typography
                            as="span"
                            textAlign="center"
                            variant="H3"
                            color="grey"
                            marginTop={16}
                            marginBottom={16}
                        >
                            이메일을 찾으시겠습니까?
                        </Typography>

                        <form onSubmit={handleSubmit(authViewModel.handleFindEmail)} noValidate>
                            <Wrapper id="form_wrapper" direction="column">
                                <Controller
                                    name={authItemState.name.property}
                                    control={control}
                                    defaultValue={''}
                                    rules={authFormState.name}
                                    render={({
                                        field: { value, onChange },
                                        fieldState: { error, isDirty },
                                    }) => (
                                        <TextField error={!!error}>
                                            <ResponsiveTextFieldWrapper.AUTH style={{ height: '100px' }}>
                                                <TextField.Label required>
                                                    {authItemState.name.label}
                                                </TextField.Label>
                                                <TextField.Container
                                                    id="name_container"
                                                    leftIcon={authItemState.name.icon.main}
                                                >
                                                    <TextField.Input
                                                        value={value}
                                                        type={authItemState.name.type}
                                                        placeholder={authItemState.name.placeHolder}
                                                        onChange={(
                                                            e: React.ChangeEvent<HTMLInputElement>,
                                                        ) => {
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
                                    defaultValue=""
                                    rules={authFormState.phone}
                                    render={({ field: { value, onChange }, fieldState: { error } }) => (
                                        <TextField error={!!error}>
                                            <ResponsiveTextFieldWrapper.AUTH style={{ height: '100px' }}>
                                                <TextField.Label required>
                                                    {authItemState.phone.label}
                                                </TextField.Label>
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
                                                        onChange={(
                                                            e: React.ChangeEvent<HTMLInputElement>,
                                                        ) => {
                                                            const onlyNumber = e.target.value
                                                                .replace(/[^0-9]/g, '')
                                                                .replace(
                                                                    /^(\d{0,3})(\d{0,4})(\d{0,4})$/g,
                                                                    '$1-$2-$3',
                                                                )
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

                        <RectangleButton
                            size="md"
                            backgroundColor="transparent"
                            color="primary"
                            onClick={authViewModel.handleToggle}
                        >
                            비밀번호 찾으러 가기
                        </RectangleButton>
                    </>
                )}
                {/* 이메일 찾기 */}
                {/* 비밀번호 찾기 */}
                {authViewModel.isActive && (
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
                            <Wrapper id="form_wrapper" direction="column">
                                <Controller
                                    name={authItemState.name.property}
                                    control={control}
                                    defaultValue={''}
                                    rules={authFormState.name}
                                    render={({
                                        field: { value, onChange },
                                        fieldState: { error, isDirty },
                                    }) => (
                                        <TextField error={!!error}>
                                            <ResponsiveTextFieldWrapper.AUTH style={{ height: '100px' }}>
                                                <TextField.Label required>
                                                    {authItemState.name.label}
                                                </TextField.Label>
                                                <TextField.Container
                                                    id="name_container"
                                                    leftIcon={authItemState.name.icon.main}
                                                >
                                                    <TextField.Input
                                                        value={value}
                                                        type={authItemState.name.type}
                                                        placeholder={authItemState.name.placeHolder}
                                                        onChange={(
                                                            e: React.ChangeEvent<HTMLInputElement>,
                                                        ) => {
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
                                    defaultValue=""
                                    rules={authFormState.phone}
                                    render={({ field: { value, onChange }, fieldState: { error } }) => (
                                        <TextField error={!!error}>
                                            <ResponsiveTextFieldWrapper.AUTH style={{ height: '100px' }}>
                                                <TextField.Label required>
                                                    {authItemState.phone.label}
                                                </TextField.Label>
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
                                                        onChange={(
                                                            e: React.ChangeEvent<HTMLInputElement>,
                                                        ) => {
                                                            const onlyNumber = e.target.value
                                                                .replace(/[^0-9]/g, '')
                                                                .replace(
                                                                    /^(\d{0,3})(\d{0,4})(\d{0,4})$/g,
                                                                    '$1-$2-$3',
                                                                )
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
                                        비밀번호 찾기
                                    </SubmitButton>
                                </ButtonWrapper>
                            </Wrapper>
                        </form>
                        <RectangleButton
                            size="md"
                            backgroundColor="transparent"
                            color="primary"
                            onClick={authViewModel.handleToggle}
                        >
                            이메일 찾으러 가기
                        </RectangleButton>
                    </>
                )}
                {/* 비밀번호 찾기 */}

                <Flex.Default direction="column">
                    <Typography
                        as="p"
                        variant="BODY3"
                        color="grey"
                        fontSize="sm"
                        textAlign="center"
                        marginTop={4}
                        to={`${pageUrlConfig.auth}${pageUrlConfig.signIn}`}
                    >
                        로그인 하러 가시겠습니까?
                    </Typography>
                </Flex.Default>
            </AuthTemplate>
            <Styled.FindPlantImage src={Image} />
            <Styled.FindPlantImage src={Image} />
        </PageContainer>
    );
};

export default observer(FindView);

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
