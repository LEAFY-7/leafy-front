import styled from '@emotion/styled';
import { Controller, useForm } from 'react-hook-form';
import { SignUphModel } from 'models/auth/signUp.model';

import Container from 'components/organisms/Container/default-container';
import PageContainer from 'components/templates/page-container';
import TextField from 'components/molecules/TextField';
import { authFormState, authItemState } from 'configs/form.config';
import Flex from 'components/atoms/Group/flex';
import Div from 'components/atoms/Div/default-div';
import Typography from 'components/atoms/Typograph/default-typography';
import InputCalender from 'components/organisms/Calender/input-calender';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import Textarea from 'components/atoms/Textarea/default-textarea';
import DropButton from 'components/atoms/Button/drop-button';

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
        <PageContainer
            style={{
                height: 'auto',
                overflow: 'visible',
                justifyContent: 'flex-start',
                alignItems: 'center',
            }}
        >
            <Container id="myInfo_edit" as="section" wrapperHeight={100}>
                <Container.Header headerHeight={'50px'} fontSize="xl" marginBottom={8}>
                    회원 정보 수정
                </Container.Header>
                <Container.HeaderLine marginTop={16} marginBottom={32} />
                <Container.Inner innerHeight={100}>
                    <Flex justifyContent="space-between" style={{ width: '100%' }}>
                        <Div width={30}>
                            <img src={`${publicURL}/image/default/default-user-img.svg`} />
                        </Div>
                        <Div
                            width={50}
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
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
                                        <TextField
                                            value={value}
                                            type={authItemState.name.type}
                                            labelTitle={authItemState.name.label}
                                            leftIcon={authItemState.name.icon.main}
                                            helperIcon={authItemState.name.icon.helper}
                                            placeholder={authItemState.name.placeHolder}
                                            error={!!error}
                                            helperText={error?.message}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                const { value } = e.target;
                                                onChange(value);
                                            }}
                                        />
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
                                        <TextField
                                            value={value}
                                            type={authItemState.nickName.type}
                                            labelTitle={authItemState.nickName.label}
                                            leftIcon={authItemState.nickName.icon.main}
                                            helperIcon={authItemState.nickName.icon.helper}
                                            placeholder={authItemState.nickName.placeHolder}
                                            error={!!error}
                                            helperText={error?.message}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                const { value } = e.target;
                                                onChange(value);
                                            }}
                                        />
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
                                        <TextField
                                            value={value}
                                            type={authItemState.email.type}
                                            labelTitle={authItemState.email.label}
                                            leftIcon={authItemState.email.icon.main}
                                            helperIcon={authItemState.email.icon.helper}
                                            placeholder={authItemState.email.placeHolder}
                                            error={!!error}
                                            helperText={error?.message}
                                            disabled
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                const { value } = e.target;
                                                onChange(value);
                                            }}
                                        />
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
                                        <TextField
                                            value={value}
                                            type={authItemState.password.type}
                                            labelTitle={authItemState.password.label}
                                            leftIcon={authItemState.password.icon.main}
                                            helperIcon={authItemState.password.icon.helper}
                                            placeholder={authItemState.password.placeHolder}
                                            error={!!error}
                                            helperText={error?.message}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                const { value } = e.target;
                                                onChange(value);
                                            }}
                                        />
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
                                        <TextField
                                            value={value}
                                            type={authItemState.confirmPassword.type}
                                            labelTitle={authItemState.confirmPassword.label}
                                            leftIcon={authItemState.confirmPassword.icon.main}
                                            helperIcon={authItemState.confirmPassword.icon.helper}
                                            placeholder={authItemState.confirmPassword.placeHolder}
                                            error={!!error}
                                            helperText={error?.message || '비밀번호가 일치하지 않습니다.'}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                const { value } = e.target;
                                                onChange(value);
                                            }}
                                        />
                                    )}
                                />
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
                                <Flex direction="column">
                                    <Flex
                                        justifyContent="center"
                                        alignItems="center"
                                        style={{ height: '100%' }}
                                    >
                                        <Controller
                                            name={authItemState.zoneCode.property}
                                            control={control}
                                            defaultValue={''}
                                            rules={authFormState.zoneCode}
                                            render={({
                                                field: { value, onChange },
                                                fieldState: { error, isDirty },
                                            }) => (
                                                <>
                                                    <TextField
                                                        id={authItemState.zoneCode.property}
                                                        type={authItemState.zoneCode.type}
                                                        // onClick={authViewModel.handleDaumAddress}
                                                        labelTitle={authItemState.zoneCode.label}
                                                        leftIcon={authItemState.zoneCode.icon.main}
                                                        helperIcon={authItemState.zoneCode.icon.helper}
                                                        placeholder={authItemState.zoneCode.placeHolder}
                                                        value={''}
                                                        readOnly
                                                        // error={!!error && !!!authViewModel.data.zoneCode}
                                                        helperText={error?.message}
                                                    />
                                                </>
                                            )}
                                        />
                                        <AddressButton variant="secondary">주소</AddressButton>
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
                                                <TextField
                                                    value={value}
                                                    id={authItemState.address.property}
                                                    type={authItemState.address.type}
                                                    // onClick={authViewModel.handleDaumAddress}
                                                    labelTitle={authItemState.address.label}
                                                    leftIcon={authItemState.address.icon.main}
                                                    placeholder={authItemState.address.placeHolder}
                                                    helperIcon={authItemState.address.icon.helper}
                                                    readOnly
                                                    // error={!!error && !!!authViewModel.data.address}
                                                    helperText={error?.message}
                                                />
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
                                <DropButton>수정하기</DropButton>
                            </form>
                        </Div>
                    </Flex>{' '}
                </Container.Inner>
            </Container>
        </PageContainer>
    );
};

export default MyEditView;

const AddressButton = styled(RectangleButton)`
    transform: translateY(50%);
`;
