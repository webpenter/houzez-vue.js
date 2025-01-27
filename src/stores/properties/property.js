/**
 * @fileOverview This file defines a Pinia store for managing create,update,show,search,view and delete listings.
 *
 * @feature Store Name: `useProperty`.
 *
 * @export The store is exported as `useProperty` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date 25 Jan,2025
 */

import {defineStore} from "pinia";
import apiService from "@/services/apiService.js";
import axiosInstance from "@/services/axiosService.js";

export const useProperty = defineStore('property', {
    state: () => ({
        properties:{},
        property:{},
        errors: {},
        loading: false,
        prefix:"/properties",
    }),
    getters: {
        getProperties: (state) => {
            return state.properties;
        },
    },
    actions: {
        /**
         * @request Sends a POST request to the server with the given `formData` and `id`.
         * @usage Use this function to create a new resource or update an existing one. The `id` determines whether it's a creation (when null or a specific value) or an update (for an existing resource).
         * @param {FormData} formData - The form data containing the fields to create or update the resource.
         * @param {string|number|null} id - The ID of the resource to update. If not provided, a new resource is created.
         * @return {Promise} - A promise that resolves with the response if successful or rejects with the error response.
         */
        async  createOrUpdate(formData,id= null) {
            const url = `${this.prefix}/create-or-update${id ? `/${id}` : ''}`;

            try {
                const response = await apiService({
                    requiresAuth : true,
                    multipart : true,
                }).post(url, formData);

                console.log("Pinia Create or Update: ",response);
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
         * @usage: Call this method to fetch the property details for editing by providing the property ID.The fetched property details will be stored in the `this.property` variable.
         * @param {number|string} id - The unique identifier of the property to be fetched.
         * @returns {Promise<object>} A promise that resolves with the response object on success or rejects with the error response on failure.
         * @request Method: GET, URL: `${this.prefix}/edit/${id}`, Headers: Uses default Axios headers set in the `axiosInstance`.
         */
        async  edit(id) {
            const url = `${this.prefix}/edit/${id}`;
            try {
                const response = await axiosInstance.get(url);

                this.property = response.data.property;
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