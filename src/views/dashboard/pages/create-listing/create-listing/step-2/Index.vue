<template>
    <DashboardHeader :heading="TITLE_CREATE_UPDATE_LISTING">
      <SaveAsDraftBtn :status="property.property_status ?? ''"/>
    </DashboardHeader>
        <section class="dashboard-content-wrap dashboard-add-new-listing">
            <SnakeNav active="2"/>
            <div class="dashboard-content-inner-wrap">
              <form @submit.prevent="formSubmit">
                <div class="dashboard-content-block-wrap">
                  <h2>Property Details</h2>
                  <div class="dashboard-content-block">
                    <div class="row">
                      <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label>Bedrooms *</label>
                          <input
                              v-model="formData.bedrooms"
                              class="form-control"
                              :class="{ 'is-invalid': localErrors.bedrooms }"
                              placeholder="Enter number of bedrooms"
                              type="text"
                              @input="validateField('bedrooms')"
                          >
                          <span v-if="localErrors.bedrooms" class="text-danger">
                            {{ localErrors.bedrooms }}
                          </span>
                        </div>
                      </div><!-- col-md-6 col-sm-12 -->
                      <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label>Bathrooms *</label>
                          <input
                              v-model="formData.bathrooms"
                              class="form-control"
                              :class="{ 'is-invalid': localErrors.bathrooms }"
                              placeholder="Enter number of bathrooms"
                              type="text"
                              @input="validateField('bathrooms')"
                          >
                          <span v-if="localErrors.bathrooms" class="text-danger">
                            {{ localErrors.bathrooms }}
                          </span>
                        </div>
                      </div><!-- col-md-6 col-sm-12 -->
                      <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label>Garages</label>
                          <input
                              v-model="formData.garages"
                              class="form-control"
                              :class="{ 'is-invalid': localErrors.garages }"
                              placeholder="Enter number of garages"
                              type="text"
                              @input="validateField('garages')"
                          >
                          <span v-if="localErrors.garages" class="text-danger">
                            {{ localErrors.garages }}
                          </span>
                        </div>
                      </div><!-- col-md-6 col-sm-12 -->
                      <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label>Garages Size</label>
                          <input v-model="formData.garages_size" class="form-control" placeholder="Enter the garages size" type="text">
                          <!-- <small class="form-text text-muted">For example: 200 Sq Ft</small> -->
                        </div>
                      </div><!-- col-md-6 col-sm-12 -->
                      <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label>Area Size *</label>
                          <input
                              v-model="formData.area_size"
                              class="form-control"
                              :class="{ 'is-invalid': localErrors.area_size }"
                              placeholder="Enter property area size"
                              type="text"
                              @input="validateField('area_size')"
                          >
                          <span v-if="localErrors.area_size" class="text-danger">
                            {{ localErrors.area_size }}
                          </span>
                        </div>
                      </div><!-- col-md-6 col-sm-12 -->
                      <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label>Size Prefix</label>
                          <input v-model="formData.size_prefix" class="form-control" placeholder="Enter the size prefix" type="text">
                          <small class="form-text text-muted">For example: Sq Ft</small>
                        </div>
                      </div><!-- col-md-6 col-sm-12 -->
                      <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label>Land Area</label>
                          <input
                              v-model="formData.land_area"
                              class="form-control"
                              :class="{ 'is-invalid': localErrors.land_area }"
                              placeholder="Enter property land area size"
                              type="text"
                              @input="validateField('land_area')"
                          >
                          <span v-if="localErrors.land_area" class="text-danger">
                            {{ localErrors.land_area }}
                          </span>
                        </div>
                      </div><!-- col-md-6 col-sm-12 -->
                      <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label>Land Area Size Postfix</label>
                          <input v-model="formData.land_area_size_postfix" class="form-control" placeholder="Enter property land area postfix" type="text">
                          <small class="form-text text-muted">For example: Sq Ft</small>
                        </div>
                      </div><!-- col-md-6 col-sm-12 -->
                      <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label>Property ID</label>
                          <input v-model="formData.property_id" class="form-control" placeholder="Enter property ID" type="text">
                          <small class="form-text text-muted">For example: HZ-01</small>
                        </div>
                      </div><!-- col-md-6 col-sm-12 -->
                      <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label>Year Built</label>
                          <input
                              v-model="formData.year_built"
                              class="form-control"
                              :class="{ 'is-invalid': localErrors.year_built }"
                              placeholder="Enter year built"
                              type="text"
                              @input="validateField('year_built')"
                          >
                          <span v-if="localErrors.year_built" class="text-danger">
                            {{ localErrors.year_built }}
                          </span>
                        </div><!-- form-group -->
                      </div><!-- col-md-6 col-sm-12 -->
                    </div><!-- row -->
                  </div><!-- dashboard-content-block -->
                </div><!-- dashboard-content-block-wrap -->

                <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
                  <BackBtn route="dashboard.create-listing.step-1" :p-id="propertyId"/>
                  <NextBtn :btn-loading="btnLoading" :has-errors="hasErrors"/>
                </div><!-- add-new-listing-bottom-nav-wrap -->
              </form>

            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import SnakeNav from '../../components/SnakeNav.vue';
import SaveAsDraftBtn from '../components/SaveAsDraftBtn.vue';
import NextBtn from '../components/NextBtn.vue';
import BackBtn from '../components/BackBtn.vue';
import {useRoute} from "vue-router";
import {onMounted, ref, watch} from "vue";
import {TITLE_CREATE_UPDATE_LISTING} from "@/constants/index.js";
import {useProperty} from "@/stores/index.js";
import {storeToRefs} from "pinia";
import {useEditProperty,usePropertyForm} from "@/traits/property/manageProperty.js";

const route = useRoute()
const propertyId = route.params.propertyId;
const propertyToRefs = useProperty();
const {property} = storeToRefs(propertyToRefs);

const formData = ref({
    bedrooms: null,
    bathrooms : null,
    garages : null,
    garages_size :"",
    area_size :null,
    size_prefix :"",
    land_area :null,
    land_area_size_postfix :"",
    property_id :null,
    year_built :null,
});

const localErrors = ref({
  bedrooms: "",
  bathrooms : "",
  garages : "",
  area_size :"",
  land_area :"",
  year_built :"",
});

const validateField = (field) => {
  const currentYear = new Date().getFullYear();

  if (field === "area_size") {
    if (!formData.value.area_size) {
      localErrors.value.area_size = "Area size field is required.";
    } else if (isNaN(formData.value.area_size)) {
      localErrors.value.area_size = "Area size field must be a number.";
    } else {
      localErrors.value.area_size = "";
    }
  } else if (field === "bedrooms") {
    if (!formData.value.bedrooms) {
      localErrors.value.bedrooms = "Bedrooms field is required.";
    } else if (isNaN(formData.value.bedrooms)) {
      localErrors.value.bedrooms = "Bedrooms field must be a number.";
    } else {
      localErrors.value.bedrooms = "";
    }
  } else if (field === "bathrooms") {
    if (!formData.value.bathrooms) {
      localErrors.value.bathrooms = "Bathrooms field is required.";
    } else if (isNaN(formData.value.bathrooms)) {
      localErrors.value.bathrooms = "Bathrooms field must be a number.";
    } else {
      localErrors.value.bathrooms = "";
    }
  } else if (field === "garages" && formData.value.garages && isNaN(formData.value.garages)) {
    localErrors.value.garages = "Garages field must be a number.";
  } else if (field === "land_area" && formData.value.land_area && isNaN(formData.value.land_area)) {
    localErrors.value.land_area = "Land area field must be a number.";
  } else if (field === "year_built" && formData.value.year_built) {
    if (isNaN(formData.value.year_built)) {
      localErrors.value.year_built = "Year built field must be a number.";
    } else if (formData.value.year_built < 1800 || formData.value.year_built > currentYear) {
      localErrors.value.year_built = `Please write a valid year and must be between 1800 and ${currentYear}.`;
    } else {
      localErrors.value.year_built = "";
    }
  } else {
    localErrors.value[field] = "";
  }
};

const {editData} = useEditProperty();

const { formSubmit, btnLoading, hasErrors } = usePropertyForm(
    propertyId,
    formData,
    localErrors,
    validateField,
    2,
);

onMounted(() => {
  editData(propertyId);

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