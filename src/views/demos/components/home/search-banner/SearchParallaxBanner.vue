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
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import 'bootstrap-select';
import { useCity } from '@/stores/index';
import { useAppPropertyDemo01 } from '@/stores/index';

const citiesStore = useCity();
const appPropertyStore = useAppPropertyDemo01(); // ✅ Import store

const selectedCities = ref([]);
const searchQuery = ref('');
const emit = defineEmits(['results']);

onMounted(() => {
  $('.selectpicker').selectpicker('refresh');
});

const onCityChange = async () => {
  await triggerSearch();
};

const onSearchInput = async () => {
  await triggerSearch();
};

const submitSearch = async () => {
  await triggerSearch();
};

const triggerSearch = async () => {
  if (searchQuery.value.length || selectedCities.value.length) {
    const results = await appPropertyStore.fetchAutoSearchResults({
      query: searchQuery.value,
      cities: selectedCities.value,
    });
    emit('results', results); // ✅ Emit only the array
  } else {
    emit('results', []);
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
  max-width: 700px;
}
</style>
