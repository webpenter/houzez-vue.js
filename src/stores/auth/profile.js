/**
 * @fileOverview This file defines a Pinia store for managing user profile and modification.
 *
 * @feature Store Name: `userProfile`.
 *
 * @export The store is exported as `useProfile` for use in auth user information.
 *
 * @author https://webpenter.com
 * @date 13 Jan,2025
 */

import {defineStore} from "pinia";
import axiosInstance from "@/services/axiosService.js";

export const useProfile = defineStore("userProfile", {
    state: () => ({
        profile: {},
        profilePicture:"",
        socialMedia:{},
        loading: false,
        errors: null,
        baseUrl:'/profile'
    }),

    getters: {
        getProfile: state => {
            return state.profile;
        },
    },

    actions: {
        /**
         * @feature the user's profile information from the server.
         * @returns {Promise<Object>} - Resolves with the server's response containing the user's profile data.Rejects with the server's error response if the request fails.
         */
        async getProfileInfo () {
            try {
                this.loading = true;
                const url = `${this.baseUrl}/get-information`;
                const res = await axiosInstance.get(url);

                this.setProfile(res.data.profile);
                this.loading = false;

                return new Promise(resolve => {
                    return resolve(res);
                })
            } catch (error) {
                if (error.response && error.response.data) {
                    this.errors = error.response;
                }

                return new Promise(reject => {
                    return reject(error.response);
                })
            }
        },

        /**
         * @feature Updates the user's profile information by sending a POST request to the server.
         * @param {FormData} formData - The profile information data to be uploaded.
         * @returns {Promise<void>} - Resolves when the profile information is successfully updated.Rejects with the server's error response if the update fails.
         */
        async updateProfileInfo(formData)  {
            try {
                const url = `${this.baseUrl}/update-information`;
                const res = await axiosInstance.post(url, formData);

                this.setProfile(res.data.profile);

                return new Promise(resolve => {
                    return  resolve(res);
                })
            } catch (error) {
                if (error.response.data) {
                    this.errors = error.response;
                }

                return new Promise(reject => {
                    return reject(error.response);
                })
            }
        },

        /**
         * @feature Fetch the authenticated user's profile picture from the server.
         * @returns {Promise<Object>} A promise that resolves with the server response containing the profile picture data.Rejects with the error response in case of failure.
         */
        async getProfilePicture(){
            try {
                const res = await axiosInstance.get(`${this.baseUrl}/get-picture`);

                this.setProfilePicture(res.data);

                return new Promise(resolve => {
                    return resolve(res);
                })

            } catch (error) {
                this.errors = error.response;

                return new Promise(reject => {
                    return reject(error.response);
                })
            }
        },

        /**
         * @feature Updates the user's profile picture by sending a POST request to the server.
         * @param {FormData} profile_picture - The profile picture data to be uploaded.
         * @returns {Promise<void>} - Resolves when the profile picture is successfully updated.Rejects with the server's error response if the update fails.
         */
        async updateProfilePicture(profile_picture)  {
            try {
                const url = `${this.baseUrl}/update-picture`;
                const res = await axiosInstance.post(url, profile_picture,{
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });

                this.setProfilePicture(res.data.profile_picture_url);

                return new Promise(resolve => {
                    return  resolve(res);
                })
            } catch (error) {
                if (error.response.data) {
                    this.errors = error.response;
                }

                return new Promise(reject => {
                    return reject(error.response);
                })
            }
        },

        /**
         * @feature the user's social media information from the server.
         * @returns {Promise<Object>} - Resolves with the server's response containing the user's social media data. Rejects with the server's error response if the request fails.
         */
        async getSocialMedia () {
            try {
                this.loading = true;
                const url = `${this.baseUrl}/get-social-media`;
                const res = await axiosInstance.get(url);

                this.setSocialMedia(res.data.profile);
                this.loading = false;

                return new Promise(resolve => {
                    return resolve(res);
                })
            } catch (error) {
                if (error.response && error.response.data) {
                    this.errors = error.response;
                }

                return new Promise(reject => {
                    return reject(error.response);
                })
            }
        },

        /**
         * @feature Updates the user's social media information by sending a POST request to the server.
         * @param {FormData} formData - The social media information data to be uploaded.
         * @returns {Promise<void>} - Resolves when the social media information is successfully updated. Rejects with the server's error response if the update fails.
         */
        async updateSocialMedia(formData)  {
            try {
                const url = `${this.baseUrl}/update-social-media`;
                const res = await axiosInstance.post(url, formData);

                this.setSocialMedia(res.data.profile);

                return new Promise(resolve => {
                    return  resolve(res);
                })
            } catch (error) {
                if (error.response.data) {
                    this.errors = error.response;
                }

                return new Promise(reject => {
                    return reject(error.response);
                })
            }
        },

        setProfile(data) {
            this.profile = data;
        },
        setProfilePicture(data) {
            this.profilePicture = data;
        },
        setSocialMedia(data) {
            this.socialMedia = data;
        },

    }
})