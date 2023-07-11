import React from 'react';

import Box from 'components/atoms/Box/default-box';
import useWindowSize from 'hooks/useWindowSize';

import RightSection from './RightSection';
import LeftSection from './LeftSection';
import BottomSection from './BottomSection';
import Flex from 'components/atoms/Group/flex';
import DiTemplate from 'components/templates/di-template';
import Feed from 'components/organisms/Feed';
import Div from 'components/atoms/Div/default-div';

const FeedDetail = () => {
    const { width } = useWindowSize();

    return (
        <DiTemplate
            variant="1/3"
            leftSection={
                <Div id="feed_section" width="800px" height={100} direction="column">
                    <LeftSection />
                    {/* <Feed /> */}
                    <BottomSection />
                </Div>
            }
            rightSection={<RightSection />}
        />
    );
};

export default FeedDetail;
