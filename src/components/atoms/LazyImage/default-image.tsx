/** @jsxImportSource @emotion/react */
import { CSSProperties, Ref } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

interface IProps {
    src: string;
    alt: string;
    placeholderSrc?: string;
    style?: CSSProperties;
    className?: string;
    ref?: Ref<HTMLImageElement>;
}

const LazyImage = ({ src, alt, placeholderSrc, style, className, ref, ...rest }: IProps) => {
    return (
        <LazyLoadImage
            src={src}
            alt={alt}
            placeholderSrc={placeholderSrc}
            effect="opacity"
            style={style}
            className={className}
            ref={ref}
            {...rest}
        />
    );
};

export default LazyImage;
