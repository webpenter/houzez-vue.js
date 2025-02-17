/**
 * @fileOverview This file defines a Pinia store for managing search bedrooms listing related types by admin side.
 *
 * @feature Store Name: `useBedroom`.
 *
 * @export The store is exported as `useBedroom` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date 16 Feb,2025
 */

import {defineStore} from "pinia";

export const useBedroom = defineStore('bedroom', {
    state: () => ({
        bedrooms:[
            { id: 1, name: "1" },
            { id: 2, name: "2" },
            { id: 3, name: "3" },
            { id: 4, name: "4" },
            { id: 5, name: "5" },
            { id: 6, name: "6" },
            { id: 7, name: "7" },
            { id: 8, name: "8" },
            { id: 9, name: "9" },
            { id: 10, name: "10" },
            { id: 11, name: "Any" }
        ],
    }),
    getters: {},
    actions: {}
});