import { ReactNode } from 'react';
import Box from 'components/atoms/Box/default-box';

interface Props {
    mainSection: ReactNode;
}

const MonoTemplate = ({ mainSection }: Props) => {
    return (
        <Box as="main" width={100} height={100} minHeight="100vh" padding="3rem">
            {mainSection}
        </Box>
    );
};

export default MonoTemplate;
