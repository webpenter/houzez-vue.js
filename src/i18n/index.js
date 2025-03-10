import { createI18n } from 'vue-i18n';
// import { useLanguage } from '@/stores';

import fr from '@/locales/fr.json';
import en from '@/locales/en.json';


//console.log(useLanguage().getLanguage);
// const lang=JSON.parse(localStorage.getItem('language'));

export const i18n = createI18n({
    legacy: false,
    locale:  "en",
    fallbackLocale: 'en',
    globalInjection: true,
    messages: {
        en,
        fr
    }
});


