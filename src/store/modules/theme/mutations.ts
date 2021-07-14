/* eslint-disable */

import { typeThemeMode, typeThemeClass } from ".";

export function changeThemeMode(value: typeThemeMode) {
  const body = document.querySelector("body");

  const listKey = Object.values(typeThemeClass);
  listKey.forEach((key) => body?.classList.remove(key));

  if (value === typeThemeMode.LIGHT) {
    body?.classList.add(typeThemeClass.LIGHT_MODE);
  } else if (value === typeThemeMode.DARK) {
    body?.classList.add(typeThemeClass.DARK_MODE);
  } else if (value === typeThemeMode.SYSTEM) {
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? body?.classList.add(typeThemeClass.SYSTEM_DARK)
      : body?.classList.add(typeThemeClass.SYSTEM_LIGHT);
  } else if (value === typeThemeMode.BACKGROUND) {
    body?.classList.add(typeThemeClass.BACKGROUND_MODE);
  }
}

export default {
  set(state: any, payload: { key: any; value: any }) {
    state[payload.key] = payload.value;
  },
  setThemeMode(state: any, value: typeThemeMode) {
    state.themeMode = value;
    changeThemeMode(value);
  },
};
