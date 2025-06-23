/**
 * @fileOverview This file defines a Pinia store for managing partners related houzez on client side.
 *
 * @feature Store Name: `usePartners`.
 *
 * @export The store is exported as `usePartners` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date  21 Jun,2025
 */

import {defineStore} from "pinia";
const imageModules = import.meta.glob('@/assets/img/store/partners/*.jpg', { eager: true });

export const usePartners = defineStore('partner', {
    state: () => ({
        partners: [
            {
                id: 1,
                image: imageModules['/src/assets/img/store/partners/partner-01.jpg'].default
            },
            {
                id: 2,
                image: imageModules['/src/assets/img/store/partners/partner-02.jpg'].default
            },
            {
                id: 3,
                image: imageModules['/src/assets/img/store/partners/partner-03.jpg'].default
            },
            {
                id: 4,
                image: imageModules['/src/assets/img/store/partners/partner-04.jpg'].default
            },
            {
                id: 5,
                image: imageModules['/src/assets/img/store/partners/partner-05.jpg'].default
            },
        ],

    }),
    getters: {},
    actions: {}
});