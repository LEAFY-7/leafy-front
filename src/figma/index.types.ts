import global from './global.json';
import typography from './typography.json';

export const TokenGlobal = {
    green: global.green,
    lgreen: global.lgreen,
    white: global.white,
    lgrey: global.lgrey,
    grey: global.grey,
    black: global.black,
    red: global.red,
    yellow: global.yellow,
    blossom: global.blossom,
    'small-shadow': global['small-shadow'],
    'big-shadow': global['big-shadow'],
    shadow: global.shadow,
    show: global.show,
    hide: global.hide,
} as const;

export const TokenGlobalColorList = [
    TokenGlobal.green,
    TokenGlobal.lgreen,
    TokenGlobal.black,
    TokenGlobal.blossom,
    TokenGlobal.green,
    TokenGlobal.grey,
    TokenGlobal.red,
    TokenGlobal.yellow,
    TokenGlobal.white,
] as const;

export const TokenGlobalBoxShadowList = {
    sm: TokenGlobal['small-shadow'].value,
    lg: TokenGlobal['big-shadow'].value,
} as const;

export const TokenTypography = {
    h1: typography.h1,
    h2: typography.h2,
    h3: typography.h3,
    body1: typography.body1,
    body2: typography.body2,
    body3: typography.body3,
} as const;

export const TokenTypographyListType = [
    TokenTypography.h1,
    TokenTypography.h2,
    TokenTypography.h3,
    TokenTypography.body1,
    TokenTypography.body2,
    TokenTypography.body3,
] as const;

const TokenTextarea = {};

export type TokeGlobalType = typeof TokenGlobal;
export type TokenGlobalExceptColorType = 'big-shadow' | 'shadow' | 'small-shadow' | 'show' | 'hide';
export type TokenGlobalOnlyColor = Omit<TokeGlobalType, TokenGlobalExceptColorType>;
export type TokenGlobalOnlyColorDescription = 'primary' | 'secondary' | 'basic' | 'semantic' | 'chat bg';
export type TokenTypographyKeyType = 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'body3';
export function colorSelector(key, token) {
    return token.find((t) => t.description === key).value;
}
