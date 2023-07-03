import React from 'react';
import Box from 'components/atoms/Box/default-box';
import Review from 'components/organisms/Review';

import feedDetail from 'db/feedDetail.json';
import review from 'db/review.json';

const BottomSection = () => {
    return (
        <>
            {true && (
                <Box borderWidth={1} padding="5px" marginTop={10} width={100} height={100}>
                    <Review variant="me" author={feedDetail.author!} id={feedDetail.id!} />
                    {review.data.map((review, index) => (
                        <Review key={index} variant="people" {...review} />
                    ))}
                </Box>
            )}
        </>
    );
};

export default BottomSection;
