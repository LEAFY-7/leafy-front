/** @jsxImportSource @emotion/react */
import { CSSProperties } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface IProps {
    src: string;
    alt: string;
    placeholderSrc?: string;
    style?: CSSProperties;
}

const LazyImage = ({ src, alt, placeholderSrc, style }: IProps) => {
    return <LazyLoadImage src={src} alt={alt} placeholderSrc={placeholderSrc} style={style} />;
};

export default LazyImage;
