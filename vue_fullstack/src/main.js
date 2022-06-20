import { createApp } from "vue";
import { createPinia } from "pinia";

import {ref} from "vue"	

import App from "./App.vue";
import router from "./router";

const counter = ref(0);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
