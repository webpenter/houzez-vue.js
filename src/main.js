import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import plugins from './plugins';
import { createPinia } from "pinia";
import {
    subStr,
    logout
} from "./helpers"

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(plugins);
app.use(pinia);
app.mount('#app');

/* ------------ Global Helpers ------------- */
app.config.globalProperties.$filters = {
    subStr,
    logout
};
