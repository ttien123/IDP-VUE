import { createApp } from "vue";
import "./css/app.css";
import "./css/style.css";
import App from "./App.vue";
import router from "./router";
import VueSmoothScroll from "vue3-smooth-scroll";
import { createPinia } from 'pinia'
const pinia = createPinia()

createApp(App).use(router).use(VueSmoothScroll).use(pinia).mount("#app");
