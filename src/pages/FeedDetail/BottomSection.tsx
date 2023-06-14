import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "@redux/store";

import Box from "@components/ui/Box";
import Review from "@components/Review";

import feedDetail from "../../db/feedDetail.json";

const BottomSection = () => {
  const { reviewShow } = useSelector((state: RootState) => state.toggle);
  const { reviewList } = useSelector((state: RootState) => state.user);

  return (
    <>
      {reviewShow && (
        <Box
          borderWidth={1}
          padding="5px"
          marginTop={10}
          width={100}
          height={100}
        >
          <Review
            variant="me"
            author={feedDetail.author!}
            id={feedDetail.id!}
          />
          {reviewList.map((review, index) => (
            <Review key={index} variant="people" {...review} />
          ))}
        </Box>
      )}
    </>
  );
};

export default BottomSection;
