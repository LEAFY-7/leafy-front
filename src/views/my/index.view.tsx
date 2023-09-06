import { useEffect } from 'react';
import { observer } from 'mobx-react';
import styled from '@emotion/styled';
import pageUrlConfig from 'configs/pageUrl.config';

import { theme } from 'configs/ui.config';

import RectangleButton from 'components/atoms/Button/rectangle-button';
import Div from 'components/atoms/Div/div';
import Flex from 'components/atoms/Group/flex';
import Typography from 'components/atoms/Typograph/default-typography';
import Container from 'components/organisms/Container/default-container';
import PageContainer from 'components/templates/page-container';
// import { UserDto } from 'dto/user/user.dto';
import DropButton from 'components/atoms/Button/drop-button';
import UserInfomation from 'components/organisms/Profile/user-infomation';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import UserViewModel from 'viewModel/user/user.viewModel';
import tokenModule from 'modules/token.module';
import UserLabel from 'components/organisms/Profile/user-label';
import Table from 'components/molecules/Table/default-table';
import MixedChart from 'components/molecules/Chart/mixed-chart';

const MyView = () => {
    const userViewModel: UserViewModel = useViewModel(ViewModelName.USER);
    useEffect(() => {
        userViewModel.getMe();
        userViewModel.getMyPage();
    }, []);

    console.log('차트', userViewModel.chartList);

    return (
        <PageContainer
            style={{ height: 'auto', overflow: 'visible', justifyContent: 'center', alignItems: 'center' }}
        >
            <UserInfomation data={userViewModel.me} />
            <Flex.Default
                as="main"
                direction="column"
                alignItems="center"
                style={{ width: '100%', gap: '16px' }}
            >
                <Container id="myInfo" as="section" wrapperHeight={'650px'}>
                    <Container.Header headerHeight={'50px'} fontSize="xl" marginBottom={8}>
                        나의 정보
                    </Container.Header>
                    <Container.Body innerHeight={100}>
                        <Flex.RowToColumnOnTabletSm
                            id="myInfo_wrapper"
                            as="div"
                            style={{ height: '100%', width: '100%', gap: '16px' }}
                        >
                            <MyInfoContent
                                id="myInfo_left"
                                style={{
                                    justifyContent: 'space-around',
                                    position: 'relative',
                                }}
                            >
                                <UserLabel user={userViewModel.me.user} />
                                <Flex.Default
                                    as="div"
                                    direction="row-reverse"
                                    style={{
                                        width: 'max-content',
                                        position: 'absolute',
                                        right: 0,
                                        bottom: 0,
                                    }}
                                >
                                    <RectangleButton
                                        to={pageUrlConfig.myEdit}
                                        backgroundColor="white"
                                        isBorder
                                    >
                                        내 정보 수정하러가기
                                    </RectangleButton>
                                </Flex.Default>
                            </MyInfoContent>

                            <MyInfoContent id="myInfo_right">
                                <Table id="myData_table">
                                    <Table.Head>
                                        <Table.Tr
                                            style={{
                                                backgroundColor: `${theme.colors.secondary}`,
                                                borderRadius: '8px',
                                            }}
                                        >
                                            <Table.Th>팔로잉</Table.Th>
                                            <Table.Th>팔로우</Table.Th>
                                            <Table.Th>게시글</Table.Th>
                                            <Table.Th>좋아요</Table.Th>
                                        </Table.Tr>
                                    </Table.Head>
                                    <Table.Body>
                                        <Table.Tr
                                            style={{
                                                backgroundColor: `${theme.colors.lgrey_50}`,
                                                borderRadius: '8px',
                                            }}
                                        >
                                            <Table.Td>{userViewModel.totalCount.followingCount}</Table.Td>
                                            <Table.Td>{userViewModel.totalCount.followerCount}</Table.Td>
                                            <Table.Td>{userViewModel.totalCount.feedCount}</Table.Td>
                                            <Table.Td>{userViewModel.totalCount.likeCount}</Table.Td>
                                        </Table.Tr>
                                    </Table.Body>
                                </Table>
                                <MixedChart chartList={userViewModel.chartList} />
                            </MyInfoContent>
                        </Flex.RowToColumnOnTabletSm>
                    </Container.Body>
                </Container>

                <Container id="follow" as="section" wrapperHeight={'540px'}>
                    <Container.Header headerHeight={'50px'} fontSize="xl" marginBottom={8}>
                        팔로우
                    </Container.Header>
                    <Container.Body innerVariant="translucent" innerHeight={100}>
                        팔로우
                    </Container.Body>
                </Container>
                <Container id="following" as="section" wrapperHeight={'540px'}>
                    <Container.Header headerHeight={'50px'} fontSize="xl" marginBottom={8}>
                        팔로잉
                    </Container.Header>
                    <Container.Body innerVariant="translucent" innerHeight={100}>
                        팔로잉
                    </Container.Body>
                </Container>
                <Container id="like" as="section" wrapperHeight={'540px'}>
                    <Container.Header headerHeight={'50px'} fontSize="xl" marginBottom={8}>
                        좋아요
                    </Container.Header>
                    <Container.Body innerVariant="translucent" innerHeight={100}>
                        좋아요
                    </Container.Body>
                </Container>
                <Container id="answer" as="section" wrapperHeight={'540px'}>
                    <Container.Header headerHeight={'50px'} fontSize="xl" marginBottom={8}>
                        질문
                    </Container.Header>
                    <Container.Body innerHeight={100}>질문</Container.Body>
                </Container>
                <Container id="setting" as="section" wrapperHeight={'540px'}>
                    <Container.Header headerHeight={'50px'} fontSize="xl" marginBottom={8}>
                        설정
                    </Container.Header>
                    <Container.Body innerHeight={100}>설정</Container.Body>
                </Container>
            </Flex.Default>
        </PageContainer>
    );
};

export default observer(MyView);

const MyInfoContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

{
    /* <DropButton to={`${pageUrlConfig.chat}?me=13&you=456`}>
                                        채팅 하러 가기
                                    </DropButton> */
}
