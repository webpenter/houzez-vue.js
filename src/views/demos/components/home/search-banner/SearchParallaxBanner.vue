<template>
  <div class="search-parallax-container mt-4">
    <div class="search-banner-wrap custom-width">
      <div class="d-flex flex-sm-max-column">
        <!-- City Select -->
        <div class="flex-search mt-3 ml-3">
          <div class="form-group">
            <select
            v-model="selectedCities"
              class="selectpicker form-control"
              title="Cities"
              data-live-search="false"
              multiple
              data-actions-box="true"
              
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
              <input 
              v-model="searchQuery"
              type="text" class="form-control" placeholder="Search" 
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
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import 'bootstrap-select/dist/css/bootstrap-select.min.css'
import 'bootstrap-select'
import { useCity } from '@/stores/index'
import { useAppPropertyDemo01 } from '@/stores/index'

const router = useRouter()
const citiesStore = useCity()
const appPropertyStore = useAppPropertyDemo01()

const selectedCities = ref([])
const searchQuery = ref('')
const emit = defineEmits(['results'])

// Refresh bootstrap-select after mount
onMounted(() => {
  $('.selectpicker').selectpicker('refresh')
})

// 🔁 Live trigger (city select or input)
const onCityChange = async () => {
  await triggerLiveSearch()
}

const onSearchInput = async () => {
  await triggerLiveSearch()
}

// 🔍 Final Search button behavior
const submitSearch = async () => {
  selectedCities.value.length > 0 || searchQuery.value.trim().length > 0

  const queryParams = {
    search: searchQuery.value || '',
    types: '',         // Add when needed
    cities: selectedCities.value.join(',') || '',
    bedrooms: '',      // Add when needed
    maxPrice: '',      // Add when needed
    status: '',        // Add when needed
  }

  router.push({
    path: '/demo01/search-results',
    query: queryParams
  })
}

// 💡 Used for live typing/filtering results
const triggerLiveSearch = async () => {
  const hasFilters = selectedCities.value.length > 0 || searchQuery.value.trim().length > 0

  if (hasFilters) {
    const results = await appPropertyStore.fetchAutoSearchResults({
      query: searchQuery.value,
      cities: selectedCities.value
    })
    emit('results', results)
  } else {
    emit('results', [])
  }
}
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
