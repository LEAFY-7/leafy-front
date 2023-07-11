import global from './global.json';

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

export type TokeGlobalType = typeof TokenGlobal;
export type TokenGlobalExceptColorType = 'big-shadow' | 'shadow' | 'small-shadow' | 'show' | 'hide';
export type TokenGlobalOnlyColor = Omit<TokeGlobalType, TokenGlobalExceptColorType>;
export type TokenGlobalOnlyColorDescription = 'primary' | 'secondary' | 'basic' | 'semantic' | 'chat bg';

export function colorSelector(key, token) {
    return token.find((t) => t.description === key).value;
}
