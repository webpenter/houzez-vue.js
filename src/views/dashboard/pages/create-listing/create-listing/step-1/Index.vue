<template>
    <DashboardHeader :heading="TITLE_CREATE_UPDATE_LISTING">
        <SaveAsDraftBtn :status="property.property_status ?? ''"/>
    </DashboardHeader>
        <section class="dashboard-content-wrap dashboard-add-new-listing">
            <SnakeNav active="1"/>
            <div class="dashboard-content-inner-wrap">
              <form @submit.prevent="formSubmit">
                <div class="dashboard-content-block-wrap">
                  <h2>Description</h2>
                  <div class="dashboard-content-block">
                    <div class="form-group">
                      <label>Title *</label>
                      <input
                      v-model="formData.title"
                          class="form-control"
                          :class="{ 'is-invalid': localErrors.title }"
                          placeholder="Enter the property title"
                          type="text"
                          @input="validateField('title')"
                      >
                      <span
                      v-if="localErrors.title"
                      class="text-danger">
                        {{ localErrors.title }}
                      </span>
                    </div>
                    <div class="form-group">
                      <label>Description</label>
                      <textarea 
                      class="form-control" rows="10" placeholder="Enter the property description"></textarea>
                    </div>
                    <div class="row">
                      <div class="col-md-4 col-sm-12">
                        <div class="form-group">
                          <label>Type</label>
                          <div>
                            <el-select
                                v-model="formData.type" 
                                filterable
                                default-first-option
                                :reserve-keyword="false"
                                placeholder="Choose type for your property"
                                style="width: 300px"
                            >
                              <el-option
                                  v-for="type in types"
                                  :key="type.id"
                                  :label="type.name"
                                  :value="type.name"
                              />
                            </el-select>
                          </div>
                        </div><!-- form-group -->
                      </div><!-- col-md-4 col-sm-12 -->
                      <div class="col-md-4 col-sm-12">
                        <div class="form-group">
                          <label>Status</label>
                          <div>
                            <el-select
                                v-model="formData.status"
                                filterable
                                default-first-option
                                :reserve-keyword="false"
                                placeholder="Choose status for your property"
                                style="width: 300px"
                            >
                              <el-option
                                  v-for="status in statuses"
                                  :key="status.id"
                                  :label="status.name"
                                  :value="status.value"
                              />
                            </el-select>
                          </div>
                        </div><!-- form-group -->
                      </div><!-- col-md-4 col-sm-12 -->
                      <div class="col-md-4 col-sm-12">
                        <div class="form-group">
                          <label>Label</label>
                          <div>
                            <el-select
                                v-model="formData.label"
                                filterable
                                default-first-option
                                :reserve-keyword="false"
                                placeholder="Choose label for your property"
                                style="width: 300px"
                            >
                              <el-option
                                  v-for="label in labels"
                                  :key="label.id"
                                  :label="label.name"
                                  :value="label.name"
                              />
                            </el-select>
                          </div>
                        </div><!-- form-group -->
                      </div><!-- col-md-4 col-sm-12 -->
                    </div><!-- row -->
                  </div><!-- dashboard-content-block -->
                </div><!-- dashboard-content-block-wrap -->

                <div class="dashboard-content-block-wrap">
                  <h2>Price</h2>
                  <div class="dashboard-content-block">
                    <div class="row">
                      <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label>Sale or Rent Price *</label>
                          <input
                          v-model="formData.price"
                              class="form-control"
                              :class="{ 'is-invalid': localErrors.price }"
                              placeholder="Enter the price"
                              type="text"
                              @input="validateField('price')"
                          >
                          <span 
                          v-if="localErrors.price"
                          class="text-danger">
                          {{ localErrors.price }}
                        </span>
                        </div>
                      </div><!-- col-md-6 col-sm-12 -->
                      <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label>Per Sqft Price (Optional)</label>
                          <input
                          v-model="formData.second_price"
                              class="form-control"
                              :class="{ 'is-invalid': localErrors.second_price }"
                               placeholder="Enter the second price"
                              type="text"
                              @input="validateField('second_price')"
                          >
                          <span 
                          v-if="localErrors.second_price"
                          class="text-danger">
                          {{ localErrors.second_price }}
                         </span>
                        </div><!-- form-group -->
                      </div><!-- col-md-6 col-sm-12 -->
                      <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label>After The Price Label</label>
                          <input 
                          v-model="formData.after_price" 
                          class="form-control" placeholder="Enter the label after price" type="text">
                          <small class="form-text text-muted">For example: Monthly</small>
                        </div>
                      </div><!-- col-md-6 col-sm-12 -->
                      <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label>Price Prefix</label>
                          <input 
                          v-model="formData.price_prefix"
                          class="form-control" placeholder="Enter the price prefix" type="text">
                          <small class="form-text text-muted">For example: $</small>
                        </div><!-- form-group -->
                      </div><!-- col-md-6 col-sm-12 -->
                    </div><!-- row -->
                  </div><!-- dashboard-content-block -->
                </div><!-- dashboard-content-block-wrap -->

                <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
                      <RouterLink class="btn btn-primary-outlined" :to="{name:'dashboard.my-properties'}">
                          Cancel
                      </RouterLink>
                    <NextBtn :btnLoading="btnLoading" :hasErrors="hasErrors"/>
                  </div><!-- add-new-listing-bottom-nav-wrap -->
              </form>

            </div><!-- dashboard-content-inner-wrap -->

        </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import {RouterLink, useRoute, useRouter} from 'vue-router';
import SnakeNav from '../../components/SnakeNav.vue';
import SaveAsDraftBtn from '../components/SaveAsDraftBtn.vue';
import {computed, onMounted, ref, watch} from "vue";
import {useLabel,useType, useNotification, useProperty, useStatus} from "@/stores/index.js";
import {storeToRefs} from "pinia";
import {PROPERTY_TOTAL_STEPS, TITLE_CREATE_UPDATE_LISTING} from "@/constants/index.js";
import NextBtn from "@/views/dashboard/pages/create-listing/create-listing/components/NextBtn.vue";
import {useEditProperty} from "@/traits/property/manageProperty.js";

const route = useRoute();
const router = useRouter();
const propertyId = route.params.propertyId;

const propertyToRefs = useProperty();
const {property} = storeToRefs(propertyToRefs);
const {labels} = storeToRefs(useLabel());
const {statuses} = storeToRefs(useStatus());
const {types} = storeToRefs(useType());
const notify = useNotification();

const formData = ref({
  title:"",
  description:"",
  type:null,
  status:null,
  label:null,
  price:"",
  second_price: "",
  after_price: "",
  price_prefix: "",
});

const btnLoading = ref(false);
const localErrors = ref({
  title: "",
  price:"",
  second_price:"",
});

const validateField = (field) => {
  if (field === "title" && !formData.value.title) {
    localErrors.value.title = "Title field is required.";
  } else if (field === "price") {
    if (!formData.value.price) {
      localErrors.value.price = "Price field is required.";
    } else if (isNaN(formData.value.price)) {
      localErrors.value.price = "Price field must be a number.";
    } else {
      localErrors.value.price = "";
    }
  } else if (field === "second_price" && formData.value.second_price && isNaN(formData.value.second_price)) {
    localErrors.value.second_price = "Second price field must be a number.";
  } else {
    localErrors.value[field] = "";
  }
};

const hasErrors = computed(() =>
    Object.values(localErrors.value).some((error) => error !== "")
);

const {editData} = useEditProperty();

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
      notify.Success(`Step 1 of ${PROPERTY_TOTAL_STEPS} completed.`);
      router.push({ name: "dashboard.create-listing.step-2", params: { propertyId: newPropertyId } });
    } else if (res.status === 404) {
      notify.Error("Property not found.");
    } else if (res.status === 403) {
      notify.Error("You are not authorized to perform this action.");
    } else {
      // Log the full response for debugging
      // console.log("Non-200/201 response:", res);
      // Handle server-side validation errors
      if (res.data && res.data.errors) {
        const serverErrors = res.data.errors;
        if (serverErrors.description && serverErrors.description.length > 0) {
          notify.Error(serverErrors.description[0]);
        } else if (res.data.message) {
          notify.Error(res.data.message);
        } else {
          notify.Error("An error occurred while processing the request.");
        }
      } else {
        notify.Error("An error occurred while processing the request.");
      }
    }
  } catch (error) {
    btnLoading.value = false;
    // Log the full error for debugging
    // console.log("Error in catch block:", error.response);
    // Handle errors in catch block
    if (error.response && error.response.data) {
      const serverErrors = error.response.data.errors;
      const errorMessage = error.response.data.message;
      if (serverErrors && serverErrors.description && serverErrors.description.length > 0) {
        notify.Error(serverErrors.description[0]);
      } else if (errorMessage) {
        notify.Error(errorMessage);
      } else {
        notify.Error("An error occurred");
      }
    } else {
      notify.Error("An error occurred");
    }
  }
};

onMounted(() => {
  if (propertyId){
    editData(propertyId);
  }

  if (property.value){
    formData.value = { ...property.value };
  }
});

watch(property,(newProperty) => {
  if (newProperty){
    formData.value = { ...newProperty };
  }
});
</script>