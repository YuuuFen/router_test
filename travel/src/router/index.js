// index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/brazil",
    name: "Brazil",
    component: () => import("@/views/Brazil.vue"),
  },
  {
    path: "/hawaii",
    name: "Hawaii",
    component: () => import("@/views/Hawaii.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
