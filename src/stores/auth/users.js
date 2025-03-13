/**
 * @fileOverview This file defines a Pinia store for managing show,delete,update users by admin side.
 *
 * @feature Store Name: `useUsers`.
 *
 * @export The store is exported as `useUsers` for use in authentication-related operations throughout the application.
 *
 * @author https://webpenter.com
 * @date 13 Mar,2025
 */


import { defineStore } from 'pinia'
import axiosInstance from '@/services/axiosService'
import {useAdmin, useIsSubscribed, useToken} from '@/stores'
import data from "bootstrap/js/src/dom/data.js";

export const useUsers = defineStore('users', {
    state: () => ({
        users: {},
        errors: {},
    }),
    getters: {},
    actions: {
        /**
         * Fetches all users.
         * @return {Promise<Object>} Resolves with the response data if successful, rejects with the error response if failed.
         */
        async getAllUsers() {
            const url = `/get-all-users`;

            try {
                const res = await axiosInstance.get(url);

                this.users = res.data;

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
         * Deletes a user.
         *
         * @param {number|string} userId - The ID of the user to be deleted.
         * @returns {Promise} A promise that resolves with the server's response or rejects with an error response.
         */
        async deleteUser(userId) {
            const url = `/delete-user/${userId}`;

            try {
                const res = await axiosInstance.post(url);

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
         * Change the role of a user.
         *
         * @param {number|string} user - The ID or identifier of the user whose role is being changed.
         * @param {string} role - The new role to be assigned to the user.
         * @returns {Promise<Object>} A promise that resolves with the response data or rejects with an error response.
         */
        async changeUserRole(user,role) {
            const url = `/change-user-role/${user}/${role}`;

            try {
                const res = await axiosInstance.post(url);

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
    }
})