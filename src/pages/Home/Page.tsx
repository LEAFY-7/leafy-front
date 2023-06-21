import Card from "@components/Card";
import styled from "@emotion/styled";
import { inject, observer } from "mobx-react";
import Feed from "../../db/feed.json";

function Home(props: any) {
  console.log(props);
  return (
    <div>
      <CardWrap>
        {Feed.data.map((item, key: number) => {
          return <Card item={item} key={`feed_card_${key}`} />;
        })}
      </CardWrap>
    </div>
  );
}

export default inject("mainViewModel")(observer(Home));

const CardWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
`;
