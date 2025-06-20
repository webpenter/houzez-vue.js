/**
 * @fileOverview This file defines a Pinia store for managing listing related types by admin side.
 *
 * @feature Store Name: `useLabel`.
 *
 * @export The store is exported as `useLabel` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date 26 Jan,2025
 */

import { defineStore } from "pinia";

export const useLabel = defineStore('label', {
    state: () => ({
        labels: [
            { id: 1, name: "Sold" },
            { id: 2, name: "Rented" },
            { id: 3, name: "Hot Deal" },
            { id: 4, name: "New" },
            { id: 5, name: "Available Now" },
        ],
    }),
    getters: {},
    actions: {}
});