import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Box from "@components/atoms/Box";
import Flex from "@components/atoms/Group/flex";
import Header from "@components/organisms/Header";
import SideNavigation from "@components/organisms/Navigation/side-navigation";
import menuConfig from "@configs/menu.config";

const DefaultLayout = () => {
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
          {menuConfig.allowSideNavigationList.includes(
            pathname.split("/")[1]
          ) && <SideNavigation />}
        </Box>
        {/* main */}
      </Flex>
    </>
  );
};

export default DefaultLayout;
