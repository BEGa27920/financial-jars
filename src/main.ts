import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

/* Vue SVG */
import InlineSvg from "vue-inline-svg";
Vue.component("v-svg", InlineSvg);

/* Vue Material */
// import { MdButton } from "vue-material/dist/components";
// import "vue-material/dist/vue-material.min.css";
// import "vue-material/dist/theme/default.css";
// Vue.use(MdButton);

/* Vue Perfect Scrollbar  */
import VuePerfectScrollbar from "vue-perfect-scrollbar";
Vue.component("v-scroll", VuePerfectScrollbar);

/* V-Wave | V-Ripple */
import VWave from "v-wave";
Vue.use(VWave, { directive: "ripple" });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
