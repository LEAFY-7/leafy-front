import React, { useState } from "react";
import { AiOutlineMore, AiOutlineLink, AiOutlinePlus } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { SwiperSlide } from "swiper/react";
import CustomSiper from "@components/CustomSwiper";

import * as Styled from "./index.styles";
import Box from "@components/ui/Box";
import Button from "@components/ui/Button";
import Image from "@components/ui/Image";
import Flex from "@components/ui/Flex";
import Typography from "@components/ui/Typograph";

import "swiper/swiper-bundle.min.css";

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
      <Box borderWidth={1} radius={0} padding="20px" width={100} height={100}>
        <FeedHeader displayName={displayName} imgUrl={imgUrl} />
        <FeedContent imgs={imgs} title={title} desc={desc} tag={tag} />
      </Box>
    </>
  );
};

export default Feed;

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
  const [open, setOpen] = useState<boolean>(false);
  const [isLike, setIsLike] = useState<boolean>(false);

  let comment, likes;

  comment = 33333;
  likes = 3333;

  const handleLike = () => {
    setIsLike((prev) => !prev);
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
          <Button variant="default" leftIcon={<MdOutlineMessage />}>
            {comment > 999 ? "999+" : comment}
          </Button>
          <Button
            variant="default"
            onClick={handleLike}
            leftIcon={!isLike ? <FcLikePlaceholder /> : <FcLike />}
          >
            {likes > 999 ? "999+" : likes}
          </Button>

          <Button variant="default">
            <AiOutlineLink />
          </Button>
        </Flex>
      </Box>
      <Box>
        <Button
          variant="default"
          rightIcon={<AiOutlinePlus />}
          onClick={() => setOpen((prev) => !prev)}
          paddingY={20}
          paddingX={0}
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
    </Styled.Content>
  );
};
