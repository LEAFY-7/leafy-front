import { useState } from 'react';

import { RootState } from '@redux/store';
import { useSelector } from 'react-redux';

import FollowUserList from './FollowUserList';
import FeedSections from './FeedsSection';

import Box from '@components/atoms/Box/default-box';
import Flex from '@components/atoms/Group/flex';
import Typography from '@components/atoms/Typograph/default-typography';
import RoundButton from '@components/atoms/Button/round-button';
import SideNavigation from '@components/organisms/Navigation/side-navigation';
import DiTemplate from '@components/templates/di-template';

const Follow = () => {
    const { reviewShow } = useSelector((state: RootState) => state.toggle);
    const { reviewList } = useSelector((state: RootState) => state.user);
    const [latest, setLatest] = useState<boolean>(true);

    return (
        <DiTemplate
            variant="1/3"
            templateWidth={'1400px'}
            leftSection={
                <Flex id="left_section_wrapper" direction="column">
                    <Typography variant="BODY3" marginTop={20}>
                        가장 최근에 업데이트한 팔로우입니다.
                    </Typography>
                    <Box as="section" width="900px" marginTop={30}>
                        {/* 구독 슬라이더 */}
                        <FollowUserList />
                        {/* 구덕 슬라이더 */}
                    </Box>
                    {/* 피드 섹션 */}
                    <Box as="section" width="900px" height={100} marginTop={20}>
                        <Flex
                            id="feed_section_wrapper"
                            justifyContent="center"
                            alignContent="center"
                            style={{ marginBottom: '30px' }}
                        >
                            <RoundButton onClick={() => setLatest(true)}>최신글</RoundButton>
                            <RoundButton onClick={() => setLatest(false)}>인기글</RoundButton>
                        </Flex>
                        {latest && <FeedSections />}
                        {/* {!latest && <FeedsSections />} */}
                    </Box>
                    {/* 피드 섹션 */}
                </Flex>
            }
            rightSection={<SideNavigation />}
        />
    );
};

export default Follow;

// <Flex as="div" direction="column">
// <Box
//     width={100}
//     display="flex"
//     justifyContent="left"
//     alignItems="center"
//     margin="auto"
//     overflow="hidden"
// >
//     <Typography variant="BODY3" marginTop={20}>
//         가장 최근에 업데이트한 팔로우입니다.
//     </Typography>
// </Box>
// {/* 템플릿 */}
// </Flex>
