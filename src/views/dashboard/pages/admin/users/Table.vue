<template>
  <table class="dashboard-table dashboard-table-properties table-lined responsive-table">
    <thead>
    <tr>
      <th>Profile</th>
      <th>Username</th>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
      <th>Properties</th>
      <th class="action-col">Actions</th>
    </tr>
    </thead>
    <tbody>
    <template v-if="loading">
      <tr>
        <td colspan="7">
          <el-skeleton :rows="10" animated />
        </td>
      </tr>
    </template>
    <template v-else>
      <tr v-for="user in users" :key="user.id">
        <td class="property-table-thumbnail" data-label="Thumbnail">
          <div class="table-property-thumb">
              <div v-if="!user.profile" style="width: 50px;height: 60px;background-color: #F1F3F3"></div>
              <img v-else :src="user.profile" width="50px">
          </div><!-- table-property-thumb -->
        </td>
        <td class="property-table-status">
          {{user.username}}
        </td>
        <td class="property-table-status">
          {{user.username}}
        </td>
        <td class="property-table-status">
          {{user.email}}
        </td>
        <td class="property-table-status">
          {{user.role}}
        </td>
        <td class="property-table-status">
          {{user.properties}}
        </td>
        <td class="property-table-actions" data-label="Actions">
          <div class="dropdown property-action-menu">
            <button class="btn btn-primary-outlined dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Actions
            </button>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              <a @click.prevent="$emit('deleteUser',user.id)" class="dropdown-item" href="#">Delete</a>
            </div>
          </div>
        </td>
      </tr>
    </template>
    </tbody>
  </table><!-- dashboard-table -->
</template>

<script setup>
defineProps(["loading", "users"]);
</script>