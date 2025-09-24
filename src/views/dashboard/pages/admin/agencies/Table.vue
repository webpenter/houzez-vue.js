<template>
  <table class="dashboard-table dashboard-table-properties table-lined responsive-table">
    <thead>
      <tr>
        <th>Profile</th>
        <th>Username</th>
        <th>Name</th>
        <th>Email</th>
        <th>Listings</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="loading">
        <tr>
          <td colspan="5">
            <el-skeleton :rows="10" animated />
          </td>
        </tr>
      </template>
      <template v-else>
        <tr v-for="user in users" :key="user.id">
          <td>
            <div class="table-property-thumb">
              <div v-if="!user.profile" style="width:50px;height:60px;background:#F1F3F3"></div>
              <img v-else :src="user.profile" width="50px">
            </div>
          </td>
          <td>{{ user.username }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.properties }}</td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script setup>
defineProps(["loading", "users"]);
</script>
