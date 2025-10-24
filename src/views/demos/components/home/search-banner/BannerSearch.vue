<template>
  <!-- Status Tabs -->
  <ul
    id="pills-tab"
    class="nav nav-pills justify-content-center"
    role="tablist"
    style="margin-top: 65px; cursor: pointer;"
  >
    <li class="nav-item">
      <a
        class="nav-link"
        :class="{ active: formData.status === '' }"
        @click.prevent="formData.status = ''"
      >
        {{ $t('All Status') }}
      </a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link"
        :class="{ active: formData.status === 'For Rent' }"
        @click.prevent="formData.status = 'For Rent'"
      >
        {{ $t('For Rent') }}
      </a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link"
        :class="{ active: formData.status === 'For Sale' }"
        @click.prevent="formData.status = 'For Sale'"
      >
        {{ $t('For Sale') }}
      </a>
    </li>
  </ul>

  <!-- Search & Filters -->
  <div class="advanced-search-banner-wrap">
    <!-- Search and button row -->
    <div class="row-responsive">
      <div class="flex-item">
        <input
          type="text"
          class="form-control"
          v-model="formData.search"
          :placeholder="$t('Search')"
        />
      </div>
      <div class="flex-item button-item">
        <button
          class="btn btn-search btn-secondary btn-full-width"
          :disabled="btnLoading"
          @click.prevent="searchProperty"
        >
          {{ btnLoading ? $t('Searching')+'...' : $t('Search') }}
        </button>
      </div>
    </div>

    <!-- Filters row -->
    <div class="row-responsive">
      <!-- Cities -->
      <div class="flex-item">
        <Multiselect
          v-model="formData.cities"
          :options="cities"
          label="name"
          track-by="name"
          placeholder="Select Cities"
          :multiple="true"
          :close-on-select="false"
          :clear-on-select="false"
          :preserve-search="true"
        />
      </div>

      <!-- Types -->
      <div class="flex-item">
        <Multiselect
          v-model="formData.types"
          :options="types"
          label="name"
          track-by="name"
          placeholder="Select Types"
          :multiple="true"
          :close-on-select="false"
          :clear-on-select="false"
        />
      </div>

      <!-- Bedrooms -->
      <div class="flex-item">
        <Multiselect
          v-model="formData.bedrooms"
          :options="bedrooms"
          label="name"
          track-by="name"
          placeholder="Select Max Bedrooms"
          :multiple="false"
        />
      </div>

      <!-- Max Price -->
      <div class="flex-item">
        <Multiselect
          v-model="formData.maxPrice"
          :options="prices"
          label="name"
          track-by="name"
          placeholder="Select Max Price"
          :multiple="false"
          :custom-label="priceLabel"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.css";
import { useAppPropertyDemo01, useType, useCity, useBedroom, usePrice, useNotification } from '@/stores/index.js';

const btnLoading = ref(false);
const router = useRouter();
const propertyToRefs = useAppPropertyDemo01();

const formData = ref({
  search: "",
  types: [],
  cities: [],
  bedrooms: null,
  maxPrice: null,
  status: "",
});

const { types } = useType();
const { cities } = useCity();
const { bedrooms } = useBedroom();
const { prices } = usePrice();

const priceLabel = (price) => {
  return price.name === "Any" ? "Any" : "$" + parseInt(price.name).toLocaleString();
};

const searchProperty = async () => {
  btnLoading.value = true;

  try {
    // Prepare values as comma-separated names
    const payload = {
      search: formData.value.search,
      types: formData.value.types.map(t => t.name),
      cities: formData.value.cities.map(c => c.name),
      bedrooms: formData.value.bedrooms?.name || "",
      maxPrice: formData.value.maxPrice?.name || "",
      status: formData.value.status,
    };

    await propertyToRefs.getSearchedAndFilteredPropertiesDemo01(payload);

    router.push({
      name: "demo01.search-results",
      query: {
        ...(payload.search && { search: payload.search }),
        ...(payload.types.length && { types: payload.types.join(',') }),
        ...(payload.cities.length && { cities: payload.cities.join(',') }),
        ...(payload.bedrooms && { bedrooms: payload.bedrooms }),
        ...(payload.maxPrice && { maxPrice: payload.maxPrice }),
        ...(payload.status && { status: payload.status }),
      },
    });
  } catch (error) {
    useNotification().Error("Error fetching properties:", error);
  } finally {
    btnLoading.value = false;
  }
};
</script>

<style scoped>
.row-responsive {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: 15px;
}

.flex-item {
  flex: 1;
  min-width: 300px;
}

.button-item {
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .row-responsive {
    flex-direction: column;
  }
  .flex-item {
    width: 100%;
  }
}
</style>
