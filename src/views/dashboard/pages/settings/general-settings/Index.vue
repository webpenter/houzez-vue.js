<template>
    <DashboardHeader heading="General Settings"> </DashboardHeader>
    <section class="dashboard-content-wrap dashboard-add-new-listing">
        <div class="dashboard-content-inner-wrap">
            <form @submit.prevent="formSubmit">
                <div class="dashboard-content-block-wrap">
                    <div class="dashboard-content-block">
                        <div class="form-group">
                            <label>Site Title</label>
                            <input class="form-control" placeholder="Enter the Site title" type="text" />
                            <span class="text-danger" v-if="localErrors.title">
                                {{ localErrors.title }}
                            </span>
                        </div>
                        <div class="form-group">
                            <label>Tag Line</label>
                            <input class="form-control"
                                placeholder="Enter the Tag Line (In a few words, explain what this site is about.)"
                                type="text" />
                            <span class="text-danger" v-if="localErrors.title">
                                {{ localErrors.title }}
                            </span>
                        </div>
                        <div class="form-group">
                            <label>Admin Address(URL)</label>
                            <input class="form-control" placeholder="Enter the Admin Address URL" type="text" />
                            <span class="text-danger" v-if="localErrors.title">
                                {{ localErrors.title }}
                            </span>
                        </div>
                        <div class="form-group">
                            <label>Site Address(URL)</label>
                            <input class="form-control" placeholder="Enter the Site Address URL" type="text" />
                            <span class="text-danger" v-if="localErrors.title">
                                {{ localErrors.title }}
                            </span>
                        </div>
                        <div class="form-group">
                            <label>Administration Email Address</label>
                            <input class="form-control" placeholder="Enter the Administration Email Address"
                                type="text" />
                            <small><b>Note:</b> This address is used for admin purposes. If you
                                change this, an email will be sent to your new address to
                                confirm it. The new address will not become active until
                                confirmed.</small>
                            <span class="text-danger" v-if="localErrors.title">
                                {{ localErrors.title }}
                            </span>
                        </div>

                        <div class="row">
                            <div class="col-md-4 col-sm-12">
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
                                </div>
                                <!-- form-group -->
                            </div>
                            <!-- col-md-4 col-sm-12 -->
                            <div class="col-md-4 col-sm-12">
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
                                </div>
                                <!-- form-group -->
                            </div>
                            <!-- col-md-4 col-sm-12 -->
                            <div class="col-md-4 col-sm-12">
                                <div class="form-group">
                                    <label>Timezone</label>
                                    <div>
                                        <el-select v-model="formData.timezone" filterable default-first-option
                                            :reserve-keyword="false" placeholder="Choose timezone for your site"
                                            style="width: 300px">
                                            <el-option v-for="timezone in timezones" :key="timezone.id"
                                                :label="`${timezone.name} (${timezone.offset})`"
                                                :value="timezone.name" />
                                        </el-select>
                                        <small>
                                            <b>Note:</b> Choose either a city in the same timezone as
                                            you or a UTC (Coordinated Universal Time) time offset.
                                            <br /><b>Universal time is {{ currentUTC }}.</b>
                                        </small>
                                    </div>
                                </div>
                                <!-- form-group -->
                            </div>
                            <!-- col-md-4 col-sm-12 -->
                        </div>
                        <!-- row -->
                        <div class="form-group">
                            <label>Date Format</label>
                            <table class="dashboard-table table-lined responsive-table">
                                <thead>
                                    <tr v-for="(format, index) in dateFormats" :key="index">
                                        <td>
                                            <input type="radio" name="date_format" :value="format.value"
                                                v-model="selectedDateFormat" />
                                        </td>
                                        <td>{{ format.label }} - {{ format.value }}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="radio" name="date_format" value="custom"
                                                v-model="selectedDateFormat" />
                                        </td>
                                        <td>
                                            Custom - 
                                            <input v-if="selectedDateFormat === 'custom'" type="text"
                                                v-model="customDateFormat" placeholder="Enter custom format" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td><strong>Preview:</strong> {{ dateFormatPreview }}</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="form-group">
                            <label>Time Format</label>
                            <table class="dashboard-table table-lined responsive-table">
                                <thead>
                                    <tr v-for="(format, index) in timeFormats" :key="index">
                                        <td>
                                            <input type="radio" name="time_format" :value="format.value"
                                                v-model="selectedTimeFormat" />
                                        </td>
                                        <td>{{ format.label }} - {{ format.value }}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="radio" name="time_format" value="custom"
                                                v-model="selectedTimeFormat" />
                                        </td>
                                        <td>
                                            Custom - 
                                            <input v-if="selectedTimeFormat === 'custom'" type="text"
                                                v-model="customTimeFormat" placeholder="Enter custom time format" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td><strong>Preview:</strong> {{ timeFormatPreview }}</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="row">
                            <div class="col-md-4 col-sm-12">
                                <div class="form-group">
                                    <label>Week Starts On</label>
                                    <div>
                                        <el-select v-model="formData.weekday" filterable default-first-option
                                            :reserve-keyword="false" placeholder="Choose day where week start"
                                            style="width: 300px">
                                            <el-option v-for="weekday in weekdays" :key="weekday.id"
                                                :label="weekday.name" :value="weekday.name" />
                                        </el-select>
                                    </div>
                                </div>
                                <!-- form-group -->
                            </div>
                        </div>
                        <!-- row -->
                    </div>
                    <!-- dashboard-content-block -->
                </div>
                <!-- dashboard-content-block-wrap -->
                <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
                    <RouterLink class="btn btn-primary-outlined" :to="{name:'dashboard.my-properties'}">
                          Cancel
                    </RouterLink>
                    <SaveBtn :btnLoading="btnLoading" :hasErrors="hasErrors"/>
                </div>
                <!-- add-new-listing-bottom-nav-wrap -->
            </form>
        </div>
        <!-- dashboard-content-inner-wrap -->
    </section>
    <!-- dashboard-content-wrap -->
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
