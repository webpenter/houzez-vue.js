<template>
  <DashboardHeader heading="All Email Templates" />

  <section class="dashboard-content-wrap">
    <div class="dashboard-content-inner-wrap">
      <div class="dashboard-content-block-wrap">
        <NoDataMsg msg="No email templates found!" v-if="templates.length < 1" />

        <TemplateTable
          v-else
          :templates="templates"
          :loading="loading"
          @delete-template="deleteTemplate"
          @toggle-status="toggleStatus"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useNotification, useConfirm, useMessage } from "@/stores/index.js";
import { useEmailTemplates } from "@/stores/index.js";
import { storeToRefs } from "pinia";

import TemplateTable from "./Table.vue";

const templatesStore = useEmailTemplates();
const { templates } = storeToRefs(templatesStore);
const loading = ref(false);

const getTemplates = async () => {
  loading.value = true;
  await templatesStore.getAllTemplates();
  loading.value = false;
};

const deleteTemplate = async (id) => {
  useConfirm()
    .Warning("Are you sure you want to delete this template?")
    .then(async () => {
      try {
        const res = await templatesStore.deleteTemplate(id);
        if (res.status === 200) {
          useNotification().Success("Template deleted successfully");
          await getTemplates();
        } else {
          useNotification().Error("Failed to delete template");
        }
      } catch (err) {
        useNotification().Error("An error occurred while deleting");
      }
    })
    .catch(() => useMessage().Info("Request cancelled."));
};

const toggleStatus = async (id, status) => {
  try {
    const res = await templatesStore.updateStatus(id, status);
    if (res.status === 200) {
      useNotification().Success("Template status updated");
    } else {
      useNotification().Error("Failed to update status");
    }
  } catch (err) {
    useNotification().Error("An error occurred while updating status");
  }
};

onMounted(() => getTemplates());
</script>
