/**
 * @fileOverview This file defines a Pinia store for managing listing related statuses by admin side.
 *
 * @feature Store Name: `useStatus`.
 *
 * @export The store is exported as `useStatus` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date 26 Jan,2025
 */

import {defineStore} from "pinia";

export const useStatus = defineStore('status', {
    state: () => ({
        statuses:[
            {id: 1, name: "For Sale", value: "sale"},
            {id: 2, name: "For Rent", value: "rent"},
        ],
    }),
    getters: {},
    actions: {}
});