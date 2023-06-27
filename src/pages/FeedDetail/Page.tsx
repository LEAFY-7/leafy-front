import React from 'react';

import Box from '@components/atoms/Box/default-box';
import useWindowSize from '@hooks/useWindowSize';

import RightSection from './RightSection';
import LeftSection from './LeftSection';
import BottomSection from './BottomSection';
import Flex from '@components/atoms/Group/flex';
import DiTemplate from '@components/templates/di-template';

const FeedDetail = () => {
    const { width } = useWindowSize();

    return (
        <DiTemplate
            templateWidth="1400px"
            templateHeight={100}
            variant="1/3"
            leftSection={
                <>
                    <LeftSection />
                    <BottomSection />
                </>
            }
            rightSection={<RightSection />}
        />
    );
};

export default FeedDetail;
