import React, { PropsWithChildren, ReactNode } from "react";
import Box from "@components/atoms/Box";
import Flex from "@components/atoms/Group/flex";

interface Props {
  leftWidth?: string | number;
  leftHeight?: string | number;
  rightWidth?: string | number;
  rightHeight?: string | number;
  leftSection: ReactNode;
  rightSection: ReactNode;
}

const DiTemplate: React.FC<PropsWithChildren<Props>> = ({
  leftWidth = 100,
  leftHeight = 100,
  rightWidth = 100,
  rightHeight = 100,
  leftSection,
  rightSection,
}) => {
  return (
    <Box as="main" width={100} height={100} overflow="hidden">
      <Flex>
        <Box as="section" width={leftWidth} height={rightHeight}>
          {leftSection}
        </Box>
        <Box as="section" width={rightWidth} height={rightHeight}>
          {rightSection}
        </Box>
      </Flex>
    </Box>
  );
};

export default DiTemplate;
