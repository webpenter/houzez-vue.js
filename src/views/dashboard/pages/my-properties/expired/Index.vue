<template>
  <DashboardHeader :heading="`${$filters.capitalize(propertyStatus)} Properties`">
    <CreateListingBtn/>
  </DashboardHeader>

  <section class="dashboard-content-wrap">
    <div class="dashboard-content-inner-wrap">
      <div class="dashboard-content-block-wrap">
        <div class="dashboard-property-search-wrap">
          <div class="d-flex">
            <div class="flex-grow-1">
              <PropertySearch @search="(query) => updateSearchQuery(query, propertyStatus)" />
            </div>
            <div class="dashboard-property-sort-by">
              <ListingSortBy @sort="(sort) => updateSortOption(sort, propertyStatus)" />
            </div>
          </div>
        </div><!-- dashboard-property-search -->

        <Table
            :dashboardProperties="dashboardProperties"
            :loading="loading"
            @delete-property="(id) => deleteProperty(id)"
            @duplicate-property="(id) => duplicateProperty(id)"
            @statusChanged="handleStatusChange"
        />

        <NoProperty :propertyStatus="propertyStatus" v-if="dashboardProperties.length < 1"/>
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
import {onMounted, ref} from "vue";
import {
  getProperties,
  deleteProperty,
  duplicateProperty,
  updateSearchQuery,
  updateSortOption,
  searchQuery,
  selectedSort,
  loading, handleStatusChange
} from "@/traits/property/dashboardProperties.js";
import { useProperty } from "@/stores/index.js";

const propertyStatus = ref("expired");

const propertyToRefs = useProperty();
const { dashboardProperties } = storeToRefs(propertyToRefs);

onMounted(() => getProperties(propertyStatus.value));
</script>
