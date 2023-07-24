import React from 'react';
import { SerializedStyles, Theme, useTheme } from '@emotion/react';

interface VariantState<T extends string> {
    variant: T;
    callback: { [key in T]: (theme: Theme) => SerializedStyles };
}

const useVariant = <T extends string>({ variant, callback }: VariantState<T>): SerializedStyles => {
    const theme = useTheme();
    return callback[variant](theme);
};

export default useVariant;
