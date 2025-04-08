<template>
    <DashboardHeader heading="My Blogs">
      
    </DashboardHeader>
  
    <section class="dashboard-content-wrap">
      <div class="dashboard-content-inner-wrap">
        <div class="dashboard-content-block-wrap">
          <NoProperty v-if="dashboardProperties.length < 1"/>
          <Table
              v-else
              :dashboardProperties="dashboardProperties"
              :loading="loading"
              @delete-property="(id) => deleteProperty(id)"
              @duplicate-property="(id) => duplicateProperty(id)"
          />
        </div><!-- dashboard-content-block-wrap -->
      </div><!-- dashboard-content-inner-wrap -->
    </section><!-- dashboard-content-wrap -->
  </template>
  
  <script setup>
  
  
  import NoProperty from '../components/NoProperty.vue';
  import Table from './Table.vue';
  import { storeToRefs } from "pinia";
  import {onMounted, ref} from "vue";
  import {
    getProperties,
    deleteProperty,
    duplicateProperty,
    loading
  } from "@/traits/property/dashboardProperties.js";
  import { useProperty } from "@/stores/index.js";
  
  const propertyToRefs = useProperty();
  const { dashboardProperties } = storeToRefs(propertyToRefs);
  
  onMounted(() => getProperties());
  </script>
  