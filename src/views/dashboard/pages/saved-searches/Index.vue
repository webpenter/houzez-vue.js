<template>
  <DashboardHeader :heading="$t('Saved Searches')"/>

  <section class="dashboard-content-wrap">
    <div class="dashboard-content-inner-wrap">
      <div class="dashboard-content-block-wrap">
        <NoDataMsg
            v-if="searches.length < 1"
            msg="You don't have any saved searches yet."
        />
        <Table
            v-else
            :searches="searches"
            :loading="loading"
            @delete-search="(id) => deleteSearch(id)"
        />
      </div><!-- dashboard-content-block-wrap -->
    </div><!-- dashboard-content-inner-wrap -->
  </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import Table from './Table.vue';
import { storeToRefs } from "pinia";
import {onMounted, ref} from "vue";
import {useConfirm, useMessage, useNotification, useSavedSearch} from "@/stores/index.js";

const savedSearchStore = useSavedSearch();
const { searches } = storeToRefs(savedSearchStore);

const loading = ref(false);

const getSearches = async () => {
  loading.value = true;

  try {
    const res = await savedSearchStore.getUserSearches();

    if (res.status === 200) {
      loading.value = false;
    } else {
      loading.value = false;
      useNotification().Error("An error occurred while fetching data");
    }
  } catch (error) {
    loading.value = false;
    useNotification().Error("An error occurred");
  }
};

const deleteSearch = async (id) => {
  try {
    await useConfirm().Warning("Are you sure you want to remove this saved search?");
    const response = await savedSearchStore.deleteSearch(id);

    if (response.status === 200) {
      useNotification().Success("Saved search removed successfully");
      await getSearches();
    }
  } catch (error) {
    if (error !== "cancel") {
      useNotification().Error(error);
    } else {
      useMessage().Info("Request cancelled.");
    }
  }
};

onMounted(() => getSearches());
</script>
