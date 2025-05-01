/**
 * @fileOverview This file defines a Pinia store for managing create,update,show,view and delete enquiry by user.
 *
 * @feature Store Name: `useEnquiry`.
 *
 * @export The store is exported as `useEnquiry` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date 01 May,2025
 */

import {defineStore} from "pinia";
import apiService from "@/services/apiService.js";
import axiosInstance from "@/services/axiosService.js";

export const useEnquiry = defineStore('enquiry', {
    state: () => ({
        enquiries:{},
        errors: {},
        loading: false,
        prefix:"/enquiries",
    }),
    getters: {},
    actions: {
        /**
         * Fetches all enquiries from the server and stores them in `this.enquiries`.
         *
         * @returns {Promise<Object>} A promise that resolves with the Axios response object.
         */
        async  getEnquiries() {
            try {
                const response = await axiosInstance.get(this.prefix);

                this.enquiries = response.data.data;

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
         * Stores a new enquiry by posting the provided form data to the server.
         *
         * @param {Object} formData - The data representing the new enquiry.
         * @returns {Promise<Object>} A promise that resolves with the Axios response object.
         */
        async  storeEnquiry(formData) {
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
         * Delete a specific enquiry by its ID from the server.
         *
         * @param {number|string} enquiryId - The ID of the enquiry to be deleted.
         * @returns {Promise<Object>} A promise that resolves with the Axios response object.
         */
        async  deleteEnquiry(enquiryId) {
            const url = `${this.prefix}/${enquiryId}`;

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