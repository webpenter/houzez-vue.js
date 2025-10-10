<template>
  <DashboardHeader heading="All Packages">
    <RouterLink
      class="btn btn-primary"
      :to="{ name: 'dashboard.settings.create-package' }"
    >
      Create package
    </RouterLink>
  </DashboardHeader>

  <section class="dashboard-content-wrap">
    <div class="dashboard-content-inner-wrap">
      <div class="dashboard-content-block-wrap">
        <NoDataMsg
          v-if="allPlans.length < 1"
          msg="You don't have any package yet!"
        />

        <Table
          v-else
          :all-plans="allPlans"
          :loading="loading"
          @delete-plan="deletePlan"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import Table from "@/views/dashboard/pages/settings/package/all-packages/Table.vue";
import {
  useConfirm,
  useMessage,
  useNotification,
  usePackage,
} from "@/stores/index.js";

// Rename component to multi-word for lint rule compliance
defineOptions({ name: "AllPackagesIndex" });

const packageStore = usePackage();
const { allPlans } = storeToRefs(packageStore);
const loading = ref(false);

/**
 * Fetch all plans
 * @return {Promise<void>}
 */
const getPlans = async () => {
  loading.value = true;
  await packageStore.getAllPlans();
  loading.value = false;
};

/**
 * Delete selected plan
 * @param {number|string} id
 * @return {Promise<void>}
 */
const deletePlan = async (id) => {
  useConfirm()
    .Warning("Are you sure you want to delete this package?")
    .then(async () => {
      try {
        const res = await packageStore.deletePlan(id);

        if (res.status === 200) {
          useNotification().Success("Successfully deleted package");
          getPlans();
        } else {
          useNotification().Error(`Failed to delete plan: ${id}`);
        }
      } catch (error) {
        useNotification().Error(`An error occurred: ${error}`);
      }
    })
    .catch(() => {
      useMessage().Info("Request cancelled.");
    });
};

onMounted(() => getPlans());
</script>
