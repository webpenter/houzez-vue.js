/**
 * @fileOverview This file defines a Pinia store for managing all app's messages.
 *
 * @feature Store Name: `message`.
 *
 * @export The store is exported as `useConfirm` for use in show messages throughout the application.
 *
 * @author https://webpenter.com
 * @date 16 Jan,2025
 */

import { defineStore } from "pinia";
import { ElMessage } from "element-plus";

export const useMessage = defineStore("message", {
    state: () => ({
        type: {
            success: "success",
            warning: "warning",
            info: "info",
            error: "error",
        },

        duration:4000,
    }),

    actions: {
        Success(msg) {
            ElMessage({
                type: this.type.success,
                message: msg,
                duration: this.duration,
            })
        },

        Warning(msg) {
            ElMessage({
                type: this.type.warning,
                message: msg,
                duration: this.duration,
            })
        },

        Info(msg) {
            ElMessage({
                type: this.type.info,
                message: msg,
                duration: this.duration,
            })
        },

        Error(msg) {
            ElMessage({
                type: this.type.error,
                message: msg,
                duration: this.duration,
            })
        },
    },
});

