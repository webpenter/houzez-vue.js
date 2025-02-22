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
    }
});