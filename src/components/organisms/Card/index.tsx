import styled from '@emotion/styled';
import Linker from 'components/atoms/Linker/linker';
import pageUrlConfig from 'configs/pageUrl.config';
import { FeedDto } from 'dto/feed/feed.dto';
import 'swiper/swiper-bundle.min.css';

interface CardProps {
    item: FeedDto;
}

const Card = ({ item }: CardProps) => {
    return (
        <Linker href={`${pageUrlConfig.feedDetail}/${item.id}`}>
            {/* <FeedImage src={item.imgUrl[0].image} size={item.size} /> */}
        </Linker>
    );
};

export default Card;

const FeedImage = styled.img<{ size: string }>`
    width: 200px;
    height: ${({ size }) => (size === 'big' ? 480 : size === 'midium' ? 380 : 280)}px;
    border-radius: 280px;
    object-fit: cover;
`;
