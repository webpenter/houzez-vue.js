<template>
    <template v-if="loading">
        <PropertyTypeSkeleton />
    </template>
    <template v-else>
        <section class="half-map-wrap map-on-left clearfix">
            <div id="map-view-wrap" class="half-map-left-wrap">
                <Map
                    v-for="property in propertyTypes"
                        :key="property.id"
                        :property="property"
                        :view="viewType" 
                />
            </div><!-- half-map-left-wrap -->
            <div class="half-map-right-wrap">
                <div class="page-title-wrap">
                    <h1 class="mb-4">{{ $filters.capitalize(propertyType) }}</h1>
                    <div class="d-flex align-items-center">
                        <div class="page-title flex-grow-1">
                            <h1>{{ propertyTypes.length }} {{ $t('Properties Found') }}</h1>
                        </div><!-- page-title -->
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
                        v-for="property in propertyTypes"
                        :key="property.id"
                        :property="property"
                        class="item-listing-wrap card"
                        :view="viewType"
                    />
                </div><!-- listing-view -->
                 <Pagination />
            </div><!-- half-map-right-wrap -->
        </section><!-- half-map-wrap -->
    </template>
</template>
<script setup>
import { computed, onMounted, ref, watch } from "vue";
import {
    useAppPropertyDemo01,
    useNotification,
} from "@/stores/index.js";
import { storeToRefs } from "pinia";
import {  useRoute, useRouter } from "vue-router";
import ListItem from "@/views/demos/components/home/featured-listings/ListItem.vue";
import Map from '@/views/demos/components/search-results/map/Index.vue';
import PropertyTypeSkeleton from '@/components/skeleton/PropertyTypeSkeleton.vue';
import Pagination from "@/views/demos/components/inc/Pagination.vue";

const router = useRouter();
const route = useRoute();

const propertyType = route.params.propertyType

const isFeatured = computed(() => route.query.featured === 'true');

const viewType = ref('list')
const loading = ref(false);

const propertyToRefs = useAppPropertyDemo01();
const { propertyTypes } = storeToRefs(propertyToRefs);

const getPropertyTypeData = async () => {
    loading.value = true;
    try {

        await propertyToRefs.getPropertyTypeDemo01(propertyType);
        loading.value = false;

    } catch (error) {
        useNotification().Error("Error fetching properties:", error);
    }
};

onMounted(() => getPropertyTypeData());
</script>