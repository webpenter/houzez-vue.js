/**
 * @fileOverview This file defines a Pinia store for managing tour-requests according to listings.
 *
 * @feature Store Name: `useTourRequest`.
 *
 * @export The store is exported as `useTourRequest` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date 25 Jan,2025
 */

import {defineStore} from "pinia";
import apiService from "@/services/apiService.js";
import axiosInstance from "@/services/axiosService.js";

export const useTourRequest = defineStore('tour_request', {
    state: () => ({
        userMessages:{},
        userMessageDetails:{},
        replies:{},
        errors: {},
        loading: false,
        prefix:"/tour-requests",
    }),
    getters: {},
    actions: {

        /**
         * Fetches user messages from the API.
         * @returns {Promise} A promise that resolves with the API response or rejects with an error.
         */
        async showUserMessages() {
            let url = `${this.prefix}/show`;

            try {
                const response = await axiosInstance.get(url);
                this.userMessages = response.data;

                return Promise.resolve(response);
            } catch (error) {
                this.errors = error.response || error;
                return Promise.reject(error.response);
            }
        },

        /**
         * Sends a request with the provided form data.
         * @param {Object} formData - The form data to send.
         * @returns {Promise} A promise that resolves with the response or rejects with an error.
         */
        async sendRequest(formData) {
            const url = `${this.prefix}/send`;

            try {
                const response = await axiosInstance.post(url, formData);

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

        /**
         * Deletes a message by its ID.
         * @param {number|string} msgId - The ID of the message to delete.
         * @returns {Promise} A promise that resolves with the response or rejects with an error.
         */
        async deleteMessage(msgId) {
            const url = `${this.prefix}/delete/${msgId}`;

            try {
                const response = await axiosInstance.post(url);

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

        /**
         * Fetches the details of a specific user message.
         * @param {number|string} msgId - The ID of the message.
         * @returns {Promise} A promise that resolves with the message details or rejects with an error.
         */
        async showUserMessageDetail(msgId) {
            let url = `${this.prefix}/details/${msgId}`;

            try {
                const response = await axiosInstance.get(url);
                this.userMessageDetails = response.data;
                return response;
            } catch (error) {
                if (error.response) {
                    return error.response;
                } else {
                    throw new Error("An unexpected error occurred");
                }
            }
        },

        /**
         * Sends a reply to a tour request.
         * @param {number|string} tourRequestId - The ID of the tour request.
         * @param {string} message - The reply message.
         * @returns {Promise} A promise that resolves with the response or rejects with an error.
         */
        async sendReply(tourRequestId, message) {
            const url = `${this.prefix}/reply`;

            try {
                const response = await axiosInstance.post(url, {
                    tour_request_id: tourRequestId,
                    message: message
                });

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

        /**
         * Fetches replies for a specific tour request.
         * @param {number|string} tourRequestId - The ID of the tour request.
         * @returns {Promise} A promise that resolves with the replies data or rejects with an error.
         */
        async fetchReplies(tourRequestId) {
            let url = `${this.prefix}/${tourRequestId}/replies`;

            try {
                const response = await axiosInstance.get(url);
                this.replies = response.data.data;

                return Promise.resolve(response);
            } catch (error) {
                this.errors = error.response || error;
                return Promise.reject(error.response);
            }
        },

    }
});