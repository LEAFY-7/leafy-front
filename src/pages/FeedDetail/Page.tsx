import React from "react";

import Box from "@components/ui/Box";
import Flex from "@components/ui/Flex";
import useWindowSize from "@hooks/useWindowSize";

import RightSection from "./RightSection";
import LeftSection from "./LeftSection";

const FeedDetail = () => {
  const { width } = useWindowSize();

  return (
    <Flex as="div" gap={10} style={{ padding: "20px" }}>
      <Box
        as="section"
        width="960px"
        height={100}
        marginTop={20}
        marginRight={2.5}
        padding="3px"
      >
        <LeftSection />
      </Box>
      <Box as="section" width="300px" marginLeft={2.5} marginTop={20}>
        <RightSection />
      </Box>
    </Flex>
  );
};

export default FeedDetail;
