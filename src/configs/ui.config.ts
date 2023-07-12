import { colors } from './style.config';

const uiConfigs = {
    light: {
        bgColor: colors.transparent,
        linearGradient: `linear-gradient(rgba(0, 0, 0, 0.4) 10%, transparent 100%)`,
        boxShadow: 'none',

        text: {
            whiteColor: colors.white,
            blackColor: colors.black,
            primaryColor: colors.green,
            secondary: colors.lgreen,
        },
        default: {
            borderColor: colors.grey,
            backgroundColor: colors.transparent,
        },
        primary: {
            borderColor: colors.primary,
            backgroundColor: colors.primary,
        },
        secondary: {
            borderColor: colors.secondary,
            backgroundColor: colors.secondary,
        },
        translucent: {
            borderColor: colors.transparent,
            backgroundColor: 'rgba(245, 245, 245, 0.3)',
        },
    },
    dark: {
        bgColor: colors.black,
        linearGradient: `linear-gradient(rgba(255, 255, 255, 0.4) 0%, transparent 100%)`,
        boxShadow: 'inset 0px 0px 5px 5px rgba(255, 255, 255, 0.1)',

        text: {
            whiteColor: colors.black,
            blackColor: colors.white,
            primaryColor: colors.white,
            secondary: colors.white_100,
        },
        default: {
            borderColor: colors.gray_100,
            backgroundColor: colors.transparent,
        },
        primary: {
            borderColor: colors.white_300,
            backgroundColor: colors.white,
        },
        secondary: {
            borderColor: colors.white_300,
            backgroundColor: colors.white,
        },
        translucent: {
            borderColor: colors.transparent,
            backgroundColor: 'rgba(35, 35, 35, 0.3)',
        },
    },
};

export default uiConfigs;
