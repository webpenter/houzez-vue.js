/**
 * @fileOverview This file defines a Pinia store for managing listing related types by admin side.
 *
 * @feature Store Name: `useType`.
 *
 * @export The store is exported as `useType` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date 26 Jan,2025
 */

import {defineStore} from "pinia";

export const useType = defineStore('type', {
    state: () => ({
        types:[
            {id: 1, name: "Apartment"},
            {id: 2, name: "Studio"},
            {id: 3, name: "Office"},
            {id: 4, name: "Shop"},
            {id: 5, name: "Home"},
            {id: 6, name: "Villa"},
            {id: 7, name: "Commercial"},
            {id: 8, name: "Residential"},
            {id: 9, name: "Condo"},
        ],
    }),
    getters: {},
    actions: {}
});