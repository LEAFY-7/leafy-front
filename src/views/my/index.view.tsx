import { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import styled from '@emotion/styled';
import { FaUserEdit as UserIcon } from 'react-icons/fa';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import UserViewModel from 'viewModel/user/user.viewModel';
import { theme } from 'configs/ui.config';
import pageUrlConfig from 'configs/pageUrl.config';

import PageContainer from 'components/templates/page-container';
import UserInfomation from 'components/organisms/Profile/user-infomation';
import UserLabel from 'components/organisms/Profile/user-label';
import Container from 'components/organisms/Container/default-container';
import MixedChart from 'components/molecules/Chart/mixed-chart';
import Table from 'components/molecules/Table/default-table';
import Flex from 'components/atoms/Group/flex';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import DefaultAnchor from 'components/atoms/Anchor/default-anchor';
import LinkWrapper from 'components/molecules/Wrapper/link-wrapper';
import Switch from 'components/atoms/Switch/default-switch';
import useToggle from 'hooks/useToggle';
import PageButton from 'components/organisms/Pagination/pagebutton';
import { ChangeHandler } from 'react-hook-form';

/**
 * PageButton 컴포넌트 Props
 * @argument page number타입
 * @argument totalPageCount list의 길이?
 * @onClick
 */

const MyView = () => {
    const userViewModel: UserViewModel = useViewModel(ViewModelName.USER);
    const [page, setPage] = useState(1);
    const { isOpen, toggle, handler } = useToggle({});
    useEffect(() => {
        userViewModel.getMe();
        userViewModel.getMyPage();
    }, []);

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
                <Container id="myInfo" as="section" wrapperHeight={100}>
                    <Flex.RowToColumnOnMobileSm justifyContent="space-between" style={{ width: '100%' }}>
                        <Container.Header headerHeight={'50px'} fontSize="xl" marginBottom={8}>
                            나의 정보
                        </Container.Header>
                        <Flex.Default as="div" direction="row-reverse" style={{ width: 'max-content' }}>
                            <RectangleButton
                                to={pageUrlConfig.myEdit}
                                backgroundColor="white"
                                color="grey"
                                rightIcon={<UserIcon color="gray" size={15} />}
                            >
                                회원정보수정
                            </RectangleButton>
                        </Flex.Default>
                    </Flex.RowToColumnOnMobileSm>
                    <Container.Body innerHeight={100}>
                        <Flex.RowToColumnOnTabletSm
                            id="myInfo_wrapper"
                            as="div"
                            style={{ height: '100%', width: '100%', gap: '16px' }}
                        >
                            <MyInfoContent
                                id="myInfo_left"
                                style={{
                                    height: '620px',
                                    justifyContent: 'space-around',
                                    position: 'relative',
                                }}
                            >
                                <UserLabel user={userViewModel.me.user} />
                            </MyInfoContent>

                            <MyInfoContent id="myInfo_right">
                                <MixedChart chartList={userViewModel.chartList} />
                                <Table id="myData_table">
                                    <Table.Head>
                                        <Table.Tr
                                            style={{
                                                backgroundColor: `${theme.colors.secondary}`,
                                                borderRadius: '8px',
                                            }}
                                        >
                                            <Table.Th>
                                                <DefaultAnchor
                                                    href="#following__container"
                                                    style={{ width: 'auto', height: 'auto' }}
                                                >
                                                    팔로잉
                                                </DefaultAnchor>
                                            </Table.Th>

                                            <Table.Th>
                                                <DefaultAnchor
                                                    href="#follow__container"
                                                    style={{ width: 'auto', height: 'auto' }}
                                                >
                                                    팔로우
                                                </DefaultAnchor>
                                            </Table.Th>
                                            <Table.Th>
                                                <LinkWrapper
                                                    to={`${pageUrlConfig.user}/${userViewModel.me.user.userId}`}
                                                >
                                                    게시글
                                                </LinkWrapper>
                                            </Table.Th>
                                            <Table.Th>
                                                <DefaultAnchor
                                                    href="#like__container"
                                                    style={{ width: 'auto', height: 'auto' }}
                                                >
                                                    좋아요
                                                </DefaultAnchor>
                                            </Table.Th>
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
                            </MyInfoContent>
                        </Flex.RowToColumnOnTabletSm>
                    </Container.Body>
                </Container>

                <Container id="following" as="section" wrapperHeight={'540px'}>
                    <Container.Header headerHeight={'50px'} fontSize="xl" marginBottom={8}>
                        팔로잉
                    </Container.Header>
                    <Container.Body innerVariant="translucent" innerHeight={100}></Container.Body>
                </Container>

                <Container id="follow" as="section" wrapperHeight={'540px'}>
                    <Container.Header headerHeight={'50px'} fontSize="xl" marginBottom={8}>
                        팔로우
                    </Container.Header>
                    <Container.Body innerVariant="translucent" innerHeight={100}>
                        팔로우
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
                    <Container.Body innerHeight={100} alignItems="flex-start">
                        <Table id="qna_table">
                            <Table.Head>
                                <Table.Tr
                                    style={{
                                        backgroundColor: `${theme.colors.secondary}`,
                                        borderRadius: '8px',
                                    }}
                                >
                                    <Table.Th style={{ width: '10%' }}>번호</Table.Th>
                                    <Table.Th style={{ width: '50%' }}>제목</Table.Th>
                                    <Table.Th style={{ width: '20%' }}>날짜</Table.Th>
                                    <Table.Th style={{ width: '20%' }}>답변 상태</Table.Th>
                                </Table.Tr>
                            </Table.Head>
                            <Table.Body>
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <Table.Tr
                                        key={index}
                                        style={{
                                            backgroundColor: `${theme.colors.lgrey_50}`,
                                        }}
                                    >
                                        <Table.Td style={{ width: '10%' }}>{index + 1}</Table.Td>
                                        <Table.Td style={{ width: '50%' }}>임시 제목입니다.</Table.Td>
                                        <Table.Td style={{ width: '20%' }}>2023-09-07</Table.Td>
                                        <Table.Td style={{ width: '20%' }}>답변 예정</Table.Td>
                                    </Table.Tr>
                                ))}
                            </Table.Body>
                        </Table>
                    </Container.Body>
                </Container>
                <Container id="setting" as="section" wrapperHeight={'540px'}>
                    <Container.Header headerHeight={'50px'} fontSize="xl" marginBottom={8}>
                        설정
                    </Container.Header>
                    <Container.Body innerHeight={100} alignItems="flex-start">
                        <Flex.RowToColumnOnMobileMd justifyContent="space-around" style={{ width: '100%' }}>
                            <Switch isOn={isOpen} toggle={handler}>
                                <Switch.Title>계정 공개</Switch.Title>
                                <Switch.Wrapper>
                                    <Switch.Toggle />
                                </Switch.Wrapper>
                            </Switch>
                            <Switch isOn={isOpen} toggle={handler}>
                                <Switch.Title>전체 알람</Switch.Title>
                                <Switch.Wrapper>
                                    <Switch.Toggle />
                                </Switch.Wrapper>
                            </Switch>
                            <Switch isOn={isOpen} toggle={handler}>
                                <Switch.Title>댓글 알람</Switch.Title>
                                <Switch.Wrapper>
                                    <Switch.Toggle />
                                </Switch.Wrapper>
                            </Switch>
                        </Flex.RowToColumnOnMobileMd>
                    </Container.Body>
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
