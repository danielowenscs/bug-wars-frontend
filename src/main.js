import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import axios from "axios";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
//baseURL for deployment. Uncomment before committing.
axios.defaults.baseURL = "https://bug-wars-backend.onrender.com/api/v1";

//TODO: Remove if Github Actions allows for this - Daniel's decision
//baseURL for connecting to backend on local machine. Comment out before committing changes.
// axios.defaults.baseURL = "http://localhost:8080/api/v1";
app.mount("#app");
