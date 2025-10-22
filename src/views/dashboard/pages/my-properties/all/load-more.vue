<template>
  <DashboardHeader heading="All Properties">
    <CreateListingBtn/>
  </DashboardHeader>

  <section class="dashboard-content-wrap">
    <div class="dashboard-content-inner-wrap">
      <div class="dashboard-content-block-wrap">
        <div v-if="dashboardProperties.length > 0" class="dashboard-property-search-wrap">
          <div class="d-flex">
            <div class="flex-grow-1">
              <PropertySearch @search="(query) => updateSearchQuery(query)" />
            </div>
            <div class="dashboard-property-sort-by">
              <ListingSortBy @sort="(sort) => updateSortOption(sort)" />
            </div>
          </div>
        </div><!-- dashboard-property-search -->
        <NoProperty v-if="dashboardProperties.length < 1"/>
        <Table
            v-else
            :dashboard-properties="visibleProperties"
            :loading="loading"
            @delete-property="(id) => deleteProperty(id)"
            @duplicate-property="(id) => duplicateProperty(id)"
        />
        <div v-if="hasMoreProperties" class="load-more-btn">
          <button class="btn-sm btn-primary-outlined" @click="loadMore">Load More</button>
        </div>
      </div><!-- dashboard-content-block-wrap -->
    </div><!-- dashboard-content-inner-wrap -->
  </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import PropertySearch from "../components/PropertySearch.vue";
import ListingSortBy from '../components/ListingSortBy.vue';
import CreateListingBtn from '../components/CreateListingBtn.vue';
import NoProperty from '../components/NoProperty.vue';
import Table from '../components/Table.vue';
import { storeToRefs } from "pinia";
import { onMounted, ref, computed } from "vue";
import {
  getProperties,
  deleteProperty,
  duplicateProperty,
  updateSearchQuery,
  updateSortOption,
  loading
} from "@/traits/property/dashboardProperties.js";
import { useProperty } from "@/stores/index.js";

const propertyToRefs = useProperty();
const { dashboardProperties } = storeToRefs(propertyToRefs);

const itemsToShow = ref(5);

const visibleProperties = computed(() => {
  if (Array.isArray(dashboardProperties.value)) {
    return dashboardProperties.value.slice(0, itemsToShow.value);
  }
  return [];
});

const hasMoreProperties = computed(() => {
  return Array.isArray(dashboardProperties.value) && itemsToShow.value < dashboardProperties.value.length;
});

const loadMore = () => {
  itemsToShow.value += 5;
};

onMounted(() => getProperties());
</script>

<style scoped>
.load-more-btn {
  text-align: center;
  margin-top: 20px;
}
</style>
