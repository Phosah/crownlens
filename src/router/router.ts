import { createWebHistory, createRouter } from "vue-router";
import AOS from "aos";
import "aos/dist/aos.css";

import HomePage from "../pages/Home.vue";
import CollectionsPage from "../pages/Collections.vue";
import CollectionDetailsPage from "../pages/CollectionDetails.vue";

const routes = [
  { path: "/", component: HomePage, name: "Home" },
  { path: "/collections", component: CollectionsPage, name: "Collections" },
  {
    path: "/collections/:id",
    component: CollectionDetailsPage,
    name: "Collections Details",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "crownlens-active-link",
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
