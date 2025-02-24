<template>
  <DashboardHeader heading="All Users">
    <AddNewUser />
  </DashboardHeader>
  <section class="dashboard-content-wrap">
    <div class="dashboard-content-inner-wrap">
      <div class="dashboard-content-block-wrap">
        <div class="dashboard-property-search-wrap">
          <div class="d-flex">
            <div class="flex-grow-1">
              <PropertySearch />
            </div>
            <div class="dashboard-property-sort-by">
              <UserSortBy />
            </div>
          </div>
        </div><!-- dashboard-property-search -->

        <!-- <UserTable
            :dashboardProperties="dashboardProperties"
            :loading="loading"
            @delete-property="(id) => deleteProperty(id)"
            @duplicate-property="(id) => duplicateProperty(id)"
        /> -->
        <table class="dashboard-table dashboard-table-properties table-lined responsive-table">
          <thead>
            <tr>
              <th>Profile</th>
              <th>Username</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Posts</th>             
              <th class="action-col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <PropertyTableItem />
          </tbody>
        </table>

        <NoProperty v-if="dashboardProperties.length < 1" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
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
import NoProperty from "../../my-properties/components/NoProperty.vue";
import PropertyTableItem from "@/views/inc/dashboard/property/PropertyTableItem.vue";
import AddNewUser from "../../my-properties/components/AddNewUser.vue";
import UserSortBy from "../../my-properties/components/UserSortBy.vue";

const propertyToRefs = useProperty();
const { dashboardProperties } = storeToRefs(propertyToRefs);

onMounted(() => getProperties());
</script>
