/**
 * @fileOverview This file defines a Pinia store for managing agency-related data.
 *
 * @feature Store Name: `useAgency`.
 *
 * @export The store is exported as `useAgency` for use in agency-related modules.
 *
 * @author https://webpenter.com
 * @date 17 July, 2025
 */

import { defineStore } from 'pinia';
import axiosInstance from '@/services/axiosService.js';

export const useAgency = defineStore('agency', {
    state: () => ({
        allAgencies: [],
        agency: [],
        errors: {},
        loading: false,
        prefix: '/demo01',
    }),
    getters: {},
    actions: {
        /**
         * ## Fetch all agencies
         * @returns {Promise}
         */
        async getAllAgencies() {
            this.loading = true;
            try {
                const response = await axiosInstance.get(`${this.prefix}/agencies`);
                this.allAgencies = response.data.data;
                this.loading = false;
                return Promise.resolve(response);
            } catch (error) {
                this.loading = false;
                this.errors = error.response || error;
                return Promise.reject(error.response);
            }
        },

        /**
         * ## Fetch single agency by username.
         * @param {string} username - Agency username.
         * @returns {Promise}
         */
        async getAgencyByUsername(username) {
            this.loading = true;
            try {
                const response = await axiosInstance.get(`${this.prefix}/agency/${username}`);
                this.agency = response.data.data;
                this.loading = false;
                return Promise.resolve(response);
            } catch (error) {
                this.loading = false;
                this.errors = error.response || error;
                return Promise.reject(error.response);
            }
        },

         /**
         * Fetches reviews for a specific agency.
         *
         * @param {number|string} agencyId - The ID of the agency to fetch reviews for.
         * @return {Promise} Resolves with the response containing the reviews or rejects with an error response.
         */
        async fetchReviews(agencyId) {

            try {
                const response = await axiosInstance.get(`${this.prefix}/agency/reviews/${agencyId}`);
                this.reviews = response.data;
                // console.log('Reviews hhhh fetched successfully:', this.reviews);
                return Promise.resolve(response);
            } catch (error) {
                this.errors = error.response || error;
                return Promise.reject(error.response);
            }
        },

        /**
         * Adds a new review and refreshes the review list.
         *
         * @param {Object} reviewData - The review data object to be submitted.
         * @param {number|string} reviewData.agency_id - The ID of the agency being reviewed.
         * @param {string} reviewData.title - The title of the review.
         * @param {number} reviewData.rating - The numeric rating.
         * @param {string} reviewData.comment - The comment text.
         * @return {Promise} Resolves with the response after submitting the review or rejects with an error response.
         */
        async addReview(reviewData) {
            const url = `/agency/reviews/store`;

            try {
                const response = await axiosInstance.post(url, reviewData);

                // Clear any previous errors
                this.errors = {};

                // Fetch updated reviews
                await this.fetchReviews(reviewData.agency_id);

                return response;
            } catch (error) {
                if (error.response?.status === 422) {
                    // Set validation errors
                    this.errors = error.response;
                } else {
                    console.error('Unexpected error:', error);
                }

                throw error.response; // Let the component catch and handle it
            }
        },

        /**
         * ## Fetch single agency by username and their properties.
         * @param {string} username - Agency username.
         * @returns {Promise}
         */
        async getAgencyProperties(username) {
            this.loading = true;
            try {
                const response = await axiosInstance.get(`${this.prefix}/agency/${username}/properties`);
                this.agency = response.data;
                this.loading = false;
                return Promise.resolve(response);
            } catch (error) {
                this.loading = false;
                this.errors = error.response || error;
                return Promise.reject(error.response);
            }
        },
        
    }
});
