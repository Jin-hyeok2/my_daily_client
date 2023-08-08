import { createApp } from "vue";
import App from "./App.vue";
import store from "@/store";
import { useStore } from "vuex";
import request from "@/global/request";
import router from "@/routes";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";

library.add(faPlus, faMinus);
const app = createApp(App);
app
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

app.config.globalProperties.$store = useStore();
app.config.globalProperties.$request = request;
