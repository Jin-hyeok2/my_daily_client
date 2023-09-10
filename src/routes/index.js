import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Main", component: () => import("@/view/MainPage.vue") },
    { path: "/sign-in", name: "SignIn", component: () => import("@/view/SignInPage.vue")}
  ],
});

export default router;