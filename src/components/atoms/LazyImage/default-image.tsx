/** @jsxImportSource @emotion/react */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useModal from 'hooks/useModal';
import { css } from '@emotion/react';

interface ImageStyletProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    width?: number;
    height?: number;
    variant?: 'square' | 'circle';
}
interface ImageProps {
    src?: string;
    alt?: string;
    placeholderSrc?: string;
}
type Props = ImageStyletProps & React.PropsWithChildren<ImageProps>;

const LazyImage = ({
    variant = 'circle',
    src,
    alt,
    placeholderSrc,
    width,
    height,
    ...rest
}: React.PropsWithChildren<Props>) => {
    const { isOpen, openModal, closeModal } = useModal();

    const imageStyle = css`
        border-radius: ${variant === 'circle' ? '50%' : '15px'};
    `;
    return (
        <LazyLoadImage
            src={src}
            alt={alt}
            placeholderSrc={placeholderSrc}
            width={width}
            height={height}
            css={imageStyle}
            {...rest}
        />
    );
};

export default LazyImage;
