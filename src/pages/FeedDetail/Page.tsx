import React from 'react';

import Box from 'components/atoms/Box/default-box';
import useWindowSize from 'hooks/useWindowSize';

import RightSection from './RightSection';
import LeftSection from './LeftSection';
import BottomSection from './BottomSection';
import Flex from '@components/atoms/Group/flex';
import DiTemplate from 'components/templates/di-template';
import DefaultFeed from 'components/organisms/Feed/default-feed';

const FeedDetail = () => {
    const { width } = useWindowSize();

    return (
        <DiTemplate
            variant="1/3"
            leftSection={
                <>
                    <LeftSection />
                    <DefaultFeed />
                    <BottomSection />
                </>
            }
            rightSection={<RightSection />}
        />
    );
};

export default FeedDetail;
