/**
 * @fileOverview This file defines a Pinia store for managing create,update,show,view and delete stripe packages.
 *
 * @feature Store Name: `usePackage`.
 *
 * @export The store is exported as `usePackage` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date 19 Feb,2025
 */

import {defineStore} from "pinia";
import apiService from "@/services/apiService.js";
import axiosInstance from "@/services/axiosService.js";

export const usePackage = defineStore('package', {
    state: () => ({
        allPlans:{},
        selectPlans:{},
        errors: {},
        loading: false,
        prefix:"/stripe-payments",
    }),
    getters: {},
    actions: {
        /**
         * ## Fetch all available plans.
         *
         * Asynchronously retrieves all plans from the API.
         * Sends a GET request to fetch all plan data.
         * Stores the retrieved plans in `this.allPlans`.
         *
         * @returns {Promise<Object>} Resolves with the response data or rejects with an error response.
         */
        async  getAllPlans() {
            const url = `${this.prefix}/get-all-plans`;

            try {
                const response = await axiosInstance.get(url);

                this.allPlans = response.data.plans;

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
         * ## Fetch selected plans.
         *
         * Asynchronously retrieves a subset of plans from the API.
         * Sends a GET request to fetch specific plan data.
         * Stores the retrieved plans in `this.selectPlans`.
         *
         * @returns {Promise<Object>} Resolves with the response data or rejects with an error response.
         */
        async  getSelectPlans() {
            const url = `${this.prefix}/get-select-plans`;

            try {
                const response = await axiosInstance.get(url);

                this.selectPlans = response.data.plans;

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
         * ## Store a new plan.
         *
         * Asynchronously sends a POST request to store a new plan.
         * Sends form data containing plan details to the API.
         *
         * @param {Object} formData - The form data containing plan details.
         * @returns {Promise<Object>} Resolves with the response data or rejects with an error response.
         */
        async  storePlan(formData) {
            const url = `${this.prefix}/store-plan`;

            try {
                const response = await axiosInstance.post(url, formData);

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
         * ## Delete a plan.
         *
         * Asynchronously sends a POST request to delete a specific plan.
         * The plan ID is passed as a URL parameter.
         *
         * @param {number|string} planId - The ID of the plan to delete.
         * @returns {Promise<Object>} Resolves with the response data or rejects with an error response.
         */
        async  deletePlan(planId) {
            const url = `${this.prefix}/delete-plan/${planId}`;

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