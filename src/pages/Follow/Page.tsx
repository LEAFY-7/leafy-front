import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";

import Flex from "@components/ui/Flex";
import Box from "@components/ui/Box";
import Typography from "@components/ui/Typograph";

import FeedsSections from "./FeedsSection";
import FollowUserList from "./FollowUserList";
import Button from "@components/ui/Button";

const Follow = () => {
  const { reviewShow } = useSelector((state: RootState) => state.toggle);
  const { reviewList } = useSelector((state: RootState) => state.user);

  const [latest, setLatest] = useState<boolean>(true);

  return (
    <Flex as="div" direction="column">
      <Box
        width={100}
        display="flex"
        justifyContent="left"
        alignItems="center"
        margin="auto"
        overflow="hidden"
      >
        <Typography variant="BODY3" marginTop={20}>
          가장 최근에 업데이트한 팔로우입니다.
        </Typography>
      </Box>
      <Box as="section" width="900px" marginTop={30}>
        {/* 구독 슬라이더 */}
        <FollowUserList />
        {/* 구덕 슬라이더 */}
      </Box>
      {/* 피드 섹션 */}
      <Box as="section" width="900px" height={100} marginTop={20}>
        <Flex
          justifyContent="center"
          alignContent="center"
          style={{ marginBottom: "30px" }}
        >
          <Button variant="blue" onClick={() => setLatest(true)}>
            최신글
          </Button>
          <Button variant="blue" onClick={() => setLatest(false)}>
            인기글
          </Button>
        </Flex>
        {latest && <FeedsSections />}
        {/* {!latest && <FeedsSections />} */}
      </Box>
      {/* 피드 섹션 */}
    </Flex>
  );
};

export default Follow;
