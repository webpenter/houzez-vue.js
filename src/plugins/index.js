import Alert from "@/components/alert/Alert.vue";
import InputError from "@/components/errors/InputError.vue";
import DashboardHeader from "@/views/dashboard/components/Header.vue";

export default {
    install: (app) => {
        app.component("Alert",Alert);
        app.component("InputError",InputError);
        app.component("DashboardHeader",DashboardHeader);
    }
}