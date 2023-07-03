import React, { PropsWithChildren, ReactNode } from 'react';
import Box from 'components/atoms/Box/default-box';
import templateStyle from './template.style';
import Flex from 'components/atoms/Group/flex';

interface Props {
    variant?: '1/1/1' | '1/2/1' | '1/3/1' | '1/4/1' | '2/4/1';
    leftSection: ReactNode;
    middleSection: ReactNode;
    rightSection: ReactNode;
}

const TriTemplate = ({ variant = '1/1/1', leftSection, middleSection, rightSection }: Props) => {
    const { leftWidth, middleWidth, rightWidth, leftHeight, middleHeight, rightHeight } =
        templateStyle.variantStyles.tri[variant];

    return (
        <Box
            as="main"
            display="flex"
            justifyContent="center"
            width="100vw"
            minHeight="100vh"
            margin="0 auto"
            padding="3rem"
        >
            <Box as="section" width={leftWidth} height={leftHeight}>
                {leftSection}
            </Box>
            <Box as="section" width={middleWidth} height={middleHeight}>
                {middleSection}
            </Box>
            <Box as="section" width={rightWidth} height={rightHeight}>
                {rightSection}
            </Box>
        </Box>
    );
};

export default TriTemplate;
