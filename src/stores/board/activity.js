/**
 * @fileOverview This file defines a Pinia store for managing crm activities by user.
 *
 * @feature Store Name: `useActivity`.
 *
 * @export The store is exported as `useActivity` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date 03 May,2025
 */

import {defineStore} from "pinia";
import apiService from "@/services/apiService.js";
import axiosInstance from "@/services/axiosService.js";

export const useActivity = defineStore('activity', {
    state: () => ({
        reviews:{},
        leads:{},
        deals:{},
        enquiries:{},
        errors: {},
        loading: false,
        prefix:"/activities",
    }),
    getters: {},
    actions: {
        /**
         * Fetches user reviews from the API and stores them in `this.reviews`.
         *
         * @returns {Promise<Object>} The full Axios response object on success, or error response on failure.
         */
        async  getReviews() {
            const url = `${this.prefix}/reviews`;
            try {
                const response = await axiosInstance.get(url);

                this.reviews = response.data.data;

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
         * Fetches summary of leads from the API and stores them in `this.leads`.
         *
         * @returns {Promise<Object>} The full Axios response object on success, or error response on failure.
         */
        async  getLeads() {
            const url = `${this.prefix}/leads-summary`;
            try {
                const response = await axiosInstance.get(url);

                this.leads = response.data.data;

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
         * Fetches deals summary from the API and stores them in `this.deals`.
         *
         * @returns {Promise<Object>} The full Axios response object on success, or error response on failure.
         */
        async  getDeals() {
            const url = `${this.prefix}/deals-summary`;
            try {
                const response = await axiosInstance.get(url);

                this.deals = response.data;

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
         * Fetches enquiries summary from the API and stores them in `this.enquiries`.
         *
         * @returns {Promise<Object>} The full Axios response object on success, or error response on failure.
         */
        async  getEnquiries() {
            const url = `${this.prefix}/enquiries-summary`;
            try {
                const response = await axiosInstance.get(url);

                this.enquiries = response.data;

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