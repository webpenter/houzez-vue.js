<template>
  <DashboardHeader heading="All Agents"/>
  <section class="dashboard-content-wrap">
    <div class="dashboard-content-inner-wrap">
      <div class="dashboard-content-block-wrap">
        <NoDataMsg msg="No agents found!" v-if="users.length < 1"/>
        <Table v-else :users="users" :loading="loading"/>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useUsers } from "@/stores/auth/users.js";
import Table from "./Table.vue";

const usersStore = useUsers();
const { users } = storeToRefs(usersStore);
const loading = ref(false);

const getAgents = async () => {
  loading.value = true;
  await usersStore.getAllAgents();
  loading.value = false;
};

onMounted(() => getAgents());
</script>
