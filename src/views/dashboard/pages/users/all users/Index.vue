<template>
    <DashboardHeader heading="Users">
      <CreateListingBtn/>
    </DashboardHeader>
    <section class="dashboard-content-wrap">
      <div class="dashboard-content-inner-wrap">
        <div class="dashboard-content-block-wrap">
            <div class="dashboard-property-search-wrap">
          <div class="d-flex">
            <div class="flex-grow-1">
              <PropertySearch @search="(query) => updateSearchQuery(query)" />
            </div>
            <div class="dashboard-property-sort-by">
              <ListingSortBy @sort="(sort) => updateSortOption(sort)" />
            </div>
          </div>
        </div><!-- dashboard-property-search -->

        <UserTable
            :dashboardProperties="dashboardProperties"
            :loading="loading"
            @delete-property="(id) => deleteProperty(id)"
            @duplicate-property="(id) => duplicateProperty(id)"
        />

        <NoProperty v-if="dashboardProperties.length < 1"/>
        </div>
      </div>
    </section>
</template>

<script setup>
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
  loading
} from "@/traits/property/dashboardProperties.js";
import { useProperty } from "@/stores/index.js";
import PropertySearch from '../../my-properties/components/PropertySearch.vue';
import ListingSortBy from '../../my-properties/components/ListingSortBy.vue';
import CreateListingBtn from '../../my-properties/components/CreateListingBtn.vue';
import NoProperty from "../../my-properties/components/NoProperty.vue";
import UserTable from "../../my-properties/components/UserTable.vue";

const propertyToRefs = useProperty();
const { dashboardProperties } = storeToRefs(propertyToRefs);

onMounted(() => getProperties());
</script>
