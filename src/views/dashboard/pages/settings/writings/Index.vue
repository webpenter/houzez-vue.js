<template>
    <DashboardHeader heading="Writing Settings">
    </DashboardHeader>
    <section class="dashboard-content-wrap dashboard-add-new-listing">
        <div class="dashboard-content-inner-wrap">

            <form @submit.prevent="formSubmit">
                <div class="dashboard-content-block-wrap">
                    <h2>Post via email</h2>
                    <div class="dashboard-content-block">
                        <div class="form-group">
                            <label>Mail Server</label>
                            <input class="form-control" :class="{ 'is-invalid': localErrors.title }"
                                @input="validateField('title')" v-model="formData.title"
                                placeholder="Enter the mail server" type="text">
                            <span class="text-danger" v-if="localErrors.title">
                                {{ localErrors.title }}
                            </span>
                        </div>
                        <div class="form-group">
                            <label>Login Name</label>
                            <input class="form-control" :class="{ 'is-invalid': localErrors.title }"
                                @input="validateField('title')" v-model="formData.title"
                                placeholder="Enter the login name" type="text">
                            <span class="text-danger" v-if="localErrors.title">
                                {{ localErrors.title }}
                            </span>
                        </div> <div class="form-group">
                            <label>Password</label>
                            <input class="form-control" :class="{ 'is-invalid': localErrors.title }"
                                @input="validateField('title')" v-model="formData.title"
                                placeholder="Enter the password" type="text">
                            <span class="text-danger" v-if="localErrors.title">
                                {{ localErrors.title }}
                            </span>
                        </div>
                        <div class="row">
                            <div class="col-md-4 col-sm-12">
                                <div class="form-group">
                                    <label>Default Post Category</label>
                                    <div>
                                        <el-select v-model="formData.type" filterable default-first-option
                                            :reserve-keyword="false" placeholder="Choose type for your property"
                                            style="width: 300px">
                                            <el-option v-for="type in types" :key="type.id" :label="type.name"
                                                :value="type.name" />
                                        </el-select>
                                    </div>
                                </div><!-- form-group -->
                            </div><!-- col-md-4 col-sm-12 -->
                            <div class="col-md-4 col-sm-12">
                                <div class="form-group">
                                    <label>Default Post Format</label>
                                    <div>
                                        <el-select v-model="formData.status" filterable default-first-option
                                            :reserve-keyword="false" placeholder="Choose status for your property"
                                            style="width: 300px">
                                            <el-option v-for="status in statuses" :key="status.id" :label="status.name"
                                                :value="status.name" />
                                        </el-select>
                                    </div>
                                </div><!-- form-group -->
                            </div><!-- col-md-4 col-sm-12 -->
                            <div class="col-md-4 col-sm-12">
                                <div class="form-group">
                                    <label>Default Mail Category</label>
                                    <div>
                                        <el-select v-model="formData.label" filterable default-first-option
                                            :reserve-keyword="false" placeholder="Choose label for your property"
                                            style="width: 300px">
                                            <el-option v-for="label in labels" :key="label.id" :label="label.name"
                                                :value="label.name" />
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
                    <NextBtn :btnLoading="btnLoading" :hasErrors="hasErrors" />
                </div><!-- add-new-listing-bottom-nav-wrap -->
            </form>

        </div><!-- dashboard-content-inner-wrap -->

    </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { computed, onMounted, ref, watch } from "vue";
import { useLabel, useType, useNotification, useProperty, useStatus } from "@/stores/index.js";
import { storeToRefs } from "pinia";
import NextBtn from "@/views/dashboard/pages/create-listing/create-listing/components/NextBtn.vue";

const route = useRoute();
const router = useRouter();
const propertyId = route.params.propertyId;

const propertyToRefs = useProperty();
const { property } = storeToRefs(propertyToRefs);
const { labels } = storeToRefs(useLabel());
const { statuses } = storeToRefs(useStatus());
const { types } = storeToRefs(useType());
const notify = useNotification();

const formData = ref({
    title: "",
    description: "",
    type: null,
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
    } else if (field === "second_price" && formData.value.second_price && isNaN(formData.value.second_price)) {
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
}

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
            notify.Success(`Step 1 of ${PROPERTY_TOTAL_STEPS} completed. Your property has been recorded`);
            router.push({ name: "dashboard.create-listing.step-2", params: { propertyId: newPropertyId } });
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
    if (propertyId) {
        editData();
    }

    if (property.value) {
        formData.value = { ...property.value };
    }
});

watch(property, (newProperty) => {
    if (newProperty) {
        formData.value = { ...newProperty };
    }
});
</script>