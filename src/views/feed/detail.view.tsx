import { keyframes } from '@emotion/css';
import styled from '@emotion/styled';
import LazyImage from 'components/atoms/LazyImage/default-image';
import UserProfile from 'components/organisms/Profile/user-profile';
import PageContainer from 'components/templates/page-container';
import { CommentDto } from 'dto/feed/comment.dto';
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
        // feedViewModel.getMe();
        feedViewModel.getDetail(+id);
    }, []);

    const handleSlidePage = (swiper: SwiperEventType) => {
        setIsMove(true);
        setTimeout(() => {
            setSwiperPage(swiper.realIndex);
            setIsMove(false);
        }, 0.8);
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
                    onSlideChange={handleSlidePage}
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
                    />
                )}
            </ImageWrap>
            <Content.Title>{feedViewModel.detail.title}</Content.Title>
            <Content.Desc>{feedViewModel.detail.content}</Content.Desc>
            <Content.IconWrap>
                <div>
                    <Content.Icon />
                    <Content.Desc>999+</Content.Desc>
                </div>
                <div>
                    <Content.Icon />
                    <Content.Desc>999+</Content.Desc>
                </div>
                <div>
                    <Content.Icon />
                </div>
            </Content.IconWrap>
            <Comment.Wrap>
                <UserProfile data={feedViewModel.detail.author} style={{ width: '24px', height: '24px' }} />
                <input value="댓글입력" onChange={() => {}} />
                {feedViewModel.commentList.map((comment: CommentDto, key: number) => {
                    return (
                        <div key={`comment_${key}`}>
                            <UserProfile
                                data={feedViewModel.detail.author}
                                style={{ width: '24px', height: '24px' }}
                            />
                            <p>{comment.content}</p>
                        </div>
                    );
                })}
            </Comment.Wrap>
        </PageContainer>
    );
};

export default observer(FeedDetailView);

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

const SwiperWrap = styled(Swiper)<{ imageLength: number }>`
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

    ${({ imageLength }) => {
        switch (imageLength) {
            case 1:
                return `width: 100%;`;

            case 2:
                return `width: 60%;`;

            default:
                return `width: 50%;
                max-width: 600px;`;
        }
    }}
`;

const Content = {
    Title: styled.h4`
        width: 100%;
        font-family: SUIT;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px;
        text-align: center;
        margin: 0;
    `,
    Desc: styled.p`
        font-family: SUIT;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 2;
    `,
    IconWrap: styled.div`
        margin: 0;
        margin-left: auto;
        width: 200px;
        height: 24px;
        display: flex;
        align-items: center;
        gap: 16px;

        & div {
            display: flex;
            align-items: center;
            gap: 8px;
            & p {
                height: 18px;
            }
        }

        & * {
            font-size: 14px;
        }
    `,
    Icon: styled.div`
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: red;
    `,
};

const Comment = {
    Wrap: styled.div`
        width: 100%;
        background: #fafafa;
        border-radius: 8px;
        padding: 8px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    `,
};
