<template>
  <DashboardHeader heading="All Users"/>
  <section class="dashboard-content-wrap">
    <div class="dashboard-content-inner-wrap">
      <div class="dashboard-content-block-wrap">
        <NoDataMsg v-if="users.length < 1" msg="You don't have any user!"/>
        <Table
            v-else
            :users="users"
            :roles="roles"
            :loading="loading"
            @delete-user="(id) => deleteUser(id)"
            @change-role="(userId, newRole) => changeUserRole(userId, newRole)"
        />
      </div><!-- dashboard-content-block-wrap -->
    </div><!-- dashboard-content-inner-wrap -->
  </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import {useConfirm, useMessage, useNotification, useRole} from "@/stores/index.js";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";
import Table from "./Table.vue";
import {useUsers} from "@/stores/auth/users.js";

const usersStore = useUsers();
const {users} = storeToRefs(usersStore);
const {roles} = storeToRefs(useRole())

const loading = ref(false);

const getUsers = async () => {
  loading.value = true;
  await usersStore.getAllUsers();
  loading.value = false;
}

const deleteUser = async (id) => {
  useConfirm().Warning("Are you sure you want to delete this user?")
      .then(async () => {
        try {
          const res = await usersStore.deleteUser(id);

          if (res.status === 200) {
            useNotification().Success("Successfully deleted user");
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

const changeUserRole = async (userId, newRole) => {
  try {
    const res = await usersStore.changeUserRole(userId, newRole);

    if (res.status === 200) {
      useNotification().Success("Role successfully updated.");
      await getUsers();
    } else {
      useNotification().Error("Failed to update role.");
    }
  } catch (error) {
    useNotification().Error("An error occurred while updating the role.");
  }
}


onMounted(() => getUsers());
</script>