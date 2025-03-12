import { defineStore } from 'pinia';
import axiosInstance from "@/services/axiosService.js";

export const useTeamSectionStore = defineStore('teamSection', {
  state: () => ({
    baseUrl: '/stripe-payments/team/team',
    teamMembers: [],
    loading: false,
    error: null
  }),

  actions: {
    async fetchTeamMembers() {
      try {
        const response = await axiosInstance.get('/stripe-payments/team/team');
        console.log("API Response:", response);

        if (!response || !response.data) {
          throw new Error("Invalid API response format: Missing data field");
        }

        return {
          success: true,
          data: response.data,
        };
      } catch (error) {
        console.error("Error fetching team members:", error);
        return {
          success: false,
          message: "Failed to fetch team members",
        };
      }
    }
  }
}); // <-- Corrected closing brace
