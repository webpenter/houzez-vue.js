<template>
  <DashboardHeader :heading="`${$filters.capitalize(propertyStatus)} Properties`">
    <CreateListingBtn />
  </DashboardHeader>

  <section class="dashboard-content-wrap">
    <div class="dashboard-content-inner-wrap">
      <div class="dashboard-content-block-wrap">
        <!-- Property Search -->
        <div class="dashboard-property-search-wrap">
          <div class="d-flex">
            <div class="flex-grow-1">
              <PropertySearch
                @search="(query) => updateSearchQuery(query, propertyStatus)"
              />
            </div>

            <div class="dashboard-property-sort-by">
              <ListingSortBy
                @sort="(sort) => updateSortOption(sort, propertyStatus)"
              />
            </div>
          </div>
        </div>
        <!-- /dashboard-property-search -->

        <!-- Property Table -->
        <PropertyTable
          :dashboard-properties="dashboardProperties"
          :loading="loading"
          @delete-property="(id) => deleteProperty(id)"
          @duplicate-property="(id) => duplicateProperty(id)"
          @status-changed="handleStatusChange"
        />

        <!-- No Property Found -->
        <NoProperty
          v-if="dashboardProperties.length < 1"
          :property-status="propertyStatus"
        />
      </div>
      <!-- /dashboard-content-block-wrap -->
    </div>
    <!-- /dashboard-content-inner-wrap -->
  </section>
  <!-- /dashboard-content-wrap -->
</template>

<script setup>
import { ref, onMounted } from "vue"
import { storeToRefs } from "pinia"

import PropertySearch from "../components/PropertySearch.vue"
import ListingSortBy from "../components/ListingSortBy.vue"
import CreateListingBtn from "../components/CreateListingBtn.vue"
import NoProperty from "../components/NoProperty.vue"
import PropertyTable from "../components/PropertyTable.vue" // renamed from Table.vue

import {
  getProperties,
  deleteProperty,
  duplicateProperty,
  updateSearchQuery,
  updateSortOption,
  handleStatusChange,
  loading
} from "@/traits/property/dashboardProperties.js"
import { useProperty } from "@/stores/index.js"

// Reactive state
const propertyStatus = ref("disapproved")

// Access property store
const propertyToRefs = useProperty()
const { dashboardProperties } = storeToRefs(propertyToRefs)

// Fetch properties on mount
onMounted(() => getProperties(propertyStatus.value))
</script>
