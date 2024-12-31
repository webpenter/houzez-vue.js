import Alert from "@/components/alert/Alert.vue";
import DashboardHeader from "@/views/dashboard/components/Header.vue";

export default {
    install: (app) => {
        app.component("DashboardHeader",DashboardHeader);
        app.component("Alert",Alert);
    }
}