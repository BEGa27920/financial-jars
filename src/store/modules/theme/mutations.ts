/* eslint-disable */

import { typeThemeMode } from ".";

const body = document.querySelector("body");

export default {
  set(state: any, payload: { key: any; value: any }) {
    state[payload.key] = payload.value;
  },
  setThemeMode(state: any, value: typeThemeMode) {
    state.themeMode = value;
    body?.setAttribute("theme-mode", value);
  },
};
