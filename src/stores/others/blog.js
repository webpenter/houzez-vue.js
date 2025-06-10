/**
 * @fileOverview This file defines a Pinia store for managing create,update,show,view and delete blogs by admin.
 *
 * @feature Store Name: `useBlog`.
 *
 * @export The store is exported as `useBlog` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date 18 Apr,2025
 */

import {defineStore} from "pinia";
import apiService from "@/services/apiService.js";
import axiosInstance from "@/services/axiosService.js";

export const useBlog = defineStore('blog', {
    state: () => ({
        allBlogs:{},
        appBlogs:{},
        errors: {},
        loading: false,
        prefix:"/blogs",
    }),
    getters: {},
    actions: {
        /**
         * Fetches all blogs for admin panel and stores in `this.allBlogs`.
         *
         * @async
         * @return {Promise<Object>} Axios response containing all blogs data
         */
        async  getAllBlogs() {
            try {
                const response = await axiosInstance.get(this.prefix);

                this.allBlogs = response.data.data;

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

        /**
         * Deletes a blog by its ID.
         *
         * @async
         * @param {number|string} blogId - ID of the blog to delete
         * @return {Promise<Object>} Axios response after deletion
         */
        async  deleteBlog(blogId) {
            const url = `${this.prefix}/${blogId}`;

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