import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineMore, AiOutlineLink, AiOutlinePlus } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { SwiperSlide } from "swiper/react";
import CustomSiper from "@components/molecules/Carousel/CustomSwiper";

import * as Styled from "./index.styles";

import { setReviewShowState } from "@redux/feature/toggleStateSlice";

import Flex from "@components/atoms/Group/flex";
import Box from "@components/atoms/Box";
import Image from "@components/atoms/Image";
import Typography from "@components/atoms/Typograph";

import "swiper/swiper-bundle.min.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/store";
import Button from "@components/atoms/Button/rectangle-button";

const baseUrl = "http://localhost:3000";
type HeaderProps = {
  imgUrl?: string;
  displayName?: string;
};

interface ContentProps {
  imgs: string[];
  title?: string;
  desc?: string;
  tag?: string[];
}

interface FeedProps extends ContentProps {
  id?: string;
  author: HeaderProps;
}

const FeedHeader = ({ imgUrl, displayName }: HeaderProps) => {
  return (
    <Styled.Header>
      <Box width={100} display="flex" justifyContent="left" alignItems="center">
        {!imgUrl ? (
          <Styled.Empty />
        ) : (
          <Image src={imgUrl} alt="프로필 아이콘" variant={"icon_md"} />
        )}
        <Typography variant="BODY3" marginLeft={20}>
          {displayName}
        </Typography>
      </Box>
      <Button variant="default">
        <AiOutlineMore />
      </Button>
    </Styled.Header>
  );
};

const FeedContent = ({
  imgs,
  title,
  desc,
  tag: tagBox = [""],
}: React.PropsWithChildren<ContentProps>) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { reviewShow } = useSelector((state: RootState) => state.toggle);
  const [isLike, setIsLike] = useState<boolean>(false);
  const [likes, setLikes] = useState(999);
  let comment;

  comment = 33333;

  const handleCopyClipBoard = () =>
    navigator.clipboard.writeText(`${baseUrl}${location.pathname}`);

  const handleLike = () => {
    setIsLike((prev) => !prev);
    setLikes((prev) => prev + 1);
  };

  const handleReview = () => {
    dispatch(setReviewShowState(!reviewShow));
  };
  return (
    <Styled.Content>
      <CustomSiper
        slidesPerView={2}
        centeredSlides={false}
        width="100%"
        height="max-content"
      >
        {[...imgs].splice(0, 4).map((img, index) => (
          <SwiperSlide key={index}>
            <Image src={img} alt={`이미지-${index}`} variant="default" />
          </SwiperSlide>
        ))}
      </CustomSiper>
      <Typography variant="H2" marginBottom={20}>
        {title}
      </Typography>
      <Typography variant="BODY3" color="gray" style={{ fontWeight: 900 }}>
        {desc}
      </Typography>

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Flex>
          {[...tagBox]?.splice(0, 7).map(
            (tag, index) =>
              typeof tag !== undefined && (
                <Typography
                  key={index}
                  variant="BODY3"
                  color="green"
                  marginRight={10}
                  textAlign="center"
                >
                  #{tag}
                </Typography>
              )
          )}
        </Flex>
        <Flex>
          <Button
            variant="default"
            onClick={handleReview}
            leftIcon={<MdOutlineMessage />}
          >
            {comment > 999 ? "999+" : comment}
          </Button>
          <Button
            variant="default"
            onClick={handleLike}
            leftIcon={!isLike ? <FcLikePlaceholder /> : <FcLike />}
          >
            {likes > 999 ? "999+" : likes}
          </Button>

          <Button variant="default" onClick={handleCopyClipBoard}>
            <AiOutlineLink />
          </Button>
        </Flex>
      </Box>
      <FeedContentMore />
    </Styled.Content>
  );
};

const FeedContentMore = ({}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Box>
      <Button
        variant="default"
        rightIcon={<AiOutlinePlus />}
        onClick={() => setOpen((prev) => !prev)}
      >
        식물 기록 더보기
      </Button>
      {open && (
        <Flex direction="column">
          <Typography variant="BODY2" marginBottom={5}>
            학명
          </Typography>
          <Typography variant="BODY2" marginBottom={5}>
            별명
          </Typography>
          <Typography variant="BODY2" marginBottom={5}>
            온도
          </Typography>
          <Typography variant="BODY2" marginBottom={5}>
            습도
          </Typography>
          <Typography variant="BODY2" marginBottom={5}>
            물주기
          </Typography>
        </Flex>
      )}
    </Box>
  );
};

const Feed = ({
  id,
  author: { displayName, imgUrl },
  imgs = [""],
  title = "",
  desc = "",
  tag = [""],
}: FeedProps) => {
  return (
    <>
      <Box borderWidth={1} padding="20px" width={100} height={100}>
        <FeedHeader displayName={displayName} imgUrl={imgUrl} />
        <FeedContent imgs={imgs} title={title} desc={desc} tag={tag} />
      </Box>
    </>
  );
};

export default Feed;
