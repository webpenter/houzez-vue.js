/**
 * @fileOverview This file defines a Pinia store for managing create,update,show,view and delete leads by user.
 *
 * @feature Store Name: `useLead`.
 *
 * @export The store is exported as `useLead` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date 01 May,2025
 */

import {defineStore} from "pinia";
import apiService from "@/services/apiService.js";
import axiosInstance from "@/services/axiosService.js";

export const useLead = defineStore('lead', {
    state: () => ({
        leads:{},
        errors: {},
        loading: false,
        prefix:"/leads",
    }),
    getters: {},
    actions: {
        /**
         * Fetches all leads from the server and stores them in `this.deals`.
         *
         * @returns {Promise<Object>} A promise that resolves with the Axios response object.
         */
        async  getLeads() {
            try {
                const response = await axiosInstance.get(this.prefix);

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
         * Stores a new lead by posting the provided form data to the server.
         *
         * @param {Object} formData - The data representing the new lead.
         * @returns {Promise<Object>} A promise that resolves with the Axios response object.
         */
        async  storeLead(formData) {
            try {
                const response = await axiosInstance.post(this.prefix, formData);

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
         * Delete a specific lead by its ID from the server.
         *
         * @param {number|string} leadId - The ID of the lead to be deleted.
         * @returns {Promise<Object>} A promise that resolves with the Axios response object.
         */
        async  deleteLead(leadId) {
            const url = `${this.prefix}/${leadId}`;

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