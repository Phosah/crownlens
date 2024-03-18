import { createWebHistory, createRouter } from "vue-router";

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

export default router;
