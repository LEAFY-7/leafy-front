import React from "react";

import { routesGen } from "@routes/router";
import Box from "@components/atoms/Box";
import RectangleButton from "@components/atoms/Button/rectangle-button";
import menuConfig from "@configs/menu.config";

const SideNavigation = () => {
  return (
    <Box
      radius={0}
      height={100}
      overflow="hidden"
      display="flex"
      direction="column"
      paddingTop={40}
      marginLeft={10}
    >
      {menuConfig.sideMenuList.map(({ id, name, state, page }, index) =>
        page ? (
          <RectangleButton key={`${id}-$${index}`} variant="default">
            {name}
          </RectangleButton>
        ) : state ? (
          <RectangleButton
            key={`${id}-$${index}`}
            to={routesGen.userFeed("a")}
            variant="default"
          >
            {name}
          </RectangleButton>
        ) : (
          <RectangleButton
            key={`${id}-$${index}`}
            to={routesGen[id as ButtonList["id"]] as string}
            variant="default"
          >
            {name}
          </RectangleButton>
        )
      )}
    </Box>
  );
};

export default SideNavigation;

type ButtonList = {
  id: "userFeed" | "follow" | "chat" | "post" | "myPage" | "setting" | "auth";
};
