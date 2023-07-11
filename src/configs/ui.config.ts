import { colors } from './style.config';

const uiConfigs = {
    light: {
        global: {
            bgColor: colors.white,
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
        default: {
            borderColor: colors.grey,
            background: colors.transparent,
            color: colors.black,
            hoverBorder: colors.transparent,
            hoverBackground: colors.transparent,
            hoverColor: colors.green,
        },
        grey: {
            borderColor: colors.gray_200,
            background: colors.gray_100,
            color: colors.black,
            hoverBorder: colors.gray_100,
            hoverBackground: colors.gray_100,
            hoverColor: colors.white,
        },
        green: {
            borderColor: colors.lgreen,
            background: colors.transparent,
            color: colors.lgreen,
            anotherColor: colors.green,
            focusBorder: colors.lgreen,
            foucsBackground: colors.lgreen,
            focusColor: colors.white,
            hoverBorder: colors.bgreen,
            hoverBackground: colors.bgreen,
            hoverColor: colors.white,
            activeBorder: colors.green,
            activeBackground: colors.green,
            activeColor: colors.white,
        },

        greenBorder: {
            borderColor: colors.lgreen,
            background: colors.transparent,
            color: colors.lgreen,
            focusBorder: colors.lgreen,
            foucsBackground: colors.lgreen,
            focusColor: colors.white,
            hoverBorder: colors.bgreen,
            hoverBackground: colors.white,
            hoverColor: colors.bgreen,
            activeBorder: colors.green,
            activeBackground: colors.green,
            activeColor: colors.white,
        },
    },
    dark: {
        global: {
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
                backgroundColor: colors.transparent,
            },
            secondary: {
                borderColor: colors.white_300,
                backgroundColor: colors.white,
            },
            translucent: {
                borderColor: colors.transparent,
                backgroundColor: 'rgba(10, 10, 10, 0.3)',
            },
        },
        default: {
            borderColor: colors.grey,
            background: colors.transparent,
            color: colors.white,
            hoverBorder: colors.gray_100,
            hoverBackground: colors.transparent,
            hoverColor: colors.green,
        },
        grey: {
            borderColor: colors.grey,
            background: colors.white,
            color: colors.black,
            hoverBorder: colors.green,
            hoverBackground: colors.bgreen,
            hoverColor: colors.white,
        },
        green: {
            borderColor: colors.green,
            background: colors.green,
            color: colors.gray_100,
            anotherColor: colors.gray_100,
            focusBorder: colors.lgreen,
            foucsBackground: colors.lgreen,
            focusColor: colors.white,
            hoverBorder: colors.bgreen,
            hoverBackground: colors.bgreen,
            hoverColor: colors.white,
            activeBorder: colors.green,
            activeBackground: colors.green,
            activeColor: colors.white,
        },

        greenBorder: {
            borderColor: colors.white,
            background: colors.transparent,
            color: colors.white,
            focusBorder: colors.lgreen,
            foucsBackground: colors.lgreen,
            focusColor: colors.white,
            hoverBorder: colors.bgreen,
            hoverBackground: colors.white,
            hoverColor: colors.bgreen,
            activeBorder: colors.green,
            activeBackground: colors.green,
            activeColor: colors.white,
        },
    },
};

export default uiConfigs;
