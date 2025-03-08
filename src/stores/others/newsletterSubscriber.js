/**
 * @fileOverview This file defines a Pinia store for managing client side and dashboard user's newsletter subscription.
 *
 * @feature Store Name: `useNewsletterSubscriber`.
 *
 * @export The store is exported as `useNewsletterSubscriber` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date 06 Mar,2025
 */

import {defineStore} from "pinia";
import axiosInstance from "@/services/axiosService.js";

export const useNewsletterSubscriber = defineStore('newsletterSubscribe', {
    state: () => ({
        errors: {},
        loading: false,
    }),
    getters: {},
    actions: {
        /**
         * Subscribes a user to the newsletter.
         *
         * @param {string} email - The email address to subscribe.
         * @returns {Promise} A Promise resolving to the server response or rejecting with the error response.
         * @throws {Object} The error response if the request fails.
         */
        async subscribeNewsletter(email) {
            const url = `/app/subscribe`;
            try {
                return await axiosInstance.post(url, { email });
            } catch (error) {
                if (error.response?.data) {
                    this.errors = error.response;
                }
                throw error.response;
            }
        }
    }
});