<template>
  <DashboardHeader :heading="$t('My Favorite Properties')"/>

  <section class="dashboard-content-wrap">
    <div class="dashboard-content-inner-wrap">
      <div class="dashboard-content-block-wrap">
        <NoDataMsg
            v-if="properties.length < 1"
            msg="You have no favorite properties yet."
        />
        <Table
            v-else
            :properties="properties"
            :loading="loading"
            @delete-property="(id) => deleteProperty(id)"
        />
      </div><!-- dashboard-content-block-wrap -->
    </div><!-- dashboard-content-inner-wrap -->
  </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import Table from './Table.vue';
import { storeToRefs } from "pinia";
import {onMounted, ref} from "vue";
import {useConfirm, useFavoriteProperty, useMessage, useNotification} from "@/stores/index.js";
import NoDataMsg from "@/views/dashboard/components/NoDataMsg.vue";

const favoritePropertyStore = useFavoriteProperty();
const { properties } = storeToRefs(favoritePropertyStore);

const loading = ref(false);

const getProperties = async () => {
  loading.value = true;

  try {
    const res = await favoritePropertyStore.getUserFavoriteProperties();

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

const deleteProperty = async (id) => {
  try {
    await useConfirm().Warning("Are you sure you want to remove this property from favorites?");
    const response = await favoritePropertyStore.deleteFavoriteProperty(id);

    if (response.status === 200) {
      useNotification().Success("Property removed successfully");
      await getProperties();
    }
  } catch (error) {
    if (error !== "cancel") {
      useNotification().Error(error);
    } else {
      useMessage().Info("Request cancelled.");
    }
  }
};

onMounted(() => getProperties());
</script>
