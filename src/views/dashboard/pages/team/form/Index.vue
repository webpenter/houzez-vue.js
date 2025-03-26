<template>
  <DashboardHeader heading="Our Team"/>
  <section class="dashboard-content-wrap">
    <div class="dashboard-content-inner-wrap">
      <div class="dashboard-content-block-wrap">
        
        <Table
          :team-members="teamMembers"
          :loading="loading"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useTeamStore } from '@/stores/fetchinformation';
import Table from "./Table.vue";

// ✅ Store ko initialize karein
const teamStore = useTeamStore();
const { teamMembers, loading } = storeToRefs(teamStore);

onMounted(() => {
  if (typeof teamStore.fetchTeamMembers === "function") {
    teamStore.fetchTeamMembers();  // ✅ Call fetch function
  } else {
    console.error("fetchTeamMembers is not a function");
  }
});
</script>
