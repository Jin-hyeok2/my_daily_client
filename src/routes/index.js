import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Main", component: () => import("@/view/MainPage.vue") },
  ],
});

export default router;