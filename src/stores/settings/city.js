/**
 * @fileOverview This file defines a Pinia store for managing listing related cities by admin side.
 *
 * @feature Store Name: `useCity`.
 *
 * @export The store is exported as `useCity` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date  16 Feb,2025
 */

import {defineStore} from "pinia";

export const useCity = defineStore('city', {
    state: () => ({
        cities:[
            {id: 1, name: "New York"},
            {id: 2, name: "Chicago"},
            {id: 3, name: "Los Angeles"},
            {id: 4, name: "Miami"},
            {id: 5, name: "Houston"},
            {id: 6, name: "Phoenix"},
            {id: 7, name: "Philadelphia"},
            {id: 8, name: "San Antonio"},
            {id: 9, name: "San Diego"},
            {id: 10, name: "Dallas"},
            {id: 11, name: "San Jose"},
            {id: 12, name: "Austin"},
            {id: 13, name: "Jacksonville"},
            {id: 14, name: "Fort Worth"},
            {id: 15, name: "Columbus"},
            {id: 16, name: "San Francisco"},
            {id: 17, name: "Charlotte"},
            {id: 18, name: "Indianapolis"},
            {id: 19, name: "Seattle"},
            {id: 20, name: "Denver"},
            {id: 21, name: "Washington"},
            {id: 22, name: "Boston"},
            {id: 23, name: "El Paso"},
            {id: 24, name: "Nashville"},
            {id: 25, name: "Detroit"},
            {id: 26, name: "Oklahoma City"},
            {id: 27, name: "Portland"},
            {id: 28, name: "Las Vegas"},
            {id: 29, name: "Memphis"},
            {id: 30, name: "Louisville"},
            {id: 31, name: "Baltimore"},
            {id: 32, name: "Milwaukee"},
            {id: 33, name: "Albuquerque"},
            {id: 34, name: "Tucson"},
            {id: 35, name: "Fresno"},
            {id: 36, name: "Sacramento"},
            {id: 37, name: "Kansas City"},
            {id: 38, name: "Mesa"},
            {id: 39, name: "Atlanta"},
            {id: 40, name: "Omaha"},
            {id: 41, name: "Colorado Springs"},
            {id: 42, name: "Raleigh"},
            {id: 43, name: "Long Beach"},
            {id: 44, name: "Virginia Beach"},
            {id: 45, name: "Miami Gardens"},
            {id: 46, name: "Oakland"},
            {id: 47, name: "Minneapolis"},
            {id: 48, name: "Tulsa"},
            {id: 49, name: "Wichita"},
            {id: 50, name: "New Orleans"}
        ],
    }),
    getters: {},
    actions: {}
});