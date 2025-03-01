import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import { useNotification, useProperty } from "@/stores/index.js";
import {PROPERTY_TOTAL_STEPS} from "@/constants/index.js";

export function useEditProperty() {
    const router = useRouter();
    const propertyToRefs = useProperty();

    const editData = async (propertyId) => {
        const res = await propertyToRefs.edit(propertyId);

        if (res.status === 404) {
            return router.push({ name: "property-not-found-404" });
        } else if (res.status === 403) {
            return router.push({ name: "unauthorized-403" });
        }
    };

    return { editData };
}

export function usePropertyForm(
    propertyId,
    formData,
    localErrors = ref({}),
    validateField = () => {},
    step
) {
    const router = useRouter();
    const notify = useNotification();
    const propertyToRefs = useProperty();
    const btnLoading = ref(false);

    const hasErrors = computed(() =>
        Object.values(localErrors?.value || {}).some(error => error !== "")
    );

    const formSubmit = async () => {
        Object.keys(localErrors?.value || {}).forEach((field) => validateField(field));

        if (hasErrors.value) {
            notify.Error("Please fix the validation errors before proceeding.");
            return;
        }

        btnLoading.value = true;

        try {
            const res = await propertyToRefs.createOrUpdate(formData.value, propertyId);

            btnLoading.value = false;

            if (res.status === 200) {
                notify.Success(`Step ${step} of ${PROPERTY_TOTAL_STEPS} completed.`);
                router.push({ name: `dashboard.create-listing.step-${step + 1}`, params: { propertyId } });
            } else if (res.status === 404) {
                notify.Error("Property not found.");
            } else if (res.status === 403) {
                notify.Error("You are not authorized to perform this action.");
            } else {
                notify.Error("An error occurred while processing the request.");
            }
        } catch (error) {
            btnLoading.value = false;
            notify.Error("An error occurred");
        }
    };

    return { formSubmit, btnLoading, hasErrors };
}
