import React from 'react';
import Div from '@components/atoms/Div/default-div';
import FeedHeader from './feed-header';
import FeedBody from './feed-body';
import FeedFooter from './feed-footer';

const DefaultFeed = () => {
    return (
        <Div id="feed" size="xl" variant="default" direction="column" isBorder>
            <FeedHeader />
            <FeedBody />
            <FeedFooter />
        </Div>
    );
};

export default DefaultFeed;
