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
      <template v-if="loading">
      <tr>
        <td colspan="2">
          <el-skeleton :rows="10" animated />
        </td>
      </tr>
    </template>
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
        <a class="dropdown-item" href="#" @click.prevent="deleteMember(member.id)">Delete</a>
			</div>
		</div>
	</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { defineProps } from "vue";
import {  useConfirm, useMessage, useNotification } from "@/stores/index.js";


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
import { useTeamStore } from '@/stores/fetchinformation';




const teamStore = useTeamStore();

const deleteMember = async (id) => {
  try {
    const confirm = await useConfirm().Warning("Are you sure you want to delete this team member?");
    
    if (confirm) {
      await teamStore.deleteTeamMember(id);
      useNotification().Success("Team member deleted successfully");
    }
  } catch (error) {
    if (error !== "cancel") {
      useNotification().Error("Failed to delete team member");
    } else {
      useNotification().Info("Request cancelled.");
    }
  }
};
</script>
