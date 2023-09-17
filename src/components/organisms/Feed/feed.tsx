import { keyframes } from '@emotion/css';
import styled from '@emotion/styled';
import LazyImage from 'components/atoms/LazyImage/default-image';
import Linker from 'components/atoms/Linker/linker';
import pageUrlConfig from 'configs/pageUrl.config';
import { FeedDto } from 'dto/feed/feed.dto';
import FeedImageDto from 'dto/feed/feedImage.dto';
import { useRef, useState } from 'react';
import SwiperEventType, { FreeMode, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import UserProfile from '../Profile/user-profile';

interface IProps {
    data: FeedDto;
    isDetail?: boolean;
}

const Feed = ({ data, isDetail = false }: IProps) => {
    const [swiperPage, setSwiperPage] = useState<number>(0);
    const [isMove, setIsMove] = useState<boolean>(false);
    const swiperRef = useRef();

    const handleSlidePage = (swiper: SwiperEventType) => {
        setIsMove(true);
        setTimeout(() => {
            setSwiperPage(swiper.realIndex);
            setIsMove(false);
        }, 0.8);
    };

    const getSlideImage = (position: number): string => {
        const positionIndex = swiperPage + position;
        const imageIndex = positionIndex % data.images.length;
        return data.images[imageIndex].image;
    };

    return (
        <Container>
            <UserProfile data={data.author} />
            <Linker href={isDetail ? null : `${pageUrlConfig.feedDetail}/${data.id}`}>
                {data.images.length > 0 ? (
                    <ImageWrap>
                        <SwiperWrap
                            modules={[Navigation, FreeMode]}
                            slidesPerView={1}
                            spaceBetween={16}
                            navigation
                            onSlideChange={handleSlidePage}
                            loop
                            imagelength={data.images.length}
                            ref={swiperRef}
                        >
                            {data.images.map((imageUrl: FeedImageDto, key: number) => {
                                return (
                                    <SwiperSlide key={`feed_images_${key}`}>
                                        <LazyImage
                                            src={imageUrl.image}
                                            alt=""
                                            style={{ transition: 'all 0.3s ease' }}
                                        />
                                    </SwiperSlide>
                                );
                            })}
                        </SwiperWrap>
                        {data.images.length >= 2 && (
                            <LazyImages
                                src={getSlideImage(1)}
                                alt="image"
                                style={{
                                    width: '100%',
                                    height: '430px',
                                    objectFit: 'cover',
                                    borderRadius: '16px',
                                }}
                                className="preview_cards"
                                isMove={isMove}
                            />
                        )}
                        {data.images.length >= 3 && (
                            <LazyImages
                                src={getSlideImage(2)}
                                alt="image"
                                style={{
                                    width: '100%',
                                    height: '430px',
                                    objectFit: 'cover',
                                    borderRadius: '16px',
                                    marginLeft: '16px',
                                }}
                                className="preview_cards"
                                isMove={isMove}
                            />
                        )}
                    </ImageWrap>
                ) : (
                    <img src="" />
                )}
            </Linker>
        </Container>
    );
};

export default Feed;

const Container = styled.div``;

const ImageChange = keyframes`
    from {
        opacity:1;
    }

    to {
        opacity:0;
    }
`;

const ImageLoad = keyframes`
    from {
        opacity:0;
    }

    to {

        opacity:1;
    }
`;

const ImageWrap = styled.div`
    width: 100%;
    display: flex;

    &span:nth-child(1) {
        flex-shrink: 0;
        width: 30%;
    }
    &span:nth-child(2) {
        flex-shrink: 0;
        width: 20%;
    }
`;

const LazyImages = styled(LazyImage)<{ isMove: boolean }>`
    ${({ isMove }) =>
        isMove ? `animation: ${ImageChange} 0.8s ease;` : `animation: ${ImageLoad} 0.8s both;`}}
`;

const SwiperWrap = styled(Swiper)<{ imagelength: number }>`
    position: relative;
    flex-shrink: 0;
    left: -16px;
    height: 430px;
    margin: 0;

    & .swiper-slide,
    & span,
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 16px;
    }

    ${({ imagelength }) => {
        switch (imagelength) {
            case 1:
                return `width: 100%;`;

            case 2:
                return `width: 60%;`;

            default:
                return `width: 50%;
                max-width: 600px;`;
        }
    }}

    & .swiper-button-next,
    & .swiper-button-prev {
        color: black;
        background: #ffffff;
        opacity: 0.8;
        border-radius: 50%;
        overflow: hidden;
        width: 24px;
        height: 24px;

        &:hover {
            opacity: 1;
        }

        &::after {
            font-size: 16px;
            font-weight: 700;
        }
    }
`;
