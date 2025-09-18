/**
 * @fileOverview Pinia store for managing application settings like Logo, Banner, and Social Media Links.
 *
 * @feature Store Name: `settings`
 * @export useSetting
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
        stripe: {},
        contact: {},
        email: {}, 
        seo: {},
        loading: false,
        errors: null,
        baseUrl: "/settings"
    }),

    getters: {
        /**
         * Returns normalized social media links object for frontend usage
         * Example: { facebook: "https://...", twitter: "https://..." }
         */
        socialLinks: (state) => ({
            facebook: state.socialMedia?.facebook || "",
            instagram: state.socialMedia?.instagram || "",
            twitter: state.socialMedia?.twitter || "",
            linkedin: state.socialMedia?.linkedin || "",
            googleplus: state.socialMedia?.googleplus || "",
            youtube: state.socialMedia?.youtube || "",
            pinterest: state.socialMedia?.pinterest || "",
            vimeo: state.socialMedia?.vimeo || "",
            skype: state.socialMedia?.skype || "",
        }),
    },

    actions: {
        /**
         * Fetch Logo
         */
        async getLogo() {
            this.loading = true;
            this.errors = null;
            try {
                const res = await axiosInstance.get(`${this.baseUrl}/get-logo`);
                this.logo = res.data.logo ?? "";
                return res;
            } catch (error) {
                this.errors = error.response || error;
                throw error.response || error;
            } finally {
                this.loading = false;
            }
        },

        /**
         * Update Logo
         * @param {FormData} formData - contains logo file
         */
        async updateLogo(formData) {
            this.errors = null;
            try {
                const res = await axiosInstance.post(
                    `${this.baseUrl}/update-logo`,
                    formData,
                    { headers: { "Content-Type": "multipart/form-data" } }
                );
                this.logo = res.data.logo ?? this.logo;
                return res;
            } catch (error) {
                this.errors = error.response || error;
                throw error.response || error;
            }
        },

        /**
         * Fetch Banner
         */
        async getBanner() {
            this.loading = true;
            this.errors = null;
            try {
                const res = await axiosInstance.get(`${this.baseUrl}/get-banner`);
                this.banner = res.data.banner ?? "";
                return res;
            } catch (error) {
                this.errors = error.response || error;
                throw error.response || error;
            } finally {
                this.loading = false;
            }
        },

        /**
         * Update Banner
         * @param {FormData} formData - contains banner file
         */
        async updateBanner(formData) {
            this.errors = null;
            try {
                const res = await axiosInstance.post(
                    `${this.baseUrl}/update-banner`,
                    formData,
                    { headers: { "Content-Type": "multipart/form-data" } }
                );
                this.banner = res.data.banner ?? this.banner;
                return res;
            } catch (error) {
                this.errors = error.response || error;
                throw error.response || error;
            }
        },

        /**
         * Fetch Social Media Links
         */
        async getSocialMedia() {
            this.loading = true;
            this.errors = null;
            try {
                const res = await axiosInstance.get(`${this.baseUrl}/social-media`);
                this.socialMedia = res.data.social_media ?? {};
                return res;
            } catch (error) {
                this.errors = error.response || error;
                throw error.response || error;
            } finally {
                this.loading = false;
            }
        },

        /**
         * Update Social Media Links
         * @param {Object} payload - object of social links
         */
        async updateSocialMedia(payload) {
            this.errors = null;
            try {
                const res = await axiosInstance.post(
                    `${this.baseUrl}/update-social-media`,
                    payload
                );
                this.socialMedia = res.data.social_media ?? this.socialMedia;
                return res;
            } catch (error) {
                this.errors = error.response || error;
                throw error.response || error;
            }
        },

        /**
         * Fetch Site Information
         */
        async getSiteInformation() {
            this.loading = true;
            this.errors = null;
            try {
                const res = await axiosInstance.get(`${this.baseUrl}/site-information`);
                return res;
            } catch (error) {
                this.errors = error.response || error;
                throw error.response || error;
            } finally {
                this.loading = false;
            }
        },


        /**
         * Update Site Information
         * @param {Object} payload
         */
        async updateSiteInformation(payload) {
            this.errors = null;
            try {
                const res = await axiosInstance.post(
                    `${this.baseUrl}/update-site-information`,
                    payload
                );
                return res;
            } catch (error) {
                this.errors = error.response || error;
                throw error.response || error;
            }
        },

        /**
         * Stripe keys Information
         */
        async getStripeSettings() {
            this.loading = true;
            this.errors = null;
            try {
                const res = await axiosInstance.get(`${this.baseUrl}/stripe`);
                this.stripe = res.data.stripe ?? {};
                return res;
            } catch (error) {
                this.errors = error.response || error;
                throw error.response || error;
            } finally {
                this.loading = false;
            }
        },


        /**
         * Stripe keys update
         * @param {Object} payload
         */
        async updateStripeSettings(payload) {
            this.errors = null;
            try {
                const res = await axiosInstance.post(
                `${this.baseUrl}/update-stripe`,
                payload
                );
                this.stripe = res.data.stripe ?? this.stripe;
                return res;
            } catch (error) {
                this.errors = error.response || error;
                throw error.response || error;
            }
        },

        /**
         * Get Contact Settings
         */
        async getContactSettings() {
            this.loading = true;
            this.errors = null;
            try {
                const res = await axiosInstance.get(`${this.baseUrl}/contact`);
                this.contact = res.data.contact ?? {};
                return res;
            } catch (error) {
                this.errors = error.response || error;
                throw error.response || error;
            } finally {
                this.loading = false;
            }
        },

        /**
         * Update Contact Settings
         * @param {Object} payload
         */
        async updateContactSettings(payload) {
            this.errors = null;
            try {
                const res = await axiosInstance.post(
                `${this.baseUrl}/update-contact`,
                payload
                );
                this.contact = res.data.contact ?? this.contact;
                return res;
            } catch (error) {
                this.errors = error.response || error;
                throw error.response || error;
            }
        },

        /**
         * Get Email Settings
         * @param {Object} payload
         */
        async getEmailSettings() {
            this.loading = true;
            this.errors = null;
            try {
                const res = await axiosInstance.get(`${this.baseUrl}/email`);
                this.email = res.data.email_settings ?? {};
                return res;
            } catch (error) {
                this.errors = error.response || error;
                throw error.response || error;
            } finally {
                this.loading = false;
            }
        },

        /**
         * Update Email Settings
         * @param {Object} payload
         */
        async updateEmailSettings(payload) {
            this.errors = null;
            try {
                const res = await axiosInstance.post(
                `${this.baseUrl}/update-email`,
                payload
                );
                this.email = res.data.email_settings ?? this.email;
                return res;
            } catch (error) {
                this.errors = error.response || error;
                throw error.response || error;
            }
        },

        /**
         * Get SEO Settings
         */
        async getSeo() {
            this.loading = true;
            this.errors = null;
            try {
                const res = await axiosInstance.get(`${this.baseUrl}/seo`);
                this.seo = res.data.seo ?? {};
                return res;
            } catch (error) {
                this.errors = error.response || error;
                throw error.response || error;
            } finally {
                this.loading = false;
            }
        },

        /**
         * Update SEO Settings
         * @param {Object} payload
         */
        async updateSeo(payload) {
            this.errors = null;
            try {
                const res = await axiosInstance.post(`${this.baseUrl}/update-seo`, payload);
                this.seo = payload;
                return res;
            } catch (error) {
                this.errors = error.response || error;
                throw error.response || error;
            }
        },

    }
});
