import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import AOS from "aos";
import "aos/dist/aos.css";
import "./tailwind.css";

// Initialize AOS
AOS.init();

createApp(App).use(router).mount("#app");
