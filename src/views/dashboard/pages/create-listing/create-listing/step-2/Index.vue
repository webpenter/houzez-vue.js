<template>
    <DashboardHeader :heading="TITLE_CREATE_UPDATE_LISTING">
      <SaveAsDraftBtn :status="property.property_status ?? ''"/>
    </DashboardHeader>
        <section class="dashboard-content-wrap dashboard-add-new-listing">
            <snake-nav active="2"/>
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
                              class="form-control"
                              :class="{ 'is-invalid': localErrors.bedrooms }"
                              @input="validateField('bedrooms')"
                              v-model="formData.bedrooms"
                              placeholder="Enter number of bedrooms"
                              type="text"
                          >
                          <span class="text-danger" v-if="localErrors.bedrooms">
                            {{ localErrors.bedrooms }}
                          </span>
                        </div>
                      </div><!-- col-md-6 col-sm-12 -->
                      <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label>Bathrooms *</label>
                          <input
                              class="form-control"
                              :class="{ 'is-invalid': localErrors.bathrooms }"
                              @input="validateField('bathrooms')"
                              v-model="formData.bathrooms"
                              placeholder="Enter number of bathrooms"
                              type="text"
                          >
                          <span class="text-danger" v-if="localErrors.bathrooms">
                            {{ localErrors.bathrooms }}
                          </span>
                        </div>
                      </div><!-- col-md-6 col-sm-12 -->
                      <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label>Garages</label>
                          <input
                              class="form-control"
                              :class="{ 'is-invalid': localErrors.garages }"
                              @input="validateField('garages')"
                              v-model="formData.garages"
                              placeholder="Enter number of garages"
                              type="text"
                          >
                          <span class="text-danger" v-if="localErrors.garages">
                            {{ localErrors.garages }}
                          </span>
                        </div>
                      </div><!-- col-md-6 col-sm-12 -->
                      <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label>Garages Size</label>
                          <input class="form-control" v-model="formData.garages_size" placeholder="Enter the garages size" type="text">
                          <small class="form-text text-muted">For example: 200 Sq Ft</small>
                        </div>
                      </div><!-- col-md-6 col-sm-12 -->
                      <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label>Area Size *</label>
                          <input
                              class="form-control"
                              :class="{ 'is-invalid': localErrors.area_size }"
                              @input="validateField('area_size')"
                              v-model="formData.area_size"
                              placeholder="Enter property area size"
                              type="text"
                          >
                          <span class="text-danger" v-if="localErrors.area_size">
                            {{ localErrors.area_size }}
                          </span>
                        </div>
                      </div><!-- col-md-6 col-sm-12 -->
                      <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label>Size Prefix</label>
                          <input class="form-control" v-model="formData.size_prefix" placeholder="Enter the size prefix" type="text">
                          <small class="form-text text-muted">For example: Sq Ft</small>
                        </div>
                      </div><!-- col-md-6 col-sm-12 -->
                      <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label>Land Area</label>
                          <input
                              class="form-control"
                              :class="{ 'is-invalid': localErrors.land_area }"
                              @input="validateField('land_area')"
                              v-model="formData.land_area"
                              placeholder="Enter property land area size"
                              type="text"
                          >
                          <span class="text-danger" v-if="localErrors.land_area">
                            {{ localErrors.land_area }}
                          </span>
                        </div>
                      </div><!-- col-md-6 col-sm-12 -->
                      <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label>Land Area Size Postfix</label>
                          <input class="form-control" v-model="formData.land_area_size_postfix" placeholder="Enter property land area postfix" type="text">
                          <small class="form-text text-muted">For example: Sq Ft</small>
                        </div>
                      </div><!-- col-md-6 col-sm-12 -->
                      <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label>Property ID</label>
                          <input class="form-control" v-model="formData.property_id" placeholder="Enter property ID" type="text">
                          <small class="form-text text-muted">For example: HZ-01</small>
                        </div>
                      </div><!-- col-md-6 col-sm-12 -->
                      <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label>Year Built</label>
                          <input
                              class="form-control"
                              :class="{ 'is-invalid': localErrors.year_built }"
                              @input="validateField('year_built')"
                              v-model="formData.year_built"
                              placeholder="Enter year built"
                              type="text"
                          >
                          <span class="text-danger" v-if="localErrors.year_built">
                            {{ localErrors.year_built }}
                          </span>
                        </div><!-- form-group -->
                      </div><!-- col-md-6 col-sm-12 -->
                    </div><!-- row -->
                  </div><!-- dashboard-content-block -->
                </div><!-- dashboard-content-block-wrap -->

                <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
                  <BackBtn route="dashboard.create-listing.step-1" :pId="propertyId"/>
                  <NextBtn :btnLoading="btnLoading" :hasErrors="hasErrors"/>
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
import SectionDetails from '@/views/inc/dashboard/property/SectionDetails.vue';
import {useRoute, useRouter} from "vue-router";
import {computed, onMounted, ref, watch} from "vue";
import {PROPERTY_TOTAL_STEPS, TITLE_CREATE_UPDATE_LISTING} from "@/constants/index.js";
import {useNotification, useProperty} from "@/stores/index.js";
import {storeToRefs} from "pinia";

const route = useRoute();
const router = useRouter();
const propertyId = route.params.propertyId;
const propertyToRefs = useProperty();
const {property} = storeToRefs(propertyToRefs);
const notify = useNotification();
const btnLoading = ref(false);

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

const hasErrors = computed(() =>
    Object.values(localErrors.value).some((error) => error !== "")
);

const editData = async () => {
  const res = await propertyToRefs.edit(propertyId);

  if (res.status === 404) {
    return router.push({name:"property-not-found-404"});
  } else if (res.status === 403) {
    return router.push({name:"unauthorized-403"});
  }
}

const formSubmit = async () => {
  Object.keys(localErrors.value).forEach((field) => validateField(field));

  if (hasErrors.value) {
    notify.Error("Please fix the validation errors before proceeding.");
    return;
  }

  btnLoading.value = true;

  try {
    const res = await propertyToRefs.createOrUpdate(formData.value, propertyId);

    btnLoading.value = false;

    if (res.status === 200) {
      notify.Success(`Step 2 of ${PROPERTY_TOTAL_STEPS} completed.`);
      router.push({name:"dashboard.create-listing.step-3",params:{propertyId:propertyId}});
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
  editData();

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