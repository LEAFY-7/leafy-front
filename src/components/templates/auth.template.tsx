import type { HTMLAttributes } from 'react';
import React from 'react';
import styled from '@emotion/styled';

import { theme } from 'configs/ui.config';
import Div from 'components/atoms/Div/div';

interface AuthTemplateProps {
    isActive?: boolean;
}

type Props = React.PropsWithChildren<AuthTemplateProps> & HTMLAttributes<HTMLElement>;

const AuthTemplate = ({ isActive = false, children }: Props) => {
    React.useEffect(() => {
        const handleTimeoutId = (time: number = 100) => {
            return setTimeout(() => {
                const formEl = document.getElementById('form_wrapper');
                if (!formEl) return;
                formEl.style.opacity = '1';
            }, time);
        };

        handleTimeoutId(300);

        return () => clearTimeout(handleTimeoutId(300));
    }, [, isActive]);
    return (
        <Wrapper variant="translucent" direction="column">
            {children}
        </Wrapper>
    );
};
export default AuthTemplate;

const Wrapper = styled(Div.Default)`
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
