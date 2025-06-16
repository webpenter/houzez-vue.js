<!-- SearchHalfMapGeolocation.vue -->
<template>
  <section class="advanced-search advanced-search-half-map">
    <div class="container">
      <div class="d-flex">
        <div class="flex-search flex-grow-1">
          <GeolocationField @update:location="formData.location = $event" />
        </div>
      </div>

      <DistanceRange @update:radius="formData.radius = $event" />

      <div class="d-flex">
        <div class="flex-search">
          <CitiesField @update:cities="formData.cities = $event" />
        </div>
        <div class="flex-search">
          <TypeField @update:types="formData.types = $event" />
        </div>
        <div class="flex-search">
          <BedroomsField @update:bedrooms="formData.bedrooms = $event" />
        </div>
        <div class="flex-search">
          <MaxPriceField @update:maxPrice="formData.maxPrice = $event" />
        </div>
      </div>

      <div class="d-flex half-map-buttons-wrap">
        <SubmitButton @search="searchProperty" />
        <SaveSearchBtn />
        <ResetSearchButton />
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import CitiesField from './CitiesField.vue';
import DistanceRange from './DistanceRange.vue';
import GeolocationField from './GeolocationField.vue';
import TypeField from './TypeField.vue';
import BedroomsField from './BedroomsField.vue';
import MaxPriceField from './MaxPriceField.vue';
import SubmitButton from './SubmitButton.vue';
import SaveSearchBtn from './SaveSearchBtn.vue';
import ResetSearchButton from './ResetSearchButton.vue';

const emit = defineEmits(['search']);

const formData = reactive({
  location: '',
  radius: '',
  cities: [],
  types: [],
  bedrooms: '',
  maxPrice: ''
});

const searchProperty = () => {
   console.log('Search Button Clicked:', formData); // ✅ Debug
  emit('search', { ...formData });
};

onMounted(() => {
  setTimeout(() => {
    $('.selectpicker').selectpicker('refresh');
  }, 0);
});
</script>
