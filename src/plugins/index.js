import Spinner from "@/components/spinner/Spinner.vue";
import PropertyCardSkeleton from "@/components/skeleton/PropertyCardSkeleton.vue";
import PropertiesCardSkeleton from "@/components/skeleton/PropertiesCardSkeleton.vue";
import PackageCardSkeleton from "@/components/skeleton/PackageCardSkeleton.vue";
import Alert from "@/components/alert/Alert.vue";
import InputError from "@/components/errors/InputError.vue";
import DashboardHeader from "@/views/dashboard/components/Header.vue";
import NoDataMsg from "@/views/dashboard/components/NoDataMsg.vue";
import NoDataFound from "@/views/app/components/NoDataFound.vue";

export default {
    install: (app) => {
        app.component("Spinner",Spinner);
        app.component("PropertyCardSkeleton",PropertyCardSkeleton);
        app.component("PropertiesCardSkeleton",PropertiesCardSkeleton);
        app.component("PackageCardSkeleton",PackageCardSkeleton);
        app.component("Alert",Alert);
        app.component("InputError",InputError);
        app.component("DashboardHeader",DashboardHeader);
        app.component("NoDataMsg",NoDataMsg);
        app.component("NoDataFound",NoDataFound);
    }
}