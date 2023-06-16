import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Box from "@components/ui/Box";
import Flex from "@components/ui/Flex";
import SideNavigation from "@components/SideNavigation";
import Header from "@components/Header";

const allowSideNavigationList = ["follow", "post", "chat", "user", "mypage"];

const MainLayout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Flex display="flex" direction="column">
        {/* Header */}
        <Header userName="useName" />
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
          {allowSideNavigationList.includes(pathname.split("/")[1]) && (
            <SideNavigation />
          )}
        </Box>
        {/* main */}
      </Flex>
    </>
  );
};

export default MainLayout;
