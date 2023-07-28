import styled from '@emotion/styled';
import React from 'react';

const DefaultFooter = () => {
    return <FooterWrapper>푸터 영역</FooterWrapper>;
};

export default DefaultFooter;

const FooterWrapper = styled.footer`
    position: fixed;
    bottom: 0;
`;
