/**
 * @fileOverview This file defines a Pinia store for managing services related houzez on client side.
 *
 * @feature Store Name: `useService`.
 *
 * @export The store is exported as `useService` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date  25 Apr,2025
 */

import {defineStore} from "pinia";

export const useService = defineStore('service', {
    state: () => ({
        services: [
            {
                id: 1,
                title: "Property Management",
                description: "Managing properties to maintain value and ensure smooth operations.",
            },
            {
                id: 2,
                title: "Business Development",
                description: "Driving growth through strategy, partnerships, and market reach.",
            },
            {
                id: 3,
                title: "Finance Real Estate",
                description: "Handling funds and investments for real estate growth.",
            },
            {
                id: 4,
                title: "Market Analysis",
                description: "Analyzing trends to guide smart real estate decisions.",
            },
            {
                id: 5,
                title: "Tenant Screening",
                description: "Ensuring reliable tenants through background checks and vetting.",
            },
        ],

    }),
    getters: {},
    actions: {}
});