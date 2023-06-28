import React, { CSSProperties } from 'react';
import styled from '@emotion/styled';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

type Direction = 'horizontal' | 'vertical';

interface CustomSiperProps {
    width?: CSSProperties['width'];
    height?: CSSProperties['height'];
    direction?: Direction;
    slidesPerView: number;
    centeredSlides?: boolean;
    navigation?: boolean;
    pagiNationView?: boolean;
    pagiNationClick?: boolean;
    addStyle?: boolean;
}

const CustomSiper = ({
    width = 'auto',
    height = 'auto',
    slidesPerView = 1,
    centeredSlides = true,
    direction = 'horizontal',
    navigation = true,
    pagiNationView = true,
    pagiNationClick = true,
    addStyle = true,
    children,
}: React.PropsWithChildren<CustomSiperProps>) => {
    return (
        <>
            {addStyle && (
                <Wrapper direction={direction}>
                    <Swiper
                        direction={direction}
                        slidesPerView={slidesPerView}
                        centeredSlides={centeredSlides}
                        grabCursor={true}
                        spaceBetween={10}
                        pagination={{
                            enabled: pagiNationView,
                            clickable: pagiNationClick,
                        }}
                        navigation={navigation}
                        modules={[Navigation, Pagination]}
                        style={{ width, height }}
                    >
                        {children}
                    </Swiper>
                </Wrapper>
            )}
            {!addStyle && (
                <Swiper
                    direction={direction}
                    slidesPerView={slidesPerView}
                    centeredSlides={centeredSlides}
                    grabCursor={true}
                    spaceBetween={10}
                    pagination={{
                        enabled: pagiNationView,
                        clickable: pagiNationClick,
                    }}
                    navigation={navigation}
                    // modules={[Navigation, Pagination]}
                    style={{ width, height }}
                >
                    {children}
                </Swiper>
            )}
        </>
    );
};
export default CustomSiper;

const Wrapper = styled.div<{ direction: Direction }>`
    .swiper-slide {
        width: 100%;
        opacity: 0.6;
        padding: 2rem;
    }
    .swiper-slide-active {
        opacity: 1;
    }

    .swiper-pagination-bullet {
        width: 50px;
        border-radius: 0;
        background-color: ${({ theme }) => theme.colors.gray};
        border: solid;
        border-width: 1px;
        border-color: ${({ theme }) => theme.colors.black};
    }

    & .swiper-button-next,
    & .swiper-button-prev {
        width: 50px;
        height: 50px;
        border: solid;
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.black};
        &::after {
            font-size: 1rem;
        }
    }

    & .swiper {
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
`;
