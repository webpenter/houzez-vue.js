/**
 * @fileOverview This file defines a Pinia store for managing create,update,show,view and delete stripe packages.
 *
 * @feature Store Name: `usePackage`.
 *
 * @export The store is exported as `usePackage` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date 19 Feb,2025
 */

import {defineStore} from "pinia";
import apiService from "@/services/apiService.js";
import axiosInstance from "@/services/axiosService.js";

export const usePackage = defineStore('package', {
    state: () => ({
        allPlans:{},
        selectPlans:{},
        errors: {},
        loading: false,
        prefix:"/stripe-payments",
    }),
    getters: {},
    actions: {
        async  getAllPlans() {
            const url = `${this.prefix}/get-all-plans`;

            try {
                const response = await axiosInstance.get(url);

                this.allPlans = response.data.plans;

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

        async  getSelectPlans() {
            const url = `${this.prefix}/get-select-plans`;

            try {
                const response = await axiosInstance.get(url);

                this.selectPlans = response.data.plans;

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

        async  storePlan(formData) {
            const url = `${this.prefix}/store-plan`;

            try {
                const response = await axiosInstance.post(url, formData);

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

        async  deletePlan(planId) {
            const url = `${this.prefix}/delete-plan/${planId}`;

            try {
                const response = await axiosInstance.post(url);

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