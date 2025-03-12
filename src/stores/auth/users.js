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
         * Fetches all users from the backend API.
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
    }
})