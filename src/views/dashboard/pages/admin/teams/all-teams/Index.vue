<template>
  <DashboardHeader heading="All Teams">
         <RouterLink class="btn btn-primary" :to="{name:'dashboard.admin.create-team'}">
           Create team
         </RouterLink>
  </DashboardHeader>
  <section class="dashboard-content-wrap">
    <div class="dashboard-content-inner-wrap">
      <div class="dashboard-content-block-wrap">
        <NoDataMsg v-if="allTeams.length < 1" msg="You don't have any team yet!"/>
        <Table
            v-else
            :all-teams="allTeams"
            :loading="loading"
            @delete-team="(id) => deleteTeam(id)"
        />
      </div><!-- dashboard-content-block-wrap -->
    </div><!-- dashboard-content-inner-wrap -->
  </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import {RouterLink} from "vue-router";
import {useConfirm, useMessage, useNotification, useTeam} from "@/stores/index.js";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";
import Table from "@/views/dashboard/pages/admin/teams/all-teams/Table.vue";

const teamStore = useTeam();
const {allTeams} = storeToRefs(teamStore);

const loading = ref(false);

const getTeam = async () => {
  loading.value = true;
  await teamStore.getAllTeams();
  loading.value = false;
}

const deleteTeam = async (id) => {
  useConfirm().Warning("Are you sure you want to delete this team?")
      .then(async () => {
        try {
          const res = await teamStore.deleteTeam(id);

          if (res.status === 200) {
            useNotification().Success("Successfully deleted team");
            await getTeam();
          } else {
            useNotification().Error(`Failed to delete team`);
          }
        } catch (error) {
          useNotification().Error(`An error occurred ${error}`);
        }
      })
      .catch(() => {
        useMessage().Info("Request cancelled.")
      });

}

onMounted(() => getTeam());
</script>