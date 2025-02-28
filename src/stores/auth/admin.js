/**
 * @fileOverview This file defines a Pinia store for managing the admin authentication.
 *
 * @feature Store Name: `userAdmin`.
 * @feature The state contains a single property:
 * @feature `admin`: Stores the user's authentication admin (default is `false`).
 *
 * @export The store is exported as `userAdmin` for use throughout the application.
 *
 * @author https://webpenter.com
 * @date 27 Feb,2025
 */


import { defineStore } from "pinia";
export const useAdmin = defineStore("admin", {
    state: () => ({
        admin: (() => {
            try {
                const storedAdmin = localStorage.getItem('admin');
                return storedAdmin ? JSON.parse(storedAdmin) : false;
            } catch (error) {
                return false;
            }
        })(),
    }),

    persist: true,

    getters: {
        getAdmin: (state) => state.admin,
    },

    actions: {
        setAdmin(admin) {
            this.admin = !!admin;
            localStorage.setItem('admin', JSON.stringify(this.admin));
        },

        removeAdmin() {
            this.admin = false;
            localStorage.setItem('admin', JSON.stringify(false));
        },
    },
});
