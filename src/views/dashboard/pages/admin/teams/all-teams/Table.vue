<template>
  <table class="dashboard-table dashboard-table-properties table-lined responsive-table">
    <thead>
    <tr>
      <th>Image</th>
      <th>Name</th>
      <th>Designation</th>
      <th>Address</th>
      <th>Mail</th>
      <th>Phone</th>
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
      <tr v-for="team in allTeams" :key="team.id">
        <td data-label="From" class="table-nowrap">
          <div class="d-flex align-items-center">
            <div v-if="!team.image" style="width: 40px;height: 40px;background-color: #F1F3F3" class="rounded-circle"></div>
            <img v-else class="rounded-circle" :src="team.image" width="40" height="40" alt="agent">
          </div>
        </td>
        <td class="property-table-status">
          {{$filters.capitalize(team.name)}}
        </td>
        <td class="property-table-status">
          {{team.designation}}
        </td>
        <td class="property-table-status">
          {{team.address}}
        </td>
        <td class="property-table-status">
          {{team.email}}
        </td>
        <td class="property-table-status">
          {{team.phone}}
        </td>
        <td class="property-table-actions" data-label="Actions">
          <div class="dropdown property-action-menu">
            <button class="btn btn-primary-outlined dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Actions
            </button>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              <a @click.prevent="$emit('deleteTeam',team.id)" class="dropdown-item" href="#">Delete</a>
            </div>
          </div>
        </td>
      </tr>
    </template>
    </tbody>
  </table><!-- dashboard-table -->
</template>

<script setup>
defineProps(["loading", "allTeams"]);
</script>