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
        newsletterSubscribers: {},
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
        },

        /**
         * Fetch all newsletter subscribers.
         *
         * @function getAllSubscribers
         * @returns {Promise<Object>} Resolves with the response data if successful, otherwise rejects with an error response.
         */
        async getAllSubscribers() {
            const url = `/get-all-subscribers`;

            try {
                const response = await axiosInstance.get(url);
                this.newsletterSubscribers = response.data;

                return Promise.resolve(response);
            } catch (error) {
                this.errors = error.response || error;
                return Promise.reject(error.response);
            }
        },

        /**
         * Delete a specific subscriber by ID.
         *
         * @param {number|string} subscriberId - The ID of the subscriber to delete.
         * @returns {Promise<Object>} Resolves with the response data if successful, otherwise rejects with an error response.
         */
        async deleteSubscriber(subscriberId) {
            const url = `/delete-subscriber/${subscriberId}`;

            try {
                const response = await axiosInstance.post(url);

                return new Promise(resolve => {
                    resolve(response)
                })
            } catch (error) {
                if (error.response.data) {
                    this.errors = error.response
                }
                return new Promise(reject => {
                    reject(error.response)
                })
            }
        },
    }
});