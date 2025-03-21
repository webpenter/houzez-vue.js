/**
<<<<<<< HEAD
 * @fileOverview This file defines a Pinia store for managing listing related types by admin side.
=======
 * @fileOverview This file defines a Pinia store for managing user's role by admin side.
>>>>>>> c6f68eee1382989b9e4198b1413d131a7652f1b2
 *
 * @feature Store Name: `useRole`.
 *
 * @export The store is exported as `useRole` for use in all listings or properties modules throughout the application.
 *
<<<<<<< HEAD
 * @author https://webpenter.com          //Naraish Kumar//
 * @date 15 Feb,2025  
=======
 * @author https://webpenter.com
 * @date 14 Mar,2025
>>>>>>> c6f68eee1382989b9e4198b1413d131a7652f1b2
 */

import {defineStore} from "pinia";

export const useRole = defineStore('role', {
    state: () => ({
<<<<<<< HEAD
        roles:[
            {id: 1, name: "Manager"},
            {id: 2, name: "Owner"},
            {id: 3, name: "Seller"},
            {id: 4, name: "Agent"},
            {id: 5, name: "Admin"},
            {id: 6, name: "Buyer"},
            {id: 7, name: "Host"},
            {id: 8, name: "Author"},
        ],  
=======
        roles: [
            {id: 1, name: "administrator"},
            {id: 2, name: "subscriber"},
            {id: 3, name: "owner"},
            {id: 4, name: "agent"},
            {id: 5, name: "agency"},
            {id: 6, name: "seller"},
            {id: 7, name: "buyer"},
            {id: 8, name: "manager"},
            {id: 9, name: "author"},
            {id: 10, name: "contributor"},
        ],
>>>>>>> c6f68eee1382989b9e4198b1413d131a7652f1b2
    }),
    getters: {},
    actions: {}
});