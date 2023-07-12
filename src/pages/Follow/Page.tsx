import { useState } from 'react';
import FollowUserList from './FollowUserList';
import FeedSections from './FeedsSection';

import Box from 'components/atoms/Box/default-box';
import Flex from 'components/atoms/Group/flex';
import Typography from 'components/atoms/Typograph/default-typography';
import RoundButton from 'components/atoms/Button/round-button';
import MonoTemplate from 'components/templates/mono-template';

const Follow = () => {
    const [latest, setLatest] = useState<boolean>(true);

    return (
        <MonoTemplate
            height={100}
            mainSection={
                <Flex id="left_section_wrapper" direction="column">
                    <Typography variant="BODY3" marginTop={20}>
                        가장 최근에 업데이트한 팔로우입니다.
                    </Typography>
                    <Box as="section" width={100} marginTop={30}>
                        {/* 구독 슬라이더 */}
                        <FollowUserList />
                        {/* 구독 슬라이더 */}
                    </Box>
                    {/* 피드 섹션 */}
                    <Box as="section" width="873px" height={100} marginTop={20}>
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
                    </Box>
                    {/* 피드 섹션 */}
                </Flex>
            }
        />
    );
};

export default Follow;
