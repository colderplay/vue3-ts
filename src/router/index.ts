import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

export type appRouter = RouteRecordRaw & {
  hidden?: boolean;
};

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      hidden: true,
      component: () => import("../views/home.vue"),
    },
  ] as appRouter[],
});
