/**
 * @fileOverview This file defines a Pinia store for managing invoices and transactions of stripe payments.
 *
 * @feature Store Name: `useInvoices`.
 *
 * @export The store is exported as `useInvoices` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date 23 Feb,2025
 */

import {defineStore} from "pinia";
import apiService from "@/services/apiService.js";
import axiosInstance from "@/services/axiosService.js";

export const useInvoices = defineStore('invoice', {
    state: () => ({
        invoices: {},
        loading: false,
        prefix:"/stripe-payments",
    }),
    getters: {},
    actions: {
        /**
         * Fetches the user's invoices and Stripe charges from the API.
         *
         * This function:
         * - Sends a GET request to the `/invoices` endpoint.
         * - Stores the retrieved invoice data in `this.invoices`.
         * - Resolves the response on success.
         * - Catches errors, stores them in `this.errors`, and rejects the response.
         *
         * @returns {Promise} Resolves with the response data or rejects with the error response.
         */
        async  getInvoices() {
            const url = `${this.prefix}/invoices`;

            try {
                const response = await axiosInstance.get(url);

                this.invoices = response.data.data;

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