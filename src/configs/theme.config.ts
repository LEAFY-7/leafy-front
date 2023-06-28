import { themeModes } from '@viewModel/default.viewModel';
import styleConfig from './style.config';
import uiConfigs from './ui.config';

const themes = {
    light: uiConfigs.light,
    dark: uiConfigs.dark,
};

const themeConfigs = {
    custom: ({ mode }: { mode: themeModes }) => {
        return mode === themeModes.light
            ? { ...styleConfig.theme, ['palette']: themes.light }
            : { ...styleConfig.theme, ['palette']: themes.dark };
    },
};

export default themeConfigs;
