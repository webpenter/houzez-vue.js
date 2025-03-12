import { defineStore } from 'pinia';
import axiosInstance from "@/services/axiosService.js";

export const useTeamStore = defineStore('team', {
  state: () => ({
    teamMembers: {},
    loading: false,
    errors: {}
  }),

  actions: {
    async fetchTeamMembers() {
      this.loading = true;
      try {
        const response = await axiosInstance.get('/stripe-payments/team/team');
        console.log("API Response:", response.data); // ✅ Debugging Response
        this.teamMembers = response.data || [];
      } catch (error) {
        this.handleError(error, 'Failed to fetch team members');
      } finally {
        this.loading = false;
      }
    },

    handleError(error, defaultMessage) {
      console.error("API Error:", error); // ✅ Debugging Error
      this.errors = error.response?.data?.errors || { 
        general: [error.response?.data?.message || defaultMessage]
      };
    }
  }
});
