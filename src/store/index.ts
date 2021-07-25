import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

/* Modules */
import homePage from "./modules/home-page";
import theme from "./modules/theme";
import finalcialJar from "./modules/finalcial-jar";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    theme,
    homePage,
    jar: finalcialJar,
  },
});
