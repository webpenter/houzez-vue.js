import { useConfirm, useMessage, useNotification } from "@/stores/index.js";
import { ref } from "vue";
import { useNewsletter } from "@/stores/others/newsletterSubscriber";

const loading = ref(false);

const currentPropertyStatus = ref(null);

export const getNewsletters = async () => {
    const propertyToRefs = useNewsletter();
    loading.value = true;


    try {
        const res = await propertyToRefs.getNewsletterSubscriber();

        if (res.status === 200) {
            loading.value = false;
        } else {
            loading.value = false;
            useNotification().Error("An error occurred while fetching data");
        }
    } catch (error) {
        loading.value = false;
        useNotification().Error("An error occurred");
    }
};

export const deleteNewsletter = async (newsletterId) => {
    const propertyToRefs = useNewsletter();

    try {
        await useConfirm().Warning("Are you sure you want to delete this Newsletter subscriber?");
        const response = await propertyToRefs.deleteNewsletter(newsletterId);

        if (response.status === 200) {
            useNotification().Success("Newsletter subscriber deleted successfully");
           
        }
    } catch (error) {
        if (error !== "cancel") {
            useNotification().Error(error);
        } else {
            useMessage().Info("Request cancelled.");
        }
    }
};



export { loading };
