<template>
  <DashboardHeader heading="All Properties">
    <CreateListingBtn />
  </DashboardHeader>

  <section class="dashboard-content-wrap">
    <div class="dashboard-content-inner-wrap">
      <div class="dashboard-content-block-wrap">
        <!-- Show search/sort controls when there are properties or loading -->
        <div v-if="dashboardProperties.length > 0 || loading" class="dashboard-property-search-wrap">
          <div class="d-flex">
            <div class="flex-grow-1">
              <PropertySearch @search="(query) => updateSearchQuery(query)" />
            </div>
            <div class="dashboard-property-sort-by">
              <ListingSortBy @sort="(sort) => updateSortOption(sort)" />
            </div>
          </div>
        </div>
        <!-- Show skeleton loader when loading -->
        <Table
          v-if="loading"
          :dashboard-properties="[]"
          :loading="loading"
          @delete-property="(id) => deleteProperty(id)"
          @duplicate-property="(id) => duplicateProperty(id)"
          @status-changed="handleStatusChange"
        />
        <!-- Show table when not loading and properties exist -->
        <Table
          v-else-if="dashboardProperties.length > 0"
          :dashboard-properties="dashboardProperties"
          :loading="loading"
          @delete-property="(id) => deleteProperty(id)"
          @duplicate-property="(id) => duplicateProperty(id)"
          @status-changed="handleStatusChange"
        />
        <!-- Show NoProperty when not loading and no properties -->
        <NoProperty v-else />
      </div>
    </div>
  </section>
</template>

<script setup>
import PropertySearch from "../components/PropertySearch.vue";
import ListingSortBy from "../components/ListingSortBy.vue";
import CreateListingBtn from "../components/CreateListingBtn.vue";
import NoProperty from "../components/NoProperty.vue";
import Table from "../components/Table.vue";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import {
  getProperties,
  deleteProperty,
  duplicateProperty,
  updateSearchQuery,
  updateSortOption,
  handleStatusChange,
} from "@/traits/property/dashboardProperties.js";
import { useProperty } from "@/stores/index.js";

const propertyStore = useProperty();
const { dashboardProperties, loading } = storeToRefs(propertyStore);

onMounted(() => {
  // Fetch properties and counts concurrently
  Promise.all([
    getProperties(),
    propertyStore.fetchPropertyCounts(),
  ]);
});
</script>