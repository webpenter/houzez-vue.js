<template>
  <section class="advanced-search advanced-search-half-map">
    <div class="container">
      <div class="d-flex">
        <div class="flex-search flex-grow-1">
          <GeolocationField
            
            @update:search="formData.search = $event"
            :modelValue="formData.search"
          />

        </div>
      </div>

      <!-- <DistanceRange @update:radius="formData.radius = $event" /> -->

      <div class="d-flex">
        <div class="flex-search">
          <CitiesField 
          :modelValue="formData.cities" 
          @update:cities="formData.cities = $event" />
        </div>
        <div class="flex-search">
          <TypeField :modelValue="formData.types" @update:types="formData.types = $event" />
        </div>
        <div class="flex-search">
         <BedroomsField
          :modelValue="formData.bedrooms"
          @update:bedrooms="formData.bedrooms = $event"
        />
        </div>
        <div class="flex-search">
          <MaxPriceField :modelValue="formData.maxPrice" @update:maxPrice="formData.maxPrice = $event" />
        </div>
      </div>


      <div class="d-flex half-map-buttons-wrap">
        <SubmitButton @search="searchProperty" />
        <SaveSearchBtn @save-search="saveSearchClicked" />
        <ResetSearchButton @reset="resetFilters" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, onMounted, watch } from 'vue';
import CitiesField from './CitiesField.vue';
import GeolocationField from './GeolocationField.vue';
import TypeField from './TypeField.vue';
import BedroomsField from './BedroomsField.vue';
import MaxPriceField from './MaxPriceField.vue';
import SubmitButton from './SubmitButton.vue';
import SaveSearchBtn from './SaveSearchBtn.vue';
import ResetSearchButton from './ResetSearchButton.vue';

const emit = defineEmits(['search', 'reset', 'save-search']);
const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  }
});

// ✅ Sync incoming formData to local reactive state
const formData = reactive({ ...props.modelValue });

// ✅ Watch for future changes to props and update local formData
watch(
  () => props.modelValue,
  (val) => {
    Object.assign(formData, val);
    setTimeout(() => {
      $('.selectpicker').selectpicker('refresh');
    }, 0);
  },
  { deep: true }
);

// ✅ Emit to parent when buttons are clicked
const searchProperty = () => emit('search', { ...formData });
const resetFilters = () => emit('reset');
const saveSearchClicked = () => emit('save-search');

// ✅ Refresh selectpicker after mount
onMounted(() => {
  setTimeout(() => {
    $('.selectpicker').selectpicker('refresh');
  }, 0);
});
</script>
