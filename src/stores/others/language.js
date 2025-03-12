/**
 * @fileOverview This file defines a Pinia store for managing localization.
 *
 * @feature Store Name: `useLanguage`.
 *
 * @export The store is exported as `useLanguage` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date  10 Mar,2025
 */

import {defineStore} from "pinia";

export const useLanguage = defineStore('language', {
    state: () => ({
        locale: sessionStorage.getItem('language') || 'en',
    }),
    actions: {
        setLanguage(newLang) {
            this.locale = newLang;
            sessionStorage.setItem('language', newLang);
        }
    }
})