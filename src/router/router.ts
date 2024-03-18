import { createWebHistory, createRouter } from "vue-router";
import AOS from "aos";
import "aos/dist/aos.css";

import HomePage from "../pages/Home.vue";
import CollectionsPage from "../pages/Collections.vue";

const routes = [
  { path: "/", component: HomePage, name: "Home" },
  { path: "/collections", component: CollectionsPage, name: "Collections" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((_, __, next) => {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: "ease-in-sine",
    delay: 100,
  });
  next();
});

export default router;
