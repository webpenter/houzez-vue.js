/**
 * @fileOverview This file defines a Pinia store for managing create,update,show,view and delete deals by user.
 *
 * @feature Store Name: `useDeal`.
 *
 * @export The store is exported as `useDeal` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date 22 Apr,2025
 */

import {defineStore} from "pinia";
import apiService from "@/services/apiService.js";
import axiosInstance from "@/services/axiosService.js";

export const useDeal = defineStore('deal', {
    state: () => ({
        activeDeals:{},
        wonDeals:{},
        lostDeals:{},
        errors: {},
        loading: false,
        prefix:"/deals",
    }),
    getters: {},
    actions: {
        /**
         * Fetches all active deals from the server and stores them in `this.activeDeals`.
         *
         * @returns {Promise<Object>} A promise that resolves with the Axios response object.
         */
        async  getActiveDeals() {
            const url = `${this.prefix}/group/active`;
            try {
                const response = await axiosInstance.get(url);

                this.activeDeals = response.data.data;

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
         * Fetches all won deals from the server and stores them in `this.wonDeals`.
         *
         * @returns {Promise<Object>} A promise that resolves with the Axios response object.
         */
        async  getWonDeals() {
            const url = `${this.prefix}/group/won`;
            try {
                const response = await axiosInstance.get(url);

                this.wonDeals = response.data.data;

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
         * Fetches all lost deals from the server and stores them in `this.lostDeals`.
         *
         * @returns {Promise<Object>} A promise that resolves with the Axios response object.
         */
        async  getLostDeals() {
            const url = `${this.prefix}/group/lost`;
            try {
                const response = await axiosInstance.get(url);

                this.lostDeals = response.data.data;

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
         * Stores a new deal by posting the provided form data to the server.
         *
         * @param {Object} formData - The data representing the new deal.
         * @returns {Promise<Object>} A promise that resolves with the Axios response object.
         */
        async  storeDeal(formData) {
            try {
                const response = await apiService().post(this.prefix, formData);

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
         * Delete a specific deal by its ID from the server.
         *
         * @param {number|string} dealId - The ID of the deal to be deleted.
         * @returns {Promise<Object>} A promise that resolves with the Axios response object.
         */
        async  deleteDeal(dealId) {
            const url = `${this.prefix}/${dealId}`;

            try {
                const response = await axiosInstance.delete(url);

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