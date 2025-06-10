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
        checkSearchSaved: false,
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
         * Store or remove a saved search based on existence.
         * @param {string} parameters
         * @returns {Promise<Response>}
         */
        async storeOrRemoveSearch(parameters) {
            const url = `${this.prefix}/store-or-remove`;

            try {
                const response = await axiosInstance.post(url, { parameters }); // ✅ Send plain string
                return response;
            } catch (error) {
                if (error.response?.data) {
                    this.errors = error.response;
                }
                throw error.response;
            }
        },

        /**
         * Check if a search is already saved for the user.
         * @param {string} parameters
         * @returns {Promise<boolean>}
         */
        async isSearchSaved(parameters) {
            const url = `${this.prefix}/is-saved`;
            try {
                const response = await axiosInstance.post(url, { parameters });
                this.checkSearchSaved = response.data.isSaved;

                return Promise.resolve(response);
            } catch (error) {
                this.errors = error.response || error;
                return Promise.reject(error.response);
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