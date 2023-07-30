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
import Div from 'components/atoms/Div/default-div';
import Textarea from 'components/atoms/Textarea/default-textarea';
import Typography from 'components/atoms/Typograph/default-typography';
import TextField from 'components/molecules/TextField';
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
                    <Flex>
                        <Controller
                            name={authItemState.phone.property}
                            control={control}
                            defaultValue=""
                            rules={authFormState.phone}
                            render={({ field: { value, onChange }, fieldState: { error } }) => (
                                <TextField
                                    id="phone_input"
                                    type={authItemState.phone.type}
                                    labelTitle={authItemState.phone.label}
                                    value={value}
                                    maxLength={13}
                                    placeholder={'연락처를 입력해주세요.'}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        const onlyNumber = e.target.value
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
                        <InputCalender
                            name={authItemState.birthDay.property}
                            placeholder={authItemState.birthDay.placeHolder}
                            required={authFormState.birthDay.required}
                            format={authFormState.birthDay.format}
                            control={control}
                            authItemState={authItemState.birthDay}
                        />
                    </Flex>

                    <Flex direction="column">
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
                    </Flex>

                    <Flex direction="column">
                        <Flex justifyContent="center" alignItems="center" style={{ height: '100%' }}>
                            <Controller
                                name={authItemState.zoneCode.property}
                                control={control}
                                defaultValue={authViewModel.data?.zoneCode}
                                rules={authFormState.zoneCode}
                                render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                                    <>
                                        <TextField
                                            id={authItemState.zoneCode.property}
                                            type={authItemState.zoneCode.type}
                                            onClick={authViewModel.handleDaumAddress}
                                            labelTitle={authItemState.zoneCode.label}
                                            leftIcon={authItemState.zoneCode.icon.main}
                                            helperIcon={authItemState.zoneCode.icon.helper}
                                            placeholder={authItemState.zoneCode.placeHolder}
                                            value={authViewModel.data.zoneCode}
                                            readOnly
                                            error={!!error && !!!authViewModel.data.zoneCode}
                                            helperText={error?.message}
                                        />
                                    </>
                                )}
                            />
                            <AddressButton onClick={authViewModel.handleDaumAddress} variant="secondary">
                                주소
                            </AddressButton>
                        </Flex>
                        <Flex>
                            <Controller
                                name={authItemState.address.property}
                                control={control}
                                defaultValue={authViewModel.data?.address}
                                rules={authFormState.address}
                                render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                                    <TextField
                                        value={authViewModel.data.address}
                                        id={authItemState.address.property}
                                        type={authItemState.address.type}
                                        onClick={authViewModel.handleDaumAddress}
                                        labelTitle={authItemState.address.label}
                                        leftIcon={authItemState.address.icon.main}
                                        placeholder={authItemState.address.placeHolder}
                                        helperIcon={authItemState.address.icon.helper}
                                        readOnly
                                        error={!!error && !!!authViewModel.data.address}
                                        helperText={error?.message}
                                    />
                                )}
                            />
                            <Controller
                                name={authItemState.addressDetail.property}
                                control={control}
                                defaultValue={authViewModel.data?.addressDetail}
                                rules={authFormState.addressDetail}
                                render={({ field: { value, onChange }, fieldState: { error, isDirty } }) => (
                                    <TextField
                                        id="address_detail"
                                        value={value}
                                        type={authItemState.addressDetail.type}
                                        labelTitle={authItemState.addressDetail.label}
                                        leftIcon={authItemState.addressDetail.icon.main}
                                        helperIcon={authItemState.addressDetail.icon.helper}
                                        placeholder={authItemState.addressDetail.placeHolder}
                                        error={!!error}
                                        helperText={error?.message}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            const { value } = e.target;
                                            onChange(value);
                                        }}
                                    />
                                )}
                            />
                        </Flex>
                    </Flex>
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

const AddressButton = styled(RectangleButton)`
    transform: translateY(50%);
`;
