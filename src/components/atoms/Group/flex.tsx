import styled from '@emotion/styled';
import DefaultFlex from './default-flex';
import { theme } from 'configs/ui.config';

/**
 * 테블릿 환경일 때, direction을 row -> column 변경
 */
const ParallelToHorizonOnTablet = styled(DefaultFlex)`
    ${theme.mediaQuery.mobile} {
        flex-direction: column;
    }
    ${theme.mediaQuery.tablet} {
        flex-direction: column;
    }
    ${theme.mediaQuery.desktop} {
        flex-direction: row;
    }
`;
/**
 * 모바일 환경일 때, direction을 row -> column 변경
 */
const ParallelToHorizonOnMobile = styled(DefaultFlex)`
    ${theme.mediaQuery.mobile} {
        flex-direction: column;
    }
    ${theme.mediaQuery.tablet} {
        flex-direction: row;
    }
    ${theme.mediaQuery.desktop} {
        flex-direction: row;
    }
`;

const Flex = {
    Default: DefaultFlex,
    ParallelToHorizonOnTablet: ParallelToHorizonOnTablet,
    ParallelToHorizonOnMobile: ParallelToHorizonOnMobile,
};

export default Flex;
