import {useAuth} from "@/stores/index.js";
import router from "@/router/index.js";

export const logout = async () => {
    try {
        const response = await useAuth().logout();

        if(response.data.status) {
            router.push({name: 'app'});
        }
    } catch (error) {
        console.log(error);
    }
}