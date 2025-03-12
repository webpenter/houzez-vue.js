<template>
  <DashboardHeader heading="Team">
      <a class="btn btn-primary" href="#">Add Team</a>
  </DashboardHeader>
  <section class="dashboard-content-wrap">
          <div class="dashboard-content-inner-wrap">
              <div class="dashboard-content-block-wrap">
                  <TeamInformation/>
               
              </div><!-- dashboard-content-block-wrap -->
          </div><!-- dashboard-content-inner-wrap -->
      </section><!-- dashboard-content-wrap -->
</template>

<script setup>

import { useTeamStore } from "@/stores/teaminformation.js";
import TeamInformation from "./TeamInformation.vue";


const teamStore = useTeamStore();


</script>