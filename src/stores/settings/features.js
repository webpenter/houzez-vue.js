/**
 * @fileOverview This file defines a Pinia store for managing listing related features by admin side.
 *
 * @feature Store Name: `useFeatures`.
 *
 * @export The store is exported as `useFeatures` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date 27 Jan,2025
 */

import {defineStore} from "pinia";

export const useFeatures = defineStore('features', {
    state: () => ({
        features: [
            {id: 1, name: "Air Conditioning"},
            {id: 2, name: "Barbeque"},
            {id: 3, name: "Dryer"},
            {id: 4, name: "Gym"},
            {id: 5, name: "Laundry"},
            {id: 6, name: "Lawn"},
            {id: 7, name: "Microwave"},
            {id: 8, name: "Outdoor Shower"},
            {id: 9, name: "Refrigerator"},
            {id: 10, name: "Sauna"},
            {id: 11, name: "Swimming Pool"},
            {id: 12, name: "TV Cable"},
            {id: 13, name: "Washer"},
            {id: 14, name: "WiFi"},
            {id: 15, name: "Window Coverings"}
        ],
    }),
    getters: {},
    actions: {}
});