/**
 * @fileOverview This file defines a Pinia store for managing client side listings demo01 properties.
 *
 * @feature Store Name: `useAppProperty`.
 *
 * @export The store is exported as `useAppProperty` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date 18 june, 2025
 */

import {defineStore} from "pinia";
import apiService from "@/services/apiService.js";
import axiosInstance from "@/services/axiosService.js";

export const useAppPropertyDemo01 = defineStore('appPropertyDemo01', {
    state: () => ({
        featuredProperties:{},
        latestProperties:{},
        searchedAndFilteredProperties:{},
        allProperties:{},
        property:{},
        errors: {},
        loading: false,
        prefix:"/demo01/properties",
    }),
    getters: {},
    actions: {
        /**
         * ## Get Featured Properties
         *
         * Asynchronously fetches featured properties.
         * Makes a GET request to retrieve properties marked as "featured".
         *
         * @returns {Promise} Resolves with response data or rejects with an error.
         */
        async getFeaturedPropertiesDemo01() {
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

        /**
         * ## Get Latest Properties
         *
         * Asynchronously fetches latest properties.
         * Makes a GET request to retrieve latest properties.
         *
         * @returns {Promise} Resolves with response data or rejects with an error.
         */
        async getLatestPropertiesDemo01() {
            let url = `${this.prefix}/get-latest`;

            try {
                const response = await axiosInstance.get(url);
                this.latestProperties = response.data.properties;

                return Promise.resolve(response);
            } catch (error) {
                this.errors = error.response || error;
                return Promise.reject(error.response);
            }
        },

        /**
         * ## Get Searched and Filtered Properties
         *
         * Asynchronously fetches properties based on the provided filters.
         * Makes a GET request with query parameters for search, property types, city, bedrooms, and price.
         *
         * @param {Object} formData - The form data containing search and filter criteria.
         * @param {string} formData.search - The search term to filter properties by title.
         * @param {Array} formData.types - Array of property types to filter.
         * @param {string} formData.city - The city to filter properties by.
         * @param {string|number} formData.bedrooms - Maximum number of bedrooms to filter (can be 'any').
         * @param {string|number} formData.maxPrice - Maximum price to filter (can be 'any').
         * @returns {Promise} Resolves with response data or rejects with an error.
         */
        async getSearchedAndFilteredPropertiesDemo01(formData) {
            let url = `${this.prefix}/get-searched-and-filtered`;

            try {
                const response = await axiosInstance.get(url,{
                    params: {
                        search: formData.search,
                        propertyTypes: formData.types,
                        cities: formData.cities,
                        maxBedrooms: formData.bedrooms,
                        maxPrice: formData.maxPrice
                    }
                });
                this.searchedAndFilteredProperties = response.data.properties;

                return Promise.resolve(response);
            } catch (error) {
                this.errors = error.response || error;
                return Promise.reject(error.response);
            }
        },

        /**
         * ## Fetch all properties based on the provided filter criteria.
         *
         * Asynchronously fetches properties based on the provided filters.
         * Makes a GET request with query parameters for search, property types, city, bedrooms, and price.
         *
         * @param {Object} formData - The form data containing search and filter criteria.
         * @param {string} formData.search - The search term to filter properties by title.
         * @param {Array} formData.types - Array of property types to filter.
         * @param {string} formData.city - The city to filter properties by.
         * @param {string|number} formData.bedrooms - Maximum number of bedrooms to filter (can be 'any').
         * @param {string|number} formData.maxPrice - Maximum price to filter (can be 'any').
         * @returns {Promise} Resolves with response data or rejects with an error.
         */
        async getAllPropertiesDemo01(formData) {
            let url = `${this.prefix}/get-all`;

            try {
                const response = await axiosInstance.get(url,{
                    params: {
                        search: formData.search,
                        propertyTypes: formData.types,
                        city: formData.city,
                        maxBedrooms: formData.bedrooms,
                        maxPrice: formData.maxPrice
                    }
                });
                this.allProperties = response.data.properties;

                return Promise.resolve(response);
            } catch (error) {
                this.errors = error.response || error;
                return Promise.reject(error.response);
            }
        },

        /**
         * ## Fetches property data based on the provided slug.
         *
         * @param {string} slug - The unique identifier for the property.
         * @returns {Promise} - Resolves with the response data or rejects with an error response.
         */
        async getPropertyDemo01(slug) {
            let url = `${this.prefix}/get-property/${slug}`;

            try {
                const response = await axiosInstance.get(url);
                this.property = response.data.property;

                return Promise.resolve(response);
            } catch (error) {
                this.errors = error.response || error;
                return Promise.reject(error.response);
            }
        },
    }
});