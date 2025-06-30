/**
 * @fileOverview This file defines a Pinia store for managing insights by user.
 *
 * @feature Store Name: `useInsight`.
 *
 * @export The store is exported as `useInsight` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date 06 May,2025
 */

import {defineStore} from "pinia";
import apiService from "@/services/apiService.js";
import axiosInstance from "@/services/axiosService.js";

export const useInsight = defineStore('insight', {
    state: () => ({
        properties: {},
        views: {},
        uniqueViews: {},
        chartStats: {},
        devicesStats: {},
        countriesStats: {},
        platformStats: {},
        browserStats: {},
        recentlyViewed: [], // ✅ ADD THIS
        loading: false,
        prefix:"/insights"
    }),
    getters: {},
    actions: {
        /**
         * Fetches detailed property view data by slug.
         *
         * @param {string} slug - The unique slug of the property.
         * @return {Promise<Object>} - The HTTP response from the server.
         */
        async propertyViews(slug) {
            const url = `/app/property/${slug}`;
            try {
                const response = await axiosInstance.get(url);
                return new Promise(resolve => resolve(response));
            } catch (error) {
                if (error.response.data) {
                    this.errors = error.response;
                }
                return new Promise((_, reject) => reject(error.response));
            }
        },

        /**
         * Fetches a list of properties for insight purposes.
         *
         * @return {Promise<Object>} - The HTTP response containing the properties.
         */
        async getInsightProperties() {
            const url = `${this.prefix}/properties`;
            try {
                const response = await axiosInstance.get(url);
                this.properties = response.data.data;
                return new Promise(resolve => resolve(response));
            } catch (error) {
                if (error.response.data) {
                    this.errors = error.response;
                }
                return new Promise((_, reject) => reject(error.response));
            }
        },

        /**
         * Fetches the number of views for a specific property.
         *
         * @param {number|string} id - The ID of the property.
         * @return {Promise<Object>} - The HTTP response with view data.
         */
        async getPropertyViews(id) {
            const url = `${this.prefix}/get-property-views/${id}`;
            try {
                const response = await axiosInstance.get(url);
                this.views = response.data.data;
                return new Promise(resolve => resolve(response));
            } catch (error) {
                if (error.response.data) {
                    this.errors = error.response;
                }
                return new Promise((_, reject) => reject(error.response));
            }
        },

        /**
         * Fetches unique view count for a specific property.
         *
         * @param {number|string} id - The ID of the property.
         * @return {Promise<Object>} - The HTTP response with unique view data.
         */
        async getPropertyUniqueViews(id) {
            const url = `${this.prefix}/get-property-unique-views/${id}`;
            try {
                const response = await axiosInstance.get(url);
                this.uniqueViews = response.data.data.views;
                return new Promise(resolve => resolve(response));
            } catch (error) {
                if (error.response.data) {
                    this.errors = error.response;
                }
                return new Promise((_, reject) => reject(error.response));
            }
        },

        /**
         * Fetches chart statistics for a specific property.
         *
         * @param {number|string} id - The ID of the property.
         * @return {Promise<Object>} - The HTTP response with chart statistics.
         */
        async getChartStats(id) {
            const url = `${this.prefix}/get-chart-stats/${id}`;
            try {
                const response = await axiosInstance.get(url);
                this.chartStats = response.data.data;
                return new Promise(resolve => resolve(response));
            } catch (error) {
                if (error.response.data) {
                    this.errors = error.response;
                }
                return new Promise((_, reject) => reject(error.response));
            }
        },

        /**
         * Fetches device usage statistics for a specific property.
         *
         * @param {number|string} id - The ID of the property.
         * @return {Promise<Object>} - The HTTP response with device stats.
         */
        async getDeviceStats(id) {
            const url = `${this.prefix}/get-devices-stats/${id}`;
            try {
                const response = await axiosInstance.get(url);
                this.devicesStats = response.data.data;
                return new Promise(resolve => resolve(response));
            } catch (error) {
                if (error.response.data) {
                    this.errors = error.response;
                }
                return new Promise((_, reject) => reject(error.response));
            }
        },

        /**
         * Fetches country-wise visit statistics for a specific property.
         *
         * @param {number|string} id - The ID of the property.
         * @return {Promise<Object>} - The HTTP response with country stats.
         */
        async getCountriesStats(id) {
            const url = `${this.prefix}/get-countries-stats/${id}`;
            try {
                const response = await axiosInstance.get(url);
                this.countriesStats = response.data.data;
                return new Promise(resolve => resolve(response));
            } catch (error) {
                if (error.response.data) {
                    this.errors = error.response;
                }
                return new Promise((_, reject) => reject(error.response));
            }
        },

        /**
         * Fetches platform usage statistics for a specific property.
         *
         * @param {number|string} id - The ID of the property.
         * @return {Promise<Object>} - The HTTP response with platform stats.
         */
        async getPlatformStats(id) {
            const url = `${this.prefix}/get-platform-stats/${id}`;
            try {
                const response = await axiosInstance.get(url);
                this.platformStats = response.data.data;
                return new Promise(resolve => resolve(response));
            } catch (error) {
                if (error.response.data) {
                    this.errors = error.response;
                }
                return new Promise((_, reject) => reject(error.response));
            }
        },

        /**
         * Fetches browser usage statistics for a specific property.
         *
         * @param {number|string} id - The ID of the property.
         * @return {Promise<Object>} - The HTTP response with browser stats.
         */
        async getBrowserStats(id) {
            const url = `${this.prefix}/get-browser-stats/${id}`;
            try {
                const response = await axiosInstance.get(url);
                this.browserStats = response.data.data;
                return new Promise(resolve => resolve(response));
            } catch (error) {
                if (error.response.data) {
                    this.errors = error.response;
                }
                return new Promise((_, reject) => reject(error.response));
            }
        },


        // ✅ Recently Viewed Properties
        async getRecentlyViewed(slug) {
            try {
                const res = await axiosInstance.get(`/demo01/properties/recently-viewed/${slug}`);
                this.recentlyViewed = res.data.properties;
            } catch (error) {
                console.error('Failed to fetch recently viewed properties:', error);
            }
        }


    }
});