import React, { FC, ReactNode } from 'react';
import Box from '@components/atoms/Box/default-box';

interface Props {
    templateWidth: string | number;
    templateHeight?: string | number;
    mainSection: ReactNode;
}

const MonoTemplate: FC<Props> = ({ templateWidth = 'inherit', templateHeight = 'inherit', mainSection }) => {
    return (
        <Box as="main" width={templateWidth} height={templateHeight} margin="0 auto" padding="3rem">
            {mainSection}
        </Box>
    );
};

export default MonoTemplate;
