/**
 * @fileOverview This file defines a Pinia store for managing user authentication and permissions.
 *
 * @feature Store Name: `userAuth`.
 *
 * @export The store is exported as `useAuth` for use in authentication-related operations throughout the application.
 *
 * @author https://webpenter.com
 * @date 11 Jan,2025
 */


import { defineStore } from 'pinia'
import axiosInstance from '@/services/axiosService'
import {useAdmin, useIsSubscribed, useToken} from '@/stores'
// import data from "bootstrap/js/src/dom/data.js";

export const useAuth = defineStore('userAuth', {
    state: () => ({
        user: {},
        errors: {},
        isLggedIn: false,
        permissions: {}
    }),

    persist: {
        paths: ['user', 'isLggedIn','permissions'],
    },

    getters: {
        getUser: state => {
            return state.user
        },

        getAuthStatus: state => {
            return state.isLggedIn
        },
        getPermissions: state => {
            return state.permissions
        },
    },

    actions: {
        /**
         * Fetch User Info
         * @function getUserInfo
         * @returns {Promise<Object>} Resolves with the user data response on success.
         * @throws {Object} Rejects with the error response if the request fails.
         */
        async getUserInfo () {
            try {
                const res = await axiosInstance.get('/user');

                this.user = res.data.user;

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
         * @feature Registers a new user by sending their details to the server.
         * @param {Object} formData - The registration data (e.g., name, email, password, etc.).
         * @returns {Promise<Object>} - Resolves with the server's response containing authentication and user information.Rejects with the server's error response if the registration fails.
         */
        async register (formData) {
            try {
                const response =await axiosInstance.post(`/register`, formData)
                this.setAuthInfo(response.data)
                console.log(response.data);
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
         * @feature Logs in a user by sending their credentials to the server.
         * @param {Object} formData - The login credentials (e.g., email and password).
         * @returns {Promise<Object>} - Resolves with the server's response containing authentication and user information.Rejects with the server's error response if the login fails.
         */
        async login (formData) {
            try {
                const response =await axiosInstance.post(`/login`, formData)
                this.setAuthInfo(response.data)
                // this.permissions = response.data?.data?.role?.permissions;
                console.log(response.data.token);
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
         * @feature Logs out the user by sending a request to the server to terminate the session.
         * @returns {Promise<Object>} - Resolves with the server's response if the logout is successful.Throws an error if the logout request fails..
         */
        async logout () {
            try {
                const res = await axiosInstance.post('/logout')
                if (res.data) {
                    this.removeAuthInfo()
                    return res
                }
            } catch (error) {
                if (error.response) {
                    throw error.resonpse
                }
            }
        },

        /**
         * @feature Changes the user's password by sending the new password to the server.
         * @param {Object} formData - The data containing the old and new passwords.
         * @returns {Promise<Object>} - Resolves with the server's response if the password change is successful.Rejects with the server's error response if the request fails.
         */
        async changePassword (formData) {
            try {
                const response = await axiosInstance.post(`/change-password`, formData)

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
         * @feature Delete the user's account by sending the request to the server.
         * @returns {Promise<Object>} - Resolves with the server's response if the account deleted successfully.Rejects with the server's error response if the request fails.
         */
        async deleteAccount () {
            try {
                const response = await axiosInstance.delete(`/delete-account`);

                if (response.status === 200) {
                    this.removeAuthInfo();
                }

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
        hasPermission (permission) {
            if (Array.isArray(this.permissions)) {
                return this.permissions.includes(permission);
            }
            return false;
        },
        setPermissions(permission,id) {
            console.log(permission,id);
            console.log(this.user?.role?.id);

            if (this.user?.role?.id==id) {
                this.permissions = permission;
                console.log(this.permissions);

            }
        },
        getPermission() {
            return this.permissions;
        },
        setAuthInfo (data) {
            const token = useToken()
            const admin = useAdmin()
            const isSubscribed = useIsSubscribed()
            this.user = data?.data
            token.setToken(data?.token)
            admin.setAdmin(data?.admin)
            isSubscribed.setIsSubscribed(data?.isSubscribed)
            this.isLggedIn = true;
        },
        removeAuthInfo () {
            const token = useToken()
            const admin = useAdmin()
            const isSubscribed = useIsSubscribed()
            token.removeToken()
            admin.removeAdmin()
            isSubscribed.removeIsSubscribed()
            this.isLoggedIn = false
            this.$reset()
        }
    }
})