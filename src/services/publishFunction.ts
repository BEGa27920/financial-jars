import VueComponent from "vue";
import { typeThemeMode } from "@/store/modules/theme";

export function load(vue: VueComponent) {
  (window as any).__ = {
    setThemeMode: function (value: typeThemeMode) {
      vue.$store.commit("theme/setThemeMode", value);
      return value;
    },
  };
}

export default { load };
