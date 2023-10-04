import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/sign-in" },
    {
      path: "/main",
      name: "Main",
      component: () => import("@/page/MainPage.vue"),
      children: [
        {
          path: "",
          component: () => import("@/view/BlankView.vue"),
        },
        {
          path: "admin/menu-management",
          component: () => import("@/view/MenuManagement.vue")
        },
      ],
    },
    {
      path: "/sign-in",
      name: "SignIn",
      component: () => import("@/page/SignInPage.vue"),
    },
  ],
});

export default router;
