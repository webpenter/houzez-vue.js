<template>
  <DashboardHeader heading="All Packages">
         <RouterLink class="btn btn-primary" :to="{name:'dashboard.settings.create-package'}">
           {{$t('Create package')}}
         </RouterLink>
  </DashboardHeader>
  <section class="dashboard-content-wrap">
    <div class="dashboard-content-inner-wrap">
      <div class="dashboard-content-block-wrap">
        <NoDataMsg msg="You don't have any package yet!" v-if="allPlans.length < 1"/>
        <Table
            v-else
            :all-plans="allPlans"
            :loading="loading"
            @delete-plan="(id) => deletePlan(id)"
        />
      </div><!-- dashboard-content-block-wrap -->
    </div><!-- dashboard-content-inner-wrap -->
  </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import {RouterLink} from "vue-router";
import {useConfirm, useMessage, useNotification, usePackage} from "@/stores/index.js";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";
import Table from "@/views/dashboard/pages/settings/package/all-packages/Table.vue";
import NoDataMsg from "@/views/dashboard/components/NoDataMsg.vue";

const packageToRefs = usePackage();
const {allPlans} = storeToRefs(packageToRefs);

const loading = ref(false);

const getPlans = async () => {
  loading.value = true;
  await packageToRefs.getAllPlans();
  loading.value = false;
}

const deletePlan = async (id) => {
  useConfirm().Warning("Are you sure you want to delete this package?")
      .then(async () => {
        try {
          const res = await packageToRefs.deletePlan(id);

          if (res.status === 200) {
            useNotification().Success("Successfully deleted package");
            getPlans();
          } else {
            useNotification().Error(`Failed to delete plan: ${id}`);
          }
        } catch (error) {
          useNotification().Error(`An error occurred ${error}`);
        }
      })
      .catch(() => {
        useMessage().Info("Request cancelled.")
      });

}

onMounted(() => getPlans());
</script>