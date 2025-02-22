/**
 * @fileOverview This file defines a Pinia store for managing subscription of stripe packages.
 *
 * @feature Store Name: `useSubscription`.
 *
 * @export The store is exported as `useSubscription` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date 22 Feb,2025
 */

import {defineStore} from "pinia";
import apiService from "@/services/apiService.js";
import axiosInstance from "@/services/axiosService.js";

export const useSubscription = defineStore('subscription', {
    state: () => ({
        selectedPackage: {},
        loading: false,
        prefix:"/stripe-payments",
    }),
    getters: {},
    actions: {
        async  checkout(planId) {
            const url = `${this.prefix}/checkout/${planId}`;

            try {
                const response = await axiosInstance.get(url);

                this.selectedPackage = response.data.package;

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