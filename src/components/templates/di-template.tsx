import { ReactNode } from 'react';
import Box from 'components/atoms/Box/default-box';
import templateStyle from './template.style';

interface Props {
    variant?: '1/1' | '1/2' | '1/3' | '1/4';
    leftSection: ReactNode;
    rightSection: ReactNode;
}

const DiTemplate = ({ variant = '1/1', leftSection, rightSection }: Props) => {
    const { leftWidth, rightWidth, leftHeight, rightHeight } = templateStyle.variantStyles.di[variant];

    return (
        <Box
            as="main"
            display="flex"
            justifyContent="center"
            width={100}
            height={100}
            minHeight="100vh"
            margin="0 auto"
            padding="3rem"
        >
            <Box as="section" width={leftWidth} height={leftHeight} marginRight={10}>
                {leftSection}
            </Box>
            <Box as="section" width={rightWidth} height={rightHeight} marginLeft={10}>
                {rightSection}
            </Box>
        </Box>
    );
};

export default DiTemplate;
