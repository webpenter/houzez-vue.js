/**
 * @fileOverview This file defines a Pinia store for managing frontend settings.
 *
 * @feature Store Name: `useAppSettings`.
 *
 * @export The store is exported as `useAppSettings` for use to show website details.
 *
 * @author https://webpenter.com
 * @date 24 Feb, 2025
 */

import { defineStore } from "pinia";
import axiosInstance from "@/services/axiosService.js";

export const useAppSettings = defineStore('appSettings', {
    state: () => ({
        generalSettings: {
            site_address: '',
            contact_number: '',
            email_address: ''
        }, // ✅ Default values added
        errors: {},
        loading: false,
        prefix: "/settings",
    }),
    getters: {},
    actions: {
        /**
         * ## Get General Settings
         *
         * Asynchronously fetches general settings for the website.
         *
         * @returns {Promise} Resolves with response data or rejects with an error.
         */
        async getGeneralSettings() {
            this.loading = true;
            let url = `${this.prefix}/general`;
            try {
                const response = await axiosInstance.get(url);
                console.log("Fetched General Settings:", response.data); // 👀 Debug log
                this.generalSettings = response.data.settings;
                this.loading = false;
                return Promise.resolve(response);
            } catch (error) {
                this.errors = error.response || error;
                console.error("Failed to fetch settings:", error); // ⚡ Error log
                this.loading = false;
                return Promise.reject(error.response);
            }
        }
    }
});
