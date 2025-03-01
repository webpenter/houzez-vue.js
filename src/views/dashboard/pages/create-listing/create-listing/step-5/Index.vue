<template>
  <DashboardHeader :heading="TITLE_CREATE_UPDATE_LISTING">
    <SaveAsDraftBtn :status="property.property_status ?? ''"/>
  </DashboardHeader>
  <section class="dashboard-content-wrap dashboard-add-new-listing">
    <snake-nav active="5"/>
    <div class="dashboard-content-inner-wrap">
      <form @submit.prevent="formSubmit">
        <div class="dashboard-content-block-wrap">
          <h2>Property Location</h2>
          <div class="dashboard-content-block">
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label>Address *</label>
                  <input
                      class="form-control"
                      :class="{ 'is-invalid': localErrors.address }"
                      @input="validateField('address')"
                      v-model="formData.address"
                      placeholder="Enter your property address"
                      type="text"
                      autocomplete="off"
                  >
                  <span class="text-danger" v-if="localErrors.address">
                      {{ localErrors.address }}
                  </span>
                </div>
              </div><!-- col-md-6 col-sm-12 -->
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label>Country</label>
                  <input class="form-control" v-model="formData.country" placeholder="Enter your property country" type="text">
                </div>
              </div><!-- col-md-6 col-sm-12 -->
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label>County / State</label>
                  <input class="form-control" v-model="formData.county_state" placeholder="Enter your property county/state" type="text">
                </div>
              </div><!-- col-md-6 col-sm-12 -->
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label>City *</label>
                  <input
                      class="form-control"
                      :class="{ 'is-invalid': localErrors.city }"
                      @input="validateField('city')"
                      v-model="formData.city"
                      placeholder="Enter your property city"
                      type="text"
                  >
                  <span class="text-danger" v-if="localErrors.city">
                      {{ localErrors.city }}
                  </span>
                </div>
              </div><!-- col-md-6 col-sm-12 -->
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label>Neighborhood</label>
                  <input class="form-control" v-model="formData.neighborhood" placeholder="Enter your property neighborhood" type="text">
                </div>
              </div><!-- col-md-6 col-sm-12 -->
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label>Postal Code / Zip</label>
                  <input class="form-control" v-model="formData.zip_postal_code" placeholder="Enter your property zip code" type="text">
                </div>
              </div><!-- col-md-6 col-sm-12 -->
            </div><!-- row -->
          </div><!-- dashboard-content-block -->
        </div><!-- dashboard-content-block-wrap -->
        <div class="dashboard-content-block-wrap">
          <h2>Map</h2>
          <div class="dashboard-content-block">
            <div class="row">
              <div class="col-md-12 col-sm-12">
                <div class="form-group">
                  <label>Maps Latitude</label>
                  <input
                      class="form-control"
                      :class="{ 'is-invalid': localErrors.latitude }"
                      @input="validateField('latitude')"
                      v-model.number="formData.latitude"
                      placeholder="Enter maps latitude"
                      type="text"
                  >
                  <span class="text-danger" v-if="localErrors.latitude">
                  {{ localErrors.latitude }}
                </span>
                </div>
                <div class="form-group">
                  <label>Maps Longitude</label>
                  <input
                      class="form-control"
                      :class="{ 'is-invalid': localErrors.longitude }"
                      @input="validateField('longitude')"
                      v-model.number="formData.longitude"
                      placeholder="Enter maps longitude"
                      type="text"
                  >
                  <span class="text-danger" v-if="localErrors.longitude">
                  {{ localErrors.longitude }}
                 </span>
                </div>
              </div><!-- col-md-6 col-sm-12 -->
            </div><!-- row -->
            <div id="map"></div>
          </div><!-- dashboard-content-block -->
        </div><!-- dashboard-content-block-wrap -->
        <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
          <BackBtn route="dashboard.create-listing.step-4" :pId="propertyId"/>
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
import SectionLocation from '@/views/inc/dashboard/property/SectionLocation.vue';
import Map from "@/views/inc/Map.vue";
import { useRoute, useRouter } from "vue-router";
import { useNotification, useProperty } from "@/stores/index.js";
import { storeToRefs } from "pinia";
import { computed, onMounted, ref, watch } from "vue";
import {MAP_CONFIG, PROPERTY_TOTAL_STEPS, TITLE_CREATE_UPDATE_LISTING} from "@/constants/index.js";
import L from "leaflet";

const route = useRoute();
const router = useRouter();
const propertyId = route.params.propertyId;
const propertyToRefs = useProperty();
const { property } = storeToRefs(propertyToRefs);
const notify = useNotification();
const btnLoading = ref(false);

const formData = ref({
  address: "",
  country: "",
  county_state: "",
  city: "",
  neighborhood: "",
  zip_postal_code: "",
  latitude: null,
  longitude: null,
});

const localErrors = ref({
  address: "",
  city: "",
  latitude: "",
  longitude: "",
});

const validateField = (field) => {
  if (field === "address" && !formData.value.address) {
    localErrors.value.address = "Address field is required.";
  } else if (field === "city" && !formData.value.city) {
    localErrors.value.city = "City field is required.";
  } else if (field === "latitude") {
    if (formData.value.latitude && isNaN(formData.value.latitude)) {
      localErrors.value.latitude = "Latitude must be a number.";
    } else if (
      formData.value.latitude &&
      (formData.value.latitude < -90 || formData.value.latitude > 90)
    ) {
      localErrors.value.latitude = "Latitude must be between -90 and 90.";
    } else {
      localErrors.value.latitude = "";
    }
  } else if (field === "longitude") {
    if (formData.value.longitude && isNaN(formData.value.longitude)) {
      localErrors.value.longitude = "Longitude must be a number.";
    } else if (
      formData.value.longitude &&
      (formData.value.longitude < -180 || formData.value.longitude > 180)
    ) {
      localErrors.value.longitude = "Longitude must be between -180 and 180.";
    } else {
      localErrors.value.longitude = "";
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

  try {
    const res = await propertyToRefs.createOrUpdate(formData.value, propertyId);

    btnLoading.value = false;

    if (res.status === 200) {
      notify.Success(
        `Step 5 of ${PROPERTY_TOTAL_STEPS} completed.`
      );
      router.push({
        name: "dashboard.create-listing.step-6",
        params: { propertyId: propertyId },
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
  editData();

  if (property.value) {
    formData.value = { ...property.value };
  }

  const map = L.map("map").setView([MAP_CONFIG.LATITUDE, MAP_CONFIG.LONGITUDE], MAP_CONFIG.ZOOM);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: MAP_CONFIG.MAX_ZOOM,
  }).addTo(map);

  watch(
    () => [formData.value.latitude, formData.value.longitude],
    ([lat, lng]) => {
      if (lat && lng && !isNaN(lat) && !isNaN(lng)) {
        map.setView([lat, lng], MAP_CONFIG.ZOOM);

        map.eachLayer((layer) => {
          if (layer instanceof L.Marker) {
            map.removeLayer(layer);
          }
        });

        L.marker([lat, lng])
          .addTo(map)
          .bindPopup("Property Location")
          .openPopup();
      }
    },
    { immediate: true }
  );
});

watch(property, (newProperty) => {
  if (newProperty) {
    formData.value = { ...newProperty };
  }
});
</script>

<style scoped>
#map {
  width: 100%;
  height: 400px;
}
</style>
