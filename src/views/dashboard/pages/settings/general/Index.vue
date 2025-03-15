<template>
    <DashboardHeader heading="General Settings"></DashboardHeader>
    <section class="dashboard-content-wrap dashboard-add-new-listing">
        <div class="dashboard-content-inner-wrap">
            <form @submit.prevent="formSubmit">
                <div class="dashboard-content-block-wrap">
                    <div class="dashboard-content-block">
                        <div class="form-group" v-for="(label, key) in fieldLabels" :key="key">
                            <label>{{ label }}</label>
                            <input v-model="formData[key]" class="form-control" :placeholder="'Enter the ' + label" type="text" />
                            <span class="text-danger" v-if="localErrors[key]">{{ localErrors[key] }}</span>
                        </div>

                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label>Hero Section Image</label>
                                    <img class="img-fluid" :src="formData.heroImage || 'http://placehold.it/300x300'" alt="thumb">
                                    <button type="button" class="btn btn-primary btn-full-width mt-3">Update Hero Image</button>
                                    <small class="form-text text-muted text-center">Minimum 300 x 300 px</small>
                                </div>
                            </div>

                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label>Site Logo</label>
                                    <img class="img-fluid" :src="formData.siteLogo || 'http://placehold.it/300x300'" alt="thumb">
                                    <button type="button" class="btn btn-primary btn-full-width mt-3">Update Logo</button>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label>New User Default Role</label>
                                    <el-select v-model="formData.role" filterable default-first-option placeholder="Choose role">
                                        <el-option v-for="role in roles" :key="role.id" :label="role.name" :value="role.name" />
                                    </el-select>
                                </div>
                            </div>

                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label>Site Language</label>
                                    <el-select v-model="formData.language" filterable default-first-option placeholder="Choose language">
                                        <el-option v-for="language in languages" :key="language.id" :label="language.name" :value="language.name" />
                                    </el-select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
                    <RouterLink class="btn btn-primary-outlined" :to="{ name: 'dashboard' }">Cancel</RouterLink>
                    <SaveBtn :btnLoading="btnLoading" :hasErrors="hasErrors" />
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
import axios from "axios";
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useRole, useLanguage, useNotification } from "@/stores/index.js";
import SaveBtn from "../components/SaveBtn.vue";

const router = useRouter();
const notify = useNotification();
const { roles } = storeToRefs(useRole());
const { languages } = storeToRefs(useLanguage());

const formData = ref({
    siteName: "",
    siteTitle: "",
    siteDescription: "",
    siteAddress: "",
    contactNumber: "",
    emailAddress: "",
    facebookLink: "",
    instagramLink: "",
    twitterLink: "",
    linkedinLink: "",
    footerDescription: "",
    heroTitle: "",
    heroDescription: "",
    heroImage: "",
    siteLogo: "",
    role: null,
    language: null,
});

const localErrors = ref({});
const btnLoading = ref(false);

// Field Labels
const fieldLabels = {
    siteName: "Site Name",
    siteTitle: "Site Title",
    siteDescription: "Site Description",
    siteAddress: "Site Address",
    contactNumber: "Contact Number",
    emailAddress: "Email Address",
    facebookLink: "Facebook Link",
    instagramLink: "Instagram Link",
    twitterLink: "Twitter Link",
    linkedinLink: "LinkedIn Link",
    footerDescription: "Footer Description",
    heroTitle: "Hero Title",
    heroDescription: "Hero Description"
};

// Fetch Data on Component Load
onMounted(async () => {
    try {
        const response = await axios.get("/api/v1/settings/general");
        console.log(response);
        if (response.data.data) {
            formData.value = { ...response.data.data };
        }
    } catch (error) {
        notify.Error("Failed to load settings.");
    }
});

// Validation
const validateField = (field, value) => {
    if (typeof value === "string") value = value.trim();

    if (!value) {
        localErrors.value[field] = `${fieldLabels[field]} is required.`;
    } else if (field === "emailAddress" && !/^\S+@\S+\.\S+$/.test(value)) {
        localErrors.value[field] = "Invalid email format.";
    } else if (field === "contactNumber" && !/^\d+$/.test(value)) {
        localErrors.value[field] = "Contact number must contain only digits.";
    } else {
        localErrors.value[field] = "";
    }
};

// Validate All Fields
const validateForm = () => {
    Object.entries(formData.value).forEach(([key, value]) => validateField(key, value));
};

// Check if Errors Exist
const hasErrors = computed(() => Object.values(localErrors.value).some((error) => error !== ""));

// Form Submission
const formSubmit = async () => {
    validateForm();
    if (hasErrors.value) {
        notify.Error("Please fix the validation errors.");
        return;
    }

    btnLoading.value = true;

    try {
        const response = await axios.post("/api/settings/create", formData.value);
        if (response.status === 200) {
            notify.Success("Settings updated successfully!");
            router.push({ name: "dashboard" });
        }
    } catch (error) {
        if (error.response?.status === 422) {
            localErrors.value = error.response.data.errors || {};
        } else {
            notify.Error("Failed to update settings.");
        }
    } finally {
        btnLoading.value = false;
    }
};
</script>
