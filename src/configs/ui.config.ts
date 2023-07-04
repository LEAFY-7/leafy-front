import { colors } from './style.config';

const uiConfigs = {
    light: {
        style: {
            linearGradient: `linear-gradient(rgba(0, 0, 0, 0.4) 10%, transparent 100%)`,
            boxShadow: 'none',

            text: {
                whiteColor: colors.white,
                blackColor: colors.black,
                primaryColor: colors.turquoise,
                secondary: colors.turquoise_50,
            },
            default: {
                borderColor: colors.gray_100,
                backgroundColor: colors.transparent,
            },
            primary: {
                borderColor: colors.turquoise_300,
                backgroundColor: colors.turquoise,
            },
            secondary: {
                borderColor: colors.turquoise_300,
                backgroundColor: colors.turquoise_50,
            },
            tertiary: {
                borderColor: colors.purple_100,
                backgroundColor: colors.purple,
            },
            quaternary: {
                borderColor: colors.navy_100,
                backgroundColor: colors.navy,
            },
            important: {
                borderColor: colors.white_300,
                backgroundColor: colors.red,
            },
        },
        default: {
            borderColor: colors.gray,
            background: colors.transparent,
            color: colors.black,
            hoverBorder: colors.transparent,
            hoverBackground: colors.transparent,
            hoverColor: colors.green,
        },
        gray: {
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
            anotherColor: colors.vigreen_900,
            focusBorder: colors.vert,
            foucsBackground: colors.vert,
            focusColor: colors.white,
            hoverBorder: colors.bgreen,
            hoverBackground: colors.bgreen,
            hoverColor: colors.white,
            activeBorder: colors.green,
            activeBackground: colors.green,
            activeColor: colors.white,
        },
        greenFill: {
            borderColor: colors.vigreen_800,
            background: colors.green,
            color: colors.white,
            focusBorder: colors.vert,
            foucsBackground: colors.vert,
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
            focusBorder: colors.vert,
            foucsBackground: colors.vert,
            focusColor: colors.white,
            hoverBorder: colors.bgreen,
            hoverBackground: colors.white,
            hoverColor: colors.bgreen,
            activeBorder: colors.green,
            activeBackground: colors.green,
            activeColor: colors.white,
        },
        red: {
            borderColor: colors.red,
            background: colors.red,
            color: colors.white,
            focusBorder: colors.red,
            foucsBackground: colors.red,
            focusColor: colors.white,
            hoverBorder: colors.tdred_600,
            hoverBackground: colors.tdred_600,
            hoverColor: colors.white,
            activeBorder: colors.tdred_900,
            activeBackground: colors.tdred_900,
            activeColor: colors.white,
        },
        normal: {
            color: colors.black,
            backgroundColor: colors.white,
            borderBottom: colors.green,
            overlayColor: 'rgba(0, 0, 0, 0.5)',
        },
    },
    dark: {
        style: {
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
            tertiary: {
                borderColor: colors.white_300,
                backgroundColor: colors.white,
            },
            quaternary: {
                borderColor: colors.white_300,
                backgroundColor: colors.white,
            },
            important: {
                borderColor: colors.white_300,
                backgroundColor: colors.red,
            },
        },
        default: {
            borderColor: colors.gray,
            background: colors.transparent,
            color: colors.white,
            hoverBorder: colors.gray_100,
            hoverBackground: colors.transparent,
            hoverColor: colors.green,
        },
        gray: {
            borderColor: colors.gray,
            background: colors.white,
            color: colors.black,
            hoverBorder: colors.green,
            hoverBackground: colors.bgreen,
            hoverColor: colors.white,
        },
        green: {
            borderColor: colors.vigreen_100,
            background: colors.vigreen_900,
            color: colors.gray_100,
            anotherColor: colors.gray_100,
            focusBorder: colors.vert,
            foucsBackground: colors.vert,
            focusColor: colors.white,
            hoverBorder: colors.bgreen,
            hoverBackground: colors.bgreen,
            hoverColor: colors.white,
            activeBorder: colors.green,
            activeBackground: colors.green,
            activeColor: colors.white,
        },
        greenFill: {
            borderColor: colors.vigreen_700,
            background: colors.vigreen_900,
            color: colors.white,
            focusBorder: colors.vert,
            foucsBackground: colors.vert,
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
            focusBorder: colors.vert,
            foucsBackground: colors.vert,
            focusColor: colors.white,
            hoverBorder: colors.bgreen,
            hoverBackground: colors.white,
            hoverColor: colors.bgreen,
            activeBorder: colors.green,
            activeBackground: colors.green,
            activeColor: colors.white,
        },
        red: {
            borderColor: colors.lgreen,
            background: colors.transparent,
            color: colors.lgreen,
            focusBorder: colors.vert,
            foucsBackground: colors.vert,
            focusColor: colors.white,
            hoverBorder: colors.bgreen,
            hoverBackground: colors.white,
            hoverColor: colors.bgreen,
            activeBorder: colors.green,
            activeBackground: colors.green,
            activeColor: colors.white,
        },
        normal: {
            color: colors.white,
            backgroundColor: colors.black,
            borderBottom: colors.gray,
            overlayColor: 'rgba(230, 229, 229, 0.683)',
        },
    },
};

export default uiConfigs;
