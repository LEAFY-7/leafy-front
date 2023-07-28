import styled from '@emotion/styled';
import LazyImage from 'components/atoms/LazyImage/default-image';
import UserProfile from 'components/organisms/Profile/user-profile';
import PageContainer from 'components/templates/page-container';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FreeMode, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import FeedViewModel from 'viewModel/feed/feed.viewModel';

/**
 * 피드 상세보기
 */
const FeedDetailView = () => {
    const feedViewModel: FeedViewModel = useViewModel(ViewModelName.FEED);
    const { id } = useParams();

    useEffect(() => {
        feedViewModel.getMe();
        feedViewModel.getDetail(+id);
    }, []);

    return (
        <PageContainer>
            <UserProfile data={feedViewModel.detail.author} />
            <SwiperWrap
                modules={[Pagination, Navigation, FreeMode]}
                slidesPerView={2}
                spaceBetween={16}
                pagination={{ clickable: true }}
                navigation
            >
                {feedViewModel.detail.imgUrl.map((imageUrl: string, key: number) => {
                    return (
                        <SwiperSlide key={`feed_images_${key}`}>
                            <LazyImage src={imageUrl} alt="" style={{ transition: 'all 0.3s ease' }} />
                        </SwiperSlide>
                    );
                })}
                <SwiperSlide></SwiperSlide>
            </SwiperWrap>
            <p>{feedViewModel.detail.title}</p>
            <p>{feedViewModel.detail.content}</p>
        </PageContainer>
    );
};

export default observer(FeedDetailView);

const SwiperWrap = styled(Swiper)`
    position: relative;
    left: -16px;
    padding: 0 16px;
    width: 100vw;
    max-width: 1200px;
    margin: 0;

    & .swiper-slide,
    & img {
        width: 160px;
        height: 500px;
        object-fit: cover;
        border-radius: 16px;
    }

    & .swiper-slide-active,
    & .swiper-slide-active img {
        width: 500px !important;
    }

    & .swiper-slide-next,
    & .swiper-slide-next img {
        width: 240px !important;
    }
`;
