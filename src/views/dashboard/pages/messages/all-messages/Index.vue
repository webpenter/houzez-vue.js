<template>
  <DashboardHeader heading="Messages"/>
  <section class="dashboard-content-wrap">
    <div class="dashboard-content-inner-wrap">
      <div class="dashboard-content-block-wrap">
        <NoDataMsg msg="You don't have any message." v-if="userMessages.length < 1"/>
        <Table
            v-else
            :messages="userMessages"
            :loading="loading"
            @delete-message="(id) => deleteMessage(id)"
        />
      </div><!-- dashboard-content-block-wrap -->
    </div><!-- dashboard-content-inner-wrap -->
  </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import {useConfirm, useMessage, useNotification, useRole, useTourRequest} from "@/stores/index.js";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";
import Table from "./Table.vue";
import {useUsers} from "@/stores/auth/users.js";

const tourRequestStore = useTourRequest();
const {userMessages} = storeToRefs(tourRequestStore);

const loading = ref(false);

const getMessages = async () => {
  loading.value = true;
  await tourRequestStore.showUserMessages();
  loading.value = false;
}

const deleteMessage = async (id) => {
  useConfirm().Warning("Are you sure you want to delete this message?")
      .then(async () => {
        try {
          const res = await tourRequestStore.deleteMessage(id);

          if (res.status === 200) {
            useNotification().Success("Successfully deleted message");
            await getMessages();
          } else {
            useNotification().Error(`Failed to delete`);
          }
        } catch (error) {
          useNotification().Error(`An error occurred`);
        }
      })
      .catch(() => {
        useMessage().Info("Request cancelled.")
      });
}

onMounted(() => getMessages());
</script>