import React from "react";

import Box from "@components/ui/Box";
import Flex from "@components/ui/Flex";
import useWindowSize from "@hooks/useWindowSize";

import RightSection from "./RightSection";
import LeftSection from "./LeftSection";
import BottomSection from "./BottomSection";

const FeedDetail = () => {
  const { width } = useWindowSize();

  return (
    <Flex as="div" direction="column">
      <Box display="flex">
        <Box
          as="section"
          width="960px"
          height={100}
          marginTop={20}
          marginRight={2.5}
          padding="3px"
        >
          <LeftSection />
          <BottomSection />
        </Box>
        <Box as="section" width="300px" marginLeft={2.5} marginTop={20}>
          <RightSection />
        </Box>
      </Box>
    </Flex>
  );
};

export default FeedDetail;
