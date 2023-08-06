import React from 'react';
import { observer } from 'mobx-react';
import { Controller, useForm } from 'react-hook-form';
import styled from '@emotion/styled';

import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import AuthViewModel from 'viewModel/auth/auth.viewModel';
import { SignUphModel } from 'models/auth/signUp.model';
import { authFormState, authItemState } from 'configs/form.config';

import Flex from 'components/atoms/Group/flex';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import Typography from 'components/atoms/Typograph/default-typography';
import TextField from 'components/molecules/TextField/default-textField';
import ResponsiveTextFieldWrapper from 'components/molecules/TextField/textField';
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
                    <Flex.RowToColumnOnTabletSm>
                        {/* 연락처 */}
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
                                    </ResponsiveTextFieldWrapper.AUTH>
                                </TextField>
                            )}
                        />
                        {/* 연락처 */}
                        {/* 생년월일 */}

                        <InputCalender
                            name={authItemState.birthDay.property}
                            placeholder={authItemState.birthDay.placeHolder}
                            required={authFormState.birthDay.required}
                            format={authFormState.birthDay.format}
                            control={control}
                            authItemState={authItemState.birthDay}
                        />
                        {/* 생년월일 */}
                    </Flex.RowToColumnOnTabletSm>

                    <Flex.Default direction="column">
                        {/* 성별 */}
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
                        {/* 성별 */}
                    </Flex.Default>

                    <Flex.TextFieldFlexWrapper justifyContent="space-between" alignItems="center">
                        {/* 우편번호 */}
                        <Controller
                            name={authItemState.zoneCode.property}
                            control={control}
                            defaultValue={authViewModel.data?.zoneCode}
                            rules={authFormState.zoneCode}
                            render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                                <TextField error={!!error}>
                                    <ResponsiveTextFieldWrapper.AUTH style={{ height: '100px' }}>
                                        <TextField.Label required>
                                            {authItemState.zoneCode.label}
                                        </TextField.Label>
                                        <TextField.Container
                                            id="zoneCode_container"
                                            leftIcon={authItemState.zoneCode.icon.main}
                                        >
                                            <TextField.Input
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
                                    </ResponsiveTextFieldWrapper.AUTH>
                                </TextField>
                            )}
                        />
                        <RectangleButton
                            onClick={authViewModel.handleDaumAddress}
                            variant="primary"
                            style={{ transform: 'translateY(10%)' }}
                        >
                            주소
                        </RectangleButton>
                        {/* 우편번호 */}
                    </Flex.TextFieldFlexWrapper>
                    <Flex.RowToColumnOnTabletSm>
                        {/* 주소 */}
                        <Controller
                            name={authItemState.address.property}
                            control={control}
                            defaultValue={authViewModel.data?.address}
                            rules={authFormState.address}
                            render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                                <>
                                    <TextField error={!!error}>
                                        <ResponsiveTextFieldWrapper.AUTH style={{ height: '100px' }}>
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
                                        </ResponsiveTextFieldWrapper.AUTH>
                                    </TextField>
                                </>
                            )}
                        />
                        {/* 주소 */}
                        {/* 상세주소 */}
                        <Controller
                            name={authItemState.addressDetail.property}
                            control={control}
                            defaultValue={authViewModel.data?.addressDetail}
                            rules={authFormState.addressDetail}
                            render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                                <TextField error={!!error}>
                                    <ResponsiveTextFieldWrapper.AUTH style={{ height: '100px' }}>
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
                                            />
                                        </TextField.Container>
                                        <TextField.HelperText
                                            leftIcon={authItemState.addressDetail.icon.helper}
                                            style={{ padding: '0 8px' }}
                                        >
                                            {error?.message}
                                        </TextField.HelperText>
                                    </ResponsiveTextFieldWrapper.AUTH>
                                </TextField>
                            )}
                        />
                        {/* 상세주소 */}
                    </Flex.RowToColumnOnTabletSm>
                    {/* 간단소개 */}
                    <Controller
                        name={authItemState.simpleIntroduction.property}
                        control={control}
                        defaultValue={authViewModel.data?.simpleIntroduction}
                        rules={authFormState.simpleIntroduction}
                        render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                            <TextField error={!!error}>
                                <ResponsiveTextFieldWrapper.AUTH style={{ width: '100%' }}>
                                    <TextField.Label required>
                                        {authItemState.addressDetail.label}
                                    </TextField.Label>
                                    <TextField.Container id="simpleIntroduction_container">
                                        <TextField.Textarea
                                            id="simpleIntroduction"
                                            value={value}
                                            placeholder={authItemState.simpleIntroduction.placeHolder}
                                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                                const { value } = e.target;
                                                onChange(value);
                                            }}
                                            style={{ height: '100px', padding: '24px' }}
                                        />
                                    </TextField.Container>
                                    <TextField.HelperText
                                        leftIcon={authItemState.addressDetail.icon.helper}
                                        style={{ padding: '0 8px' }}
                                    >
                                        {error?.message}
                                    </TextField.HelperText>
                                </ResponsiveTextFieldWrapper.AUTH>
                            </TextField>
                        )}
                    />
                    {/* 간단소개 */}
                    <div
                        id="submit_btn"
                        style={{
                            display: 'flex',
                            width: '100%',
                            backgroundColor: 'transparent',
                            padding: '8px',
                        }}
                    >
                        <SubmitButton variant="default" isBorder onClick={authViewModel.handleToggle}>
                            이전
                        </SubmitButton>
                        <SubmitButton type="submit" variant="primary" disabled={isSubmitting}>
                            회원가입
                        </SubmitButton>
                    </div>
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
