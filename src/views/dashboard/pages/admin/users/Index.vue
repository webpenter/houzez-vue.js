<template>
  <DashboardHeader heading="All Users"/>
  <section class="dashboard-content-wrap">
    <div class="dashboard-content-inner-wrap">
      <div class="dashboard-content-block-wrap">
        <NoDataMsg msg="You don't have any user!" v-if="users.length < 1"/>
        <Table
            v-else
            :users="users"
            :loading="loading"
            @delete-subscriber="(id) => deleteSubscriber(id)"
        />
      </div><!-- dashboard-content-block-wrap -->
    </div><!-- dashboard-content-inner-wrap -->
  </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import {useConfirm, useMessage, useNewsletterSubscriber, useNotification} from "@/stores/index.js";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";
import Table from "./Table.vue";
import {useUsers} from "@/stores/auth/users.js";

const usersStore = useUsers();
const {users} = storeToRefs(usersStore);

const loading = ref(false);

const getUsers = async () => {
  loading.value = true;
  await usersStore.getAllUsers();
  loading.value = false;
}

const deleteSubscriber = async (id) => {
  useConfirm().Warning("Are you sure you want to delete this subscriber?")
      .then(async () => {
        try {
          const res = await usersStore.deleteSubscriber(id);

          if (res.status === 200) {
            useNotification().Success("Successfully deleted subscriber");
            await getUsers();
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

onMounted(() => getUsers());
</script>