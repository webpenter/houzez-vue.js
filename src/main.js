import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import plugins from './plugins';
import subStr from './helpers/subStr';
import dateFormat from './helpers/dateFormat';
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(plugins);
app.use(pinia);
app.mount('#app');

/* ------------ Global Helpers ------------- */
app.config.globalProperties.$filters = {
    subStr,
    dateFormat
};
