import React from "react";
import { Outlet } from "react-router-dom";

import Box from "@components/ui/Box";
import Flex from "@components/ui/Flex";

const MainLayout = () => {
  return (
    <>
      <Flex display="flex" direction="column">
        {/* Header */}

        {/* Header */}
        {/* main */}
        <Box
          as="main"
          display="flex"
          overflow="hidden"
          minHeight="100vh"
          margin="0 auto"
        >
          <Outlet />
        </Box>
        {/* main */}
      </Flex>
    </>
  );
};

export default MainLayout;
