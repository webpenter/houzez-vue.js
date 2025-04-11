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

import {defineStore} from "pinia";
import apiService from "@/services/apiService.js";
import axiosInstance from "@/services/axiosService.js";

export const useReview = defineStore('review', {
    state: () => ({
        reviews:[],
        errors: {},
        loading: false,
    }),
    getters: {},
    actions: {

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

        async addReview(reviewData) {
            const url = `/reviews/store`;

            try {
                const response = await axiosInstance.post(url, reviewData);

                this.fetchReviews(reviewData.property_id);

                return new Promise(resolve => {
                    resolve(response);
                });
            } catch (error) {
                if (error.response.data) {
                    this.errors = error.response;
                }
                return new Promise(reject => {
                    reject(error.response);
                });
            }
        },

    }
});