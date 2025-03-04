/**
 * @fileOverview This file defines a Pinia store for managing store,show,search,view and delete user's favorite listings.
 *
 * @feature Store Name: `useFavoriteProperty`.
 *
 * @export The store is exported as `useFavoriteProperty` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date 3 Mar,2025
 */

import {defineStore} from "pinia";
import apiService from "@/services/apiService.js";
import axiosInstance from "@/services/axiosService.js";

export const useFavoriteProperty = defineStore('favorite_property', {
    state: () => ({
        properties:{},
        errors: {},
        loading: false,
        prefix:"/properties/favorites",
    }),
    getters: {
        getProperties: (state) => {
            return state.properties;
        },
    },
    actions: {
        /**
         * Fetches the user's favorite properties.
         *
         * @async
         * @return {Promise<Object>} A promise that resolves with the response containing favorite properties or rejects with an error.
         */
        async getUserFavoriteProperties() {
            let url = `${this.prefix}/get-user`;

            try {
                const response = await axiosInstance.get(url);
                this.properties = response.data.properties;

                return Promise.resolve(response);
            } catch (error) {
                this.errors = error.response || error;
                return Promise.reject(error.response);
            }
        },

        /**
         * Adds a property to the user's favorite list.
         *
         * @async
         * @param {number|string} propertyId - The ID of the property to add.
         * @return {Promise<Object>} A promise that resolves with the response or rejects with an error.
         */
        async  addPropertyToFavorite(propertyId) {
            const url = `${this.prefix}/store/${propertyId}`;

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

        /**
         * Removes a property from the user's favorite list.
         *
         * @async
         * @param {number|string} id - The ID of the favorite property to remove.
         * @return {Promise<Object>} A promise that resolves with the response or rejects with an error.
         */
        async  deleteFavoriteProperty(id) {
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