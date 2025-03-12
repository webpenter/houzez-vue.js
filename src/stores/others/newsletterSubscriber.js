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

export const useNewsletter = defineStore('newsletterSubscribe', {
    state: () => ({
        dashboardNewsletter: [],
        errors: {},
        loading: false,
        prefix: "/app/newsletter"
    }),
    getters: {
        getNewsletters: (state) => {
            return state.dashboardNewsletter;
        },
    },
    actions: {
        /**
         * Subscribes a user to the newsletter.
         *
         * @param {string} email - The email address to subscribe.
         * @returns {Promise} A Promise resolving to the server response or rejecting with the error response.
         * @throws {Object} The error response if the request fails.
         */
        async subscribeNewsletter(email) {
            const url = `${this.prefix}/subscribe`;
            try {
                const response = await axiosInstance.post(url, { email });
        
                return {
                    success: true,
                    status: response.status, // Ensure status is returned
                    message: response.data.message || "Subscribed successfully!",
                };
            } catch (error) {
                let errorMessage = "Subscription failed!";
                let status = error.response?.status || 500; // Default to 500 if no response status
        
                if (error.response) {
                    const responseData = error.response.data;
        
                    if (status === 400) {
                        errorMessage = responseData.message || "Please enter a valid email!";
                    } else if (status === 409) {
                        errorMessage = responseData.message || "You are already subscribed!";
                    } else {
                        errorMessage = responseData.message || "An unexpected error occurred!";
                    }
                }
        
                return { success: false, status, message: errorMessage };
            }
        },
        
         /**
        * get newsletter subscriber
        * @returns {Promise} A Promise resolving to the server response or rejecting with the error response.
        * @throws {Object} The error response if the request fails.
        */
         async getNewsletterSubscriber() {
            let url = `${this.prefix}/subscribed_user`;

            try {
                const response = await axiosInstance.get(url);
                this.dashboardNewsletter = response.data.Newsletters;
                return Promise.resolve(response);
            } catch (error) {
                this.errors = error.response || error;
                return Promise.reject(error.response);
            }
        },
        /**
         * @usage Asynchronously delete a property from a property ID.
         * @request This method sends a DELETE request to the server to remove a property from the specified property ID. It also handles errors and returns the server response or error response.
         * @param {int} newsletterId - The ID of the property to be deleted.
         * @returns {Promise} - Resolves with the response or rejects with the error response.
         */

        async  deleteNewsletter(newsletterId) {
            const url = `${this.prefix}/delete_newsletter/${newsletterId}`;

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