import styled from '@emotion/styled';
import DefaultFlex from './default-flex';
import { theme } from 'configs/ui.config';

const RowToColumnOnMobileSm = styled(DefaultFlex)`
    ${theme.mediaQuery.xsMobile} {
        flex-direction: column;
    }
    ${theme.mediaQuery.smMobile} {
        flex-direction: column;
    }

    ${theme.mediaQuery.mdMobile} {
        flex-direction: row;
    }

    ${theme.mediaQuery.lgMobile} {
        flex-direction: row;
    }

    ${theme.mediaQuery.smTablet} {
        flex-direction: row;
    }

    ${theme.mediaQuery.mdTablet} {
        flex-direction: row;
    }

    ${theme.mediaQuery.lgTablet} {
        flex-direction: row;
    }
    ${theme.mediaQuery.desktop} {
        flex-direction: row;
    }
`;

const RowToColumnOnMobileMd = styled(DefaultFlex)`
    ${theme.mediaQuery.xsMobile} {
        flex-direction: column;
    }
    ${theme.mediaQuery.smMobile} {
        flex-direction: column;
    }

    ${theme.mediaQuery.mdMobile} {
        flex-direction: column;
    }

    ${theme.mediaQuery.lgMobile} {
        flex-direction: row;
    }

    ${theme.mediaQuery.smTablet} {
        flex-direction: row;
    }

    ${theme.mediaQuery.mdTablet} {
        flex-direction: row;
    }

    ${theme.mediaQuery.lgTablet} {
        flex-direction: row;
    }
    ${theme.mediaQuery.desktop} {
        flex-direction: row;
    }
`;

const RowToColumnOnMobileLg = styled(DefaultFlex)`
    ${theme.mediaQuery.xsMobile} {
        flex-direction: column;
    }

    ${theme.mediaQuery.smMobile} {
        flex-direction: column;
    }

    ${theme.mediaQuery.mdMobile} {
        flex-direction: column;
    }

    ${theme.mediaQuery.lgMobile} {
        flex-direction: column;
    }

    ${theme.mediaQuery.smTablet} {
        flex-direction: row;
    }

    ${theme.mediaQuery.mdTablet} {
        flex-direction: row;
    }

    ${theme.mediaQuery.lgTablet} {
        flex-direction: row;
    }
    ${theme.mediaQuery.desktop} {
        flex-direction: row;
    }
`;

/**
 * 테블릿 환경일 때, direction을 row -> column 변경
 */
const RowToColumnOnTabletSm = styled(DefaultFlex)`
    ${theme.mediaQuery.xsMobile} {
        flex-direction: column;
    }
    ${theme.mediaQuery.smMobile} {
        flex-direction: column;
    }

    ${theme.mediaQuery.mdMobile} {
        flex-direction: column;
    }

    ${theme.mediaQuery.lgMobile} {
        flex-direction: column;
    }

    ${theme.mediaQuery.smTablet} {
        flex-direction: column;
    }

    ${theme.mediaQuery.mdTablet} {
        flex-direction: row;
    }

    ${theme.mediaQuery.lgTablet} {
        flex-direction: row;
    }
    ${theme.mediaQuery.desktop} {
        flex-direction: row;
    }
`;
const RowToColumnOnTabletMd = styled(DefaultFlex)`
    ${theme.mediaQuery.xsMobile} {
        flex-direction: column;
    }
    ${theme.mediaQuery.smMobile} {
        flex-direction: column;
    }

    ${theme.mediaQuery.mdMobile} {
        flex-direction: column;
    }

    ${theme.mediaQuery.lgMobile} {
        flex-direction: column;
    }

    ${theme.mediaQuery.smTablet} {
        flex-direction: column;
    }

    ${theme.mediaQuery.mdTablet} {
        flex-direction: column;
    }

    ${theme.mediaQuery.lgTablet} {
        flex-direction: row;
    }
    ${theme.mediaQuery.desktop} {
        flex-direction: row;
    }
`;
const RowToColumnOnTabletLg = styled(DefaultFlex)`
    ${theme.mediaQuery.xsMobile} {
        flex-direction: column;
    }
    ${theme.mediaQuery.smMobile} {
        flex-direction: column;
    }

    ${theme.mediaQuery.mdMobile} {
        flex-direction: column;
    }

    ${theme.mediaQuery.lgMobile} {
        flex-direction: column;
    }

    ${theme.mediaQuery.smTablet} {
        flex-direction: column;
    }

    ${theme.mediaQuery.mdTablet} {
        flex-direction: column;
    }

    ${theme.mediaQuery.lgTablet} {
        flex-direction: column;
    }
    ${theme.mediaQuery.desktop} {
        flex-direction: row;
    }
`;

const TextFieldFlexWrapper = styled(DefaultFlex)`
    ${theme.mediaQuery.xsMobile} {
        width: 100%;
    }
    ${theme.mediaQuery.smMobile} {
        width: 100%;
    }
    ${theme.mediaQuery.mdMobile} {
        width: 100%;
    }
    ${theme.mediaQuery.lgMobile} {
        width: 300px;
    }
    ${theme.mediaQuery.smTablet} {
        width: 400px;
    }
    ${theme.mediaQuery.mdTablet} {
        width: 300px;
    }
`;

const Flex = {
    Default: DefaultFlex,
    RowToColumnOnMobileSm,
    RowToColumnOnMobileMd,
    RowToColumnOnMobileLg,
    RowToColumnOnTabletSm,
    RowToColumnOnTabletMd,
    RowToColumnOnTabletLg,
    TextFieldFlexWrapper,
};

export default Flex;
