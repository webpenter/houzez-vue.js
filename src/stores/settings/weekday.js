/**
 * @fileOverview This file defines a Pinia store for managing weekdays.
 *
 * @feature Store Name: `useWeekday`.
 *
 * @export The store is exported as `useWeekday` for use in scheduling or related modules throughout the application.
 *
 * @author https://webpenter.com          //Naraish Kumar//
 * @date 15 Feb, 2025  
 */

import { defineStore } from "pinia";

export const useWeekday = defineStore('weekday', {
    state: () => ({
        weekdays: [
            { id: 1, name: "Monday" },
            { id: 2, name: "Tuesday" },
            { id: 3, name: "Wednesday" },
            { id: 4, name: "Thursday" },
            { id: 5, name: "Friday" },
            { id: 6, name: "Saturday" },
            { id: 7, name: "Sunday" },
        ],
    }),
    getters: {},
    actions: {}
});
