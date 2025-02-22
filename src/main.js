import { createApp } from 'vue';

/* ------------ Import CSS files  ---------- */
import "element-plus/dist/index.css";

/* ------------ Import JS files  ----------- */
import App from './App.vue';
import router from './router';
import plugins from './plugins';

import ElementPlus from "element-plus";
import { createPinia } from "pinia";
import {
    subStr,
    logout,
    formatPrice
} from "./helpers"

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(plugins);
app.use(ElementPlus);
app.use(pinia);
app.mount('#app');

/* ------------ Global Helpers ------------- */
app.config.globalProperties.$filters = {
    subStr,
    logout,
    formatPrice
};
