import { createApp } from 'vue';

/* ------------ Import files/libraries  ---------- */
import "@/assets/css/index.css";
import "element-plus/dist/index.css";
import "@/assets/js/index.js";
import App from './App.vue';
import router from './router';
import plugins from './plugins';
import ElementPlus from "element-plus";
import { createPinia } from "pinia";
import i18n from "@/i18n";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import {
    subStr,
    logout,
    formatPrice,
    capitalize,
    formatTextWithNumber,
    formatDate,
} from "./helpers"


const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(router);
app.use(plugins);
app.use(ElementPlus);
app.use(pinia);
app.use(i18n);
app.mount('#app');

/* ------------ Global Helpers ------------- */
app.config.globalProperties.$filters = {
    subStr,
    logout,
    formatPrice,
    capitalize,
    formatTextWithNumber,
    formatDate,
};
