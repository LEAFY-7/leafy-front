import React, { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

import Header from "@components/organisms/Header";
import SideNavigation from "@components/organisms/Navigation/side-navigation";
import MonoTemplate from "@components/templates/mono-template";
import DiTemplate from "@components/templates/di-template";
import TriTemplate from "@components/templates/tri-temp;ate";

interface LayoutProps {
  structure?: "mono" | "di" | "tri";
}

const DefaultLayout: FC<LayoutProps> = ({ structure = "mono" }) => {
  return (
    <>
      <Header userName="useName" />
      <MainLayout structure={structure} />
    </>
  );
};
export default DefaultLayout;

const MainLayout: FC<LayoutProps> = ({ structure }) => {
  switch (structure) {
    case "mono":
      return <MonoTemplate mainSection={<Outlet />} />;
    case "di": {
      return (
        <DiTemplate
          leftSection={<Outlet />}
          rightSection={<SideNavigation />}
        />
      );
    }
    case "tri": {
      return <TriTemplate />;
    }
    default: {
      return null;
    }
  }
};
