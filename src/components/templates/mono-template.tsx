import React, { FC, ReactElement, ReactNode } from "react";
import Box from "@components/atoms/Box";

interface Props {
  mainSection: ReactNode;
}

const MonoTemplate: FC<Props> = ({ mainSection }) => {
  return (
    <Box
      as="main"
      display="flex"
      overflow="hidden"
      minHeight="100vh"
      margin="0 auto"
    >
      {mainSection}
    </Box>
  );
};

export default MonoTemplate;
