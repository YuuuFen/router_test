// index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import NotFoundComponent from "@/views/NotFoundComponent.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () => import("@/views/DestinationShow.vue"),
    props: (route) => ({ id: parseInt(route.params.id) }),
  },
  // when path is NotFound
  { path: "/:pathMatch(.*)", component: NotFoundComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
