/**
 * @fileOverview This file defines a Pinia store for managing all app's confirm box messages.
 *
 * @feature Store Name: `confirm`.
 *
 * @export The store is exported as `useConfirm` for use in show confirm box messages throughout the application.
 *
 * @author https://webpenter.com
 * @date 16 Jan,2025
 */

import { defineStore } from "pinia";
import { ElMessageBox } from "element-plus";

export const useConfirm = defineStore("confirm", {
    state: () => ({
        type: {
            success: "success",
            warning: "warning",
            info: "info",
            error: "error",
        },
    }),

    actions: {
        Success(msg, title = "Success") {
            return ElMessageBox.confirm(
                msg,
                title,
                {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: this.type.success,
                }
            );
        },

        Warning(msg, title = "Warning") {
            return ElMessageBox.confirm(
                msg,
                title,
                {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: this.type.warning,
                }
            );
        },

        Info(msg, title = "Info") {
            return ElMessageBox.confirm(
                msg,
                title,
                {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: this.type.info,
                }
            );
        },

        Error(msg, title = "Error") {
            return ElMessageBox.confirm(
                msg,
                title,
                {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: this.type.error,
                }
            );
        },
    },
});

