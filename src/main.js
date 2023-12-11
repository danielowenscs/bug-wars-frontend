import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import axios from "axios";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
axios.defaults.baseURL = "https://bug-wars-backend.onrender.com/api/v1";
app.mount("#app");
