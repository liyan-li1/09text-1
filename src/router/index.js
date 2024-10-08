// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "../views/Login/LoginPage.vue";

import LayoutPage from "../views/Layout/LayoutPage.vue";
import AaaPage from "../views/Login/AaaPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: LoginPage,
    },
    {
      path: "/layout",
      component: LayoutPage,
    },
    {
      path: "/aaa",
      component: AaaPage,
    },
  ],
});

export default router;
