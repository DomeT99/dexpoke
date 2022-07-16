import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import "./registerServiceWorker";
import "../src/assets/Scss/global.scss";

const pinia = createPinia();

createApp(App).use(pinia).mount("#app");
