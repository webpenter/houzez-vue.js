/**
 * @fileOverview This file defines a Pinia store for managing store,get,view and delete user's searches.
 *
 * @feature Store Name: `useSavedSearch`.
 *
 * @export The store is exported as `useSavedSearch` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date 7 Mar,2025
 */

import {defineStore} from "pinia";
import apiService from "@/services/apiService.js";
import axiosInstance from "@/services/axiosService.js";

export const useSavedSearch = defineStore('saved_search', {
    state: () => ({
        searches:{},
        errors: {},
        loading: false,
        prefix:"/saved-searches",
    }),
    getters: {},
    actions: {
        /**
         * Fetches user searches from the server.
         *
         * @returns {Promise<Object>} Resolves with the server response containing user searches,
         *                            or rejects with the error response.
         */
        async getUserSearches() {
            let url = `${this.prefix}/get-user`;

            try {
                const response = await axiosInstance.get(url);
                this.searches = response.data.searches;

                return Promise.resolve(response);
            } catch (error) {
                this.errors = error.response || error;
                return Promise.reject(error.response);
            }
        },

        /**
         * Stores a new search on the server.
         *
         * @param {Object} parameters - The search parameters to be stored.
         * @returns {Promise<Object>} Resolves with the server response upon successful storage,
         *                            or rejects with the error response.
         */
        async  storeSearch(parameters) {
            const url = `${this.prefix}/store`;

            try {
                const response = await axiosInstance.post(url, parameters);

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
         * Deletes a specific search by its ID.
         *
         * @param {number|string} id - The ID of the search to delete.
         * @returns {Promise<Object>} Resolves with the server response upon successful deletion,
         *                            or rejects with the error response.
         */
        async  deleteSearch(id) {
            const url = `${this.prefix}/delete/${id}`;

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