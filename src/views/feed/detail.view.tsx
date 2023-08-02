import { keyframes } from '@emotion/css';
import styled from '@emotion/styled';
import LazyImage from 'components/atoms/LazyImage/default-image';
import UserProfile from 'components/organisms/Profile/user-profile';
import PageContainer from 'components/templates/page-container';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { observer } from 'mobx-react';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import SwiperEventType, { FreeMode, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import FeedViewModel from 'viewModel/feed/feed.viewModel';

/**
 * 피드 상세보기
 */
const FeedDetailView = () => {
    const feedViewModel: FeedViewModel = useViewModel(ViewModelName.FEED);
    const [swiperPage, setSwiperPage] = useState<number>(0);
    const [isMove, setIsMove] = useState<boolean>(false);
    const { id } = useParams();
    const swiperRef = useRef();

    useEffect(() => {
        feedViewModel.getMe();
        feedViewModel.getDetail(+id);
    }, []);

    const handleSlide = (swiper: SwiperEventType) => {
        setIsMove(true);
        setTimeout(() => {
            setSwiperPage(swiper.realIndex);
            setIsMove(false);
        }, 400);
        console.log(swiperRef);
    };

    const getSlideImage = (position: number): string => {
        const positionIndex = swiperPage + position;
        const imageIndex = positionIndex % feedViewModel.detail.imgUrl.length;
        return feedViewModel.detail.imgUrl[imageIndex];
    };

    return (
        <PageContainer>
            <UserProfile data={feedViewModel.detail.author} />
            <ImageWrap>
                <SwiperWrap
                    modules={[Navigation, FreeMode]}
                    slidesPerView={1}
                    spaceBetween={16}
                    navigation
                    onSlideChange={handleSlide}
                    loop
                    imageLength={feedViewModel.detail.imgUrl.length}
                    ref={swiperRef}
                >
                    {feedViewModel.detail.imgUrl.map((imageUrl: string, key: number) => {
                        return (
                            <SwiperSlide key={`feed_images_${key}`}>
                                <LazyImage src={imageUrl} alt="" style={{ transition: 'all 0.3s ease' }} />
                            </SwiperSlide>
                        );
                    })}
                    {/* <SwiperSlide></SwiperSlide> */}
                </SwiperWrap>
                {feedViewModel.detail.imgUrl.length >= 2 && (
                    <LazyImages
                        src={getSlideImage(1)}
                        alt="image"
                        style={{ width: '100%', height: '430px', objectFit: 'cover', borderRadius: '16px' }}
                        className="preview_cards"
                        isMove={isMove}
                        isNext={false}
                    />
                )}
                {feedViewModel.detail.imgUrl.length >= 3 && (
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
                        isNext={false}
                    />
                )}
            </ImageWrap>
            <Content.Title>{feedViewModel.detail.title}</Content.Title>
            <Content.Desc>{feedViewModel.detail.content}</Content.Desc>
        </PageContainer>
    );
};

export default observer(FeedDetailView);

const ImageChangeNext = keyframes`
    from {
        transform: translate(0);
        opacity:1;
    }

    to {
        transform: translate(-150%);
        opacity:0;
    }
`;

const ImageChangePrev = keyframes`
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

    & :nth-child(2) {
        width: 30%;
    }
    & :nth-child(3) {
        width: 20%;
    }
`;

const LazyImages = styled(LazyImage)<{ isMove: boolean; isNext: boolean }>`
    ${({ isMove, isNext }) => {
        if (isNext) {
            return isMove
                ? `animation: ${ImageChangeNext} 0.4s ease;`
                : `animation: ${ImageLoad} 1.8s 0.2s both;`;
        } else {
            return isMove
                ? `animation: ${ImageChangePrev} 0.4s ease;`
                : `animation: ${ImageLoad} 1.8s 0.2s both;`;
        }
    }}
`;

const SwiperWrap = styled(Swiper)<{ imageLength: number }>`
    position: relative;
    left: -16px;
    padding-left: 16px;
    width: 100%;
    max-width: 600px;
    margin: 0;
    height: 430px;

    & .swiper-slide,
    & span,
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 16px;
    }
`;

const Content = {
    Title: styled.h4`
        width: 100%;
        font-family: SUIT;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px;
        margin: 0;
    `,
    Desc: styled.p`
        font-family: SUIT;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
    `,
};
