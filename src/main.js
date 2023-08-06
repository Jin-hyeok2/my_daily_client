import { createApp } from "vue";
import App from "./App.vue";
import store from "@/store/store";
import request from "@/config/request";

const app = createApp(App);
app.use(store).mount("#app");

app.config.globalProperties.$store = store;
app.config.globalProperties.$request = request