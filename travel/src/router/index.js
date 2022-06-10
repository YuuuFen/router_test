// index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Brazil from "@/views/Brazil.vue";
import Hawaii from "@/views/Hawaii.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/brazil", name: "Brazil", component: Brazil },
  { path: "/hawaii", name: "Hawaii", component: Hawaii },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
