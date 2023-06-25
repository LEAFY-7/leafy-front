import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  x?: number;
  y?: number;
}

const PageWrapper = ({
  x = 0,
  y = 0,
  children,
}: React.PropsWithChildren<Props>) => {
  React.useEffect(() => {
    window.scrollTo(x, y);
  }, []);

  return <>{children}</>;
};

export default PageWrapper;
