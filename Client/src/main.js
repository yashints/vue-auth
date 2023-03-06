import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import AppHeader from "@/components/Header.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.component("AppHeader", AppHeader);

app.mount("#app");
