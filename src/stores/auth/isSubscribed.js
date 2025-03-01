/**
 * @fileOverview This file defines a Pinia store for managing the stripe plan subscription authentication.
 *
 * @feature Store Name: `useIsSubscribed`.
 * @feature The state contains a single property:
 * @feature `subscribed`: Stores the user's authentication stripe payment integration (default is `false`).
 *
 * @export The store is exported as `useIsSubscribed` for use throughout the application.
 *
 * @author https://webpenter.com
 * @date 28 Feb,2025
 */


import { defineStore } from "pinia";
export const useIsSubscribed = defineStore("subscribed", {
    state: () => ({
        isSubscribed: (() => {
            try {
                const storeSubscribed = localStorage.getItem('isSubscribed');
                return storeSubscribed ? JSON.parse(storeSubscribed) : false;
            } catch (error) {
                return false;
            }
        })(),
    }),

    persist: true,

    getters: {
        getIsSubscribed: (state) => state.isSubscribed,
    },

    actions: {
        setIsSubscribed(isSubscribed) {
            this.isSubscribed = !!isSubscribed;
            localStorage.setItem('isSubscribed', JSON.stringify(this.isSubscribed));
        },

        removeIsSubscribed() {
            this.isSubscribed = false;
            localStorage.setItem('isSubscribed', JSON.stringify(false));
        },
    },
});
