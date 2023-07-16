import React from 'react';
import { SwiperSlide } from 'swiper/react';
import CustomSwiper from 'components/molecules/Carousel/CustomSwiper';

import { FeedDto } from 'dto/feed/feed.dto';
import Div from 'components/atoms/Div/default-div';
import FeedData from 'db/feed.json';

const RightSection = () => {
    return (
        <>
            <Div id={'recommend'}>
                <CustomSwiper
                    width="100%"
                    height="812px"
                    direction="vertical"
                    slidesPerView={3}
                    centeredSlides={false}
                    navigation={false}
                    pagiNationView={false}
                >
                    {FeedData?.data?.map((feed: FeedDto, index) => (
                        <SwiperSlide key={index}>{/* <Card item={feed} /> */}</SwiperSlide>
                    ))}
                </CustomSwiper>
            </Div>
        </>
    );
};

export default RightSection;
