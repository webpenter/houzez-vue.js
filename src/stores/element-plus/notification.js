/**
 * @fileOverview This file defines a Pinia store for managing all app's notifications.
 *
 * @feature Store Name: `notification`.
 *
 * @export The store is exported as `useNotification` for use in show notification throughout the application.
 *
 * @author https://webpenter.com
 * @date 16 Jan,2025
 */

import { defineStore } from "pinia";
import { ElNotification } from "element-plus";

export const useNotification = defineStore("notification", {
    state: () => ({
        type: {
            success: "success",
            warning: "warning",
            info: "info",
            error: "error",
        },

        position: "top-right",
        duration: 4000,
    }),

    actions: {
        Success(msg,title = "Success") {
            ElNotification({
                title: title,
                message: msg,
                type: this.type.success,
                position: this.position,
                duration: this.duration,
            });
        },

        Warning(msg,title = "Warning") {
            ElNotification({
                title: title,
                message: msg,
                type: this.type.warning,
                position: this.position,
                duration: this.duration,
            });
        },

        Info(msg,title = "Info") {
            ElNotification({
                title: title,
                message: msg,
                type: this.type.info,
                position: this.position,
                duration: this.duration,
            });
        },

        Error(msg,title = "Error") {
            ElNotification({
                title: title,
                message: msg,
                type: this.type.error,
                position: this.position,
                duration: this.duration,
            });
        },
        Clear() {
            ElNotification.clear();
        },


    },
});
