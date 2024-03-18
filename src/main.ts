import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
// import "./style.css";
import "./tailwind.css";

createApp(App).use(router).mount("#app");
