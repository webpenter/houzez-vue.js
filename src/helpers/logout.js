import {useAuth, useConfirm, useMessage, useNotification} from "@/stores/index.js";
import router from "@/router/index.js";

export const logout = async () => {
    useConfirm().Warning("Are you sure you want to logout?")
        .then(async () => {
            try {
                const response = await useAuth().logout();

                if(response.data.status) {
                    useNotification().Success("Logged out successfully");
                    router.push({name: 'app'});
                }
            } catch (error) {
                useNotification().Error(error);
            }
        })
        .catch(() => {
            useMessage().Info("Request cancelled.");
        })
}