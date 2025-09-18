<template>
  <DashboardHeader heading="All Agency Users"/>
  <section class="dashboard-content-wrap">
    <div class="dashboard-content-inner-wrap">
      <div class="dashboard-content-block-wrap">
        <NoDataMsg msg="You don't have any agency user!" v-if="users.length < 1"/>
        <Table
          v-else
          :users="users"
          :loading="loading"
          @delete-user="(id) => deleteUser(id)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {storeToRefs} from "pinia";
import Table from "./Table.vue";
import {useUsers} from "@/stores/auth/users.js";

const agencyStore = useUsers();
const {users} = storeToRefs(agencyStore);

const loading = ref(false);

const getUsers = async () => {
  loading.value = true;
  await agencyStore.getAgencyUsers();
  loading.value = false;
}

onMounted(() => getUsers());
</script>
