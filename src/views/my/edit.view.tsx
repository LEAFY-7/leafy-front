import styled from '@emotion/styled';
import { Controller, useForm } from 'react-hook-form';
import { SignUphModel } from 'models/auth/signUp.model';
import { FcAddImage } from 'react-icons/fc';

import Container from 'components/organisms/Container/default-container';
import PageContainer from 'components/templates/page-container';
import { authFormState, authItemState } from 'configs/form.config';
import Flex from 'components/atoms/Group/flex';
import Div from 'components/atoms/Div/default-div';
import Typography from 'components/atoms/Typograph/default-typography';
import InputCalender from 'components/organisms/Calender/input-calender';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import Textarea from 'components/atoms/Textarea/default-textarea';
import DropButton from 'components/atoms/Button/drop-button';
import TextField from 'components/molecules/TextField/default-textField';
import DropDiv from 'components/atoms/Div/drop-div';
import RoundButton from 'components/atoms/Button/round-button';

const publicURL = process.env.PUBLIC_URL;

const MyEditView = () => {
    const { control, handleSubmit, watch } = useForm<SignUphModel>({
        defaultValues: {
            name: '',
            nickName: '',
            email: '',
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
                    <Flex justifyContent="space-between" style={{ width: '100%' }}>
                        <Div width={25} direction="column" style={{ position: 'relative' }}>
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
                        </Div>
                        <Div width={65} direction="column">
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
                                                    rightIcon={authItemState.name.icon.main}
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
                                                    rightIcon={authItemState.nickName.icon.main}
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
                                        <>
                                            <TextField error={!!error} disabled>
                                                <TextField.Wrapper style={{ height: '100px' }}>
                                                    <TextField.Label>
                                                        {authItemState.email.label}
                                                    </TextField.Label>
                                                    <TextField.Container
                                                        id="email_container"
                                                        rightIcon={authItemState.email.icon.main}
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
                                        </>
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
                                                <TextField.Label>
                                                    {authItemState.password.label}
                                                </TextField.Label>
                                                <TextField.Container
                                                    id="password_container"
                                                    rightIcon={authItemState.password.icon.main}
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
                                                <TextField.Label>
                                                    {authItemState.confirmPassword.label}
                                                </TextField.Label>
                                                <TextField.Container
                                                    id="password_container"
                                                    rightIcon={authItemState.confirmPassword.icon.main}
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
                                <Flex>
                                    <Controller
                                        name={authItemState.phone.property}
                                        control={control}
                                        defaultValue=""
                                        rules={authFormState.phone}
                                        render={({ field: { value, onChange }, fieldState: { error } }) => (
                                            <TextField error={!!error}>
                                                <TextField.Wrapper style={{ height: '100px' }}>
                                                    <TextField.Label>
                                                        {authItemState.phone.label}
                                                    </TextField.Label>
                                                    <TextField.Container
                                                        id="password_container"
                                                        rightIcon={authItemState.phone.icon.main}
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
                                </Flex>
                                <InputCalender
                                    name={authItemState.birthDay.property}
                                    placeholder={authItemState.birthDay.placeHolder}
                                    required={authFormState.birthDay.required}
                                    format={authFormState.birthDay.format}
                                    control={control}
                                    authItemState={authItemState.birthDay}
                                />
                                <Flex
                                    justifyContent="space-between"
                                    alignItems="center"
                                    style={{ width: '400px' }}
                                >
                                    <Controller
                                        name={authItemState.zoneCode.property}
                                        control={control}
                                        defaultValue={''}
                                        rules={authFormState.zoneCode}
                                        render={({ field: { value }, fieldState: { error } }) => (
                                            <TextField error={!!error}>
                                                <TextField.Wrapper style={{ height: '100px' }}>
                                                    <TextField.Label>
                                                        {authItemState.zoneCode.label}
                                                    </TextField.Label>
                                                    <TextField.Container
                                                        id="password_container"
                                                        rightIcon={authItemState.zoneCode.icon.main}
                                                    >
                                                        <TextField.Input
                                                            id={authItemState.zoneCode.property}
                                                            value={value}
                                                            type={authItemState.zoneCode.type}
                                                            placeholder={authItemState.zoneCode.placeHolder}
                                                            style={{ width: '300px' }}
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
                                </Flex>
                                <Flex>
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
                                                        <TextField.Label>
                                                            {authItemState.address.label}
                                                        </TextField.Label>
                                                        <TextField.Container
                                                            id="password_container"
                                                            rightIcon={authItemState.address.icon.main}
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
                                                    <TextField.Label>
                                                        {authItemState.addressDetail.label}
                                                    </TextField.Label>
                                                    <TextField.Container
                                                        id="password_container"
                                                        rightIcon={authItemState.addressDetail.icon.main}
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
                                </Flex>
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
                                <DropButton style={{ transform: 'translateX(500%)' }}>수정하기</DropButton>
                            </form>
                        </Div>
                    </Flex>
                </Container.Inner>
            </Container>
        </PageContainer>
    );
};

export default MyEditView;

const AddressButton = styled(RectangleButton)`
    transform: translateY(10%);
`;
