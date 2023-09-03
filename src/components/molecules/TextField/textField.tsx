import styled from '@emotion/styled';
import DefaultTextField from './default-textField';
import { theme } from 'configs/ui.config';
import Flex from 'components/atoms/Group/flex';

export const AutTextFieldWrapper = styled(DefaultTextField.Wrapper)`
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
export const MyTextFieldWrapper = styled(DefaultTextField.Wrapper)`
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
export const FlexedTextFieldWrapper = styled(Flex.Default)``;

const ResponsiveTextFieldWrapper = {
    AUTH: AutTextFieldWrapper,
    MY: MyTextFieldWrapper,
};
export default ResponsiveTextFieldWrapper;
