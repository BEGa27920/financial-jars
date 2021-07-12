import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export enum typeThemeMode {
  LIGHT = "LIGHT",
  DARK = "DARK",
  SYSTEM = "SYSTEM",
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
