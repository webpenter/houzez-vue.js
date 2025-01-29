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
        propertyImages:{},
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

        /**
         * @usage Asynchronously uploads or updates images for a specific property.Sends a POST request with image data to the server, handles progress tracking, and returns the server response. Handles errors gracefully.
         * @param {FormData} formData - The form data containing images to be uploaded. {number} propertyId - The ID of the property for which images are uploaded. {function} onUploadProgress - A callback function to track upload progress.
         * @returns {Promise} A promise that resolves with the server response or rejects with an error response.
         */
        async  imagesCreateOrUpdate(formData,propertyId,onUploadProgress) {
            const url = `${this.prefix}/images/create-or-update/${propertyId}`;

            try {
                const response = await apiService({
                    requiresAuth : true,
                    multipart : true,
                    onUploadProgress: onUploadProgress,
                }).post(url, formData);

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
         * @usage Asynchronously retrieves images for editing associated with a specific property.
         * @request Sends a GET request to fetch all images for the given property ID, updates the local, propertyImages state, and handles any errors during the process.
         * @param {number} propertyId - The ID of the property whose images are to be retrieved.
         * @returns {Promise} A promise that resolves with the server response or rejects with an error response.
         */
        async  editImages(propertyId) {
            const url = `${this.prefix}/images/edit/${propertyId}`;

            try {
                const response = await axiosInstance.get(url);

                this.propertyImages = response.data.images;
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
         * @usage Asynchronously updates the thumbnail image for a specific property.
         * @request Sends a POST request to the API endpoint with the given propertyId and imgId. Handles success by logging the response and resolving the promise. Handles failure by logging the error response and rejecting the promise.
         * @param {number} propertyId The ID of the property to update the thumbnail for. {number} imgId The ID of the image to set as the thumbnail.
         * @returns {Promise} Resolves with the response on success, rejects with the error on failure.
         */
        async  updateThumbnail(propertyId,imgId) {
            const url = `${this.prefix}/thumbnail/update/${propertyId}/${imgId}`;

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
         * @usage Asynchronously delete an image from a property.
         * @request This method sends a DELETE request to the server to remove an image from the specified property. It also handles errors and returns the server response or error response.
         * @param {int} propertyId - The ID of the property the image belongs to. {int} imgId - The ID of the image to be deleted.
         * @returns {Promise} - Resolves with the response or rejects with the error response.
         */
        async  deleteImage(propertyId,imgId) {
            const url = `${this.prefix}/image/delete/${propertyId}/${imgId}`;

            try {
                const response = await axiosInstance.post(url);

                console.log(response)
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