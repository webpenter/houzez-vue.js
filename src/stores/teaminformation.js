import { defineStore } from 'pinia';
import axiosInstance from "@/services/axiosService.js";

export const useTeamStore = defineStore('team', {
  state: () => ({
    baseUrl: '/teams'
  }),

  actions: {
    async addTeamMember(memberData) {
      try {
        let formData = new FormData();
        if (memberData.name) formData.append("name", memberData.name);
        if (memberData.designation) formData.append("designation", memberData.designation);
        if (memberData.contact_no) formData.append("contact_no", memberData.contact_no);
        if (memberData.description) formData.append("description", memberData.description);
        if (memberData.image) formData.append("image", memberData.image);

        // Check if ID exists to determine Create or Update
        let url = memberData.id 
          ? `${this.baseUrl}/store-or-update/${memberData.id}` 
          : `${this.baseUrl}/store-or-update`;

        const response = await axiosInstance.post(url, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });

        return {
          success: true,
          data: response.data,
          message: response.data?.message || "Team Member Added Successfully"
        };
      } catch (error) {
        console.error('Error adding team member:', error);

        let errorMessage = "Failed to add team member";
        let statusCode = error.response?.status || 500;
        let errors = {};

        if (error.response) {
            console.log("Laravel Validation Errors:", error.response.data);
            errorMessage = error.response.data?.message || `Server error: ${statusCode}`;
            errors = error.response.data?.errors || {}; // Capture validation errors
        } else if (error.request) {
            errorMessage = "No response from server";
        }

        return {
            success: false,
            message: errorMessage,
            status: statusCode,
            errors
        };
      }
    }
  }
});

   
