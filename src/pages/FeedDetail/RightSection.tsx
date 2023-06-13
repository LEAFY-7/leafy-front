import React from "react";
import { SwiperSlide } from "swiper/react";
import CustomSiper from "@components/CustomSwiper";
import Box from "@components/ui/Box";
import Image from "@components/ui/Image";
import FeedData from "../../db/feed.json";

const RightSection = () => {
  return (
    <>
      <Box radius={0} height={100} overflow="hidden" direction="column">
        <CustomSiper
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
        </CustomSiper>
      </Box>
    </>
  );
};

export default RightSection;
