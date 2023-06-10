import React from "react";
import { Outlet } from "react-router-dom";

import Box from "@components/ui/Box";

const MainLayout = () => {
  return (
    <>
      <Box display="flex" minHeight="100vh">
        {/* Header */}

        {/* Header */}
        {/* main */}
        <Box as="main" display="flex" overflow="hidden" minHeight="100vh">
          <Outlet />
        </Box>
        {/* main */}
      </Box>
    </>
  );
};

export default MainLayout;
