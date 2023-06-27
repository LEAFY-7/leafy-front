import Box from '@components/atoms/Box/default-box';
import { FeedDto } from 'dto/feed/feed.dto';
import 'swiper/swiper-bundle.min.css';
import * as Styled from './index.styles';

interface CardProps {
    item: FeedDto;
}

const Card = ({ item }: CardProps) => {
    return (
        <Box display="grid" direction="column" gap="10px" width="350px">
            <Styled.ThumbImage src={item.imgUrl} alt="" />
            <Styled.TitleBox>
                <p>{item.title}</p>
            </Styled.TitleBox>
            <Styled.AuthorBox>
                <Styled.UserProfileImage src={item.author.profile} alt="" />
                <p>{item.id}</p>
            </Styled.AuthorBox>
            <Styled.TagBox>
                {item.tag.map((tag: string, key: number) => {
                    return <p key={key}>{`#${tag}`}</p>;
                })}
            </Styled.TagBox>
        </Box>
    );
};

export default Card;
