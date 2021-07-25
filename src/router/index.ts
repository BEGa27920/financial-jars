import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: () => import("@/views/index.vue"),
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
      },
      {
        path: "monthly-report",
        name: "monthly-report",
        component: () => import("@/views/monthly-report/index.vue"),
      },
      {
        path: "financial-jar",
        name: "financial-jar",
        component: () => import("@/views/financial-jar/index.vue"),
        redirect: "financial-jar/base",
        children: [
          {
            path: "base",
            name: "financial-jar--base",
            component: () => import("@/views/financial-jar/base.vue"),
          },
          {
            path: "create",
            name: "financial-jar--create",
            component: () => import("@/views/financial-jar/create.vue"),
          },
        ],
      },
      {
        path: "type-of-spending",
        name: "type-of-spending",
        component: () => import("@/views/type-of-spending/index.vue"),
      },
      {
        path: "settings",
        name: "settings",
        component: () => import("@/views/settings/index.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
