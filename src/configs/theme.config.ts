import { themeModes } from 'viewModel/default.viewModel';
import styleConfig from './style.config';
import uiConfigs from './ui.config';

const themeConfigs = {
    custom: ({ mode }: { mode: themeModes }) => {
        return mode === themeModes.light
            ? { ...uiConfigs.theme, ['palette']: uiConfigs.light }
            : { ...uiConfigs.theme, ['palette']: uiConfigs.dark };
    },
};

export default themeConfigs;
