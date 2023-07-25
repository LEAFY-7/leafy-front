import React from 'react';
import { observer } from 'mobx-react';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import AuthViewModel from 'viewModel/auth/auth.viewModel';
import styled from '@emotion/styled';

import Flex from 'components/atoms/Group/flex';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import Div from 'components/atoms/Div/default-div';

import InputCalender from 'components/molecules/Calender/input-calender';
import Textarea from 'components/atoms/Textarea/default-textarea';
import { Controller, useForm } from 'react-hook-form';
import { SignUphModel } from 'models/auth/signUp.model';
import { authFormState, authItemState, phoneRule } from 'configs/form.config';
import TextField from 'components/molecules/TextField';

const SignUpAdditionalForm = () => {
    const authViewModel: AuthViewModel = useViewModel(ViewModelName.AUTH);

    const {
        control,
        register,
        handleSubmit,
        formState: { errors, isSubmitting, dirtyFields, touchedFields },
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

    return (
        <>
            <form onSubmit={handleSubmit(authViewModel.handleSignUpAdditional)} noValidate>
                <Wrapper id="signup_wrapper" direction="column">
                    <Controller
                        name={authItemState.phone.property}
                        control={control}
                        defaultValue=""
                        rules={authFormState.phone}
                        render={({ field: { value, onChange }, fieldState: { error } }) => (
                            <TextField
                                type={authItemState.phone.type}
                                labelTitle={authItemState.phone.label}
                                value={value}
                                maxLength={13}
                                placeholder={'연락처를 입력해주세요.'}
                                onChange={(e) => {
                                    const onlyNumber = (e.target as HTMLInputElement).value
                                        .replace(/[^0-9]/g, '')
                                        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
                                        .replace(/(\-{1,2})$/g, '');
                                    onChange(onlyNumber);
                                }}
                                leftIcon={authItemState.phone.icon.main}
                                helperIcon={authItemState.phone.icon.helper}
                                error={!!error}
                                helperText={error?.message}
                            />
                        )}
                    />
                    <Flex direction="column">
                        <label htmlFor="genderSelect">성별</label>
                        <Controller
                            name="gender"
                            control={control}
                            defaultValue="FEMALE"
                            rules={{ required: '성별을 선택해주세요.' }}
                            render={({ field }) => (
                                <select id="genderSelect" {...field}>
                                    <option value="">선택하세요</option>
                                    <option value="FEMALE">여자</option>
                                    <option value="MALE">남자</option>
                                </select>
                            )}
                        />
                        {errors.gender && <p>{errors.gender.message}</p>}
                    </Flex>

                    <InputCalender
                        inputType={authItemState.birthDay.type}
                        name={authItemState.birthDay.property}
                        placeholder={authFormState.birthDay.placeHolder}
                        required={authFormState.birthDay.required}
                        format={authFormState.birthDay.format}
                        control={control}
                    />

                    <Flex direction="column">
                        <Flex justifyContent="center" alignItems="center" style={{ height: '100%' }}>
                            <Controller
                                name={authItemState.zoneCode.property}
                                control={control}
                                defaultValue={authViewModel.data?.zoneCode}
                                rules={{ required: authFormState.zoneCode.required }}
                                render={({ field, fieldState: { error } }) => (
                                    <TextField
                                        id={authItemState.zoneCode.property}
                                        type={authItemState.zoneCode.type}
                                        onClick={authViewModel.handleDaumAddress}
                                        labelTitle={authItemState.zoneCode.label}
                                        value={authViewModel.data.zoneCode}
                                        readOnly
                                        error={!!error}
                                        helperText={error?.message}
                                    />
                                )}
                            />
                            <RectangleButton onClick={authViewModel.handleDaumAddress} variant="secondary">
                                주소
                            </RectangleButton>
                        </Flex>
                        <Flex>
                            <Controller
                                name={authItemState.address.property}
                                control={control}
                                defaultValue={authViewModel.data?.address}
                                rules={{ required: authFormState.address.required }}
                                render={({ field, fieldState: { error } }) => (
                                    <TextField
                                        id={authItemState.address.property}
                                        type={authItemState.address.type}
                                        onClick={authViewModel.handleDaumAddress}
                                        labelTitle={authItemState.address.label}
                                        value={authViewModel.data.address}
                                        error={!!error}
                                        helperText={error?.message}
                                        readOnly
                                    />
                                )}
                            />

                            <TextField
                                id="address_detail"
                                type={authItemState.addressDetail.type}
                                labelTitle={authItemState.addressDetail.label}
                                placeholder={authFormState.addressDetail.required}
                                leftIcon={authItemState.addressDetail.icon.main}
                                error={!!errors.addressDetail}
                                helperText={errors.addressDetail?.message}
                                helperIcon={authItemState.addressDetail.icon.helper}
                                {...register(
                                    authItemState.addressDetail.property,
                                    authFormState.addressDetail,
                                )}
                            />
                        </Flex>
                    </Flex>
                    <Textarea
                        width={100}
                        height={'100px'}
                        {...register(
                            authItemState.simpleIntroduction.property,
                            authFormState.simpleIntroduction,
                        )}
                    />
                    {errors.simpleIntroduction && <p>{errors.simpleIntroduction.message}</p>}
                    <Div id="submit_btn" width={100} padding={8}>
                        <SubmitButton variant="primary" onClick={authViewModel.handleToggle}>
                            이전
                        </SubmitButton>
                        <SubmitButton type="submit" variant="secondary" disabled={isSubmitting}>
                            회원가입
                        </SubmitButton>
                    </Div>
                </Wrapper>
            </form>
        </>
    );
};

export default observer(SignUpAdditionalForm);

const SubmitButton = styled(RectangleButton)`
    width: 100%;
`;

const Wrapper = styled(Flex)`
    opacity: 0;
    transition: opacity 0.35s ease-in-out;
`;

{
    /* <Input
                                id={authItemState.zoneCode.property}
                                type="text"
                                onClick={authViewModel.handleDaumAddress}
                                {...register(authItemState.zoneCode.property, authFormState.zoneCode)}
                                readOnly
                            /> */
}

{
    /* <Input
                                id={authItemState.address.property}
                                type={authItemState.address.type}
                                onClick={authViewModel.handleDaumAddress}
                                {...register(authItemState.address.property, authFormState.address)}
                                readOnly
                            />
                         */
}

// React.useEffect(() => {
//     setValue('zoneCode', authViewModel.data.zoneCode);
//     setValue('address', authViewModel.data.address);
//     setValue('jibunAddress', authViewModel.data.jibunAddress);
//     setValue('roadAddress', authViewModel.data.roadAddress);
// }, [authViewModel.data.zoneCode]);

// 인풋

{
    /* <input
                                        id="phone"
                                        type="tel"
                                        placeholder="010-1234-5678"
                                        value={value}
                                        maxLength={13}
                                        onChange={(e) => {
                                            const onlyNumber = e.target.value
                                                .replace(/[^0-9]/g, '')
                                                .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
                                                .replace(/(\-{1,2})$/g, '');
                                            onChange(onlyNumber);
                                        }}
                                    />
                                    {error && <span>{error.message}</span>} */
}

{
    /* <Flex direction="column">
                                        <Input
                                            id={authItemState.zoneCode.property}
                                            type={authItemState.zoneCode.type}
                                            onClick={authViewModel.handleDaumAddress}
                                            value={authViewModel.data.zoneCode}
                                            readOnly
                                        />
                                        {error && <span>{error.message}</span>}
                                    </Flex> */
}

{
    /* <Flex direction="column">
                                <Input
                                    id={authItemState.address.property}
                                    type={authItemState.address.type}
                                    onClick={authViewModel.handleDaumAddress}
                                    value={authViewModel.data.address}
                                    readOnly
                                />
                                {error && <span>{error.message}</span>}
                            </Flex> */
}

{
    /* {errors.zoneCode && errors.address && (
                            <p>
                                {errors.zoneCode.message}
                                {errors.address.message}
                            </p>
                        )}
                        {errors.addressDetail && <p>{errors.addressDetail.message}</p>} */
}
