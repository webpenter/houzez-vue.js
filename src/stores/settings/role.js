/**
 * @fileOverview This file defines a Pinia store for managing user's role by admin side.
 *
 * @feature Store Name: `useRole`.
 *
 * @export The store is exported as `useRole` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date 14 Mar,2025
 */

import {defineStore} from "pinia";

export const useRole = defineStore('role', {
    state: () => ({
        roles: [
            {id: 1, name: "administrator"},
            {id: 2, name: "subscriber"},
            {id: 3, name: "owner"},
            {id: 4, name: "agent"},
            {id: 5, name: "agency"},
            {id: 6, name: "seller"},
            {id: 7, name: "buyer"},
            {id: 8, name: "manager"},
            {id: 9, name: "author"},
            {id: 10, name: "contributor"},
        ],
    }),
    getters: {},
    actions: {}
});