/**
 * @fileOverview This file defines a Pinia store for managing listing related types by admin side.
 *
 * @feature Store Name: `useRole`.
 *
 * @export The store is exported as `useRole` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com          //Naraish Kumar//
 * @date 15 Feb,2025  
 */

import {defineStore} from "pinia";

export const useRole = defineStore('role', {
    state: () => ({
        roles:[
            {id: 1, name: "Manager"},
            {id: 2, name: "Owner"},
            {id: 3, name: "Seller"},
            {id: 4, name: "Agent"},
            {id: 5, name: "Admin"},
            {id: 6, name: "Buyer"},
            {id: 7, name: "Host"},
            {id: 8, name: "Author"},
        ],  
    }),
    getters: {},
    actions: {}
});