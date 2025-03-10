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
        language: 'en'
    }),

    persist: true,
    getters: {
        getLanguage: (state) => {
            return state.language;
        },
    },
    actions: {
        changeLanguage (lang) {
            this.language = lang
        }
    }
})