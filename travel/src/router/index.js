// index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () => import("@/views/DestinationShow.vue"),
    // Our expression could use any information on the route to determine whether or not the newsletterPopup should be true or false.
    // props: route => ({ newsletterPopup: someExpression ? true : false }),
    // take this opportunity to cast our id to an integer.
    props: (route) => ({ id: parseInt(route.params.id) }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
