import type { HTMLAttributes } from 'react';
import React from 'react';

interface PageWrapperProps {}

type Props = React.PropsWithChildren<PageWrapperProps> & HTMLAttributes<HTMLElement>;

function PageWrapper({ children }: Props) {
    React.useEffect(() => {}, []);
    return <>{children}</>;
}

export default PageWrapper;
