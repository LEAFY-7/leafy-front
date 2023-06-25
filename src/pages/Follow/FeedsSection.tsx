import { RootState } from '@redux/store';
import { useSelector } from 'react-redux';

import Box from '@components/atoms/Box';
import Feed from '@components/organisms/Feed';

import Review from '@components/organisms/Review';
import feedDetail from '../../db/feedDetail.json';

const FeedSections = () => {
    const { reviewShow } = useSelector((state: RootState) => state.toggle);
    const { reviewList } = useSelector((state: RootState) => state.user);

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
                    {reviewList.map((review, index) => (
                        <Review key={index} variant="people" {...review} />
                    ))}
                </Box>
            )}
        </>
    );
};

export default FeedSections;
