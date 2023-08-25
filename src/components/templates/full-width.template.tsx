import type { HTMLAttributes } from 'react';
import React from 'react';

interface FullWidthTemplateProps {}

type Props = React.PropsWithChildren<FullWidthTemplateProps> & HTMLAttributes<HTMLElement>;

const FullWidthTemplate = ({ children, ...rest }: Props) => {
    React.useEffect(() => {
        const rootEl = document.getElementById('root');
        const footerEl = document.getElementById('footer');

        const getPureWidth = () => {
            rootEl.style.maxWidth = '100vw';
            footerEl.style.maxWidth = '1080px';
            footerEl.style.margin = 'auto';
        };

        const clearPureWidth = () => {
            rootEl.style.maxWidth = '1080px';
            footerEl.style.maxWidth = '100%';
            footerEl.style.margin = '0';
        };
        window.scrollTo(0, 0);
        getPureWidth();

        return () => {
            clearPureWidth();
        };
    }, []);

    return <>{children}</>;
};
export default FullWidthTemplate;
