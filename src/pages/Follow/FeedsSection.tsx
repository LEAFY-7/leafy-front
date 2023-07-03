import React from 'react';
import Box from 'components/atoms/Box/default-box';
import Feed from 'components/organisms/Feed';

import Review from 'components/organisms/Review';
import feedDetail from 'db/feedDetail.json';
import review from 'db/review.json';

const FeedSections = () => {
    const reviewShow = true;
    return (
        <>
            <Feed
                id={feedDetail?.id!}
                author={feedDetail?.author}
                imgs={feedDetail.imgs}
                title={feedDetail.title}
                desc={feedDetail.desc}
                tag={feedDetail.tag}
            />
            {reviewShow && (
                <Box borderWidth={1} marginTop={10} height={100}>
                    <Review variant="me" author={feedDetail.author!} id={feedDetail.id!} />
                    {review.data.map((review, index) => (
                        <Review key={index} variant="people" {...review} />
                    ))}
                </Box>
            )}
        </>
    );
};

export default FeedSections;
