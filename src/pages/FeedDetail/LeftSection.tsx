import React from "react";

import Feed from "@components/organisms/Feed";
import feedDetail from "../../db/feedDetail.json";

const LeftSection = () => {
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
    </>
  );
};

export default LeftSection;
