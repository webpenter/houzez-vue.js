<template>
    <DashboardHeader heading="My Properties">
        <CreateListingBtn/>
    </DashboardHeader>

        <section class="dashboard-content-wrap">
            <div class="dashboard-content-inner-wrap">
                <div class="dashboard-content-block-wrap">
                      <div class="dashboard-property-search-wrap">
                        <div class="d-flex">
                          <div class="flex-grow-1">
                            <PropertySearch @search="updateSearchQuery" />
                          </div>
                          <div class="dashboard-property-sort-by">
                            <ListingSortBy @sort="updateSortOption" />
                          </div>
                        </div>
                      </div><!-- dashboard-property-search -->
                      <Table
                          :dashboardProperties="dashboardProperties"
                          :loading="loading"
                          @delete-property="deleteProperty"
                          @duplicate-property="duplicateProperty"
                      >
                      </Table>
                      <NoProperty v-if="dashboardProperties.length < 1"/>
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
import { onMounted } from "vue";
import {
  getProperties,
  deleteProperty,
  duplicateProperty,
  searchQuery,
  selectedSort,
  loading
} from "@/traits/property/dashboardProperties.js";
import { useProperty } from "@/stores/index.js";

const propertyToRefs = useProperty();
const { dashboardProperties } = storeToRefs(propertyToRefs);

const updateSearchQuery = (query) => {
  searchQuery.value = query;
  getProperties();
};

const updateSortOption = (sort) => {
  selectedSort.value = sort;
  getProperties();
};

onMounted(() => getProperties());
</script>