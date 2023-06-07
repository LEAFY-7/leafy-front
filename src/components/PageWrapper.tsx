import React from "react";

import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  state: string;
}

const PageWrapper = ({ state, children }: React.PropsWithChildren<Props>) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <>{children}</>;
};

export default PageWrapper;
