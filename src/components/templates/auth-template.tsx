import styled from '@emotion/styled';
import Div from 'components/atoms/Div/div';
import { theme } from 'configs/ui.config';
import type { HTMLAttributes } from 'react';
import React from 'react';

interface AuthTemplateProps {}

type Props = React.PropsWithChildren<AuthTemplateProps> & HTMLAttributes<HTMLElement>;

const AuthTemplate = ({ children }: Props) => {
    return (
        <WWrapper variant="translucent" direction="column">
            {children}
        </WWrapper>
    );
};
export default AuthTemplate;

const WWrapper = styled(Div.Default)`
    height: auto;
    padding-top: 24px;
    padding-bottom: 24px;

    ${theme.mediaQuery.smTablet} {
        width: 100%;
    }

    ${theme.mediaQuery.mdTablet} {
        width: 700px;
    }
`;
