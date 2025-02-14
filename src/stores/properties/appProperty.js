/**
 * @fileOverview This file defines a Pinia store for managing client side listings.
 *
 * @feature Store Name: `useAppProperty`.
 *
 * @export The store is exported as `useAppProperty` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date 15 Feb,2025
 */

import {defineStore} from "pinia";
import apiService from "@/services/apiService.js";
import axiosInstance from "@/services/axiosService.js";

export const useAppProperty = defineStore('appProperty', {
    state: () => ({
        featuredProperties:{},
        errors: {},
        loading: false,
        prefix:"/app/properties",
    }),
    getters: {},
    actions: {
        /**
         * @usage Fetch Featured Properties.Fetches properties with limit 3.
         * @returns {Promise} Resolves with response data or rejects with an error.
         */
        async getFeaturedProperties() {
            let url = `${this.prefix}/get-featured`;

            try {
                const response = await axiosInstance.get(url);
                this.featuredProperties = response.data.properties;

                return Promise.resolve(response);
            } catch (error) {
                this.errors = error.response || error;
                return Promise.reject(error.response);
            }
        },
    }
});