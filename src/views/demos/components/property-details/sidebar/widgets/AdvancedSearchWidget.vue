<template>
  <div class="widget widget-wrap widget-advanced-search">
    <div class="widget-header">
      <h3 class="widget-title">Find Your Home</h3>
    </div>
    <div class="widget-body">
      <div class="advanced-search-widget">
        <SearchField v-model="search" />
        <TypeField v-model="types" />
        <CitiesField v-model="cities" />
        <div class="row">
          <div class="col-sm-6 col-xs-12">
            <BedroomsField v-model="bedrooms" />
          </div>
          <div class="col-sm-6 col-xs-12">
            <MaxPriceField v-model="maxPrice" />
          </div>
        </div>
        <SubmitButton @click="handleSearch" />
      </div>
    </div>
  </div>
</template>

<script setup>

import SearchField from '../fields/SearchField.vue';
import TypeField from '../fields/TypeField.vue';
import CitiesField from '../fields/CitiesField.vue';
import BedroomsField from '../fields/BedroomsField.vue';
import MaxPriceField from '../fields/MaxPriceField.vue';
import SubmitButton from '../fields/SubmitButton.vue';

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAppProperty } from '@/stores/index';

const propertyStore = useAppProperty();
const router = useRouter();

const search = ref('');
const types = ref([]);
const cities = ref([]);
const bedrooms = ref('');
const maxPrice = ref('');
const status = ref(''); // if needed

const handleSearch = async () => {
  const formData = {
    search: search.value,
    types: types.value,
    cities: cities.value,
    bedrooms: bedrooms.value,
    maxPrice: maxPrice.value,
    status: status.value,
  };

  try {
    await propertyStore.getSearchedAndFilteredProperties(formData);
console.log("🔍 Form Data:", formData);
    // Now redirect to search-results page with query parameters
    router.push({
      name: 'demo01.search-results', // 🔁 your named route
      query: {
        search: formData.search,
        types: formData.types.join(','),
        cities: formData.cities.join(','),
        bedrooms: formData.bedrooms,
        maxPrice: formData.maxPrice,
        status: formData.status
      }
    });
  } catch (error) {
    console.error('Search error:', error);
  }
};
</script>
