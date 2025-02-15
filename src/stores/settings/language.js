/**
 * @fileOverview This file defines a Pinia store for managing listing related types by admin side.
 *
 * @feature Store Name: `useLanguage`.
 *
 * @export The store is exported as `useRole` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com          //Naraish Kumar//
 * @date 15 Feb,2025  
 */

import {defineStore} from "pinia";

export const useLanguage = defineStore('language', {
    state: () => ({
        languages:[
            {id: 1, name: "English"},
            {id: 2, name: "Urdu"},
            {id: 3, name: "French"},
            {id: 4, name: "Hindi"},
            {id: 5, name: "Dutch"},
            {id: 6, name: "Persian"},
            {id: 7, name: "Arabic"},
        ],
    }),
    getters: {},
    actions: {}
});