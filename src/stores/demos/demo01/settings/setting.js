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
        socialMedia: {}, // raw API response
        loading: false,
        errors: null,
         initialized: false, // ✅ added
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

        async initSettings() {
      this.loading = true;
      this.errors = null;
      try {
        // ✅ Parallel API calls (logo + banner + social links ek sath)
        const [logoRes, bannerRes, socialRes] = await Promise.all([
          axiosInstance.get(`${this.baseUrl}/get-logo`),
          axiosInstance.get(`${this.baseUrl}/get-banner`),
          axiosInstance.get(`${this.baseUrl}/social-media`)
        ]);

        this.logo = logoRes.data.logo ?? "";
        this.banner = bannerRes.data.banner ?? "";
        this.socialMedia = socialRes.data.social_media ?? {};

        this.initialized = true; // ✅ mark as ready
      } catch (error) {
        this.errors = error.response || error;
        throw error;
      } finally {
        this.loading = false;
      }
    },
  
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
        }
    }
});
