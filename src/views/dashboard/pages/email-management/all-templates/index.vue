<template>
  <DashboardHeader heading="All Email Templates" />

  <section class="dashboard-content-wrap">
    <div class="dashboard-content-inner-wrap">
      <div class="dashboard-content-block-wrap">

        <!-- ✅ Show Skeleton while loading -->
        <el-skeleton
          v-if="loading"
          :rows="8"
          animated
        />

        <!-- ✅ Show table when data is loaded and not empty -->
        <TemplateTable
          v-else-if="templates.length > 0"
          :templates="templates"
          :loading="loading"
          @delete-template="deleteTemplate"
          @toggle-status="toggleStatus"
        />

        <!-- ✅ Show NoData only when NOT loading AND no templates -->
        <NoDataMsg
          v-else
          msg="No email templates found!"
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
import NoDataMsg from "@/views/dashboard/components/NoDataMsg.vue";

const templatesStore = useEmailTemplates();
const { templates } = storeToRefs(templatesStore);
const loading = ref(false);
const hasMounted = ref(false); // ✅ Prevent auto notification

/**
 * ✅ Load templates
 */
const getTemplates = async () => {
  loading.value = true;
  await templatesStore.getAllTemplates();
  loading.value = false;
};

/**
 * ✅ Delete Template with confirmation
 */
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

/**
 * ✅ Toggle Status (only after page fully mounted)
 */
const toggleStatus = async (id, status) => {
  if (!hasMounted.value) return; // ✅ Prevent auto trigger on reload

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

onMounted(async () => {
  await getTemplates();
  hasMounted.value = true;
});
</script>
