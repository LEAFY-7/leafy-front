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
import Div from 'components/atoms/Div/default-div';
import Typography from 'components/atoms/Typograph/default-typography';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import Textarea from 'components/atoms/Textarea/default-textarea';
import DropButton from 'components/atoms/Button/drop-button';
import DropDiv from 'components/atoms/Div/drop-div';
import RoundButton from 'components/atoms/Button/round-button';
import { theme } from 'configs/ui.config';

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
            simpleIntroduction: '',
        },
    });

    return (
        <PageContainer style={{ overflow: 'visible', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Container id="myInfo_edit" as="section" wrapperHeight={100}>
                <Container.Header
                    headerHeight={'50px'}
                    fontSize="xl"
                    marginBottom={8}
                    style={{ paddingLeft: '4px' }}
                >
                    회원 정보 수정
                </Container.Header>
                <Container.HeaderLine marginTop={16} marginBottom={32} />
                <Container.Inner innerHeight={100}>
                    <InnerWrapper justifyContent="space-between">
                        <LeftSection width={25} direction="column">
                            <img src={`${publicURL}/image/default/default-user-img.svg`} />
                            <DropDiv
                                size="xxs"
                                style={{
                                    position: 'absolute',
                                    transform: 'translate(160%, 160%)',
                                    cursor: 'pointer',
                                }}
                            >
                                <FcAddImage />
                            </DropDiv>
                            <RoundButton variant="default" isBorder>
                                사진 저장
                            </RoundButton>
                        </LeftSection>
                        <RightSection width={65} direction="column">
                            <form>
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
                                            <TextField.Wrapper style={{ height: '100px' }}>
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
                                    name={authItemState.nickName.property}
                                    control={control}
                                    defaultValue={''}
                                    rules={authFormState.nickName}
                                    render={({
                                        field: { value, onChange },
                                        fieldState: { error, isDirty },
                                    }) => (
                                        <TextField error={!!error}>
                                            <TextField.Wrapper style={{ height: '100px' }}>
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
                                                        style={{ width: '300px' }}
                                                    />
                                                </TextField.Container>
                                                <TextField.HelperText
                                                    leftIcon={authItemState.nickName.icon.helper}
                                                    style={{ padding: '0 8px' }}
                                                >
                                                    {error?.message}
                                                </TextField.HelperText>
                                            </TextField.Wrapper>
                                        </TextField>
                                    )}
                                />

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
                                            <TextField.Wrapper style={{ height: '100px' }}>
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
                                                        style={{ width: '300px' }}
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
                                            <TextField.Wrapper style={{ height: '100px' }}>
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
                                                        style={{ width: '300px' }}
                                                    />
                                                </TextField.Container>
                                                <TextField.HelperText
                                                    leftIcon={authItemState.password.icon.helper}
                                                    style={{ padding: '0 8px' }}
                                                >
                                                    {error?.message}
                                                </TextField.HelperText>
                                            </TextField.Wrapper>
                                        </TextField>
                                    )}
                                />
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
                                            <TextField.Wrapper style={{ height: '100px' }}>
                                                <TextField.Label
                                                    required
                                                    requiredtext="비밀번호확인 필수입니다."
                                                >
                                                    {authItemState.confirmPassword.label}
                                                </TextField.Label>
                                                <TextField.Container
                                                    id="password_container"
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
                                                        style={{ width: '300px' }}
                                                    />
                                                </TextField.Container>
                                                <TextField.HelperText
                                                    leftIcon={authItemState.confirmPassword.icon.helper}
                                                    style={{ padding: '0 8px' }}
                                                >
                                                    {error?.message}
                                                </TextField.HelperText>
                                            </TextField.Wrapper>
                                        </TextField>
                                    )}
                                />
                                <PhoneGenderWrapper>
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
                                                        id="password_container"
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
                                                    <Typography
                                                        variant="BODY3"
                                                        color="sementic"
                                                        marginLeft={8}
                                                    >
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
                                </PhoneGenderWrapper>
                                <InputCalender
                                    name={authItemState.birthDay.property}
                                    placeholder={authItemState.birthDay.placeHolder}
                                    required={authFormState.birthDay.required}
                                    format={authFormState.birthDay.format}
                                    control={control}
                                    authItemState={authItemState.birthDay}
                                />
                                <AddressZoneWrapper justifyContent="space-between" alignItems="center">
                                    <Controller
                                        name={authItemState.zoneCode.property}
                                        control={control}
                                        defaultValue={''}
                                        rules={authFormState.zoneCode}
                                        render={({ field: { value }, fieldState: { error } }) => (
                                            <TextField error={!!error}>
                                                <TextField.Wrapper style={{ height: '100px' }}>
                                                    <TextField.Label required>
                                                        {authItemState.zoneCode.label}
                                                    </TextField.Label>
                                                    <TextField.Container
                                                        id="password_container"
                                                        leftIcon={authItemState.zoneCode.icon.main}
                                                    >
                                                        <ZoneCodeInput
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
                                                </TextField.Wrapper>
                                            </TextField>
                                        )}
                                    />
                                    <AddressButton variant="primary">주소</AddressButton>
                                </AddressZoneWrapper>
                                <AddressWrapper>
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
                                                    <TextField.Wrapper style={{ height: '100px' }}>
                                                        <TextField.Label required>
                                                            {authItemState.address.label}
                                                        </TextField.Label>
                                                        <TextField.Container
                                                            id="password_container"
                                                            leftIcon={authItemState.address.icon.main}
                                                        >
                                                            <TextField.Input
                                                                value={value}
                                                                id={authItemState.address.property}
                                                                type={authItemState.address.type}
                                                                placeholder={
                                                                    authItemState.address.placeHolder
                                                                }
                                                                style={{ width: '300px' }}
                                                                readOnly
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
                                        defaultValue={''}
                                        rules={authFormState.addressDetail}
                                        render={({
                                            field: { value, onChange },
                                            fieldState: { error, isDirty },
                                        }) => (
                                            <TextField error={!!error}>
                                                <TextField.Wrapper style={{ height: '100px' }}>
                                                    <TextField.Label required>
                                                        {authItemState.addressDetail.label}
                                                    </TextField.Label>
                                                    <TextField.Container
                                                        id="password_container"
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
                                </AddressWrapper>
                                <Controller
                                    name={authItemState.simpleIntroduction.property}
                                    control={control}
                                    defaultValue={''}
                                    rules={authFormState.simpleIntroduction}
                                    render={({
                                        field: { value, onChange },
                                        fieldState: { error, isDirty },
                                    }) => (
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
                                <SubmitButton>수정하기</SubmitButton>
                            </form>
                        </RightSection>
                    </InnerWrapper>
                </Container.Inner>
            </Container>
        </PageContainer>
    );
};

export default observer(MyEditView);

const InnerWrapper = styled(Flex)`
    width: 100%;
    position: relative;
    ${theme.mediaQuery.mobile} {
        flex-direction: column;
        justify-content: center;
    }
    ${theme.mediaQuery.tablet} {
        flex-direction: row;
        justify-content: center;
    }
    ${theme.mediaQuery.desktop} {
        flex-direction: row;
        justify-content: space-between;
    }
`;
const LeftSection = styled(Div)`
    position: relative;

    ${theme.mediaQuery.mobile} {
        width: 100%;
    }

    ${theme.mediaQuery.tablet} {
        width: 35%;
    }
    ${theme.mediaQuery.desktop} {
        width: 35%;
    }
`;

const RightSection = styled(Div)`
    ${theme.mediaQuery.mobile} {
        width: 100%;
    }
    ${theme.mediaQuery.tablet} {
        width: 65%;
    }
    ${theme.mediaQuery.desktop} {
        width: 65%;
    }
`;

const AddressButton = styled(RectangleButton)`
    transform: translateY(10%);

    ${theme.mediaQuery.mobile} {
        width: max-content;
        display: flex;
    }
    ${theme.mediaQuery.tablet} {
        width: max-content;
        display: flex;
    }
    ${theme.mediaQuery.desktop} {
        width: max-content;
        display: flex;
    }
`;
const SubmitButton = styled(DropButton)`
    transform: translateX(500%);
`;

const PhoneGenderWrapper = styled(Flex)`
    ${theme.mediaQuery.mobile} {
        flex-direction: column;
    }
    ${theme.mediaQuery.tablet} {
        flex-direction: column;
    }
    ${theme.mediaQuery.desktop} {
        flex-direction: row;
    }
`;
const AddressZoneWrapper = styled(Flex)`
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

const AddressWrapper = styled(Flex)`
    ${theme.mediaQuery.mobile} {
        flex-direction: column;
    }
    ${theme.mediaQuery.tablet} {
        flex-direction: column;
    }
    ${theme.mediaQuery.desktop} {
        flex-direction: row;
    }
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
