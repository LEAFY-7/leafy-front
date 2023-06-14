import React from "react";
import Box from "./ui/Box";
import Flex from "./ui/Flex";

/**
 * 디자인 -> 색상 변경 필요
 */

interface Props {
  header: string;
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ header, children }) => {
  return (
    <Box>
      <Flex>
        <Box>{header && <Box>{header}</Box>}</Box>
        {children}
      </Flex>
    </Box>
  );
};

export default Container;
