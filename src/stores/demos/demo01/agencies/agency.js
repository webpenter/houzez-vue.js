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
        
    }
});
