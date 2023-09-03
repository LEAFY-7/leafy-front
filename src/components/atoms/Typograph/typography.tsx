import styled from '@emotion/styled';
import { theme } from 'configs/ui.config';
import DefaultTypography from './default-typography';

const ResponsiveSize = styled(DefaultTypography)`
    ${theme.mediaQuery.mdMobile} {
        font-size: ${theme.fontSize.md};
    }
    ${theme.mediaQuery.mdTablet} {
        font-size: ${theme.fontSize.lg};
    }
    ${theme.mediaQuery.desktop} {
        font-size: ${theme.fontSize.xxl};
    }
`;

const Typography = {
    Default: DefaultTypography,
    ResponsiveSize: ResponsiveSize,
};

export default Typography;
