import React from 'react';
import PageContainer from 'components/templates/page-container';

const IntroView = () => {
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
        getPureWidth();

        return () => {
            clearPureWidth();
        };
    }, []);
    return <PageContainer>dd</PageContainer>;
};
export default IntroView;
