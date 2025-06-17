<template>
  <div id="property-main">
    <div id="property-sidebar">
      <div class="property-search-bar" style="background-color: #ffffff">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input
            :placeholder="$t('Property Search')"
            v-model="formData.search"
            type="search"
            class="search-property input"
            @input="searchProperty"
        >
      </div>
      <div id="properties-filters">
        <div>
          <label style="margin-bottom: 0">{{ $t('Property Type') }}</label>
          <el-select
              v-model="formData.types"
              multiple
              clearable
              filterable
              default-first-option
              :reserve-keyword="false"
              :placeholder="$t('Choose/Search Types')"
              @change="searchProperty"
              style="width: 100%"
          >
            <el-option
                v-for="type in types"
                :key="type.id"
                :label="$filters.capitalize(type.name)"
                :value="type.name"
            />
          </el-select>
        </div>
        <div>
          <label style="margin-bottom: 0">{{ $t('Location') }}</label>
          <el-select
              v-model="formData.city"
              clearable
              filterable
              default-first-option
              :reserve-keyword="false"
              :placeholder="$t('Choose/Search City')"
              @change="searchProperty"
              style="width: 100%"
          >
            <el-option
                v-for="city in cities"
                :key="city.id"
                :label="city.name"
                :value="city.name"
            />
          </el-select>
        </div>
        <div>
          <label style="margin-bottom: 0">{{ $t('Property Size') }}</label>
          <el-select
              v-model="formData.bedrooms"
              filterable
              clearable
              default-first-option
              :reserve-keyword="false"
              :placeholder="$t('Choose/Search Max Bedrooms')"
              @change="searchProperty"
              style="width:100%"
          >
            <el-option
                v-for="bedroom in bedrooms"
                :key="bedroom.id"
                :label="bedroom.name"
                :value="bedroom.name"
            />
          </el-select>
        </div>
        <div>
          <label style="margin-bottom: 0">{{ $t('Your Budget') }}</label>
          <el-select
              v-model="formData.maxPrice"
              filterable
              clearable
              default-first-option
              :reserve-keyword="false"
              :placeholder="$t('Choose/Search Max Price')"
              @change="searchProperty"
              style="width: 100%"
          >
            <el-option
                v-for="price in prices"
                :key="price.id"
                :label="$filters.formatPrice(price.name)"
                :value="price.name"
            />
          </el-select>
        </div>
      </div>
      <button @click.prevent="resetFilters" class="sidebar-search-btn">{{ $t('Reset filters') }}</button>
    </div>
    <div id="properties">
      <div class="properties-header">
        <div class="from-to-from">
          <i class="fa-regular fa-house"></i>
          <RouterLink :to="{name:'app.home'}">{{ $t('Home') }}</RouterLink>
          <i class="fa-regular fa-chevron-right"></i>
          <a href="#">
            {{ $t('Search Results') }}
          </a>
        </div>
        <h1>{{ $t('Search Results') }}</h1>
        <template v-if="allProperties.length > 0">
          <div class="total-properties">
            <p>{{ $filters.formatTextWithNumber(allProperties.length,$t('Property')) }} </p>
            <template v-if="token">
              <div @click.prevent="saveSearchResult" style="cursor: pointer">
                <i ref="bellRef" :class="`${checkSearchSaved ? 'fa-solid text-success' : 'fa-regular text-dark'} fa-bell`" ></i>
                {{ $t('Save Search') }}
              </div>
            </template>
            <template v-else>
              <div @click.prevent="noAuthDialog = true" style="cursor: pointer">
                <i class="fa-regular fa-bell"></i>
                {{ $t('Save Search') }}
              </div>
            </template>
            <el-dialog v-model="noAuthDialog" title="Alert" width="500" align-center>
                <span>
                  You can save a search only if you are authenticated. Please log in or sign up first to access this feature.
                </span>
              <template #footer>
                <div class="dialog-footer">
                  <el-button @click="noAuthDialog = false">Cancel</el-button>
                  <el-button type="primary" @click="showLoginPage">
                    Login
                  </el-button>
                </div>
              </template>
            </el-dialog>
          </div>
        </template>
      </div>
      <NoDataFound
          v-if="allProperties.length < 1"
          :font-size="30"
          :icon-size="100"
          class="mt-5"
      />
      <template v-else>
        <div class="cards-container">
          <Cards
              :properties="allProperties"
              :loading="loading"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted, ref, watch} from "vue";
import {
  useAppProperty,
  useBedroom,
  useCity,
  useNotification,
  usePrice,
  useSavedSearch, useToken,
  useType
} from "@/stores/index.js";
import {storeToRefs} from "pinia";
import {RouterLink, useRoute, useRouter} from "vue-router";
import Cards from "@/views/app/components/TwoColCards.vue";
import NoDataFound from "@/views/app/components/NoDataFound.vue";

const token = useToken().getToken;
const router = useRouter();
const route = useRoute();

const loading = ref(false);
const bellRef = ref(null);

const propertyToRefs = useAppProperty();
const {allProperties} = storeToRefs(propertyToRefs);

const saveSearchStore = useSavedSearch();
const {checkSearchSaved} = storeToRefs(saveSearchStore);

const {types} = storeToRefs(useType());
const {cities} = storeToRefs(useCity());
const {prices} = storeToRefs(usePrice());
const {bedrooms} = storeToRefs(useBedroom());

const noAuthDialog = ref(false)

const showLoginPage = () => {
  router.push({name:'auth'});
  noAuthDialog.value = false;
}

const formData = ref({
  search: route.query.search || "",
  types: route.query.types ? route.query.types.split(',') : [],
  city: route.query.city || "",
  bedrooms: route.query.bedrooms || "",
  maxPrice: route.query.maxPrice || "",
});

const searchProperty = async () => {
  loading.value = true;
  try {
    await router.push({
      name:"app.search-results",
      query: {
        search: formData.value.search,
        types: formData.value.types.join(','),
        city: formData.value.city,
        bedrooms: formData.value.bedrooms,
        maxPrice: formData.value.maxPrice,
      },
    });

    await propertyToRefs.getAllProperties(formData.value);
    loading.value = false;

  } catch (error) {
    useNotification().Error("Error fetching properties:", error);
  }
};

const resetFilters = () => {
  formData.value = {
    search: "",
    types: [],
    city: "",
    bedrooms: "",
    maxPrice: "",
  };

  router.replace({ name: "app.search-results", query: {} });
  searchProperty();
};

const queryString = computed(() => route.fullPath.split('?')[1] || '');
const parameters = computed(() => queryString.value || "");


const saveSearchResult = async () => {
  if (bellRef.value) {
    bellRef.value.classList.add("bell-rotate");
    setTimeout(() => {
      bellRef.value.classList.remove("bell-rotate");
    }, 800);
  }

  try {
    const res = await saveSearchStore.storeOrRemoveSearch(parameters.value);

    if (res.status === 201) {
      useNotification().Success("Search saved successfully!");
      await isSaveSearch();
    } else if (res.status === 204) {
      useNotification().Success("Search removed successfully!");
      await isSaveSearch();
    } else {
      useNotification().Error("An error occurred.");
    }
  } catch (error) {
    useNotification().Error("Failed to save search!");
  }
};

const isSaveSearch = async () => await saveSearchStore.isSearchSaved(parameters.value);

onMounted(() => {
  searchProperty();

  if (token) isSaveSearch();
});

watch(parameters, async () => {
  if (token) await isSaveSearch();
});
</script>

<style scoped>
@keyframes bellRotate {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-15deg); }
  50% { transform: rotate(15deg); }
  75% { transform: rotate(-10deg); }
  100% { transform: rotate(0deg); }
}

.bell-rotate {
  animation: bellRotate 0.7s ease-in-out infinite;
}
</style>