/**
 * @author WebPenter Devs
 * @date 11 Jan,2025
 *
 * @fileOverview This file defines a Pinia store for managing the user authentication token.
 *
 * @feature Store Name: `userToken`.
 * @feature The state contains a single property:
 * @feature `token`: Stores the user's authentication token (default is `null`).
 *
 * @PersistentStorage The store is configured with `persist: true`, ensuring the token persists across page reloads.
 *
 * @getter `getToken`: A computed property to retrieve the current value of the `token` state.
 *
 * @action `setToken(token)`: Updates the `token` state with a new value.
 * @action `removeToken()`: Resets the store to its default state by calling `$reset()`.
 *
 * @export The store is exported as `useToken` for use throughout the application.
 */


import { defineStore } from "pinia";
export const useToken = defineStore("userToken", {
    state: () => ({
        token: null,
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
        },

        removeToken() {
            this.$reset();
        },
    },
});
