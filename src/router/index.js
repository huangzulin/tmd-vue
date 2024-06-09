import { createRouter, createWebHashHistory } from "vue-router";
import Downloaded from "../views/Downloaded.vue";
import Downloading from "../views/Downloading.vue";
import Login from "../views/Login.vue";

const router = createRouter({
  //history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Downloading,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/downloading",
      name: "downloading",
      component: Downloading,
    },
    {
      path: "/downloaded",
      name: "downloaded",
      component: Downloaded,
    },
  ],
});

export default router;
