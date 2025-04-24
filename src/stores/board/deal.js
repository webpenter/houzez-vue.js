/**
 * @fileOverview This file defines a Pinia store for managing create,update,show,view and delete deals by user.
 *
 * @feature Store Name: `useDeal`.
 *
 * @export The store is exported as `useDeal` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date 22 Apr,2025
 */

import {defineStore} from "pinia";
import apiService from "@/services/apiService.js";
import axiosInstance from "@/services/axiosService.js";

export const useDeal = defineStore('deal', {
    state: () => ({
        activeDeals:{},
        wonDeals:{},
        lostDeals:{},
        errors: {},
        loading: false,
        prefix:"/deals",
    }),
    getters: {},
    actions: {
        async  getActiveDeals() {
            const url = `${this.prefix}/group/active`;
            try {
                const response = await axiosInstance.get(url);

                this.activeDeals = response.data.data;

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
         * Stores a new blog using provided formData.
         *
         * @async
         * @param {FormData} formData - Blog data to be submitted
         * @return {Promise<Object>} Axios response after blog creation
         */
        async  storeBlog(formData) {
            try {
                const response = await apiService().post(this.prefix, formData);

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

        async  deleteDeal(dealId) {
            const url = `${this.prefix}/${dealId}`;

            try {
                const response = await axiosInstance.delete(url);

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
         * Fetches blogs for public app view and stores in `this.appBlogs`.
         *
         * @async
         * @return {Promise<Object>} Axios response containing app blogs
         */
        async  getAppBlogs() {
            const url = `/app${this.prefix}`;
            try {
                const response = await axiosInstance.get(url);

                this.appBlogs = response.data.data;

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
    }
});