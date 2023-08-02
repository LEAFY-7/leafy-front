import React from 'react';
import { observer } from 'mobx-react';
import { Controller, useForm } from 'react-hook-form';
import styled from '@emotion/styled';

import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import AuthViewModel from 'viewModel/auth/auth.viewModel';
import { SignUphModel } from 'models/auth/signUp.model';
import { authFormState, authItemState } from 'configs/form.config';
import { theme } from 'configs/ui.config';

import Flex from 'components/atoms/Group/flex';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import Div from 'components/atoms/Div/div';
import Textarea from 'components/atoms/Textarea/default-textarea';
import Typography from 'components/atoms/Typograph/default-typography';
import TextField from 'components/molecules/TextField/default-textField';
import InputCalender from 'components/organisms/Calender/input-calender';

const SignUpAdditionalForm = () => {
    const authViewModel: AuthViewModel = useViewModel(ViewModelName.AUTH);

    const {
        control,
        setValue,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<SignUphModel>({
        defaultValues: {
            phone: authViewModel.data?.phone,
            birthDay: authViewModel.data?.birthDay,
            zoneCode: authViewModel.data?.zoneCode,
            address: authViewModel.data?.address,
            jibunAddress: authViewModel.data?.jibunAddress,
            roadAddress: authViewModel.data?.roadAddress,
            addressDetail: authViewModel.data?.addressDetail,
            gender: authViewModel.data?.gender,
            simpleIntroduction: authViewModel.data?.simpleIntroduction,
        },
    });

    React.useEffect(() => {
        setValue(authItemState.zoneCode.property, authViewModel.data.zoneCode);
        setValue(authItemState.address.property, authViewModel.data.address);
    }, [authViewModel.data.zoneCode, authViewModel.data.address]);

    return (
        <>
            <form onSubmit={handleSubmit(authViewModel.handleSignUpAdditional)} noValidate>
                <Wrapper id="form_wrapper" direction="column">
                    <Flex.ParallelToHorizonOnTablet>
                        <Controller
                            name={authItemState.phone.property}
                            control={control}
                            defaultValue=""
                            rules={authFormState.phone}
                            render={({ field: { value, onChange }, fieldState: { error } }) => (
                                <TextField error={!!error}>
                                    <TextField.Wrapper style={{ height: '100px' }}>
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

                        <InputCalender
                            name={authItemState.birthDay.property}
                            placeholder={authItemState.birthDay.placeHolder}
                            required={authFormState.birthDay.required}
                            format={authFormState.birthDay.format}
                            control={control}
                            authItemState={authItemState.birthDay}
                        />
                    </Flex.ParallelToHorizonOnTablet>

                    <Flex.Default direction="column">
                        <label htmlFor="genderSelect">성별</label>
                        <Controller
                            name="gender"
                            control={control}
                            defaultValue=""
                            rules={{ required: '성별을 선택해주세요.' }}
                            render={({ field, fieldState: { error, isDirty } }) => (
                                <>
                                    <select id="genderSelect" {...field}>
                                        <option value="">선택하세요</option>
                                        <option value="FEMALE">여자</option>
                                        <option value="MALE">남자</option>
                                    </select>
                                    <Typography variant="BODY3" color="sementic" marginLeft={8}>
                                        {!!error && (
                                            <>
                                                {authItemState.gender.icon.helper}
                                                {error?.message}
                                            </>
                                        )}
                                    </Typography>
                                </>
                            )}
                        />
                    </Flex.Default>

                    <AddressZoneWrapper justifyContent="space-between" alignItems="center">
                        <Controller
                            name={authItemState.zoneCode.property}
                            control={control}
                            defaultValue={authViewModel.data?.zoneCode}
                            rules={authFormState.zoneCode}
                            render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                                <TextField error={!!error}>
                                    <TextField.Wrapper style={{ height: '100px' }}>
                                        <TextField.Label required>
                                            {authItemState.zoneCode.label}
                                        </TextField.Label>
                                        <TextField.Container
                                            id="zoneCode_container"
                                            leftIcon={authItemState.zoneCode.icon.main}
                                        >
                                            <ZoneCodeInput
                                                id={authItemState.zoneCode.property}
                                                value={authViewModel.data.zoneCode}
                                                type={authItemState.zoneCode.type}
                                                placeholder={authItemState.zoneCode.placeHolder}
                                                onClick={authViewModel.handleDaumAddress}
                                                readOnly
                                            />
                                        </TextField.Container>
                                        <TextField.HelperText
                                            leftIcon={authItemState.zoneCode.icon.helper}
                                            style={{ padding: '0 8px' }}
                                        >
                                            {error?.message}
                                        </TextField.HelperText>
                                    </TextField.Wrapper>
                                </TextField>
                            )}
                        />
                        <AddressButton onClick={authViewModel.handleDaumAddress} variant="primary">
                            주소
                        </AddressButton>
                    </AddressZoneWrapper>
                    <Flex.ParallelToHorizonOnTablet>
                        <Controller
                            name={authItemState.address.property}
                            control={control}
                            defaultValue={authViewModel.data?.address}
                            rules={authFormState.address}
                            render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                                <>
                                    <TextField error={!!error}>
                                        <TextField.Wrapper style={{ height: '100px' }}>
                                            <TextField.Label required>
                                                {authItemState.address.label}
                                            </TextField.Label>
                                            <TextField.Container
                                                id="address_container"
                                                leftIcon={authItemState.address.icon.main}
                                            >
                                                <TextField.Input
                                                    value={authViewModel.data.address}
                                                    id={authItemState.address.property}
                                                    type={authItemState.address.type}
                                                    placeholder={authItemState.address.placeHolder}
                                                    style={{ width: '300px' }}
                                                    readOnly
                                                    onClick={authViewModel.handleDaumAddress}
                                                />
                                            </TextField.Container>
                                            <TextField.HelperText
                                                leftIcon={authItemState.address.icon.helper}
                                                style={{ padding: '0 8px' }}
                                            >
                                                {error?.message}
                                            </TextField.HelperText>
                                        </TextField.Wrapper>
                                    </TextField>
                                </>
                            )}
                        />
                        <Controller
                            name={authItemState.addressDetail.property}
                            control={control}
                            defaultValue={authViewModel.data?.addressDetail}
                            rules={authFormState.addressDetail}
                            render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                                <TextField error={!!error}>
                                    <TextField.Wrapper style={{ height: '100px' }}>
                                        <TextField.Label required>
                                            {authItemState.addressDetail.label}
                                        </TextField.Label>
                                        <TextField.Container
                                            id="addressDetail_container"
                                            leftIcon={authItemState.addressDetail.icon.main}
                                        >
                                            <TextField.Input
                                                value={value}
                                                id="address_detail"
                                                type={authItemState.addressDetail.type}
                                                placeholder={authItemState.addressDetail.placeHolder}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                    const { value } = e.target;
                                                    onChange(value);
                                                }}
                                                style={{ width: '300px' }}
                                            />
                                        </TextField.Container>
                                        <TextField.HelperText
                                            leftIcon={authItemState.addressDetail.icon.helper}
                                            style={{ padding: '0 8px' }}
                                        >
                                            {error?.message}
                                        </TextField.HelperText>
                                    </TextField.Wrapper>
                                </TextField>
                            )}
                        />
                    </Flex.ParallelToHorizonOnTablet>
                    <Controller
                        name={authItemState.simpleIntroduction.property}
                        control={control}
                        defaultValue={authViewModel.data?.simpleIntroduction}
                        rules={authFormState.simpleIntroduction}
                        render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                            <>
                                <Textarea
                                    id="address_detail"
                                    value={value}
                                    placeholder={authItemState.simpleIntroduction.placeHolder}
                                    width={96}
                                    paddingLeft={16}
                                    paddingRight={16}
                                    height="100px"
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                        const { value } = e.target;
                                        onChange(value);
                                    }}
                                />
                                <Typography variant="BODY3" color="sementic" marginLeft={8}>
                                    {!!error && (
                                        <>
                                            {authItemState.simpleIntroduction.icon.helper}
                                            {error?.message}
                                        </>
                                    )}
                                </Typography>
                            </>
                        )}
                    />
                    <Div.Default id="submit_btn" width={100} padding={8}>
                        <SubmitButton variant="default" isBorder onClick={authViewModel.handleToggle}>
                            이전
                        </SubmitButton>
                        <SubmitButton type="submit" variant="primary" disabled={isSubmitting}>
                            회원가입
                        </SubmitButton>
                    </Div.Default>
                </Wrapper>
            </form>
        </>
    );
};

export default observer(SignUpAdditionalForm);

const SubmitButton = styled(RectangleButton)`
    width: 100%;
`;

const Wrapper = styled(Flex.Default)`
    opacity: 0;
    transition: opacity 0.35s ease-in-out;
`;

const AddressButton = styled(RectangleButton)`
    transform: translateY(10%);
`;
const ZoneCodeInput = styled(TextField.Input)`
    ${theme.mediaQuery.mobile} {
        width: 200px;
    }
    ${theme.mediaQuery.tablet} {
        width: 200px;
    }
    ${theme.mediaQuery.desktop} {
        width: 300px;
    }
`;
const AddressZoneWrapper = styled(Flex.Default)`
    ${theme.mediaQuery.mobile} {
        flex-direction: row;
        width: 300px;
    }
    ${theme.mediaQuery.tablet} {
        flex-direction: row;
        width: 300px;
    }
    ${theme.mediaQuery.desktop} {
        flex-direction: row;
        width: 300px;
    }
`;
