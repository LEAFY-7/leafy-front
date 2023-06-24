import React, { PropsWithChildren, ReactNode } from "react";
import Box from "@components/atoms/Box";

interface Props {
  leftSection?: ReactNode;
  middleSection?: ReactNode;
  rightSection?: ReactNode;
}

const TriTemplate: React.FC<PropsWithChildren<Props>> = ({
  leftSection,
  middleSection,
  rightSection,
}) => {
  return (
    <Box
      as="main"
      display="flex"
      overflow="hidden"
      minHeight="100vh"
      margin="0 auto"
    >
      {leftSection && null}
      {middleSection && null}
      {rightSection && null}
    </Box>
  );
};

export default TriTemplate;
