import React, { PropsWithChildren, ReactNode } from 'react';
import Box from '@components/atoms/Box/default-box';
import templateStyle from './template.style';

interface Props {
    variant?: '1/1' | '1/2' | '1/3' | '1/4';
    templateWidth: string | number;
    templateHeight?: string | number;
    leftSection: ReactNode;
    rightSection: ReactNode;
}

const DiTemplate: React.FC<Props> = ({
    variant = '1/1',
    templateWidth = 'inherit',
    templateHeight = 'inherit',
    leftSection,
    rightSection,
}) => {
    const { leftWidth, rightWidth, leftHeight, rightHeight } = templateStyle.variantStyles.di[variant];

    return (
        <Box
            as="main"
            display="flex"
            justifyContent="center"
            width={templateWidth}
            height={templateHeight}
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
