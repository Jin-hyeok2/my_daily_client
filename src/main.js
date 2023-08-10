import { createApp } from "vue";
import App from "./App.vue";
import store from "@/store";
import { useStore } from "vuex";
import request from "@/global/request";
import router from "@/routes";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faPlus, faMinus);
const app = createApp(App);
app
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon);

const globalComponent = require.context(
    "@/common",
    true,
    /\.vue$/
)

globalComponent.keys().forEach(__filename => {
  const config = globalComponent(__filename);
  const name = __filename
  .split("/")
  .pop()
  .replace(/\.\w+$/, "");

  app.component(name, config.default || config);
})

app.mount("#app");

app.config.globalProperties.$store = useStore();
app.config.globalProperties.$request = request;
