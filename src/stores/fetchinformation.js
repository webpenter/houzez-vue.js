import { defineStore } from 'pinia';
import axiosInstance from "@/services/axiosService.js";

export const useTeamStore = defineStore('team', {
  state: () => ({
    teamMembers: [], // ✅ Should be an array, not an object
    loading: false,
    errors: {}
  }),

  actions: {
    async fetchTeamMembers() {
      this.loading = true;
      try {
        const response = await axiosInstance.get('/get-all-teams');
        console.log("API Response:", response.data);
        this.teamMembers = response.data || [];
      } catch (error) {
        this.handleError(error, 'Failed to fetch team members');
      } finally {
        this.loading = false;
      }
    },
    async deleteTeamMember(id) {
      try {
        await axiosInstance.delete(`/delete-team/${id}`);
        this.teamMembers = this.teamMembers.filter(member => member.id !== id);
      } catch (error) {
        this.handleError(error, 'Failed to delete team member');
      }
    },
    handleError(error, defaultMessage) {
      console.error("API Error:", error);
      this.errors = error.response?.data?.errors || { 
        general: [error.response?.data?.message || defaultMessage]
      };
    }
  }
});
