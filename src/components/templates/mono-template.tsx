import React, { FC, ReactNode } from 'react';
import Box from 'components/atoms/Box/default-box';

interface Props {
    mainSection: ReactNode;
}

const MonoTemplate = ({ mainSection }: Props) => {
    return (
        <Box as="main" height="100vh" margin="0 auto" padding="3rem">
            {mainSection}
        </Box>
    );
};

export default MonoTemplate;
