/**
 * @fileOverview This file defines a Pinia store for managing time zones.
 *
 * @feature Store Name: `useTimezone`.
 *
 * @export The store is exported as `useTimezone` for use in all modules throughout the application where time zone management is needed.
 *
 * @author https://webpenter.com          //Naraish Kumar//
 * @date 15 Feb, 2025  
 */

import { defineStore } from "pinia";

export const useTimezone = defineStore('timezone', {
    state: () => ({
        timezones: [
            { id: 1, name: "UTC", offset: "UTC+00:00" },
            { id: 2, name: "IST (Indian Standard Time)", offset: "UTC+05:30" },
            { id: 3, name: "EST (Eastern Standard Time)", offset: "UTC-05:00" },
            { id: 4, name: "PST (Pacific Standard Time)", offset: "UTC-08:00" },
            { id: 5, name: "JST (Japan Standard Time)", offset: "UTC+09:00" },
            { id: 6, name: "CET (Central European Time)", offset: "UTC+01:00" },
            { id: 7, name: "AEST (Australian Eastern Standard Time)", offset: "UTC+10:00" },
            { id: 8, name: "PKT (Pakistan Standard Time)", offset: "UTC+05:00" },
            { id: 9, name: "EET (Eastern European Time)", offset: "UTC+02:00" },
            { id: 10, name: "GMT (Greenwich Mean Time)", offset: "UTC+00:00" },
        ],
    }),
    getters: {},
    actions: {}
});
