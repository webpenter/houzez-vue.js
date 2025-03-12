<template>
  <table class="dashboard-table">
    <thead>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Designation</th>
        <th>Contact</th>
        <th>Description</th>
        <th class="action-col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="loading">
        <td colspan="5" class="text-center">
          <i class="el-icon-loading"></i> Loading...
        </td>
      </tr>
      <tr v-for="member in teamMembers" :key="member.id">
        <td><img :src="member.image" :alt="member.name" width="50"></td>
        <td>{{ member.name }}</td>
        <td>{{ member.designation || '-' }}</td>
        <td>{{ member.contact_no || 'N/A' }}</td>
        <td>{{ member.description?.substring(0, 50) || 'No description' }}...</td>
        <td class="property-table-actions" data-label="Actions">
		<div class="dropdown property-action-menu">
			<button class="btn btn-primary-outlined dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Actions
			</button>
			<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
				<a class="dropdown-item" href="#">Details</a>
				<a class="dropdown-item" href="#modal-delete" data-toggle="modal">Delete</a>
			</div>
		</div>
	</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  teamMembers: {
    type: Array,
    default: () => []
  },
  loading: {
    type: Boolean,
    default: false
  }
});
</script>
