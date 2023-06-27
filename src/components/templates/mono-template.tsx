import React, { FC, ReactNode } from 'react';
import Box from '@components/atoms/Box/default-box';

interface Props {
    mainSection: ReactNode;
}

const MonoTemplate: FC<Props> = ({ mainSection }) => {
    return (
        <Box as="section" overflow="hidden" minHeight="100vh">
            {mainSection}
        </Box>
    );
};

export default MonoTemplate;
