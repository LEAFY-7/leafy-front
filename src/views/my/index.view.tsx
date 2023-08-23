import styled from '@emotion/styled';
import pageUrlConfig from 'configs/pageUrl.config';

import { theme } from 'configs/ui.config';

import Box from 'components/atoms/Box/default-box';
import PageContainer from 'components/templates/page-container';
import Div from 'components/atoms/Div/div';
import Flex from 'components/atoms/Group/flex';
import Typography from 'components/atoms/Typograph/default-typography';
import Container from 'components/organisms/Container/default-container';
import RectangleButton from 'components/atoms/Button/rectangle-button';
// import { UserDto } from 'dto/user/user.dto';
import DropButton from 'components/atoms/Button/drop-button';
import UserViewModel from 'viewModel/user/user.viewModel';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';

const user = {
    name: '홍길동',
    nickName: '홍__길__동123',
    email: 'test@test.com',
    phone: '010-1234-5678',
    birthDay: '2023-07-29',
    address: '경기도 부천시',
    introduction: '응 어서오고~~',
    img: '',
    bgImg: '',
};

const MyView = () => {
    const userViewModel: UserViewModel = useViewModel(ViewModelName.USER);

    return (
        <PageContainer
            style={{ height: 'auto', overflow: 'visible', justifyContent: 'center', alignItems: 'center' }}
        >
            {/* <ProfileCard data={new UserDto()} /> */}
            {/* <BoxWithBackgroundImage as="section" height="280px">
                <BgImg
                    src={user.bgImg ? user.bgImg : `${publicUrl}/image/default/default-user-bg.svg`}
                    alt="기본 이미지"
                />

                <Flex.RowToColumnOnTabletSm style={{ width: '100%' }}>
                    {user?.img ? (
                        <AuthImg src={user.img} alt="기본 이미지" />
                    ) : (
                        <AuthImg src={`${publicUrl}/image/default/default-auth-img.svg`} alt="기본 이미지" />
                    )}
                    <IntroductionBox>{user.introduction}</IntroductionBox>
                </Flex.RowToColumnOnTabletSm>
            </BoxWithBackgroundImage> */}

            <Flex.Default
                as="main"
                direction="column"
                alignItems="center"
                style={{ width: '100%', gap: '16px' }}
            >
                <Container id="myInfo" as="section" wrapperHeight={'540px'}>
                    <Container.Header headerHeight={'50px'} fontSize="xl" marginBottom={8}>
                        나의 정보
                    </Container.Header>
                    <Container.Inner innerHeight={100}>
                        <Flex.RowToColumnOnTabletSm
                            id="myInfo_wrapper"
                            style={{ width: '100%', height: '100%', gap: '16px' }}
                        >
                            <Div.Default
                                id="myInfo_left"
                                width={100}
                                height={100}
                                direction="column"
                                alignItems="flex-start"
                                style={{ position: 'relative' }}
                            >
                                <LabelWrapper>
                                    <Label htmlFor="name">이름</Label>
                                    <Typography variant="BODY2" marginLeft={16}>
                                        {user.name}
                                    </Typography>
                                </LabelWrapper>
                                <LabelWrapper>
                                    <Label htmlFor="nickName">닉네임</Label>
                                    <Typography variant="BODY2" marginLeft={16}>
                                        {user.nickName}
                                    </Typography>
                                </LabelWrapper>
                                <LabelWrapper>
                                    <Label htmlFor="eamil">이메일</Label>
                                    <Typography variant="BODY2" marginLeft={16}>
                                        {user.email}
                                    </Typography>
                                </LabelWrapper>
                                <LabelWrapper>
                                    <Label htmlFor="phone">연락처</Label>
                                    <Typography variant="BODY2" marginLeft={16}>
                                        {user.phone}
                                    </Typography>
                                </LabelWrapper>
                                <LabelWrapper>
                                    <Label htmlFor="birth">생년월일</Label>
                                    <Typography variant="BODY2" marginLeft={16}>
                                        {user.birthDay}
                                    </Typography>
                                </LabelWrapper>
                                <LabelWrapper>
                                    <Label htmlFor="address">주소</Label>
                                    <Typography variant="BODY2" marginLeft={16}>
                                        {user.address}
                                    </Typography>
                                </LabelWrapper>
                                <Flex.Default as="div" style={{ position: 'absolute', right: 0, bottom: 0 }}>
                                    <RectangleButton
                                        to={pageUrlConfig.myEdit}
                                        backgroundColor="white"
                                        isBorder
                                    >
                                        내 정보 수정하러가기
                                    </RectangleButton>
                                    <DropButton to={`${pageUrlConfig.chat}?me=123&you=460`}>
                                        채팅 하러 가기
                                    </DropButton>
                                </Flex.Default>
                            </Div.Default>
                            <Div.Default
                                id="myInfo_right"
                                width={100}
                                height={100}
                                variant="translucent"
                                padding={'8px'}
                                justifyContent="center"
                            >
                                그래프 위치
                            </Div.Default>
                        </Flex.RowToColumnOnTabletSm>
                    </Container.Inner>
                </Container>

                <Container id="follow" as="section" wrapperHeight={'540px'}>
                    <Container.Header headerHeight={'50px'} fontSize="xl" marginBottom={8}>
                        팔로우
                    </Container.Header>
                    <Container.Inner innerVariant="translucent" innerHeight={100}>
                        팔로우
                    </Container.Inner>
                </Container>
                <Container id="following" as="section" wrapperHeight={'540px'}>
                    <Container.Header headerHeight={'50px'} fontSize="xl" marginBottom={8}>
                        팔로잉
                    </Container.Header>
                    <Container.Inner innerVariant="translucent" innerHeight={100}>
                        팔로잉
                    </Container.Inner>
                </Container>
                <Container id="like" as="section" wrapperHeight={'540px'}>
                    <Container.Header headerHeight={'50px'} fontSize="xl" marginBottom={8}>
                        좋아요
                    </Container.Header>
                    <Container.Inner innerVariant="translucent" innerHeight={100}>
                        좋아요
                    </Container.Inner>
                </Container>
                <Container id="answer" as="section" wrapperHeight={'540px'}>
                    <Container.Header headerHeight={'50px'} fontSize="xl" marginBottom={8}>
                        질문
                    </Container.Header>
                    <Container.Inner innerHeight={100}>질문</Container.Inner>
                </Container>
                <Container id="setting" as="section" wrapperHeight={'540px'}>
                    <Container.Header headerHeight={'50px'} fontSize="xl" marginBottom={8}>
                        설정
                    </Container.Header>
                    <Container.Inner innerHeight={100}>설정</Container.Inner>
                </Container>
            </Flex.Default>
        </PageContainer>
    );
};

export default MyView;

const BoxWithBackgroundImage = styled(Box)`
    border-radius: 20px;
    /* padding: 8px; */
    /* margin: 16px 16px; */
    position: relative;
    box-sizing: border-box;
    width: 100%;
    max-width: 1200px;
`;
const AuthImg = styled.img`
    position: absolute;
    top: 5%;
    left: 5%;
    bottom: 5%;
    width: 250px;
    height: 90%;
    border-radius: 50%;
    object-fit: cover;
`;
const BgImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 100px;
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: -1;
`;

const IntroductionBox = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;

    width: 40%;
    height: 70%;
    background: rgba(245, 245, 245, 0.3);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 5px 5px 10px rgba(250, 250, 250, 0.15);
    /* backdrop-filter: blur(15px); */
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.palette.text.black};
`;

const Label = styled.label`
    width: 100px;
    font-size: ${theme.fontSize.lg};
    color: ${theme.colors.grey};
`;

const LabelWrapper = styled(Flex.Default)`
    margin-bottom: 16px;
`;
