import PublishFunction from "./publishFunction";
import VueComponent from "vue";
import { typeThemeMode } from "@/store/modules/theme";
import { changeThemeMode } from "@/store/modules/theme/mutations";

function watchSystemTheme(vue: VueComponent) {
  window.matchMedia("(prefers-color-scheme: dark)").addListener(() => {
    if (vue.$store.state.theme.themeMode === typeThemeMode.SYSTEM)
      changeThemeMode(typeThemeMode.SYSTEM);
  });
}

export function load(vue: VueComponent) {
  PublishFunction.load(vue);
  vue.$store.commit("theme/setThemeMode", typeThemeMode.SYSTEM);
  watchSystemTheme(vue);
}

export default { load };
