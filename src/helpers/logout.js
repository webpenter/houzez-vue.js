import {useAuth, useNotification} from "@/stores/index.js";
import router from "@/router/index.js";

export const logout = async () => {
    try {
        const response = await useAuth().logout();

        if(response.data.status) {
            useNotification().Success("Logged out successfully");
            router.push({name: 'app'});
        }
    } catch (error) {
        useNotification().Error(error);
    }
}