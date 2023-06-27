import React from 'react';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface SizeCompositionParams<T extends Size> {
    size: T;
    sizeBox: { [key in Size]: any };
}

const useSizeComposition = <T extends Size>({ size, sizeBox }: SizeCompositionParams<T>) => {
    switch (size) {
        case 'xs': {
            break;
        }
        case 'sm': {
            // 'sm' 사이즈에 대한 처리
            break;
        }
        case 'md': {
            // 'md' 사이즈에 대한 처리
            break;
        }
        case 'lg': {
            // 'lg' 사이즈에 대한 처리
            break;
        }
        case 'xl': {
            // 'xl' 사이즈에 대한 처리
            break;
        }
        default: {
            // 기본 처리
            break;
        }
    }
};

export default useSizeComposition;
