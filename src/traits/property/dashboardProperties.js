import { useProperty, useConfirm, useMessage, useNotification } from "@/stores/index.js";
import { ref } from "vue";

const loading = ref(false);
const searchQuery = ref('');
const selectedSort = ref('default');

export const getProperties = async () => {
    const propertyToRefs = useProperty();
    loading.value = true;

    try {
        const res = await propertyToRefs.getUserProperties(searchQuery.value, selectedSort.value,"pending");

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

export const deleteProperty = async (propertyId) => {
    const propertyToRefs = useProperty();

    try {
        await useConfirm().Warning("Are you sure you want to delete this property?");
        const response = await propertyToRefs.deleteProperty(propertyId);

        if (response.status === 200) {
            useNotification().Success("Property deleted successfully");
            getProperties();
        }
    } catch (error) {
        if (error !== "cancel") {
            useNotification().Error(error);
        } else {
            useMessage().Info("Request cancelled.");
        }
    }
};

export const duplicateProperty = async (propertyId) => {
    const propertyToRefs = useProperty();

    try {
        await useConfirm().Warning("Are you sure you want to duplicate this property?");
        const response = await propertyToRefs.duplicateProperty(propertyId);

        if (response.status === 201) {
            useNotification().Success("Property duplicated successfully");
            getProperties();
        }
    } catch (error) {
        if (error !== "cancel") {
            useNotification().Error(error);
        } else {
            useMessage().Info("Request cancelled.");
        }
    }
};

export { searchQuery, selectedSort, loading };
