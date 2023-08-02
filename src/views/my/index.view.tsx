import styled from '@emotion/styled';
import pageUrlConfig from 'configs/pageUrl.config';

import { theme } from 'configs/ui.config';

import PageContainer from 'components/templates/page-container';
import DropButton from 'components/atoms/Button/drop-button';
import Div from 'components/atoms/Div/div';
import Flex from 'components/atoms/Group/flex';
import Box from 'components/atoms/Box/default-box';
import Typography from 'components/atoms/Typograph/default-typography';
import Container from 'components/organisms/Container/default-container';

const user = {
    name: '홍길동',
    nickName: '홍__길__동123',
    email: 'test@test.com',
    phone: '010-1234-5678',
    birthDay: '2023-07-29',
    address: '경기도 부천시',
    simpleIntroduction: '응 어서오고~~',
    img: 'https://image.newsis.com/2021/11/01/NISI20211101_0000859131_web.jpg?rnd=20211101115531',
    bgImg: 'https://cdn.edujin.co.kr/news/photo/202111/37383_72720_2823.jpg',
};

const bgImgUrl = process.env.PUBLIC_URL;

const MyView = () => {
    return (
        <PageContainer
            style={{ height: 'auto', overflow: 'visible', justifyContent: 'center', alignItems: 'center' }}
        >
            <Flex.Default style={{ width: '100%' }}>
                <BoxWithBackgroundImage
                    as="section"
                    height="280px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    {user?.bgImg ? (
                        <BgImg src={user.bgImg} alt="기본 이미지" />
                    ) : (
                        <BgImg src={`${bgImgUrl}/image/default/default-user-bg.svg`} alt="기본 이미지" />
                    )}
                    {user?.img ? (
                        <AuthImg src={user.img} alt="기본 이미지" />
                    ) : (
                        <AuthImg src={`${bgImgUrl}/image/default/default-auth-img.svg`} alt="기본 이미지" />
                    )}
                    <IntroductionBox>{user.simpleIntroduction}</IntroductionBox>
                </BoxWithBackgroundImage>
            </Flex.Default>

            <Flex.Default as="main" direction="column" alignItems="center" style={{ width: '100%' }}>
                <Container id="myInfo" as="section" wrapperHeight={'540px'}>
                    <Container.Header headerHeight={'50px'} fontSize="xl" marginBottom={8}>
                        나의 정보
                    </Container.Header>
                    <Container.Inner innerHeight={100} style={{ paddingRight: '0px' }}>
                        <Div.Default
                            id="myInfo_wrapper"
                            width={100}
                            height={100}
                            style={{ paddingLeft: '8px' }}
                        >
                            <Div.Default
                                id="myInfo_left"
                                width={50}
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
                                <Flex.Default
                                    as="div"
                                    style={{ position: 'absolute', right: 0, bottom: '24px' }}
                                >
                                    <DropButton to={pageUrlConfig.myEdit}>내 정보 수정하러가기</DropButton>
                                </Flex.Default>
                            </Div.Default>
                            <Div.Default
                                id="myInfo_right"
                                width={50}
                                padding={'8px'}
                                justifyContent="flex-end"
                            >
                                <Div.Default size="xl" variant="translucent">
                                    그래프 위치
                                </Div.Default>
                            </Div.Default>
                        </Div.Default>
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
    left: 5%;
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
    width: 475px;
    height: 173px;
    transform: translateX(0%);
    transform: translateY(0%);
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
