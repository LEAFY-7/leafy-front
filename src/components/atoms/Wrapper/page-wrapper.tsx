import type { HTMLAttributes } from 'react';
import React from 'react';

interface PageWrapperProps {}

type Props = React.PropsWithChildren<PageWrapperProps> & HTMLAttributes<HTMLElement>;

function PageWrapper({ children }: Props) {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return <>{children}</>;
}

export default PageWrapper;
