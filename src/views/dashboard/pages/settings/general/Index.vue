<template>
    <DashboardHeader heading="General Settings"> </DashboardHeader>
    <section class="dashboard-content-wrap dashboard-add-new-listing">
        <div class="dashboard-content-inner-wrap">
            <form @submit.prevent="formSubmit">
                <div class="dashboard-content-block-wrap">
                    <div class="dashboard-content-block">
                        <div class="form-group">
                            <label>Site Name</label>
                            <input class="form-control" placeholder="Enter the Site Name" type="text" />
                            <span class="text-danger" v-if="localErrors.title">
                                {{ localErrors.title }}
                            </span>
                        </div><!-- form-group -->
                        <div class="form-group">
                            <label>Site Title</label>
                            <input class="form-control" placeholder="Enter the Site title" type="text" />
                            <span class="text-danger" v-if="localErrors.title">
                                {{ localErrors.title }}
                            </span>
                        </div><!-- form-group -->
                        <div class="form-group">
                            <label>Site Description</label>
                            <input class="form-control" placeholder="Enter the Site Description" type="text" />
                            <span class="text-danger" v-if="localErrors.title">
                                {{ localErrors.title }}
                            </span>
                        </div><!-- form-group -->
                        <div class="form-group">
                            <label>Site Address</label>
                            <input class="form-control" placeholder="Enter the Site Address URL" type="text" />
                            <span class="text-danger" v-if="localErrors.title">
                                {{ localErrors.title }}
                            </span>
                        </div><!-- form-group -->
                        <div class="form-group">
                            <label>Contact Number</label>
                            <input class="form-control" placeholder="Enter the Contact Number" type="text" />
                            <span class="text-danger" v-if="localErrors.title">
                                {{ localErrors.title }}
                            </span>
                        </div><!-- form-group -->
                        <div class="form-group">
                            <label>Email Address</label>
                            <input class="form-control" placeholder="Enter the Email Address" type="text" />
                            <!-- <small><b>Note:</b> This address is used for admin purposes. If you
                                change this, an email will be sent to your new address to
                                confirm it. The new address will not become active until
                                confirmed.</small> -->
                            <span class="text-danger" v-if="localErrors.title">
                                {{ localErrors.title }}
                            </span>
                        </div><!-- form-group -->
                        <div class="form-group">
                            <label>Facebook Link</label>
                            <input class="form-control" placeholder="Enter the Facebook Link" type="text" />
                            <span class="text-danger" v-if="localErrors.title">
                                {{ localErrors.title }}
                            </span>
                        </div><!-- form-group -->
                        <div class="form-group">
                            <label>Instagram Link</label>
                            <input class="form-control" placeholder="Enter the Instagram Link" type="text" />
                            <span class="text-danger" v-if="localErrors.title">
                                {{ localErrors.title }}
                            </span>
                        </div><!-- form-group -->
                        <div class="form-group">
                            <label>Twitter Link</label>
                            <input class="form-control" placeholder="Enter the Twitter Link" type="text" />
                            <span class="text-danger" v-if="localErrors.title">
                                {{ localErrors.title }}
                            </span>
                        </div><!-- form-group -->
                        <div class="form-group">
                            <label>LinkedIn Link</label>
                            <input class="form-control" placeholder="Enter the LinkedIn Link" type="text" />
                            <span class="text-danger" v-if="localErrors.title">
                                {{ localErrors.title }}
                            </span>
                        </div><!-- form-group -->
                        <div class="form-group">
                            <label>Footer Description</label>
                            <input class="form-control" placeholder="Enter the Footer Description" type="text" />
                            <span class="text-danger" v-if="localErrors.title">
                                {{ localErrors.title }}
                            </span>
                        </div>
                        <div class="form-group">
                            <label>Hero Title</label>
                            <input class="form-control" placeholder="Enter the Hero Title" type="text" />
                            <span class="text-danger" v-if="localErrors.title">
                                {{ localErrors.title }}
                            </span>
                        </div><!-- form-group -->
                        <div class="form-group">
                            <label>Hero Description</label>
                            <input class="form-control" placeholder="Enter the Hero Description" type="text" />
                            <span class="text-danger" v-if="localErrors.title">
                                {{ localErrors.title }}
                            </span>
                        </div><!-- form-group -->
                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label>Hero Section Image</label>
                                    <img class="img-fluid" src="http://placehold.it/300x300" alt="thumb">
                                    <button type="button" class="btn btn-primary btn-full-width mt-3">Update Hero Image</button>
                                    <small class="form-text text-muted text-center">Minimum 300 x 300 px</small>
                                </div>
                            </div><!-- col-md-3 col-sm-12 -->
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label>Site Logo</label>
                                    <img class="img-fluid" src="http://placehold.it/300x300" alt="thumb">
                                    <button type="button" class="btn btn-primary btn-full-width mt-3">Update Logo</button>
                                </div>
                            </div><!-- col-md-3 col-sm-12 -->
                        </div>

                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label>New User Default Role</label>
                                    <div>
                                        <el-select v-model="formData.role" filterable default-first-option
                                            :reserve-keyword="false" placeholder="Choose role for your new user"
                                            style="width: 300px">
                                            <el-option v-for="role in roles" :key="role.id" :label="role.name"
                                                :value="role.name" />
                                        </el-select>
                                    </div>
                                </div><!-- form-group -->
                            </div><!-- col-md-4 col-sm-12 -->
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label>Site Language</label>
                                    <div>
                                        <el-select v-model="formData.language" filterable default-first-option
                                            :reserve-keyword="false" placeholder="Choose your site language"
                                            style="width: 300px">
                                            <el-option v-for="language in languages" :key="language.id"
                                                :label="language.name" :value="language.name" />
                                        </el-select>
                                    </div>
                                </div><!-- form-group -->
                            </div><!-- col-md-4 col-sm-12 -->
                        </div><!-- row -->
                    </div><!-- dashboard-content-block -->
                </div><!-- dashboard-content-block-wrap -->

                <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
                    <RouterLink class="btn btn-primary-outlined" :to="{ name: 'dashboard.my-properties' }">
                        Cancel
                    </RouterLink>
                    <SaveBtn :btnLoading="btnLoading" :hasErrors="hasErrors" />
                </div><!-- add-new-listing-bottom-nav-wrap -->
            </form>
        </div><!-- dashboard-content-inner-wrap -->
    </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import { storeToRefs } from "pinia";
import { format } from "date-fns"; // Import date-fns for formatting
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, ref, watch } from "vue";

import {
    useRole,
    useLanguage,
    useTimezone,
    useWeekday,
    useNotification,
    useProperty,
} from "@/stores/index.js";
import SaveBtn from "../components/SaveBtn.vue";

const route = useRoute();
const router = useRouter();

const currentUTC = ref(""); //auto updated cuurent time and date 
const updateTime = () => {
    const now = new Date();
    currentUTC.value = now.toISOString().replace("T", " ").split(".")[0]; // Format: YYYY-MM-DD HH:MM:SS
};


const now = new Date();

// Define date format options dynamically
const dateFormats = [
    { value: "MMMM dd, yyyy" }, // Example: February 15, 2025
    { value: "yyyy-MM-dd" },    // Example: 2025-02-15
    { value: "MM/dd/yyyy" },    // Example: 02/15/2025
    { value: "dd/MM/yyyy" },    // Example: 15/02/2025
].map(formatObj => ({
    label: format(now, formatObj.value),
    value: formatObj.value
}));

// Define time format options dynamically
const timeFormats = [
    { value: "h:mm a" },  // Example: 9:03 pm
    // { value: "h:mm A" },  // Example: 9:03 PM
    { value: "HH:mm" },   // Example: 21:03
].map(formatObj => ({
    label: format(now, formatObj.value),
    value: formatObj.value
}));

// Selected formats
const selectedDateFormat = ref(dateFormats[0].value);
const selectedTimeFormat = ref(timeFormats[0].value);
const customDateFormat = ref("");
const customTimeFormat = ref("");

// Computed properties for previews
const dateFormatPreview = computed(() => {
    if (selectedDateFormat.value === "custom" && customDateFormat.value) {
        return format(now, customDateFormat.value);
    }
    return dateFormats.find(f => f.value === selectedDateFormat.value)?.label || "";
});

const timeFormatPreview = computed(() => {
    if (selectedTimeFormat.value === "custom" && customTimeFormat.value) {
        return format(now, customTimeFormat.value);
    }
    return timeFormats.find(f => f.value === selectedTimeFormat.value)?.label || "";
});

const propertyToRefs = useProperty();
const { property } = storeToRefs(propertyToRefs);
const { roles } = storeToRefs(useRole());
const { languages } = storeToRefs(useLanguage());
const { timezones } = storeToRefs(useTimezone());
const { weekdays } = storeToRefs(useWeekday());
const notify = useNotification();

const formData = ref({
    title: "",
    description: "",
    role: null,
    status: null,
    label: null,
    price: "",
    second_price: "",
    after_price: "",
    price_prefix: "",
});

const btnLoading = ref(false);
const localErrors = ref({
    title: "",
    price: "",
    second_price: "",
});

const validateField = (field) => {
    if (field === "title" && !formData.value.title) {
        localErrors.value.title = "Title field is required.";
    } else if (field === "price") {
        if (!formData.value.price) {
            localErrors.value.price = "Price field is required.";
        } else if (isNaN(formData.value.price)) {
            localErrors.value.price = "Price must be a number.";
        } else {
            localErrors.value.price = "";
        }
    } else if (
        field === "second_price" &&
        formData.value.second_price &&
        isNaN(formData.value.second_price)
    ) {
        localErrors.value.second_price = "Second price must be a number.";
    } else {
        localErrors.value[field] = "";
    }
};

const hasErrors = computed(() =>
    Object.values(localErrors.value).some((error) => error !== "")
);

const editData = async () => {
    const res = await propertyToRefs.edit(propertyId);

    if (res.status === 404) {
        return router.push({ name: "property-not-found-404" });
    } else if (res.status === 403) {
        return router.push({ name: "unauthorized-403" });
    }
};

const formSubmit = async () => {
    Object.keys(localErrors.value).forEach((field) => validateField(field));

    if (hasErrors.value) {
        notify.Error("Please fix the validation errors before proceeding.");
        return;
    }

    btnLoading.value = true;

    const pId = propertyId || null;
    try {
        const res = await propertyToRefs.createOrUpdate(formData.value, pId);

        btnLoading.value = false;

        if ([200, 201].includes(res.status)) {
            const newPropertyId = res.data.property.id;
            notify.Success(
                `Step 1 of ${PROPERTY_TOTAL_STEPS} completed. Your property has been recorded`
            );
            router.push({
                name: "dashboard.create-listing.step-2",
                params: { propertyId: newPropertyId },
            });
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

onMounted(() => {
    updateTime();
});

watch(property, (newProperty) => {
    if (newProperty) {
        formData.value = { ...newProperty };
    }
});
</script>
