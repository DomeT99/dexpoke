import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

/****ROUTER****/
import router from "./router";

/****CSS****/
import "../src/assets/Scss/global.scss";

/****PINIA****/
import { createPinia } from "pinia";
const pinia = createPinia();

/****FONT AWESOME ICONS****/
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/**ICONS**/
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faTwitter, faInstagram, faGithub);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(pinia)
  .mount("#app");
