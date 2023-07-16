import styled from '@emotion/styled';
import { FeedDto } from 'dto/feed/feed.dto';
import 'swiper/swiper-bundle.min.css';

interface CardProps {
    item: FeedDto;
}

const Card = ({ item }: CardProps) => {
    return <FeedImage src={item.imgUrl} size={item.size} />;
    /* <Styled.ThumbImage src={item.imgUrl} alt="" />
            <Styled.TitleBox>
                <p>{item.title}</p>
            </Styled.TitleBox>
            <Styled.AuthorBox>
                <Styled.UserProfileImage src={item.author.profile} alt="" />
                <p>{item.id}</p>
            </Styled.AuthorBox>
            <Styled.TagBox>
                {item.tag?.map((tag: string, key: number) => {
                    return <p key={key}>{`#${tag}`}</p>;
                })}
            </Styled.TagBox> */
};

export default Card;

const FeedImage = styled.img<{ size: string }>`
    width: 280px;
    height: ${({ size }) => (size === 'big' ? 680 : size === 'midium' ? 602 : 520)}px;
    border-radius: 280px;
    object-fit: cover;
`;
