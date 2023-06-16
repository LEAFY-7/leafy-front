import React from "react";
import { SwiperSlide } from "swiper/react";

import CustomSiper from "@components/CustomSwiper";
import Box from "@components/ui/Box";
import Typography from "@components/ui/Typograph";
import Image from "@components/ui/Image";
import { routesGen } from "@routes/router";
import followList from "../../db/follow.json";

const FollowUserList = () => {
  return (
    <CustomSiper
      slidesPerView={5}
      centeredSlides={false}
      navigation={false}
      pagiNationView={false}
      addStyle={false}
      width="100%"
      height="max-content"
    >
      {[...followList.data].map((follow, index) => (
        <SwiperSlide key={index}>
          <Box
            className="slide-item-wrapper"
            display="flex"
            direction="column"
            alignItems="center"
            justifyContent="center"
            overflow="hidden"
            width={100}
            height={100}
          >
            <Image
              src={follow.author._imgUrl}
              alt={`이미지-${index}`}
              variant="icon_md"
            />

            <Typography to={routesGen.userFeed(follow.author.displayName)}>
              {follow.author.displayName}
            </Typography>
          </Box>
        </SwiperSlide>
      ))}
    </CustomSiper>
  );
};

export default FollowUserList;
