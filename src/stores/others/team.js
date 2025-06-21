/**
 * @fileOverview This file defines a Pinia store for managing create,update,show,view and delete teams by admin.
 *
 * @feature Store Name: `useTeam`.
 *
 * @export The store is exported as `useTeam` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date 19 Apr,2025
 */

import {defineStore} from "pinia";
import apiService from "@/services/apiService.js";
import axiosInstance from "@/services/axiosService.js";

export const useTeam = defineStore('team', {
    state: () => ({
        allTeams:{},
        appTeams:{},
        appTeamsDemo01:{},
        errors: {},
        loading: false,
        prefix:"/teams",
    }),
    getters: {},
    actions: {
        /**
         * Fetches all teams for admin panel and stores in `this.allTeams`.
         *
         * @async
         * @return {Promise<Object>} Axios response containing all teams data
         */
        async  getAllTeams() {
            try {
                const response = await axiosInstance.get(this.prefix);

                this.allTeams = response.data.data;

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
         * Stores a new team using provided formData.
         *
         * @async
         * @param {FormData} formData - Team data to be submitted
         * @return {Promise<Object>} Axios response after team creation
         */
        async  storeTeam(formData) {
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
         * Deletes a team by its ID.
         *
         * @async
         * @param {number|string} teamId - ID of the team to delete
         * @return {Promise<Object>} Axios response after deletion
         */
        async  deleteTeam(teamId) {
            const url = `${this.prefix}/${teamId}`;

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
         * Fetches teams for public app view and stores in `this.appTeams`.
         *
         * @async
         * @return {Promise<Object>} Axios response containing app teams
         */
        async  getAppTeams() {
            const url = `/app${this.prefix}`;
            try {
                const response = await axiosInstance.get(url);

                this.appTeams = response.data.data;

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
         * Fetches teams for public app view and stores in `this.appTeams`.
         *
         * @async
         * @return {Promise<Object>} Axios response containing app teams
         */
        async  getAppTeamsDemo01() {
            const url = `/demo01${this.prefix}`;
            try {
                const response = await axiosInstance.get(url);

                this.appTeamsDemo01 = response.data.data;

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