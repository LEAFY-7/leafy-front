import React from 'react';
import Div from 'components/atoms/Div/default-div';
import FeedBody from './feed-body';

const DefaultFeed = () => {
    return (
        <Div id="feed" size="xl" variant="default" direction="column" isBorder>
            <FeedBody />
        </Div>
    );
};

export default DefaultFeed;
