/**
 * @fileOverview This file defines a Pinia store for managing the user authentication token.
 *
 * @feature Store Name: `userToken`.
 * @feature The state contains a single property:
 * @feature `token`: Stores the user's authentication token (default is `null`).
 *
 * @export The store is exported as `useToken` for use throughout the application.
 *
 * @author https://webpenter.com
 * @date 11 Jan,2025
 */


import { defineStore } from "pinia";
export const useToken = defineStore("userToken", {
    state: () => ({
        token: sessionStorage.getItem('token'),
    }),

    persist: true,

    getters: {
        getToken: (state) => {
            return state.token;
        },
    },

    actions: {
        setToken(token) {
            this.token = token;

            if (token) {
                sessionStorage.setItem('token', token);
            } else {
                sessionStorage.removeItem('token');
            }
        },

        removeToken() {
            this.$reset();
            sessionStorage.removeItem('token');
        },
    },
});
