/**
 * @fileOverview This file defines a Pinia store for managing reviews according to listings.
 *
 * @feature Store Name: `useReview`.
 *
 * @export The store is exported as `useReview` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date 28 Mar,2025
 */

import { defineStore } from "pinia";
import apiService from "@/services/apiService.js";
import axiosInstance from "@/services/axiosService.js";

export const useReview = defineStore('review', {
    state: () => ({
        reviews: [],
        errors: {},
        loading: false,
    }),
    getters: {},
    actions: {
        /**
         * Fetches reviews for a specific property.
         *
         * @param {number|string} propertyId - The ID of the property to fetch reviews for.
         * @return {Promise} Resolves with the response containing the reviews or rejects with an error response.
         */
        async fetchReviews(propertyId) {
            let url = `/app/reviews/show/${propertyId}`;

            try {
                const response = await axiosInstance.get(url);
                this.reviews = response.data;

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
         * @param {number|string} reviewData.property_id - The ID of the property being reviewed.
         * @param {string} reviewData.title - The title of the review.
         * @param {number} reviewData.rating - The numeric rating.
         * @param {string} reviewData.comment - The comment text.
         * @return {Promise} Resolves with the response after submitting the review or rejects with an error response.
         */
        async addReview(reviewData) {
            const url = `/reviews/store`;

            try {
                const response = await axiosInstance.post(url, reviewData);

                // Clear any previous errors
                this.errors = {};

                // Fetch updated reviews
                await this.fetchReviews(reviewData.property_id);

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
        }

    }
});