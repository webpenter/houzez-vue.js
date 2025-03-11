import { createI18n } from 'vue-i18n';
import en from '@/locales/en.json';
import fr from '@/locales/fr.json';

const savedLanguage = sessionStorage.getItem('language') || 'en';

const i18n = createI18n({
    legacy: false,
    locale: savedLanguage,
    fallbackLocale: 'en',
    messages: {
        en,
        fr
    }
});

export default i18n;
