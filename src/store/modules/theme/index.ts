import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export enum typeThemeMode {
  LIGHT = "LIGHT",
  DARK = "DARK",
  SYSTEM = "SYSTEM",
  BACKGROUND = "BACKGROUND",
}
export enum typeThemeClass {
  LIGHT_MODE = "light-mode",
  DARK_MODE = "dark-mode",
  SYSTEM_LIGHT = "system-light",
  SYSTEM_DARK = "system-dark",
  BACKGROUND_MODE = "background-mode",
}

export default {
  namespaced: true,
  state: {
    themeMode: typeThemeMode.LIGHT,
  },
  mutations,
  actions,
  getters,
};
