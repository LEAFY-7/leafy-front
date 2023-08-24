import styled from '@emotion/styled';
import { observer } from 'mobx-react';
import { Controller, useForm } from 'react-hook-form';
import { FcAddImage } from 'react-icons/fc';

import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import MyEditViewModel from 'viewModel/my/edit.viewModel';
import { SignUphModel } from 'models/auth/signUp.model';
import { authFormState, authItemState } from 'configs/form.config';

import PageContainer from 'components/templates/page-container';
import Container from 'components/organisms/Container/default-container';
import InputCalender from 'components/organisms/Calender/input-calender';
import TextField from 'components/molecules/TextField/default-textField';
import Flex from 'components/atoms/Group/flex';
import Div from 'components/atoms/Div/div';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import DropButton from 'components/atoms/Button/drop-button';
import RoundButton from 'components/atoms/Button/round-button';
import { theme } from 'configs/ui.config';
import ResponsiveTextFieldWrapper from 'components/molecules/TextField/textField';

const publicURL = process.env.PUBLIC_URL;

const MyEditView = () => {
    const myEditViewModel: MyEditViewModel = useViewModel(ViewModelName.MY_EDIT);

    const { control, handleSubmit, watch } = useForm<SignUphModel>({
        defaultValues: {
            name: '',
            nickName: '홍길동',
            email: 'test@test.com',
            password: '',
            confirmPassword: '',
            phone: '',
            birthDay: '',
            zoneCode: '',
            address: '',
            jibunAddress: '',
            roadAddress: '',
            addressDetail: '',
            gender: '',
            introduction: '',
        },
    });

    const handleSubmitMyEditForm = (e) => {
        console.log(e);
    };
    return (
        <PageContainer
            style={{ overflow: 'visible', justifyContent: 'flex-start', alignItems: 'center', minHeight: 0 }}
        >
            <Container id="myInfo_edit" as="section" wrapperHeight={100}>
                <Container.Header
                    headerHeight={'50px'}
                    fontSize="xl"
                    marginBottom={8}
                    style={{ paddingLeft: '4px', height: '50px' }}
                >
                    회원 정보 수정
                </Container.Header>
                <Container.HeaderLine marginTop={16} marginBottom={32} />
                <Container.Inner innerHeight={100}>
                    <Flex.RowToColumnOnTabletSm style={{ width: '100%' }}>
                        <LeftSection className="left_section">
                            {/* 이미지 저장 */}
                            <Flex.Default
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                style={{ width: '100%' }}
                            >
                                <Image src={`${publicURL}/image/default/default-user-img.svg`} />
                                <ImageBubbleButton size="xxs">
                                    <FcAddImage />
                                </ImageBubbleButton>
                                <RoundButton variant="default" isBorder>
                                    사진 저장
                                </RoundButton>
                            </Flex.Default>

                            {/* 이미지 저장 */}
                        </LeftSection>
                        <RightSection width={65} direction="column">
                            <form onSubmit={handleSubmit(handleSubmitMyEditForm)}>
                                {/* 이름 */}
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
                                    render={({
                                        field: { value, onChange },
                                        fieldState: { error, isDirty },
                                    }) => (
                                        <TextField error={!!error}>
                                            <ResponsiveTextFieldWrapper.MY style={{ height: '100px' }}>
                                                <TextField.Label>
                                                    {authItemState.nickName.label}
                                                </TextField.Label>
                                                <TextField.Container
                                                    id="nickName_container"
                                                    leftIcon={authItemState.nickName.icon.main}
                                                >
                                                    <TextField.Input
                                                        value={value}
                                                        type={authItemState.nickName.type}
                                                        placeholder={authItemState.nickName.placeHolder}
                                                        onChange={(
                                                            e: React.ChangeEvent<HTMLInputElement>,
                                                        ) => {
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
                                    render={({
                                        field: { value, onChange },
                                        fieldState: { error, isDirty },
                                    }) => (
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
                                                        onChange={(
                                                            e: React.ChangeEvent<HTMLInputElement>,
                                                        ) => {
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
                                        render={({
                                            field: { value, onChange },
                                            fieldState: { error, isDirty },
                                        }) => (
                                            <TextField error={!!error}>
                                                <ResponsiveTextFieldWrapper.MY style={{ height: '100px' }}>
                                                    <TextField.Label
                                                        required
                                                        requiredtext="비밀번호는 필수입니다."
                                                    >
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
                                                            onChange={(
                                                                e: React.ChangeEvent<HTMLInputElement>,
                                                            ) => {
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
                                        render={({
                                            field: { value, onChange },
                                            fieldState: { error, isDirty },
                                        }) => (
                                            <TextField error={!!error}>
                                                <ResponsiveTextFieldWrapper.MY style={{ height: '100px' }}>
                                                    <TextField.Label
                                                        required
                                                        requiredtext="비밀번호확인 필수입니다."
                                                    >
                                                        {authItemState.confirmPassword.label}
                                                    </TextField.Label>
                                                    <TextField.Container
                                                        id="confirmPassword_container"
                                                        leftIcon={authItemState.confirmPassword.icon.main}
                                                    >
                                                        <TextField.Input
                                                            value={value}
                                                            type={authItemState.confirmPassword.type}
                                                            placeholder={
                                                                authItemState.confirmPassword.placeHolder
                                                            }
                                                            onChange={(
                                                                e: React.ChangeEvent<HTMLInputElement>,
                                                            ) => {
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
                                                    <TextField.Label required>
                                                        {authItemState.phone.label}
                                                    </TextField.Label>
                                                    <TextField.Container
                                                        id="phone_container"
                                                        leftIcon={authItemState.phone.icon.main}
                                                    >
                                                        <TextField.Input
                                                            value={value}
                                                            type={authItemState.phone.type}
                                                            placeholder={'연락처를 입력해주세요.'}
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
                                                </ResponsiveTextFieldWrapper.MY>
                                            </TextField>
                                        )}
                                    />
                                    {/* 연락처 */}
                                    {/* 캘린더 */}
                                    <InputCalender
                                        name={authItemState.birthDay.property}
                                        placeholder={authItemState.birthDay.placeHolder}
                                        required={authFormState.birthDay.required}
                                        format={authFormState.birthDay.format}
                                        control={control}
                                        authItemState={authItemState.birthDay}
                                    />
                                    {/* 캘린더 */}
                                </Flex.RowToColumnOnTabletMd>
                                {/* <Flex.Default direction="column">
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
                                </Flex.Default> */}
                                <Flex.TextFieldFlexWrapper justifyContent="space-between" alignItems="center">
                                    {/* 우편 번호 */}
                                    <Controller
                                        name={authItemState.zoneCode.property}
                                        control={control}
                                        defaultValue={''}
                                        rules={authFormState.zoneCode}
                                        render={({ field: { value }, fieldState: { error } }) => (
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
                                                            value={value}
                                                            type={authItemState.zoneCode.type}
                                                            placeholder={authItemState.zoneCode.placeHolder}
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
                                    {/* 우편 번호 */}

                                    <AddressButton variant="primary" id="address_button">
                                        주소
                                    </AddressButton>
                                </Flex.TextFieldFlexWrapper>
                                <Flex.RowToColumnOnTabletMd>
                                    {/* 주소  */}
                                    <Controller
                                        name={authItemState.address.property}
                                        control={control}
                                        defaultValue={''}
                                        rules={authFormState.address}
                                        render={({
                                            field: { value, onChange },
                                            fieldState: { error, isDirty },
                                        }) => (
                                            <>
                                                <TextField error={!!error}>
                                                    <ResponsiveTextFieldWrapper.MY
                                                        style={{ height: '100px' }}
                                                    >
                                                        <TextField.Label required>
                                                            {authItemState.address.label}
                                                        </TextField.Label>
                                                        <TextField.Container
                                                            id="address_container"
                                                            leftIcon={authItemState.address.icon.main}
                                                        >
                                                            <TextField.Input
                                                                value={value}
                                                                id={authItemState.address.property}
                                                                type={authItemState.address.type}
                                                                placeholder={
                                                                    authItemState.address.placeHolder
                                                                }
                                                                readOnly
                                                            />
                                                        </TextField.Container>
                                                        <TextField.HelperText
                                                            leftIcon={authItemState.address.icon.helper}
                                                            style={{ padding: '0 8px' }}
                                                        >
                                                            {error?.message}
                                                        </TextField.HelperText>
                                                    </ResponsiveTextFieldWrapper.MY>
                                                </TextField>
                                            </>
                                        )}
                                    />
                                    {/* 주소  */}
                                    {/* 상세 주소 */}
                                    <Controller
                                        name={authItemState.addressDetail.property}
                                        control={control}
                                        defaultValue={''}
                                        rules={authFormState.addressDetail}
                                        render={({
                                            field: { value, onChange },
                                            fieldState: { error, isDirty },
                                        }) => (
                                            <TextField error={!!error}>
                                                <ResponsiveTextFieldWrapper.MY style={{ height: '100px' }}>
                                                    <TextField.Label required>
                                                        {authItemState.addressDetail.label}
                                                    </TextField.Label>
                                                    <TextField.Container
                                                        id="address_detail_container"
                                                        leftIcon={authItemState.addressDetail.icon.main}
                                                    >
                                                        <TextField.Input
                                                            value={value}
                                                            id="address_detail"
                                                            type={authItemState.addressDetail.type}
                                                            placeholder={
                                                                authItemState.addressDetail.placeHolder
                                                            }
                                                            onChange={(
                                                                e: React.ChangeEvent<HTMLInputElement>,
                                                            ) => {
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
                                                </ResponsiveTextFieldWrapper.MY>
                                            </TextField>
                                        )}
                                    />
                                    {/* 상세 주소 */}
                                </Flex.RowToColumnOnTabletMd>
                                {/* 간단 소개 */}
                                <Controller
                                    name={authItemState.introduction.property}
                                    control={control}
                                    defaultValue={''}
                                    rules={authFormState.introduction}
                                    render={({
                                        field: { value, onChange },
                                        fieldState: { error, isDirty },
                                    }) => (
                                        <TextField error={!!error}>
                                            <ResponsiveTextFieldWrapper.MY style={{ width: '100%' }}>
                                                <TextField.Label required>
                                                    {authItemState.addressDetail.label}
                                                </TextField.Label>
                                                <TextField.Container id="address_detail_container">
                                                    <TextField.Textarea
                                                        id="address_detail"
                                                        value={value}
                                                        placeholder={authItemState.introduction.placeHolder}
                                                        onChange={(
                                                            e: React.ChangeEvent<HTMLTextAreaElement>,
                                                        ) => {
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
                                            </ResponsiveTextFieldWrapper.MY>
                                        </TextField>
                                    )}
                                />
                                {/* 간단 소개 */}

                                <SubmitButtonWrapper>
                                    <SubmitButton type="submit">수정하기</SubmitButton>
                                </SubmitButtonWrapper>
                            </form>
                        </RightSection>
                    </Flex.RowToColumnOnTabletSm>
                </Container.Inner>
            </Container>
        </PageContainer>
    );
};

export default observer(MyEditView);

const LeftSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${theme.mediaQuery.smTablet} {
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    ${theme.mediaQuery.mdTablet} {
        width: 35%;
        flex-direction: column;
        justify-content: center;
    }
`;

const Image = styled.img`
    ${theme.mediaQuery.xsMobile} {
        width: 100%;
        height: 100%;
    }

    ${theme.mediaQuery.smMobile} {
        width: auto;
        height: auto;
    }
`;

const ImageBubbleButton = styled(Div.Drop)`
    position: absolute;
    transform: translate(160%, 160%);
    cursor: pointer;

    ${theme.mediaQuery.xsMobile} {
        display: none;
    }

    ${theme.mediaQuery.smMobile} {
        display: block;
    }
`;

const RightSection = styled(Div.Default)`
    justify-content: center;
    align-items: center;
    ${theme.mediaQuery.xsMobile} {
        width: 100%;
    }
    ${theme.mediaQuery.smMobile} {
        width: 100%;
    }

    ${theme.mediaQuery.mdMobile} {
        width: 100%;
    }

    ${theme.mediaQuery.lgMobile} {
        width: 100%;
    }

    ${theme.mediaQuery.smTablet} {
        width: 100%;
    }

    ${theme.mediaQuery.mdTablet} {
        width: 65%;
    }
`;

const AddressButton = styled(RectangleButton)`
    transform: translateY(10%);
    display: flex;
    padding: 0;
    margin: 0;

    ${theme.mediaQuery.xsMobile} {
        display: none;
    }
    ${theme.mediaQuery.smMobile} {
        display: none;
    }

    ${theme.mediaQuery.mdMobile} {
        display: block;
        width: 20%;
    }

    ${theme.mediaQuery.lgMobile} {
        display: block;
        width: 20%;
    }
`;

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
