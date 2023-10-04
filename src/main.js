import { createApp } from "vue";
import App from "./App.vue";
import router from "@/routes";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import {createPinia} from "pinia";

library.add(faPlus, faMinus);
const app = createApp(App);
const pinia = createPinia();

app
.use(pinia)
.use(router)
.component("font-awesome-icon", FontAwesomeIcon);

const globalComponent = require.context("@/common", true, /\.vue$/);
globalComponent.keys().forEach((__filename) => {
  const config = globalComponent(__filename);

  const name = __filename
    .split("/")
    .pop()
    .replace(/\.\w+$/, "");
  app.component(name, config.default || config);

});

app.mount("#app");
