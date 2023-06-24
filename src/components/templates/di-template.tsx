import React, { PropsWithChildren, ReactNode } from "react";
import Box from "@components/atoms/Box";

interface Props {
  leftSection: ReactNode;
  rightSection: ReactNode;
}

const DiTemplate: React.FC<PropsWithChildren<Props>> = ({
  leftSection,
  rightSection,
}) => {
  return (
    <Box
      as="main"
      display="flex"
      height={100}
      margin="0 auto"
      overflow="hidden"
    >
      {leftSection}
      {rightSection}
    </Box>
  );
};

export default DiTemplate;
