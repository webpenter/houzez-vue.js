<template>
  <div class="search-parallax-container mt-4">
    <div class="search-banner-wrap custom-width">
      <div class="d-flex flex-sm-max-column">
      <!-- City Select -->
      <div class="flex-search mt-3 ml-3">
        <div class="form-group">
          <select 
            class="selectpicker form-control" 
            title="Cities" 
            data-live-search="false"
            data-selected-text-format="count" 
            multiple 
            data-actions-box="true" 
            v-model="selectedCities"
            @change="onCityChange"
          >
            <option 
              v-for="city in citiesStore.cities" 
              :key="city.id" 
              :value="city.name.toLowerCase()"
            >
              {{ city.name }}
            </option>
          </select>
        </div>
      </div>

        <!-- Search Field -->
        <div class="flex-grow-1 flex-search mt-3">
          <div class="form-group">
            <div class="search-icon">
              <input type="text" class="form-control" placeholder="Search" v-model="searchQuery"
                @input="onSearchInput" />
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="flex-search mt-3 mr-3">
          <button type="submit" class="btn btn-search btn-secondary btn-full-width" @click="submitSearch">
            Search
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import 'bootstrap-select';
import { useCity } from '@/stores/index'; // ✅ Import City Store

const citiesStore = useCity(); // ✅ Initialize store
const selectedCities = ref([]);
const searchQuery = ref('');
const emit = defineEmits(['results']);

onMounted(() => {
  $('.selectpicker').selectpicker();
});

// ✅ Fetch results when city changes
const onCityChange = async () => {
  await fetchResults();
};

// ✅ Fetch results when search input changes
const onSearchInput = async () => {
  await fetchResults();
};

// ✅ Reusable fetch function
const fetchResults = async () => {
  if (searchQuery.value.length || selectedCities.value.length) {
    try {
      const { data } = await axios.get('http://127.0.0.1:8000/api/v1/demo01/properties/get-auto-searched', {
        params: {
          query: searchQuery.value,
          cities: selectedCities.value
        }
      });
      console.log('Search Results:', data);
      emit('results', data);
    } catch (err) {
      console.error('Search API error:', err);
    }
  } else {
    emit('results', []);
    console.log('Search cleared');
  }
};
</script>





<style>
.search-parallax-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.custom-width {
  width: 80%;
  /* ✅ Increase or adjust width (70%, 80%, or px like 1000px) */
  max-width: 700px;
  /* ✅ Optional: set a max width for large screens */
}
</style>
