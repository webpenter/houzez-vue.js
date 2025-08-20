/**
 * @fileOverview This file defines a Pinia store for managing app settings (Logo).
 *
 * @feature Store Name: `setting`.
 *
 * @export The store is exported as `useSetting` for settings of app.
 *
 * @author https://webpenter.com
 * @date 19 Aug, 2025
 */

import { defineStore } from "pinia";
import axiosInstance from "@/services/axiosService.js";

export const useSetting = defineStore("settings", {
    state: () => ({
        logo: "",
        banner: "",
        socialMedia: {},
        loading: false,
        errors: null,
        baseUrl: "/settings"
    }),

    actions: {
        async getLogo() {
            try {
                this.loading = true;
                const res = await axiosInstance.get(`${this.baseUrl}/get-logo`);
                this.logo = res.data.logo ?? "";
                this.loading = false;
                return res;
            } catch (error) {
                this.errors = error.response || error;
                this.loading = false;
                throw error.response || error;
            }
        },

        async updateLogo(formData) {
            try {
                const res = await axiosInstance.post(`${this.baseUrl}/update-logo`, formData, {
                    headers: { "Content-Type": "multipart/form-data" }
                });
                this.logo = res.data.logo ?? this.logo;
                return res;
            } catch (error) {
                this.errors = error.response || error;
                throw error.response || error;
            }
        },

        async getBanner() {
            try {
                this.loading = true;
                const res = await axiosInstance.get(`${this.baseUrl}/get-banner`);
                this.banner = res.data.banner ?? "";
                this.loading = false;
                return res;
            } catch (error) {
                this.errors = error.response || error;
                this.loading = false;
                throw error.response || error;
            }
        },

        async updateBanner(formData) {
            try {
                const res = await axiosInstance.post(`${this.baseUrl}/update-banner`, formData, {
                    headers: { "Content-Type": "multipart/form-data" }
                });
                this.banner = res.data.banner ?? this.banner;
                return res;
            } catch (error) {
                this.errors = error.response || error;
                throw error.response || error;
            }
        },

        async getSocialMedia() {
            try {
                this.loading = true;
                const res = await axiosInstance.get(`${this.baseUrl}/social-media`);
                this.socialMedia = res.data.social_media ?? {};
                this.loading = false;
                return res;
            } catch (error) {
                this.errors = error.response || error;
                this.loading = false;
                throw error.response || error;
            }
        },

        async updateSocialMedia(payload) {
            try {
                const res = await axiosInstance.post(`${this.baseUrl}/update-social-media`, payload);
                this.socialMedia = res.data.social_media ?? this.socialMedia;
                return res;
            } catch (error) {
                this.errors = error.response || error;
                throw error.response || error;
            }
        }
    }
});

