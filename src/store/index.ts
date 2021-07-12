import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

/* Modules */
import theme from "./modules/theme";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    theme,
  },
});
