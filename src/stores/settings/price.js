/**
 * @fileOverview This file defines a Pinia store for managing search price listing related types by admin side.
 *
 * @feature Store Name: `usePrice`.
 *
 * @export The store is exported as `usePrice` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date 16 Feb,2025
 */

import {defineStore} from "pinia";

export const usePrice = defineStore('price', {
    state: () => ({
        prices:[
            { id: 1, name: "Any" },
            { id: 2, name: "10000" },
            { id: 3, name: "50000" },
            { id: 4, name: "100000" },
            { id: 5, name: "200000" },
            { id: 6, name: "300000" },
            { id: 7, name: "400000" },
            { id: 8, name: "500000" },
            { id: 9, name: "600000" },
            { id: 10, name: "700000" },
            { id: 11, name: "800000" },
            { id: 12, name: "900000" },
            { id: 13, name: "1000000" },
            { id: 14, name: "1500000" },
            { id: 15, name: "2000000" },
            { id: 16, name: "2500000" },
            { id: 17, name: "5000000" },
            { id: 18, name: "10000000" }
        ],
    }),
    getters: {},
    actions: {}
});