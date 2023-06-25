import styleConfig from "./style.config";
import uiConfigs from "./ui.config";

export const lightTheme = {
  palette: uiConfigs.light,
};

export const darkTheme = {
  palette: uiConfigs.dark,
};

export const themeModes = {
  dark: "dark",
  light: "light",
};

const themeConfigs = {
  custom: ({ mode }: { mode: "dark" | "light" }) => {
    const customPalette =
      mode === themeModes.light
        ? { ...styleConfig.theme, ["palette"]: lightTheme.palette }
        : { ...styleConfig.theme, ["palette"]: darkTheme.palette };

    return customPalette;
  },
};

export default themeConfigs;
