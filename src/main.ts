import { createApp } from "vue";
import "./css/app.css";
import "./css/style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from 'pinia'
const pinia = createPinia()
import VueScrollTo from 'vue-scrollto';
createApp(App).use(router).use(pinia).use(VueScrollTo, {
    container: 'body',
    duration: 500,
    easing: 'ease',
  }).mount("#app");
