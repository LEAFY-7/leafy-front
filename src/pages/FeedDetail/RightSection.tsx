import React from "react";
import { SwiperSlide } from "swiper/react";
import CustomSwiper from "@components/CustomSwiper";
import Box from "@components/atoms/Box";
import Image from "@components/atoms/Image";
import FeedData from "../../db/feed.json";

const RightSection = () => {
  return (
    <>
      <Box radius={0} height={100} overflow="hidden" direction="column">
        <CustomSwiper
          width="100%"
          height="812px"
          direction="vertical"
          slidesPerView={3}
          centeredSlides={false}
          navigation={false}
          pagiNationView={false}
        >
          {FeedData.data.map((feed, index) => (
            <SwiperSlide key={index}>
              <Image
                src={feed.imgUrl}
                alt={`이미지-${index}`}
                variant="default"
              />
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </Box>
    </>
  );
};

export default RightSection;
