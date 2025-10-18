/**
 * @fileOverview This file defines a Pinia store for managing create, update, show, view, and delete Email Templates.
 *
 * @feature Store Name: `useEmailTemplates`.
 *
 * @export The store is exported as `useEmailTemplates` for use in all Email Template modules throughout the application.
 *
 * @author https://webpenter.com
 * @date 18 Oct,2025
 */

import { defineStore } from "pinia";
import apiService from "@/services/apiService.js";
import axiosInstance from "@/services/axiosService.js";

export const useEmailTemplates = defineStore("emailTemplates", {
    state: () => ({
        templates: [],
        template: {},
        errors: {},
        loading: false,
        prefix: "/email-management/templates",
        templateCounts: {
            all: 0,
            active: 0,
            inactive: 0,
        },
    }),

    getters: {
        getTemplates: (state) => state.templates,
        getTemplate: (state) => state.template,
        getTemplateCounts: (state) => state.templateCounts,
    },

    actions: {
        /**
         * @usage Fetch all email templates (no search query here).
         * @returns {Promise}
         */
        async getAllTemplates() {
            const url = `${this.prefix}`;
            this.loading = true;

            try {
                const response = await axiosInstance.get(url);
                this.templates = response.data.data;
                this.loading = false;
                return Promise.resolve(response);
            } catch (error) {
                this.loading = false;
                this.errors = error.response;
                return Promise.reject(error.response);
            }
        },

        /**
         * @usage Get a specific email template by ID
         * @param {number|string} id
         * @returns {Promise}
         */
        async show(id) {
            const url = `${this.prefix}/${id}`;
            try {
                const response = await axiosInstance.get(url);
                this.template = response.data.data;
                return Promise.resolve(response);
            } catch (error) {
                this.errors = error.response;
                return Promise.reject(error.response);
            }
        },

        /**
         * @usage Create or update email template
         * @param {FormData|Object} formData
         * @param {number|null} id
         * @returns {Promise}
         */
        async createOrUpdate(formData, id = null) {
            const url = `${this.prefix}${id ? `/${id}` : ""}`;
            const method = id ? "put" : "post";

            try {
                const response = await apiService({
                    requiresAuth: true,
                })[method](url, formData);

                return Promise.resolve(response);
            } catch (error) {
                this.errors = error.response;
                return Promise.reject(error.response);
            }
        },

        /**
         * @usage Delete an email template
         * @param {number|string} id
         * @returns {Promise}
         */
        async deleteTemplate(id) {
            const url = `${this.prefix}/${id}`;
            try {
                const response = await axiosInstance.delete(url);
                return Promise.resolve(response);
            } catch (error) {
                this.errors = error.response;
                return Promise.reject(error.response);
            }
        },

        /**
         * @usage Change the status of an email template
         * @param {number|string} id
         * @param {boolean} status
         * @returns {Promise}
         */
        async updateStatus(id, status) {
            const url = `${this.prefix}/${id}/status`;
            try {
                const response = await axiosInstance.put(url, { is_active: status });
                return Promise.resolve(response);
            } catch (error) {
                this.errors = error.response;
                return Promise.reject(error.response);
            }
        },

        /**
         * @usage Get count of templates based on status
         * @returns {Promise}
         */
        async fetchTemplateCounts() {
            try {
                const response = await axiosInstance.get(`${this.prefix}`);
                const templates = response.data.data;

                this.templateCounts = {
                    all: templates.length,
                    active: templates.filter((t) => t.is_active).length,
                    inactive: templates.filter((t) => !t.is_active).length,
                };

                return Promise.resolve(this.templateCounts);
            } catch (error) {
                this.errors = error.response;
                return Promise.reject(error.response);
            }
        },
    },
});
