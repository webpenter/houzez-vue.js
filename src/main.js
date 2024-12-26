import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import plugins from './plugins';
import subStr from './helpers/subStr';
import dateFormat from './helpers/dateFormat';

const app = createApp(App);

app.use(router);
app.use(plugins);
app.mount('#app');

/* ------------ Global Helpers ------------- */
app.config.globalProperties.$filters = {
    subStr,
    dateFormat
};
