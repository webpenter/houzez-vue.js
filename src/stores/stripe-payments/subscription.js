/**
 * @fileOverview This file defines a Pinia store for managing subscription of stripe packages.
 *
 * @feature Store Name: `useSubscription`.
 *
 * @export The store is exported as `useSubscription` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date 22 Feb,2025
 */

import {defineStore} from "pinia";
import apiService from "@/services/apiService.js";
import axiosInstance from "@/services/axiosService.js";

export const useSubscription = defineStore('subscription', {
    state: () => ({
        selectedPackage: {},
        userSubscriptions: {},
        loading: false,
        prefix:"/stripe-payments",
    }),
    getters: {},
    actions: {
        /**
         * Fetches checkout details for a given plan.
         *
         * @param {string|number} planId - The ID of the plan to be checked out.
         * @return {Promise<Object>} - Resolves with the checkout response, rejects with an error response.
         */
        async  checkout(planId) {
            const url = `${this.prefix}/checkout/${planId}`;

            try {
                const response = await axiosInstance.get(url);

                this.selectedPackage = response.data.package;

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

        /**
         * Sends a request to process a subscription with a selected plan and payment method.
         *
         * @param {string|number} planId - The ID of the plan being subscribed to.
         * @param {string} paymentMethod - The payment method identifier.
         * @return {Promise<void>} - Resolves if the subscription is successful, throws an error if it fails.
         * @throws {Object} - Throws the error response if the request fails.
         */
        async processSubscription(planId, paymentMethod) {
            try {
                await axiosInstance.post(`${this.prefix}/process`, {
                    plan_id: planId,
                    payment_method: paymentMethod,
                });
            } catch (error) {
                throw error.response;
            }
        },

        /**
         * Fetch the user's active subscriptions.
         *
         * This method sends a GET request to retrieve the user's subscriptions and
         * stores the response data in `userSubscriptions`. If an error occurs,
         * it is stored in `errors`.
         *
         * @returns {Promise} Resolves with response data or rejects with an error response.
         */
        async  getUserSubscriptions() {
            const url = `${this.prefix}/get-user-subscriptions`;

            try {
                const response = await axiosInstance.get(url);
                console.log("Subscriptions:", response.data.subscriptions);
                this.userSubscriptions = response.data.subscriptions;

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

        /**
         * Cancel a user's subscription.
         *
         * This method sends a GET request to cancel a subscription based on the provided
         * subscription name. If an error occurs, it is stored in `errors`.
         *
         * @param {string} name - The name of the subscription to cancel.
         * @returns {Promise} Resolves with response data or rejects with an error response.
         */
        async  cancelSubscription(name) {
            const url = `${this.prefix}/cancel-subscription`;

            try {
                const response = await axiosInstance.get(url,{ params: { name } });

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

        /**
         * Resume a user's subscription.
         *
         * This method sends a GET request to resume a subscription based on the provided
         * subscription name. If an error occurs, it is stored in `errors`.
         *
         * @param {string} name - The name of the subscription to resume.
         * @returns {Promise} Resolves with response data or rejects with an error response.
         */
        async  resumeSubscription(name) {
            const url = `${this.prefix}/resume-subscription`;

            try {
                const response = await axiosInstance.get(url, { params: { name } });

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