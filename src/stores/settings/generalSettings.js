/**
 * @fileOverview This file defines a Pinia store for managing all general settings of app,user dashboard and admin panel.
 *
 * @feature Store Name: `generalSettings`.
 *
 * @export The store is exported as `useGeneralSettings` for use to display the site name,page title, favicon,site logo etc.
 *
 * @author https://webpenter.com
 * @date 17 Jan,2025
 */

import { defineStore } from "pinia";

export const useGeneralSettings = defineStore("generalSettings", {
    state: () => ({
        pageTitle: "Buy WebPenter",
        appName: "Buy WebPenter",
    }),

    actions: {},
});

