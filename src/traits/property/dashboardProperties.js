import { useProperty, useConfirm, useDelete, useMessage, useNotification } from "@/stores/index.js";
import { ref } from "vue";

const loading = ref(false);
const searchQuery = ref('');
const selectedSort = ref('default');
const currentPropertyStatus = ref(null);

export const getProperties = async (propertyStatus = null) => {
    const propertyToRefs = useProperty();
    loading.value = true;

    currentPropertyStatus.value = propertyStatus;

    try {
        const res = await propertyToRefs.getUserProperties(searchQuery.value, selectedSort.value, propertyStatus);

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

export const updateSearchQuery = (query, propertyStatus = null) => {
    searchQuery.value = query;
    getProperties(propertyStatus ?? currentPropertyStatus.value);
};

export const updateSortOption = (sort, propertyStatus = null) => {
    selectedSort.value = sort;
    getProperties(propertyStatus ?? currentPropertyStatus.value);
};

export const deleteProperty = async (propertyId) => {
    const propertyToRefs = useProperty();

    try {
        await useDelete().Warning("Are you sure you want to delete this property?");
        const response = await propertyToRefs.deleteProperty(propertyId);

        if (response.status === 200) {
            useNotification().Success("Property deleted successfully");
            getProperties(currentPropertyStatus.value);
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
            getProperties(currentPropertyStatus.value);
        }
    } catch (error) {
        if (error !== "cancel") {
            useNotification().Error(error);
        } else {
            useMessage().Info("Request cancelled.");
        }
    }
};

export const handleStatusChange = ({ id, newStatus }) => {
    useNotification().Success(`Status changed to ${newStatus}`);
    getProperties(currentPropertyStatus.value);
}

export { searchQuery, selectedSort, loading };
