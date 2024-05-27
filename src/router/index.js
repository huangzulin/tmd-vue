import { createRouter, createWebHistory } from "vue-router";
import Downloaded from "../views/Downloaded.vue";
import Downloading from "../views/Downloading.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Downloading,
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
