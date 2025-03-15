/**
 * @fileOverview This file defines a Pinia store for managing create,update,show,view and delete settings.
 *
 * @feature Store Name: `useGeneralSettings`.
 *
 * @export The store is exported as `useGeneralSettings` for use throughout the application.
 *
 * @author https://webpenter.com            //Naraish Kumar
 * @date 08 March,2025
 */

import {defineStore} from "pinia";
import apiService from "@/services/apiService.js";
import axiosInstance from "@/services/axiosService.js";

export const useGeneralSettings = defineStore('settings', {
    state: () => ({
        generalSettings: {},
        errors: {},
        loading: false,
        prefix: "/settings",
    }),
    getters: {
        getGeneralSettings: (state) => state.generalSettings,
    },
    actions: {
        async fetchSettings() {
            try {
                const response = await axiosInstance.get(`${this.prefix}/general`);
                this.generalSettings = response.data;
                return response;
            } catch (error) {
                console.error("Error fetching settings:", error);
            }
        },

        async createOrUpdateSettings(formData) {
            const url = `${this.prefix}/general`;
            let data = new FormData();

            // Append all fields
            Object.keys(formData).forEach((key) => {
                if (formData[key] !== null && formData[key] !== "") {
                    data.append(key, formData[key]);
                }
            });

            try {
                const response = await apiService({ requiresAuth: true, multipart: true }).post(url, data);
                return response;
            } catch (error) {
                this.errors = error.response?.data || {};
                throw error;
            }
        },
    }
});
