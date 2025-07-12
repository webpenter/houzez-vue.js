<template>
    <template v-if="loading">
        <SearchSkeleton />
    </template>
    <template v-else>
        <section class="half-map-wrap map-on-left clearfix">
            <div id="map-view-wrap" class="half-map-left-wrap">
                <Map
                    v-for="property in allProperties"
                        :key="property.id"
                        :property="property"
                        :view="viewType" 
                />
            </div><!-- half-map-left-wrap -->
            <div class="half-map-right-wrap">
                <SearchHalfMapGeolocation 
                    :modelValue="formData"
                    @search="handleSearch" 
                    @reset="resetFilters"
                    @save-search="saveSearchResult" 
                />
                <div class="page-title-wrap">
                    <div class="d-flex align-items-center">
                        <div class="page-title flex-grow-1">
                            <h1>{{ allProperties.length }} {{ $t('results found') }}</h1>
                        </div><!-- page-title -->
                        <div class="sort-by">
                            <div class="d-flex align-items-center">
                                <!-- <div class="sort-by-title">
                                    Sort by:
                                </div>
                                <select class="selectpicker form-control bs-select-hidden" title="Default Order"
                                    data-live-search="false" data-dropdown-align-right="auto">
                                    <option>Default Order</option>
                                    <option>Price - High to Low</option>
                                    <option>Price - Low to Hight</option>
                                    <option>Featured First</option>
                                    <option>Date - New to Old</option>
                                    <option>Date - Old to New</option>
                                </select> -->
                                <!-- selectpicker -->
                            </div><!-- d-flex -->
                        </div><!-- sort-by -->
                        <div class="listing-switch-view">
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <a class="switch-btn btn-list" :class="{ active: viewType === 'list' }" href="#"
                                        @click.prevent="viewType = 'list'">
                                        <i class="houzez-icon icon-layout-bullets"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="switch-btn btn-grid" :class="{ active: viewType === 'grid' }" href="#"
                                        @click.prevent="viewType = 'grid'">
                                        <i class="houzez-icon icon-layout-module-1"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!-- listing-switch-view -->
                    </div><!-- d-flex -->
                </div><!-- page-title-wrap -->
                <div v-if="allProperties.length > 0" class="listing-view" :class="viewType + '-view'">
                    <ListItem
                        v-for="property in allProperties"
                        :key="property.id"
                        :property="property"
                        class="item-listing-wrap card"
                        :view="viewType"
                    />
                </div><!-- listing-view -->
                <div v-else id="houzez_ajax_container">
                    <div class="listing-view grid-view row row-cols-1 row-cols-md-2 gy-4 gx-4 mx-0" role="list" data-view="grid" data-layout="v1" data-css="listing-view grid-view row row-cols-1 row-cols-md-2 gy-4 gx-4 mx-0">
                        <div class="search-no-results-found flex-grow-1 text-center">
                            We didn't find any results
                        </div>
                    </div>
                </div>
                 <!-- <Pagination /> -->
            </div><!-- half-map-right-wrap -->
        </section><!-- half-map-wrap -->
    </template>
</template>
<script setup>
import { computed, onMounted, ref, watch } from "vue";
import {
    useAppPropertyDemo01,
    useBedroom,
    useCity,
    useNotification,
    usePrice,
    useSavedSearch, useToken,
    useType
} from "@/stores/index.js";
import { storeToRefs } from "pinia";
import { RouterLink, useRoute, useRouter } from "vue-router";
import ListItem from "@/views/demos/components/home/featured-listings/ListItem.vue";
import NoDataFound from "@/views/app/components/NoDataFound.vue";
import SearchHalfMapGeolocation from '@/views/demos/components/search-results/search-half-map-geolocation/Index.vue';
import Map from '@/views/demos/components/search-results/map/Index.vue';
import SearchSkeleton from '@/components/skeleton/SearchSkeleton.vue';
import Pagination from "@/views/demos/components/inc/Pagination.vue";


const token = useToken().getToken;
const router = useRouter();
const route = useRoute();

const viewType = ref('list')
const loading = ref(false);
const bellRef = ref(null);

const propertyToRefs = useAppPropertyDemo01();
const { allProperties } = storeToRefs(propertyToRefs);

const saveSearchStore = useSavedSearch();
const { checkSearchSaved } = storeToRefs(saveSearchStore);

const { types } = storeToRefs(useType());
const { cities } = storeToRefs(useCity());
const { prices } = storeToRefs(usePrice());
const { bedrooms } = storeToRefs(useBedroom());

const noAuthDialog = ref(false)

const showLoginPage = () => {
    router.push({ name: 'auth' });
    noAuthDialog.value = false;
}

const formData = ref({
    search: route.query.search || "",
    types: route.query.types ? route.query.types.split(',') : [],
    cities: route.query.cities ? route.query.cities.split(',') : [],
    bedrooms: route.query.bedrooms || "",
    maxPrice: route.query.maxPrice || "",
     status: route.query.status || "",
});

const handleSearch = async (data) => {
    formData.value = {
        ...formData.value,
        ...data,
    };

    await searchProperty(); // this will hit the API and update listings
};


const searchProperty = async () => {
    loading.value = true;
    try {
        await router.push({
            name: "demo01.search-results",
            query: {
                search: formData.value.search,
                types: formData.value.types.join(','),
                cities: formData.value.cities.join(','),
                bedrooms: formData.value.bedrooms,
                maxPrice: formData.value.maxPrice,
                status: formData.value.status
            },
        });

        await propertyToRefs.getAllPropertiesDemo01(formData.value);
        loading.value = false;

    } catch (error) {
        useNotification().Error("Error fetching properties:", error);
    }
};

const resetFilters = () => {
    formData.value = {
        search: "",
        types: [],
        cities: [],
        bedrooms: "",
        maxPrice: "",
    };

    router.replace({ name: "demo01.search-results", query: {} });
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


const isSaveSearch = async () => {
    if (!parameters.value || parameters.value.trim() === "") {
        // no query parameters; skip API call
        return;
    }

    await saveSearchStore.isSearchSaved(parameters.value);
};

onMounted(() => {
    searchProperty();

    if (token) isSaveSearch();
});

watch(parameters, async () => {
    if (token) await isSaveSearch();
});
</script>