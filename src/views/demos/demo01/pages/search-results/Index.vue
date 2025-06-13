<template>
    <section class="half-map-wrap map-on-left clearfix">
        <div id="map-view-wrap" class="half-map-left-wrap">
            <Map />
        </div><!-- half-map-left-wrap -->
        <div class="half-map-right-wrap">
            <SearchHalfMapGeolocation />
            <div class="page-title-wrap">
                <div class="d-flex align-items-center">
                    <div class="page-title flex-grow-1">
                        <h1>{{ allProperties.length }} results found</h1>
                    </div><!-- page-title -->
                    <div class="sort-by">
                        <div class="d-flex align-items-center">
                            <div class="sort-by-title">
                                Sort by:
                            </div><!-- sort-by-title -->
                            <select class="selectpicker form-control bs-select-hidden" title="Default Order"
                                data-live-search="false" data-dropdown-align-right="auto">
                                <option>Default Order</option>
                                <option>Price - Hight to Low</option>
                                <option>Price - Low to Hight</option>
                                <option>Featured First</option>
                                <option>Date - New to Old</option>
                                <option>Date - Old to New</option>
                            </select><!-- selectpicker -->
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
            <div class="listing-view" :class="viewType + '-view'">
                <ListItem
                    v-for="property in allProperties"
                    :key="property.id"
                    :property="property"
                    class="item-listing-wrap card"
                    :view="viewType"
                />
            </div><!-- listing-view -->
            <!-- <?php include 'inc/listing/pagination.php';?> -->
        </div><!-- half-map-right-wrap -->
    </section><!-- half-map-wrap -->
</template>
<script setup>
import { computed, onMounted, ref, watch } from "vue";
import {
    useAppProperty,
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

const token = useToken().getToken;
const router = useRouter();
const route = useRoute();

const viewType = ref('list')
const loading = ref(false);
const bellRef = ref(null);

const propertyToRefs = useAppProperty();
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
    city: route.query.city || "",
    bedrooms: route.query.bedrooms || "",
    maxPrice: route.query.maxPrice || "",
});

const searchProperty = async () => {
    loading.value = true;
    try {
        await router.push({
            name: "demo01.search-results",
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

    router.replace({ name: "demo01.search-results", query: {} });
    searchProperty();
    isSaveSearch()
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